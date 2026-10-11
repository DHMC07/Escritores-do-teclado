// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO FIREBASE
// 1. Consola do Firebase → Definições do projeto → As suas apps → app Web
// 2. Copie os valores de «firebaseConfig» para aqui.
// ═══════════════════════════════════════════════════════════
export const firebaseConfig = {
  apiKey: "AIzaSyC9_jcq0o_4mzeNg1kZZC0UX18wCBb5Yro",
  authDomain: "escritores-do-teclado.firebaseapp.com",
  projectId: "escritores-do-teclado",
  storageBucket: "escritores-do-teclado.firebasestorage.app",
  messagingSenderId: "457337138563",
  appId: "1:457337138563:web:a203cb4bf1b8d6f7eedab6"
};

// Credencial do professor: utilizador criado à mão na consola do Firebase
// (Authentication → Utilizadores → Adicionar utilizador), com email e palavra-passe.
// No painel basta escrever o utilizador: se não tiver «@», junta-se este domínio.
export const DOMINIO_UTILIZADOR = "escritores.local";

// Versão do SDK do Firebase (fixa, para não mudar sem aviso)
export const FB = "https://www.gstatic.com/firebasejs/10.12.2";
