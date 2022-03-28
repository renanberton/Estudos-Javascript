// const animais = document.getElementById('animais');
// /* Seleciona o elemento que tiver o ID definido
// no caso, animais, não precisa por # */

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

// /* getelementsByClassName seleciona todas as classes com o nome definido.
// Caso um elemento com a mesma classe for add ele reconhece,
// Pois a lista está ao  vivo 
// E retorna uma HTML Collection*/

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi)

// /* QuerySelector() retorna apenas o primeiro elemento que tiver a classe indicada, no caso 'li' */


// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl)

// /* QuerySelector() retorna apenas o primeiro elemento que tiver a classe indicada, no caso 'ul' */

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos.href);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg)

/* querySelectorall() seleciona todos os itens do document
Porém, caso seja add mais um com a mesma classe, ele não pegará
Só ira reconhecer os que foram definidos inicialmente,
diferente da class name que pega todos ao vivo
E retorna os elementos em uma Node List */

// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);
// gridSectionNode.forEach(function(item, index){
//   console.log(item)
// })

/* HTML Collection vs NodeLista
A diferença está nos métodos e propriedades
A node List retornada com querySelectorAll() não se atualizam caso seja add outro elemento com o mesmo nome, pois a lista não é ao vivo
O HTML Collection atualiza a lista caso apareça +1 elemento com o nome da classe
*/

/* Exercícios */
// Retorne no console todas as imagens do site

// const imagensSite = document.querySelectorAll('img');
// const imagens = document.getElementsByTagName('img');
// console.log(imagens);
// console.log(imagensSite);

// Retorne no console apenas as imagens que começaram
// Com a palavra imagem

// const imagensIMG = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imagensIMG)

// Selecione todos os links internos onde a href começa com #
// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// // Seleciona o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroH2.innerText);

// Selecione o ultimo 'p' do site
// const paragrafos = document.querySelectorAll('p');

// console.log(paragrafos[paragrafos.length -1]);