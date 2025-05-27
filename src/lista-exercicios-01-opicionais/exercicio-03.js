const prompt = require("prompt-sync")();

console.log("3.Preço da Passagem\n");

const distanciaViagem = Number(prompt("Qual a distancia da viagem(Km)? "));

let valorDoKm = 0.5;

if (distanciaViagem > 200) {
  valorDoKm = 0.45;
}
console.log(
  `O valor da passagem é de R$${(valorDoKm * distanciaViagem).toFixed(2)}`
);
