const fetch = require("node-fetch");

async function gerarResposta(prompt) {
  // Placeholder: futuramente conecta ao Copilot Studio
  return `Copilot analisou: ${prompt}`;
}

module.exports = async function (context, req) {
  const secret = req.body?.secret;
  if (secret !== "copilot-secret-OraculoEtico2026") {
    context.res = { status: 401, body: { error: "Secret inválido" } };
    return;
  }

  const { prompt, assembleiaId, callbackUrl } = req.body;
  const respostaCopilot = await gerarResposta(prompt);

  // Envia callback real
  try {
    await fetch(callbackUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        assembleiaId,
        resposta: respostaCopilot
      })
    });
    context.log(`Callback enviado para ${callbackUrl}`);
  } catch (err) {
    context.log("Erro ao enviar callback:", err);
  }

  // Resposta imediata para quem chamou a Function
  context.res = {
    status: 200,
    body: { status: "OK", resposta: respostaCopilot }
  };
};