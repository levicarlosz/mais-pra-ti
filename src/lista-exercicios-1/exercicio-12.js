const prompt = require("prompt-sync")();

const numeroDigitado = Number(
  prompt("Digite o número que deseja obter a Tabuada: ")
);

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X ${numeroDigitado} = ${numeroDigitado * i}`);
}
