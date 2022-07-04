/* [].forEach()
[].forEach(callback(itemAtual, index, array))
O forEach é um loop que irá percorrer todos os itens da array
(O callback executará alguma função em todos os itens da array)

Possui 3 argumentos:

itemAtual(valor do item da array)
index(index do valor na array)
array(array original)
*/

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((carro, index, array) => {
//     console.log(carro.toUpperCase(), index, array);
// }) 

/* 
Imprimiu no console o nome de cada carro em letra maiúscula (Um de cada vez), o index de cada carro, e a array original
Porém não alterou a array original

FORD 0 (3) ['Ford', 'Fiat', 'Honda']
FIAT 1 (3) ['Ford', 'Fiat', 'Honda']
HONDA 2 (3) ['Ford', 'Fiat', 'Honda']
 */


/* Arrow Function
É muito comum usar arrow function no forEach
const li = document.querySelectorAll('li');

li.forEach(item => item.classList.add('ativa'));

É o mesmo que isso:

li.forEach(function(item) {
  item.classList.add('ativa');
});
*/


/* Modificar a Array Original

O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
COPIAR
É melhor utilizarmos o map para isso
*/


/* [].map()
[].map(callback(itemAtual, index, array))
Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined
retorna uma nova array com valores atualizados de acordo com o return de cada iteração

Para retornar algo no console, devemos colocar o return.
Se não irá retornar undefined igual o forEach()

O map() é muito usado para retornar valores de uma array com alguma modificação nesses valores

const carros = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros.map((item) => {
    return 'Carro: ' + item;
})

// ['Carro: Ford', 'Carro: Fiat', 'Carro: Honda']


const valores = [1, 2, 3, 4, 5];

const preco = valores.map((valor) => {
    return 'R$ ' + valor;
})

// ['R$ 1', 'R$ 2', 'R$ 3', 'R$ 4', 'R$ 5']
*/


/* Arrow Function e map()

Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42]; 
*/


/* map x forEach
Se o objetivo for criar 1 nova array a partir de uma já existente, utilize o map
Se não precisar de uma nova array, só precisa alterar essa array(add classes, tirar classes) utilize o forEach
*/


/* map com Objetos
Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.


*/

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

/* Pegando todos os nomes */
let nomes = aulas.map(aula => aula.nome);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

/* Pegando todos os tempos */
let tempo = aulas.map(aula => aula.min);
// [15, 10, 20, 25]