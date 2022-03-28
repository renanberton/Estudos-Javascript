// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//   console.log(item, index, array);

// });

// Arrow Function
/* Sintaxe curta em realação a function expression
Basta remover a palavra chave fucntion e add a fat arrow
=> após os argumentos */

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });

/* Argumentos e parênteses
const imgs = document.querySelectorAll('imgs');

// Argumento único não precisa de parênteses 
imgs.forEach(item => {
  console.log(item);
});

// Múltiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item,index);
});

// Sem argumentos precisam dos parênteses, mesmo vazios
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
*/

/* Exercícios */

// Mostre no console cada parágrafo do site

// const paragrafos = document.getElementsByTagName('p');
// const paragrafosArray = Array.from(paragrafos);

// paragrafosArray.forEach((item) => {
//   console.log(item);
// });

// // Mostre os conteudos de todos os paragrafos
// paragrafosArray.forEach(function(p){
//   console.log(p.innerText);
// });

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;

imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));