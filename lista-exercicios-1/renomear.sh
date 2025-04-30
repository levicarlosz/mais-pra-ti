#!/bin/bash

# Renomeia arquivos exercicio-1.js até exercicio-9.js para exercicio-01.js até exercicio-09.js

for i in exercicio-?.js; do
  num=$(echo "$i" | grep -o '[0-9]\+')
  novo="exercicio-0${num}.js"

  if [ ! -e "$novo" ]; then
    mv "$i" "$novo"
    echo "Renomeado: $i -> $novo"
  else
    echo "O arquivo $novo já existe. Pulando..."
  fi
done
