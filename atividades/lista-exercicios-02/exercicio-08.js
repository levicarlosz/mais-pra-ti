// 8. Agrupamento por Propriedade
// Em ```vendas = [{ cliente, total }, ...]```, use ```reduce``` para gerar um objeto onde
// cada chave é um ```cliente``` e o valor é a soma de todos os seus ```total```.

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 150 },
  { cliente: "Alice", total: 50 },
  { cliente: "Charlie", total: 200 },
  { cliente: "Bob", total: 75 }
];

console.log("Teste 8: Agrupamento por Propriedade");
console.log(agruparVendasPorCliente(vendas));