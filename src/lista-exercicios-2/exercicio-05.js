const prompt = require("prompt-sync")();

console.log("5. Jogo JoKenPo (Pedra-Papel-Tesoura)\n");

console.log(`Escolha uma das opções abaixo
  (1)  Pedra
  (2)  Papel
  (3)  Tesoura
  (-1) FINALIZAR`);

let opcao = null;
let opcaoAdversario = 0;
const [pedra, papel, tesoura] = [1, 2, 3];

while (opcao != -1) {
  opcao = Number(prompt("> "));
  opcaoAdversario = Math.floor(Math.random() * 3) + 1;
  let resultado = joKenPo(opcao, opcaoAdversario);

  if (![pedra, papel, tesoura].includes(opcao)) {
    console.log(
      "Opção inválida. Tente novamente com 1, 2, 3 ou -1 para sair.\n"
    );
    continue;
  }

  console.log(`
Resultado Partida: ${resultado.resultado_partida}
Você Jogou: ${resultado.jogador}
Seu Adversario: ${resultado.adversario}
`);
}

function joKenPo(jogador, adversario) {
  const opcoes = {
    1: "pedra",
    2: "papel",
    3: "tesoura",
  };

  let resultado = "";

  if (jogador === adversario) {
    resultado = "Empate!";
  } else if (
    (jogador === pedra && adversario === tesoura) ||
    (jogador === tesoura && adversario === papel) ||
    (jogador === papel && adversario === pedra)
  ) {
    resultado = "Você ganhou!";
  } else {
    resultado = "Você perdeu!";
  }

  return {
    jogador: opcoes[jogador],
    adversario: opcoes[adversario],
    resultado_partida: resultado,
  };
}
