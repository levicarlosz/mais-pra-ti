const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite o número: "))
let resultado = 1

for(let i = 2; i <= numero; i++){
    resultado *= i
}
console.log(resultado)