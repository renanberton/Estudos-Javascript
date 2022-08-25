/* FUNCTION
Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

function areaQuadrado(lado) {
  return lado * lado;
}

Também podemos criar as funções com o constutor Function, como nos exemplos abaixo:
const nomeCompleto = new Function('nome', 'sobrenome', 'return nome + ` ` + sobrenome');
nomeCompleto('Renan', 'Berton');; // Renan Berton

const perimetroQuadrado = new Function('lado', 'return lado * 4');
perimetroQuadrado(5); // 20

Porém serão poucas as vezes que criaremos funções dessa maneira, ou quase nunca.

const exibeNome = new Function('nome', 'console.log(nome)');
*/


/* Propriedades das Functions
Function.length retorna o total de argumentos da função. 
Function.name retorna uma string com o nome da função.

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

O tipo de dado que retornar da função, irá definir as propriedades que podem ser usadas na mesma.
Por ex: Se o retorno da função for Number, poderemos usar os métodos e propriedades de um Number.
Se o retorno for uma array, poderemos usar os métodos e propriedades de uma array.

somar nos permitirá usar os métodos de função.
somar(4,4) nos permitirá usar os métodos e propriedades do Number
*/

/* Métodos das Functions */

/* FUNCTION.CALL()
function.call(this, arg1, arg2, ...) 
Executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018

let moto = {
  marca: 'Honda',
  modelo: 'Bros 150 2012'
}

function descricaoMoto() {
  console.log(this.marca + ' ' + this.modelo);
}

descricaoMoto.call(moto); // Honda Bros 150 2012

/* Podemos também definir o this dentro do parâmetro, como um objeto
descricaoMoto.call({marca: 'BMW', modelo: 'F800'}); // BMW F800
/* O 1º parâmetro /\ é o novo objeto que iremos referenciar, depois são os parâmetros da função (caso tenha) */


/* THIS
O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {                  // Log de cada Carro
  console.log(item);
}); 

carros.forEach.call(carros, (item) => {     // Log de cada Carro, pois o call é carros também
  console.log(item);
}); 

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {     // Log de cada Fruta, pois mesmo o forEach sendo no carros, o call agora é em frutas
  console.log(item);
});  */



/* EXEMPLO REAL
O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista); 

//Add a classe 'ativo' na ul
*/

/* O OBJETO DEVE SER PARECIDO
O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar'); */


/* ARRAY'S E CALL
É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).

Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima

*/


/* ARRAY-LIKE
HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. 
Por isso conseguimos utilizar os mesmos na substituição do this em call.

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo */


/* FUNCTION.APPLY()
O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor de this, caso a função não utilize objeto principal para funcionar 
*/


/* APPLY VS CALL
A única diferença é a array como segundo argumento.

const li = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]); */


/* FUNCTION.BIND()
Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

*/
