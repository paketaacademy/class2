// 1. Receba dois argumentos a e b e retorne se a soma é um número é ímpar ou par.
const func01 = (a,b) => (a + b) % 2 === 0 ? 'par' : 'ímpar'

/**
 * 2. Receba um array de 10 números inteiros aleatórios de 1 a 100 e retorne qual é o maior número
 * Exemplo: [1, 11, 3, 29, 44, 66, 7, 21, 20, 30]
 * O maior número é o 66
 */
const func02 = (list) => {
  let biggest = list[0]

  list.forEach(item => {
    biggets = item > biggest ? item : biggest 
  })

  return biggest
}

/**
 * 3. Crie uma uma função que receba as seguintes listas e que retorne uma lista chamada d contendo todos os elementos das 3 listas em ordem decrescente.
 * @param {*} listA [0, 3, 99, 44, -1]  
 * @param {*} listB [4, 6, 9, 10, -349]
 * @param {*} listC [1, 1, 1, 99, 37] 
 */
const func03 = (listA, listB, listC) => {
  const listD = [...listA, ...listB, ...listC]

  return listD.sort((a,b) => a > b)
}

// 4. Imprimir os números impares menores que 100 
const func04 = () => {
  const list = Array.from(Array(100).keys())

  const odd = list.filter(item =>  item % 2 !== 0)
  
  console.log('Números ímpares menores do que 100', odd)
}

// 5. Soma dos números de 1 a 10
const func05 = () => {
  const list = Array.from(Array(11).keys())

  return list.reduce((acc, cur) => (acc + cur), 0)
}

// 6. Criar uma função que converta uma temperatura de Celsius para Fahrenheit 
const func06 = (celsiusDegrees) => celsiusDegrees * 9 / 5 + 32

// 7. Crie uma função que reteorne a maior string de um array
const func07 = (list) => {
  let biggest = list[0]

  list.forEach(item => {
    biggets = item.length > biggest.length ? item : biggest 
  })

  return biggest
}

// 8. Criar uma função que receba um array como parâmetro e retorne ele com os valores invertinos
const func08 = (list) => list.sort((a,b) => a - b)

// 9. Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado
const func09 = (value) => value.includes('dota')

// 10. Crie uma função que receba dois números inteiros positivos e retorne qual é o resto da divisão
const func10 = (a, b) => a % b

// 11. Crie uma função que receba um array contendo 10.000 posições de números inteiros aleatórios e retorne a somatória de todos eles.
// Array.from(Array(10000).keys())
const func11 = (list) => list.reduce((acc, cur) => (acc + cur), 0)
