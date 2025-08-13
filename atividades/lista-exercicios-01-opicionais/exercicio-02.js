const prompt = require("prompt-sync")();

const multaPorKm = 5;
let valorDaMulta = 0;

console.log("Qual a velocidade do carro (Km/h)?")
const velocidadeCarro = Number(prompt("> "));

if (velocidadeCarro > 80) {
  valorDaMulta = multaPorKm * (velocidadeCarro - 80);
  console.log("Você foi multado! \nValor da multa: R$" + valorDaMulta.toFixed(2))
}
