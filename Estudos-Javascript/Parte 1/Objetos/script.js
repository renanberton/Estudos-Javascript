//Objetos
//Conjunto de variáveis e funcções, que são chamadas de propriedades
//e métodos.

// var pessoa = {
//   nome: 'Renan',
//   idade: 26,
//   profissao: 'Developer',
//   possuiFaculdade: true,
// }

// console.log(pessoa.nome, pessoa.idade);

//Métodos
//É uma propriedade que possui uma função no local do seu valor.

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
// }

// console.log(quadrado.lados); //4
// console.log(quadrado.area(5)); //25
// console.log(quadrado.perimetro(5)); //20

// Existem propriedades e funções nativas do JS.
// EX : Math.random();
// math.Pi();

// Dot Notation Get
// Podemos definir uma variavel, com um propriedade do objeto.
// var menu = {
//   width: 800,
//   height: 50, 
//   backgroundColor: '#fff',
// }
// menu.backgroundColor = '#000'; // Alteração de propriedade
// menu.container = 960;
// var bg = menu.backgroundColor; // #000 pois foi alterado
// console.log(bg); // // #000 pois foi alterado
// console.log(menu.container); // 960


// É possível modificar o valor de alguma propriedade fora da função.
// Ex menu.background color foi alterado de fora do objeto.
// É possímenu.containerl modificar o valor de alguma propriedade fora da função.
// Também é possivel add uma propriedade fora do campo do objeto. 
// Ex menu.container foi add fora do objeto


// var height = 120;//Caso ñ usasse o this, ia puxar o height dessa variavel
// var menu = {
//   width: 800,
//   height: 50,//E não dessa
//   metadeheight() {
//     return this.height / 2; //This aponta para uma propriedade do objeto
//   }
// }

// console.log(menu.metadeheight());

//O objeto possui acesso as variaveis globais.

//Protótipo e herança
// O objeto herda propriedades e métodos do objeto que foi usado
// para criar o mesmo

// var menu = {
//   width: 800,
// }

// console.log(menu.hasOwnProperty('width'));
//hasOwnProperty serve para verificar se existe a propriedade "width"
// No objeto menu


//Exercícios
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Renan',
  sobrenome: 'Alexandre Berton',
  idade: 26,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
  return dados.nome + " " + dados.sobrenome;
}
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  quandoLate(pessoa) {
    if(pessoa === 'homem'){
      return 'latir';
    } else {
      return 'Nada';
    }
  }
}

