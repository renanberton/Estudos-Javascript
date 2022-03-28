/* outerHTML, innerHTML e innerText
São propriedades que retornam uma string contendo o html ou o texto do elemento.
É possível atribuir um novo valor para as mesmas.
element.innerText = 'Novo texto';

// const menu = document.querySelector('.menu');

// console.log(menu.outerHTML); // Retorna todo o html do elemento / nav>ul>li>a
// console.log(menu.innerHTML); // Retorna o elemento interno do elemento / ul>li>a
// console.log(menu.innerText); // Retorna somente o texto do elemento, puro
document.querySelector('h1').innerText = "Vai Corinthians!"; // Altera o conteudo do h1 para "Vai Corinthians"
*/


/* Transversing
Como navegar pela DOM, usando suas próprias propriedade e métodos.
*/

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); // Elemento pai
// lista.parentElement.parentElement //Elemento pai do pai
// lista.previousElementSibling; // Elemento acima
// lista.nextElementSibling; // Elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // Primeiro filho
// lista.children[--lista.children.length]; // Último filho

/* Element x Node
Element representa um elemento HTML (uma tag).
Node representa um nó e pode ser um element (texto, comentário, quebra de linha, etc).
const lista = document.querySelector('.animais-lista');

console.log(lista.previousElementSibling); // Elemento acima
console.log(lista.previousSibling); // Nó Acima

console.log(lista.firstChild); // Primeiro node child
console.log(lista.childNodes); // Todos os node child

Geralmente estamos atrás de um elemento e não de um node em si.
*/

/* Manipulando elementos
É possível mover elementos no DOM com métodos de node
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // Move lista para o final de contato
// contato.insertBefore(lista, titulo); // Insere lista antes de título em contato
// contato.removeChild(titulo); // Remove o titulo de contato
// contato.replaceChild(lista, titulo); // Repõe a lista no lugar de título em contato
*/


/* Novos Elementos 
Podemos criar novos elementos com o método createElement()

const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1'); // Método para criar um elemento
novoH1.innerHTML = "Novo Título"; // Altera o conteúdo do novoH1 para "Novo Título"
novoH1.classList.add('titulo'); // Add a class "titulo" para o novoH1

animais.appendChild(novoH1); // Add o novoH1 no final da div animais
*/

/* Clone de Elementos
Todo elemento selecionado é único.
Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true); // True sinaliza que é para clonar os filhos junto, caso botar false, irá clonar somente o elemento da tag

const contato = document.querySelector('.contato');
contato.appendChild(cloneMenu); // Add ao final da sessão contato o clone do menu, sem interferir no menu selecionado primeiramente.
*/

/* Exercícios */

/* Duplique o menu e add ele ao copy */

// const menu = document.querySelector('.menu');
// const cloneMenu = menu.cloneNode(true); // True sinaliza que é para clonar os filhos junto, caso botar false, irá clonar somente o elemento da tag

// const copy = document.querySelector('.copy');
// copy.appendChild(cloneMenu);

/* Selecione o primeiro DT da dl de faq */

// const primeiroDT = document.querySelector('.faq-lista dt');
// console.log(primeiroDT.innerHTML);

/* Selecione o DD referente ao primeiro DT */

// const DD = document.querySelector('.faq-lista dd');
// console.log(DD.innerHTML);

/* Substitua o conteudo HTML de .faq pelo de .animais */

// const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML; // Aqui troca o conteudo HTML do faq pelo de animais
