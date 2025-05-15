let anterior = 0;
let atual = 1;

let proximoNumero = 0;

for (let i = 0; i < 10; i++) {
  console.log(atual);
  proximoNumero = anterior;

  anterior = atual;
  atual += proximoNumero;
}
