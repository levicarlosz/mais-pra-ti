const prompt = require("prompt-sync")();

console.log("4.Verificador de Triângulo\n");

let valores = [];

for (let i = 1; i <= 3; i++) {
  let tamanhoTriangulo = Number(
    prompt(`Digite o tamanho do triangulo #${i}: `)
  );
  valores.push(tamanhoTriangulo);
}

if (
  valores[0] < valores[2] + valores[1] &&
  valores[1] < valores[2] + valores[0] &&
  valores[2] < valores[0] + valores[1]
) {
  console.log("É possível criar um triângulo!");
} else {
  console.log("Não é possível criar um triângulo!");
}
