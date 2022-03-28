/* Class List
Retorna uma lista com as classes do elemento.
Permite adicionar, remover e verificar se contém algo
*/

// const menu = document.querySelector('.menu');

// console.log(menu.classList); // String // menu
// menu.classList; // Retorna as classes do elemento em uma lista
// menu.classList.add('ativo'); //Add a classe 'ativo' ao elemento
// menu.classList.add('ativo', 'mobile'); // Add as classes 'ativo' e 'mobile' ao elemento
// menu.classList.remove('ativo'); // Remove a classe 'ativo' do elemento
// menu.classList.toggle('ativo'); // Caso o elemento tenha a classe 'ativo' ele remove, caso não tenha ele add.
// menu.classList.contains('ativo'); // Verifica se o menu contém a classe 'ativo' e retorna True ou False
// menu.classList.replace('ativo', 'inativo'); // Substitui a classe 'ativo' pela classe 'inativo'


/* Attributes
Retorna um array-like com os atributos do elemento(classes,id, src, etc)
*/

// const animais = document.querySelector('.animais');

// /* Podemos indicar a posição do atributo que desejamos */
// console.log(animais.attributes[0]);

// /* Podemos também especificar o atributo que desejamos */
// console.log(animais.attributes['id']);


/* getAttributes e setAttributes
Métodos que retornam ou definem de acordo com o atributo selecionado
*/

// const img = document.querySelector('img');

// img.getAttribute('src'); // Retorna o valor do atributo 'src' da img
// img.setAttribute('alt', 'Texto Alternativo'); // caso nao tenha o atributo alt . , ele add 'alt' com o valor 'Texto Alternativo', caso ja exista, ele só muda o valor do alt para 'Texto Alternativo'
// img.hasAttribute('id'); // Verifica se possui o atributo 'id' e retorna True ou False
// // img.removeAttribute('alt'); // Remove o atributo 'alt'
// img.hasAttributes(); // Verifica se o elemento possui algum atributo e retorna True ou False
// img.toggleAttribute('data'); // Se o elemento tiver o atributo data ele remove, se não tiver ele add

/* Exercícios */

// Adicione a classe ativo a todos os itens do menu

// const menu = document.querySelectorAll('.menu a');
// menu.forEach(function(item){
//   item.classList.add('ativo');
// })

// // Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro item

// menu.forEach(function(item){
//   item.classList.remove('ativo');
// })

// menu[0].classList.add('ativo'); // Como é um node list, podemos falar somente com o primeiro do index, no caso [0] e add a classe 'ativo'

// Verifique se as imgs possuem o atributo alt

// const imgs = document.querySelectorAll('img'); // Seleciona todos os imgs do site
// imgs.forEach(function(img){
//   console.log(img.hasAttribute('alt'));
// })

// Modifique o href do link externo no menu

// const href = document.querySelector('a[href^="https://www.origamid"]');
// href.setAttribute('href', 'https://www.calculeaki.com.br');