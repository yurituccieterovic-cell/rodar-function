const fetch = require("node-fetch");

async function gerarResposta(prompt) {
  // Placeholder: aqui você conecta ao Copilot Studio futuramente
  return `Copilot analisou: ${prompt}`;
}

module.exports = async function (context, req) {
  const secret = req.body?.secret;
  if (secret !== "copilot-secret-OraculoEtico2026") {
    context.res = { status: 401, body: { error: "Secret inválido" } };
    return;
  }

  const { prompt, assembleiaId, callbackUrl, voice } = req.body;
  const respostaCopilot = await gerarResposta(prompt);

  // Simula o callback (quando você quiser, pode implementar o POST real para callbackUrl)
  context.log(`Callback para ${callbackUrl}:`, respostaCopilot);

  context.res = {
    status: 200,
    body: { status: "OK", resposta: respostaCopilot }
  };
};