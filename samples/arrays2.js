const nomes = ['Joao', 'Maria', 'Pedro', 'Bruna', 'Bruno']

// for(let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i], 'da Silva')
// }

// para cada x presente em nomes ...
// for (let nome of nomes) {
//   console.log(nome)
// }

nomes.forEach((nome) => console.log(nome))

const result = nomes.filter((nome) => nome.startsWith('B'))
console.log(result)

