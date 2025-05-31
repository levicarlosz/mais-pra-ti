// 6. Memoization
// Implemente ```function memoize(fn)``` que armazene em cache chamadas
// anteriores de ```fn``` (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}


function somaLenta(a, b) {
  console.log("Calculando soma...");
  for (let i = 0; i < 1e7; i++) {}
  return a + b;
}

const somaMemoized = memoize(somaLenta);

console.log("Teste 6: Memoization");
console.log(somaMemoized(5, 3));
console.log(somaMemoized(5, 3));
console.log(somaMemoized(2, 2));
console.log(somaMemoized(2, 2));
console.log(somaMemoized(5, 3));