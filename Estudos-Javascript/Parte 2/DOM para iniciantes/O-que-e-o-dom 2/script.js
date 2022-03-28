//Node
//Toda tag HTML é representada pelo objeto Element.
//E por isso herda os seus métodos e propriedades.
//Element é um tipo de objeto node.

// const titulo = document.querySelector('h1');

// titulo.innerText; //Retorna o texto
// titulo.classList; //Retorna as classes do elemento
// titulo.id; //Retorna o id do elemento.
// titulo.offsetHeight; //Retorna a altura do elemento.

// titulo.addEventListener('click', callback); //Ativa a função call back no titulo

//Exercício
//Retorne o URL da página atual utilizando o objeto window

// console.log(window.location.href);

//Seleciona o primeiro elemento da página que possua  a classe ativo.

// const firstElement = document.querySelector('.ativo');
//O querySelector seleciona o 1º elemento com a classe definida
//Caso tenha mais classes com o mesmo nome, ele pegará apenas a primeira

//Retorne a linguagem do navegador

// const linguagem = window.navigator.language;

// console.log(linguagem);

//Retorne a largura da janela

const width = window.innerWidth;

console.log(width);