const prompt = require("prompt-sync")();

message = `
    Selecione a opção desejada:
    
    1 - Calcule o IMC,
    2 - Imprima seu nome em maiusculo,
    3 - Calculo Idade Aproximada
    `;

console.log(message);
let input = Number(prompt("    > "));

switch (input) {
  case 1:
    let peso = Number(prompt("Digite o seu peso: "));
    let altura = Number(prompt("Digite a sua altura em metros: "));
    let imc = peso / altura ** 2;
    console.log(`O seu imc é de ${imc.toFixed(2)}`);
    break;
  case 2:
    let nome = prompt("Digite o seu nome: ");
    console.log(`Seu nome é ${nome.replace(/\s+/g, " ").trim().toUpperCase()}`);
    break;
  case 3:
    let anoNascimento = Number(prompt("Em qual ano vc nasceu?"));
    let anoAtual = Number(prompt("Em qual ano vc está?"));

    idadeAproximada = anoAtual - anoNascimento;
    console.log(`Sua idade arpoximada é de ${idadeAproximada} anus`);
    break;
  default:
    console.log("Opcao invalida");
}
