// const img = document.querySelector('img');

/* O addEventListener add uma função ao elemento (callback)
Que será acionada assim que certo evento ocorrer no elemento

img.addEventListener('click', function() {
  console.log('Clicou')
})
*/

/* Uma boa prática usada no callback,
é separar a função do addEventListener, ou seja, declarar a função fora
e chamar ela no addEventListener */

// function callback(event) {
//   console.log(event);
// }

// img.addEventListener('click', callback); // Não precisa dos parenteses, só queremos chama-la, não aciona-la

/* Event
O primeiro parametro do callback é referente ao evento que ocorreu
function callback(event) {
  console.log(event);
}

Irá exibir todas as propriedades e atributos do evento
event.currentTarget // this
event.target // Aonde o clique ocorreu
event.type // Tipo de evento
event.path // 
event.preventDefault //  Previne o comportamento padrão do browser
Como no exemplo de submit, o browser fazer envia o submit mais não recarrega a página

const animaisLista = document.querySelector('.animais-lista');

function callBackLista(event) {
  console.log(event.target); // Aonde o click ocorreu espeficicamente
  console.log(event.currentTarget); // Aonde o click ocorreu no elemento selecionado
  console.log(event.type); // Tipo de evento
}

animaisLista.addEventListener('click', callBackLista);
*/



/* This
A palavra chave this é uma palavra especial do JS, que pode fazer
referência a diferentes objetos dependendo do contexto.
No caso de Eventos, fará referência ao elemento do addEventListener que foi add

const img = document.querySelector('img');

function callback(event){
  console.log(this); // Retorna o elemento img
  console.log(this.getAttribute('src')); // Retorna o src da imagem
}

img.addEventListener('click', callback);
*/

/* Diferentes eventos
Existem diversos eventos 
'click', 'scroll', 'resize', 'keydown', 'keyup', 'mouseenter', 'scroll' entre outros.
Os eventos podem ser acionados a diferentes elementos, como no window e/ou element

const h1 = document.querySelector('h1');
function handleEvent(event) {
  console.log(event.type, event)
}

window.addEventListener('scroll', handleEvent);
*/

/* Keuboard
Você pode add atalhos para facilitar a navegação no seu site.
através de eventos do keyboard
// function handleKeyboard(event){
  //   console.log(event.key); // Essa função exibe as teclas que forem tecladas no console
  // }
  function handleKeyboard(event) {
    if(event.key === 'a') // Ao apertar a tecla 'a' ele toggla a classe azul no body
      document.body.classList.toggle('azul');  
    else if(event.key === 'v') 
    document.body.classList.toggle('vermelho'); // Ao apertar a tecla 'v' ele toggla a classe vermelho
  }

window.addEventListener('keydown', handleKeyboard);
*/
  
/* ForEach e Eventos
O addEventListener só add 1 evento a um único elemento, então é necessário um loop nos elementos de uma lista por ex.
Para add o evento a todos os elementos da lista, ou array, ou outros.
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  console.log(event.target.getAttribute('src')); // Retorna no console o src das imgs
}

// Método que faz com que retorne o src de todas as imgs do site, ao clicá-las
imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

*/


/* Quando o usuário clicar nos links internos, add a classe 'ativo'
ao item clicado e remova dos demais itens, caso eles possuam a classe 'ativo'
E previna o comportamento padrão do browser nos links */
//   const links = document.querySelectorAll("a[href^='#'");

// function handleLink(event) {
//   event.preventDefault();
//   links.forEach((link) => {
//     link.classList.remove('ativo');
//   })
//   event.currentTarget.classList.add('ativo');
// }

// links.forEach((link) => {
//   link.addEventListener('click', handleLink);
//   })


// Selecione todos os elementos do site, começando pelo body
// Ao click mostre exatamente quais elementos estão sendo clicados

// elementosSite = document.querySelectorAll('body *');

// function mostrarElementos(event) {
//   console.log(event.currentTarget);
//   event.preventDefault();
// }

// elementosSite.forEach((elements) => {
//   elements.addEventListener('click', mostrarElementos)
// })

/* Utilizando o código anterior, ao invés de mostrar no console.
remova o elemento que foi clicado, o método remove() faz isso
*/

// elementosSite = document.querySelectorAll('body');
// console.log(elementosSite);

// function mostrarElementos(event) {
//   event.target.remove();
//   event.preventDefault();
// }

// elementosSite.forEach((elements) => {
//   elements.addEventListener('click', mostrarElementos)
// })


// Se o usuário teclar a tecla "t" aumente todo o font-size dos textos do site.
const textos = document.querySelector('html');

function handleKeyboard(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('aumentarTexto');
  }
}

// Document.documentElement fala direto com o html do site.
// Enquanto o document.body fala com o body somente.

window.addEventListener('keydown', handleKeyboard);
