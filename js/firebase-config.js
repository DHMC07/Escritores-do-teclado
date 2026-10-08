// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO FIREBASE
// 1. Consola do Firebase → Definições do projeto → As suas apps → app Web
// 2. Copie os valores de «firebaseConfig» para aqui.
// ═══════════════════════════════════════════════════════════
export const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI.firebaseapp.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// Credencial do professor: utilizador criado à mão na consola do Firebase
// (Authentication → Utilizadores → Adicionar utilizador), com email e palavra-passe.
// No painel basta escrever o utilizador: se não tiver «@», junta-se este domínio.
export const DOMINIO_UTILIZADOR = "escritores.local";

// Versão do SDK do Firebase (fixa, para não mudar sem aviso)
export const FB = "https://www.gstatic.com/firebasejs/10.12.2";
