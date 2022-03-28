// function Carro() {
//     this.marca = "Marca";
//     this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 3000;

// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

// alert(honda.marca + " " + honda.preco);

/* A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos depois dela */

/* Também podemos passar os valores via atributos e parametros */

// function Carro(marcaAtribuida, precoAtribuido) {
//     this.marca = marcaAtribuida;
//     this.preco = precoAtribuido;
// }

/* Ai basta passar o valor desejado nos parâmetros para definir os valores */
// const honda = new Carro('Honda', 5000);

/* this Keyword
O this faz referência ao próprio objeto construído com a Constructor Function
Ao dar console.log(this) ele irá exibir somente o conteudo de this.
Não será possível acessar taxa/precoFinal por exemplo
Para expor a taxa/precoFinal poderíamos botar o this na frente 
*/

// function Carro(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
//     console.log(this); // marca: "honda", preco: 2400;
// }

// const honda = new Carro('Honda', 2000);

/* Exemplo Real
Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar
o novo seletor em seus métodos
*/

// const Dom = {
//     seletor: 'li', 
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativo() {
//         this.element().classList.add('ativo');
//     },
// }

// Dom.element(); // Retorna o elemento 'li'
// Dom.ativo();   // Add a classe 'ativo' na 'li'

// /* Add 'ativo' na ul */
// Dom.seletor = 'ul';
// Dom.ativo();

/* São raros os casos que iremos construir um objeto Pessoa/Carro
Geralmente puxamos esse tipo de informação do banco de dados criado
Na maioria das vezes iremos criar objetos para manipular o DOM */

/* Transformando /\ em Constructor Function */

// function Dom(seletor) {
//     this.element = function() {
//         return document.querySelector(seletor);
//     }
//     this.ativo = function() {
//         this.element().classList.add('ativo');
//     }
// }

/* Para usar a função */
/* Cria-se um novo objeto Dom passando o parâmetro ('ul')
E depois chama o mesmo com ul.ativo() ou ul.element() */
// const ul = new Dom('ul');
// ul.ativo();

// const ultimaLi = new Dom('li:last-child');


/* Um objeto criado com uma Constructor Function, não irá influenciar
em outro objeto criado com a mesma Constructor Function */

/* LEMBRE-SE DE USAR PARÂMETROS */
/* Também podemos fazer da seguinte forma: */

// function Dom(seletor) {
//     this.element = function() {
//         return document.querySelector(seletor);
//     }
//     this.ativo = function(classe) {
//         this.element().classList.add(classe);
//     }
// }

// /* Aqui passamos o nome da classe que queremos add via parametro da função */
// const titulo = new Dom('h1');
// titulo.ativo('titulo'); // Aqui add a classe ativo no h1 do documento

/* EXERCÍCIOS */

/* Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar (){
        console.log(this.nome + ' andou');
    }
} 
*/

// function pessoa(nome, idade) {
//     this.nome = nome,
//     this.idade = idade,
//     this.andar = function andar() {
//         console.log(nome + ' andou');
//     }
// }

// const joao = new pessoa('João', 20);
// const maria = new pessoa('Maria', 25);
// const bruno = new pessoa('Bruno', 15);

/* Crie uma Constructor Function (DOM) para manipulação de listas de
elementos do DOM.
Deve contar as propriedades e métodos:

element, retorna NodeList com os elementos selecionaodos
addClass(classe), adiciona a classe a todos os elementos
removeClass(classe), remove a classe de todos os elementos
*/

// function Dom(seletor) {
//     const elementList = document.querySelectorAll(seletor);
//     this.elements = elementList;
//     this.addClass = function(classe) {
//         elementList.forEach((element) => {
//             element.classList.add(classe);
//         })
//     }
//     this.removeClass = function(classe) {
//         elementList.forEach((element) => {
//             element.classList.remove(classe);
//         })
//     }
// }

// const items = new Dom('li');
// items.addClass('oi');
// items.removeClass('oi');