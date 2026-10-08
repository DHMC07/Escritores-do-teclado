// ═══════════════════════════════════════════════════════════
// REGISTO AUTOMÁTICO DOS ALUNOS (Firebase / Firestore)
// - Cada computador entra de forma anónima (o aluno não precisa de conta).
// - Cada missão concluída é gravada na coleção «registos».
// - Quando o professor valida, este computador apaga o aluno na hora.
// ═══════════════════════════════════════════════════════════
import { firebaseConfig, FB } from './firebase-config.js';
const { initializeApp } = await import(`${FB}/firebase-app.js`);
const { getAuth, signInAnonymously, onAuthStateChanged } = await import(`${FB}/firebase-auth.js`);
const { getFirestore, doc, setDoc, collection, query, where, onSnapshot, serverTimestamp } =
  await import(`${FB}/firebase-firestore.js`);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let uid = null, pararEscuta = null;

// Identificador do documento: computador + aluno/dia + início da sessão
function idDoc(it) {
  let h = 0x811c9dc5;
  const s = it.chave + '|' + it.ini;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return uid + '_' + h.toString(36) + '_' + it.ini;
}

async function enviar(items) {
  for (const it of items) {
    const m = {};
    ['aq', 'm1', 'm2', 'm3', 'm4', 'bonus'].forEach(id => { m[id] = Math.min(3, Number(it.m?.[id]) || 0); });
    const dados = {
      uid, chave: it.chave, dia: String(it.dia), turma: String(it.turma || ''), ano: Number(it.ano) || 0,
      nome: String(it.nome).slice(0, 40), modo: it.modo === 'apoio' ? 'apoio' : 'turma',
      ini: Number(it.ini) || 0, ult: Number(it.ult) || 0, m,
      feitas: ['m1', 'm2', 'm3', 'm4'].filter(id => m[id] > 0).length,
      codigo: String(it.cod || '').slice(0, 300), validado: false, atualizado: serverTimestamp()
    };
    try {
      await setDoc(doc(db, 'registos', idDoc(it)), dados);
    } catch (e) {
      // Já validado pelo professor: não volta a gravar (fica resolvido)
      if (e.code !== 'permission-denied') throw e;
    }
  }
}

window.REG = { pronto: false, enviar };

onAuthStateChanged(auth, user => {
  if (!user) { signInAnonymously(auth).catch(e => console.warn('Entrada anónima falhou:', e.code)); return; }
  uid = user.uid;
  window.REG.pronto = true;
  if (typeof flushReg === 'function') flushReg();
  if (pararEscuta) pararEscuta();
  // Escuta em tempo real: alunos deste computador validados pelo professor
  const q = query(collection(db, 'registos'), where('uid', '==', uid), where('validado', '==', true));
  pararEscuta = onSnapshot(q, snap => {
    const lista = snap.docs.map(d => ({ chave: d.data().chave, ini: d.data().ini }));
    if (lista.length && typeof window.aoValidar === 'function') window.aoValidar(lista);
  }, e => console.warn('Escuta falhou:', e.code));
});
