// ### 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use ```while``` para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const prompt = require("prompt-sync")();

let tentativas = 0;
let acertou = false;
let palpiteUsuario;

console.log(
  "Bem-vindo ao Jogo de Adivinhação!\nEu pensei em um número entre 1 e 100. Tente adivinhar!"
);

while (!acertou) {
  palpiteUsuario = prompt("Qual é o seu palpite? ");
  tentativas++;

  if (palpiteUsuario === null) {
    console.log("Jogo cancelado. O número secreto era " + numeroSecreto + ".");
    break;
  }

  const palpiteNumero = parseInt(palpiteUsuario);

  if (isNaN(palpiteNumero)) {
    console.log("Por favor, digite um número válido.");

    continue;
  }

  if (palpiteNumero === numeroSecreto) {
    acertou = true;
    console.log(
      "Parabéns! Você acertou o número " +
        numeroSecreto +
        " em " +
        tentativas +
        " tentativa(s)!"
    );
  } else if (palpiteNumero < numeroSecreto) {
    console.log("Mais alto!");
  } else {
    console.log("Mais baixo!");
  }
}

console.log("Fim do jogo.");
