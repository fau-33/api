const express = require("express");
const path = require("path");
const app = express();

let data = new Date();

let mensagemDoDia = require("./mensagemDoDia");

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/mensagem", (req, res) => {
  let dia = data.getDate();
  let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);
  res.json({ mensagem: mensagemSelecionada });
});

// Rota para qualquer outra coisa carregar o index.html (opcional, mas bom para SPA-like behavior se necessário)
// No nosso caso, vamos apenas deixar o express.static cuidar disso, mas se o usuário acessar /mensagem
// podemos querer servir o mensagem.html diretamente se não usarmos extensões.
// Por simplicidade, vamos usar mensagem.html na URL.

app.listen(8080, () => {
  console.log("Servidor iniciado em: http://localhost:8080");
});