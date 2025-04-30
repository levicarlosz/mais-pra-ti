const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite o número: "));
let anterior = 0;
let atual = 1;
let proximoNumero = null;

for (let i = 0; i < numero; i++) {
  proximoNumero = anterior;
  anterior = atual;
  atual += proximoNumero;
}
console.log(anterior);
