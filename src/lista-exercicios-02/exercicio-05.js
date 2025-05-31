// 5. Crie function ```debounce(fn, delay)``` que receba uma função ```fn``` e um ```delay```
// em ms, retornando uma nova função que só executa ```fn``` se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const digaOla = () => {
  console.log("Olá, mundo!");
};

console.log(debounce(digaOla, 1500))

const debouncedDigaOla = debounce(debounce(digaOla, 1500));

debouncedDigaOla(); // Essa questão nao sabia nem por onde começar.