// ═══════════════════════════════════════════════════════════
// PAINEL DO PROFESSOR — lista em tempo real, validação e exportação
// ═══════════════════════════════════════════════════════════
import { firebaseConfig, DOMINIO_UTILIZADOR, FB } from './firebase-config.js';
const { initializeApp } = await import(`${FB}/firebase-app.js`);
const { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } = await import(`${FB}/firebase-auth.js`);
const { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, writeBatch, serverTimestamp } =
  await import(`${FB}/firebase-firestore.js`);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const $ = id => document.getElementById(id);
const MIDS = [['aq', 'Aq.'], ['m1', 'M1'], ['m2', 'M2'], ['m3', 'M3'], ['m4', 'M4'], ['bonus', 'Extra']];
let registos = [], pararEscuta = null, visiveis = [];

// ───────── Código do aluno (igual ao de js/app.js) ─────────
const SEGREDO = 'zCKODaw_tJTQwMVx8tJue2YR';
function fnv(str) { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36).padStart(7, '0'); }
function unb64u(c) { c = c.replace(/-/g, '+').replace(/_/g, '/'); while (c.length % 4) c += '='; return decodeURIComponent(escape(atob(c))); }
function lerCodigo(cod) {
  try {
    cod = String(cod || '').replace(/\s+/g, '');
    if (!/^ET[A-Za-z0-9_-]+$/.test(cod)) return null;
    const t = unb64u(cod.slice(2)).split('~'); if (t.length !== 7) return null;
    const chk = t.pop(), p = t.join('~'), d = t[1];
    const dia = d.slice(0, 4) + '-' + d.slice(4, 6) + '-' + d.slice(6, 8);
    return { valido: fnv(SEGREDO + p) === chk, dia, ano: t[2], turma: t[3], nome: t[4], chave: [dia, t[2], t[3], t[4]].join('|') };
  } catch (e) { return null; }
}

// ───────── Utilitários ─────────
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hoje = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const fmtDia = k => k ? k.slice(8) + '/' + k.slice(5, 7) + '/' + k.slice(0, 4) : '';
const hora = ms => ms ? new Date(ms).toTimeString().slice(0, 5) : '';
const estrelas = n => n ? '⭐'.repeat(n) : '·';

// ───────── Entrada ─────────
$('formEntrar').onsubmit = async e => {
  e.preventDefault();
  $('msgEntrar').textContent = '';
  let u = $('utilizador').value.trim().toLowerCase();
  if (!u.includes('@')) u += '@' + DOMINIO_UTILIZADOR;
  $('btnEntrar').disabled = true;
  try {
    await signInWithEmailAndPassword(auth, u, $('senha').value);
    $('senha').value = '';
  } catch (err) {
    $('msgEntrar').textContent = err.code === 'auth/too-many-requests'
      ? 'Demasiadas tentativas. Aguarde alguns minutos.'
      : 'Utilizador ou palavra-passe errados.';
  }
  $('btnEntrar').disabled = false;
};

onAuthStateChanged(auth, user => {
  if (pararEscuta) { pararEscuta(); pararEscuta = null; }
  const entrou = user && !user.isAnonymous;
  $('conta').innerHTML = entrou
    ? `${esc((user.email || '').split('@')[0])} <button class="btn ghost mini" id="btnSair">Sair</button>` : '';
  if ($('btnSair')) $('btnSair').onclick = () => signOut(auth);
  if (!entrou) { $('painel').hidden = true; $('entrar').hidden = false; return; }
  $('entrar').hidden = true; $('painel').hidden = false;
  $('fDia').value = $('fDia').value || hoje();
  pararEscuta = onSnapshot(collection(db, 'registos'), snap => {
    registos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    $('aoVivo').className = 'vivo'; $('aoVivo').textContent = '● ao vivo';
    desenhar();
  }, e => {
    if (e.code === 'permission-denied') {
      // Só o UID indicado em firestore.rules pode ler os registos
      signOut(auth);
      $('msgEntrar').textContent = 'Esta credencial não tem acesso ao painel. Confirme o UID nas regras.';
      return;
    }
    $('aoVivo').className = 'vivo off'; $('aoVivo').textContent = '● sem ligação (' + e.code + ')';
  });
});

// ───────── Tabela ─────────
function desenhar() {
  const dia = $('fDia').value, turma = $('fTurma').value, estado = $('fEstado').value;
  const turmas = [...new Set(registos.map(r => r.turma).filter(Boolean))].sort();
  $('fTurma').innerHTML = '<option value="">Todas</option>' + turmas.map(t => `<option ${t === turma ? 'selected' : ''}>${esc(t)}</option>`).join('');

  visiveis = registos.filter(r => (!dia || r.dia === dia) && (!turma || r.turma === turma)
    && (!estado || (estado === 'validados' ? r.validado : !r.validado)));
  visiveis.sort((a, b) => (b.dia || '').localeCompare(a.dia || '') || (a.turma || '').localeCompare(b.turma || '')
    || (a.nome || '').localeCompare(b.nome || '', 'pt'));

  const base = registos.filter(r => (!dia || r.dia === dia) && (!turma || r.turma === turma));
  const nVal = base.filter(r => r.validado).length;
  $('resumo').textContent = `${base.length} aluno(s) · ${base.length - nVal} por validar · ${nVal} validado(s)`;

  $('tabela').innerHTML = visiveis.length ? `
    <tr><th>Nome</th><th>Turma</th><th>Ano</th><th>Dia</th><th>Início</th>${MIDS.map(m => `<th class="c">${m[1]}</th>`).join('')}
      <th class="c">Feitas</th><th class="c">Estado</th><th></th></tr>
    ${visiveis.map(r => `<tr class="${r.validado ? 'validado' : ''}">
      <td><b>${esc(r.nome)}</b>${r.modo === 'apoio' ? ' 🤝' : ''}</td><td>${esc(r.turma)}</td><td>${esc(r.ano)}.º</td>
      <td>${fmtDia(r.dia)}</td><td>${hora(r.ini)}</td>
      ${MIDS.map(([id]) => `<td class="c">${estrelas(r.m?.[id])}</td>`).join('')}
      <td class="c"><b>${r.feitas || 0}/4</b></td>
      <td class="c">${r.validado ? '<span class="ok">✔ Validado</span>' : '<span class="nota">Por validar</span>'}</td>
      <td>${r.validado
        ? `<button class="btn ghost mini" data-anular="${r.id}">Anular</button>`
        : `<button class="btn verde mini" data-validar="${r.id}">Validar</button>`}
        <button class="btn ghost mini" data-apagar="${r.id}" title="Apagar da base de dados">🗑</button></td>
    </tr>`).join('')}`
    : '<tr><td class="nota">Não há alunos com estes filtros.</td></tr>';
  $('btnValidarTodos').disabled = !visiveis.some(r => !r.validado);
}

['fDia', 'fTurma', 'fEstado'].forEach(id => $(id).onchange = desenhar);
$('fTodosDias').onclick = () => { $('fDia').value = ''; desenhar(); };

const validar = id => updateDoc(doc(db, 'registos', id), { validado: true, validadoEm: serverTimestamp() });

$('tabela').onclick = async e => {
  const b = e.target.closest('button'); if (!b) return;
  try {
    if (b.dataset.validar) await validar(b.dataset.validar);
    if (b.dataset.anular) await updateDoc(doc(db, 'registos', b.dataset.anular), { validado: false, validadoEm: null });
    if (b.dataset.apagar && confirm('Apagar este registo da base de dados?')) await deleteDoc(doc(db, 'registos', b.dataset.apagar));
  } catch (err) { alert('Erro: ' + err.code); }
};

$('btnValidarTodos').onclick = async () => {
  const pend = visiveis.filter(r => !r.validado);
  if (!pend.length || !confirm(`Validar ${pend.length} aluno(s)?`)) return;
  for (let i = 0; i < pend.length; i += 400) {
    const lote = writeBatch(db);
    pend.slice(i, i + 400).forEach(r => lote.update(doc(db, 'registos', r.id), { validado: true, validadoEm: serverTimestamp() }));
    await lote.commit();
  }
};

// ───────── Validar por código ─────────
async function validarCodigo() {
  const r = lerCodigo($('codigo').value), o = $('msgCodigo');
  if (!r) { o.className = 'erro'; o.textContent = '❌ Código inválido.'; return; }
  if (!r.valido) { o.className = 'erro'; o.textContent = '❌ Código alterado: não é válido.'; return; }
  const docs = registos.filter(x => x.chave === r.chave).sort((a, b) => (b.ini || 0) - (a.ini || 0));
  const quem = `${r.nome} · ${r.turma || 'sem turma'} · ${r.ano}.º ano · ${fmtDia(r.dia)}`;
  if (!docs.length) { o.className = 'erro'; o.textContent = '⚠️ Código válido (' + quem + '), mas este aluno ainda não chegou à base de dados. Confirme que o computador dele tem Internet.'; return; }
  const alvo = docs.find(x => !x.validado);
  if (!alvo) { o.className = 'ok'; o.textContent = '✔ Já estava validado: ' + quem; $('codigo').value = ''; return; }
  try {
    await validar(alvo.id);
    o.className = 'ok'; o.textContent = '✔ Validado: ' + quem + ' — foi apagado do computador do aluno.';
    $('codigo').value = ''; $('codigo').focus();
  } catch (e) { o.className = 'erro'; o.textContent = 'Erro: ' + e.code; }
}
$('btnCodigo').onclick = validarCodigo;
$('codigo').addEventListener('keydown', e => { if (e.key === 'Enter') validarCodigo(); });

// ───────── Exportar CSV ─────────
$('btnCsv').onclick = () => {
  const cab = ['Nome', 'Turma', 'Ano', 'Dia', 'Início', ...MIDS.map(m => m[1]), 'Feitas', 'Validado'];
  const linhas = visiveis.map(r => [r.nome, r.turma, r.ano + '.º', fmtDia(r.dia), hora(r.ini),
    ...MIDS.map(([id]) => r.m?.[id] || 0), (r.feitas || 0) + '/4', r.validado ? 'Sim' : 'Não']);
  const csv = '\ufeff' + [cab, ...linhas].map(l => l.map(v => '"' + String(v ?? '').replace(/"/g, '""') + '"').join(';')).join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = 'escritores-do-teclado_' + ($('fDia').value || 'todos') + '.csv';
  a.click(); URL.revokeObjectURL(a.href);
};
