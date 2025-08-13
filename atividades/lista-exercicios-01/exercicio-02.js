const prompt = require("prompt-sync")();

let input = Number(prompt("Digite sua idade : "));

if (input >= 60) {
  console.log("Você é idoso!");
} else if (input >= 18) {
  console.log("Você é adulto!");
} else if (input >= 12) {
  console.log("Você é adolecente");
} else {
  console.log("Você é criança");
}
