// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use ```if/else ```e ```for``` para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(str) {
  const palavras = str.toLowerCase().match(/\b\w+\b/g) || [];
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    let ehUnica = true;
    for (let j = 0; j < unicas.length; j++) {
      if (palavras[i] === unicas[j]) {
        ehUnica = false;
        break;
      }
    }
    if (ehUnica) {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

console.log(palavrasUnicas("O Linux é o melhor SO do Mundo!")) // foi mt difícil esse exercício