/* Dimensões e distâncias
São propriedades e métodos dos objetos element e htmlelement.
A maioria deles são Read-Only (Apenas Leitura)

const section = document.querySelector('.animais');

section.clientHeight; // Retorna o height + padding
section.offSetHeight; // Retorna o height + padding + border
section.scrollHeigh; // Retorna o height total, mesmo com o scroll
*/

// const listaAnimais = document.querySelector('.animais-lista');
// const animaisTop = listaAnimais.offsetTop;
// const animaisLeft = listaAnimais.offsetLeft;

/* getBoundindClientRect()
Método que retorna um objeto com valores de width, height e distâncias do elemento e mais.

// const section = document.querySelector('h2');
// const rect = section.getBoundingClientRect();

// console.log(rect.height);
// rect.width;
// rect.top;
*/

/* Window
Propriedades para a janela
window.innerHeight, // Retorna o height da janela
window.innerWidth,  // Retorna o width da janela
window.outerHeight, // Retorna o height da janela + o height do console aberto
window.outerWidth,  // Retorna a width da janeça + o width do console aberto
window.pageYOffset, // Distância total do scroll horizontal
window.pageXOffset, // Distância total do scroll vertical
*/

/* matchMedia()
Use um media-query como no css para verificar a largura do browser do usuário

const small = window.matchMedia('(max-width: 600px)');
if (small.matches) {
  console.log('Tela > que 600px');
} else {
  console.log('Tela < que 600px');
}
*/

/* Exercícios */

// Verifique a distância da primeira imagem em relação ao topo da página.

// const img = document.querySelector('img');
// console.log(img.offsetTop);

// Retorna a soma da largura de todas as imagens.

// let totalLargura = 0;
// const imagens = document.querySelectorAll('img');

// imagens.forEach(function(img){
//   totalLargura += img.width;
// })
// console.log(totalLargura);

// Verifique se os links da página possuem o minimo recomendado para telas 
// utilizadas com o dedo (48px/48px de acordo com o Google)

// const links = document.querySelectorAll('a');

// links.forEach(function(link){
//   if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
//     console.log('O ícone possui o minimo recomendado');
//   } else {
//     console.log('O icone não possui as dimensoes recomendadas pelo Google');
//   }
// });

// Se o browser for menor que 720px, add a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
if (window.innerWidth < 720) {
  menu.classList.add('menu-mobile');
}