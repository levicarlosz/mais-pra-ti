const prompt = require("prompt-sync")();

let somaTotal = 0;
for (let i = 0; i < 5; i++) {
  let numeroDigitado = Number(prompt("Digite o numero: "));
  somaTotal += numeroDigitado;
}
console.log("A soma total é " + somaTotal);
