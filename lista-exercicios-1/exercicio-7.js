const prompt = require("prompt-sync")();

const quantidadeMaca = Number(prompt("Quantas maças deseja: "));

let precoMaca = quantidadeMaca >= 12 ? 0.25 : 0.3;
const totalCompra = precoMaca * quantidadeMaca;

console.log("O valor da sua compra é de: R$" + totalCompra.toFixed(2));
