# ⌨️ Escritores do Teclado

Exercício de teclado e processamento de texto, com registo automático dos alunos
e validação pelo professor.

- **Alunos** abrem `index.html` e não precisam de conta. Cada missão concluída é gravada na base de dados.
- **Professor** abre `professor.html` com a **sua credencial própria** (utilizador e palavra-passe), vê todos os alunos em tempo real e valida-os.
- Ninguém entra com conta Google no site.
- Quando o professor valida um aluno, o registo desse aluno é **apagado na hora** do computador onde trabalhou.

Alojamento: **GitHub Pages** (gratuito). Base de dados: **Firebase Firestore**, no plano gratuito «Spark».

---

## Estrutura

```
index.html            página dos alunos
professor.html        painel do professor
css/estilo.css        estilos da página dos alunos
css/professor.css     estilos do painel
js/app.js             lógica do exercício (missões, editor, ajudas)
js/registo.js         envio para a base de dados e limpeza após validação
js/professor.js       painel: lista ao vivo, validar, exportar CSV
js/firebase-config.js ← a configuração do seu projeto Firebase
firestore.rules       regras de segurança da base de dados
img/                  mascotes
```

---

## 1. Criar a base de dados (Firebase)

1. Abra <https://console.firebase.google.com> com a sua conta Google e clique em **Criar projeto**.
   Dê-lhe um nome (por exemplo `escritores-teclado`) e pode desativar o Google Analytics.
2. **Firestore Database → Criar base de dados**.
   - Localização: escolha uma da Europa (por exemplo `eur3` ou `europe-west1`), por causa do RGPD.
   - Modo: **produção**.
3. **Authentication → Começar → Método de início de sessão** e ative:
   - **Anónimo**, para os computadores dos alunos. Os alunos não fazem login nem veem nada: a entrada é automática e invisível;
   - **Email/palavra-passe**, só para a credencial do professor.
   Não ative o Google.
4. **Authentication → Utilizadores → Adicionar utilizador**. Esta é a sua credencial:
   - Email: `professor@escritores.local` (não precisa de ser um email real; não é enviado nada para lá);
   - Palavra-passe: escolha uma forte, com pelo menos 12 caracteres.
   Depois de criado, copie o **UID do utilizador** que aparece na lista.
5. **Definições do projeto (⚙️) → As suas apps → ícone `</>` (Web)**. Registe a app e
   copie os valores de `firebaseConfig` para **`js/firebase-config.js`**.
6. **Firestore Database → Regras**: apague o que lá estiver e cole o conteúdo de **`firestore.rules`**.
   Substitua `COLE_AQUI_O_UID_DO_PROFESSOR` pelo UID copiado no passo 4 e clique em **Publicar**.

No painel do professor entra com o utilizador **`professor`** (o resto do email é acrescentado sozinho)
e com a sua palavra-passe. Se usou outro email no passo 4, escreva-o completo.

Para mudar a palavra-passe: em **Authentication → Utilizadores**, elimine o utilizador (**⋮ → Eliminar**) e crie-o de novo
com a palavra-passe nova. A opção de repor a palavra-passe envia um email, que não chega a um endereço fictício.
O UID muda, por isso atualize-o nas regras.

> A `apiKey` do Firebase não é secreta: fica sempre visível no navegador.
> Quem protege os dados são as **regras** do passo 6. Os alunos só conseguem gravar os seus próprios registos
> e nunca conseguem ler os dos colegas nem marcar-se como validados. Só o UID do professor lê e valida.
> Mesmo que alguém crie outro utilizador com email e palavra-passe, não passa nas regras.

A conta Google só é usada para **administrar** o projeto na consola do Firebase. O site não a usa:
nem o professor nem os alunos entram com Google.

---

## 2. Trabalhar no VS Code

1. Instale a extensão **Live Server** (Ritwick Dey).
2. Abra esta pasta no VS Code (**Ficheiro → Abrir pasta**).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

O projeto usa módulos JavaScript (`type="module"`), por isso **não funciona** se abrir o ficheiro com duplo clique.
Use sempre o Live Server, que serve a página em `http://127.0.0.1:5500`.

---

## 3. Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `escritores-teclado`. Pode ser público.
2. No VS Code: separador **Controlo de código-fonte** → **Inicializar repositório** → escreva uma mensagem → **Confirmar**
   → **Publicar ramo** e escolha o repositório.
3. No GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Ao fim de 1 a 2 minutos, o site fica em `https://O-SEU-UTILIZADOR.github.io/escritores-teclado/`.

Links finais:

- Alunos: `https://O-SEU-UTILIZADOR.github.io/escritores-teclado/`
- Professor: `https://O-SEU-UTILIZADOR.github.io/escritores-teclado/professor.html`

Para atualizar o site: altere os ficheiros, depois **Confirmar** e **Sincronizar** no VS Code.
O GitHub Pages republica sozinho.

---

## 4. Como se usa nas aulas

1. Os alunos abrem o link, escrevem o **nome** e a **turma** e fazem as missões. Tudo é gravado automaticamente.
2. O professor abre `professor.html` no seu computador e entra com o utilizador e a palavra-passe. Por omissão vê **o dia de hoje** e **por validar**.
3. Para validar há três formas:
   - clicar em **Validar** na linha do aluno;
   - colar o **código ET…** que o aluno mostra no ecrã e carregar em Enter;
   - usar **Validar todos os visíveis**, para uma turma inteira.
4. Assim que valida, o computador do aluno apaga o registo dele e volta ao ecrã inicial com a mensagem
   «✔ O professor validou o teu trabalho». O aluno seguinte começa do zero.
5. **Exportar para Excel (CSV)** descarrega a lista filtrada.

O botão **Anular** retira a validação na base de dados. O que já foi apagado no computador do aluno não volta.
O botão **🗑** apaga o registo da base de dados.

---

## Notas

- **Limites gratuitos:** o plano Spark dá 50 000 leituras e 20 000 gravações por dia, o que chega para várias turmas.
- **Dados de alunos:** a base de dados guarda o nome e a turma de alunos menores. Use a localização europeia,
  guarde só o necessário e apague os registos antigos no fim do período (🗑 ou consola do Firebase).
  Confirme com a direção da escola se é preciso informar os encarregados de educação.
- **Sem Internet:** o exercício continua a funcionar e o registo fica guardado no computador.
  É enviado quando a ligação voltar.
- **Palavra-passe das definições** (🔒 Professor na página dos alunos): `epl2026`. Para a mudar,
  gere o SHA-256 da nova palavra-passe em minúsculas e substitua o valor de `PW` em `js/app.js`.
- **Código ET:** o `SEGREDO` em `js/app.js` e em `js/professor.js` tem de ser o mesmo.
