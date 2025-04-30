const prompt = require("prompt-sync")();

let ladoA = Number(prompt("Digite o lado A: "));
let ladoB = Number(prompt("Digite o lado B: "));
let ladoC = Number(prompt("Digite o lado C: "));

const trianguloValido =
  ladoA < ladoC + ladoB && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
const isosceles = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC;
const escaleno = ladoA !== ladoB && ladoB !== ladoC;
const equilatero = ladoA === ladoB && ladoB === ladoC;

if (trianguloValido) {
  console.log("É um triangulo válido");

  if (equilatero) {
    console.log("O triangulo é equilátero");
  } else if (isosceles) {
    console.log("O triangulo é Isósceles");
  } else if (escaleno) {
    console.log("O triangulo é Escaleno");
  }
} else {
  console.log("Não é um triângulo válido");
}
