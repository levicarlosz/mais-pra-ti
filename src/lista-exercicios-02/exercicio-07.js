// 7. Mapeamento e Ordenação
// Dado um ```array produtos = [{ nome, preco }, ...]```, crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Laptop", preco: 1200 },
  { nome: "Mouse", preco: 25 },
  { nome: "Teclado", preco: 75 },
  { nome: "Monitor", preco: 300 }
];

console.log("Teste 7: Mapeamento e Ordenação");
console.log(nomesOrdenadosPorPreco(produtos));