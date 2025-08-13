const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite uma nota de 0 até 10: "));

if (nota >= 6) {
  console.log("Aprovado!");
} else if (nota === 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
