const prompt = require("prompt-sync")();

const numeroDigitado = Number(prompt("Digite um número inteiro: "));

for (let i = 0; i <= 10; i++) {
  console.log(
    "O número digitado foi " + numeroDigitado + " e repetiu " + i + " vezes"
  );
}
