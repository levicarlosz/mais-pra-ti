// 9. Conversão Entre Formatos
// Escreva duas funções:

// * ```paresParaObjeto(pares)``` recebe um array de pares ```[ [chave,
// valor], ... ]``` e retorna o objeto equivalente.
// * ```objetoParaPares(obj)``` faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    obj[pares[i][0]] = pares[i][1];
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

console.log("Teste 9: Conversão Entre Formatos");

const pares = [
  ["a", 1],
  ["b", 2],
  ["c", 3]
];
const objetoResultado = paresParaObjeto(pares);
console.log("Pares para Objeto:", objetoResultado);

const objeto = {
  nome: "Ana",
  idade: 30,
  cidade: "Rio"
};

const paresResultado = objetoParaPares(objeto);
console.log("Objeto para Pares:", paresResultado);