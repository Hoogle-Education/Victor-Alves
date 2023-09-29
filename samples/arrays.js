
// vetores, array, lista
const nomes = ['Joao', 'Maria', 'Pedro', 'Bruna', 'Bruno']
// 0 -> 4 

let numeros = new Array(100)

for(let i = 0; i < numeros.length; i++) {
  numeros[i] = i;
}

// acessando o primeiro elemento
// indexado em zero
const nome = nomes[0];

const tamanho = numeros.length

// codigo ruim: dificil de entender, extender e mudar

console.log(nomes)
console.log('tamanho:', tamanho)
console.log(numeros)

for(let i = 0; i < nomes.length; i++) {
  console.log(nomes[i], 'da Silva')
}