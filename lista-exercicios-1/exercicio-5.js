const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o seu peso em kg: "));
let altura = Number(prompt("Digite a sua altura em metros: "));
let imc = (peso / altura ** 2).toFixed(2);

console.log(`O seu imc é de ${imc}`);
if (imc >= 30) {
  console.log("voce é obeso");
} else if (imc >= 25) {
  console.log("voce é sobrepeso");
} else if (imc >= 18.6) {
  console.log("voce é considerado normal");
} else if (imc <= 18.5) {
  console.log("voce é abaixo do normal");
}
