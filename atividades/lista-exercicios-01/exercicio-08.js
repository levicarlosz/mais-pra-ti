const prompt = require("prompt-sync")();

let valorA = Number(prompt("Digite o valor A: "));
let valorB = Number(prompt("Digite o valor B: "));

const ordemValores =
  valorA > valorB ? console.log(valorA, valorB) : console.log(valorB, valorA);

ordemValores;
