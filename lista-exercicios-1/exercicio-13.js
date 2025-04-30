const prompt = require("prompt-sync")();

let opcao = null;
let totalNumeros = 0;
let somaNumeros = 0;
let media = 0;

while (opcao != 0) {
  opcao = Number(prompt("Digite um numero: "));

  if (isNaN(opcao)) {
    console.log("número inválido");
    continue;
  }
  if (opcao != 0) {
    somaNumeros += opcao;
    totalNumeros++;
  } else {
    media = somaNumeros / totalNumeros;
  }
}
console.log("A média dos números é", media.toFixed(3));
