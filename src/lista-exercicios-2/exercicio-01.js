const prompt = require("prompt-sync")();

const cigarrosDia = Number(prompt("Quantos cigarros fuma por dia?: "));
const anos = Number(prompt("Fuma a quantos anos?: "));

const diasFumando = anos * 365;
const totalCigarrosFumados = cigarrosDia * diasFumando;

const totalMinutosPerdidos = totalCigarrosFumados * 10;
const diasPerdios = (totalMinutosPerdidos / 60) / 24;
console.log(`Você perdeu ${diasPerdios.toFixed(0)} dias de vida!`);
