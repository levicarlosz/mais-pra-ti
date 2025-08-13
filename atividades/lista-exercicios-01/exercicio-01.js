const prompt = require("prompt-sync")();

let input = prompt("Digite um número inteiro: ");

if (Number(input) % 2 === 0) {
  console.log("O número digitado é par");
} else {
  console.log("O número digitado é impar");
}
