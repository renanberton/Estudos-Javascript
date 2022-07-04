/* Number
É a construtora de números, todo número possui as propriedades e métodos
do prototype Number, também possuí alguns métodos
const ano = 2022;
const preco = new Number(7);
*/


/* Number.isNan() e Number.isInteger()
isNaN é um método de Number, não faz parte do prototype.
isInteger verifica se o número é integral/inteiro

Number.isNaN(NaN); // True <- Não é um número
Number.isNaN(7); // False  <- É um número

Number.isInteger(10); // True <- É um número integral/inteiro
Number.isInteger(5.6); // False <- Não é um número integral/inteiro
*/


/* Number.parseFloat() e Number.parseInt()
parseFloat() serve para retornarmos um número a partir de uma string, a string deve começar com um número.
O parseInt() também retorna somente os números antes da vírgula de uma string.
parseInt() recebe também um segundo parametro que é o Radix, 10 é para decimal
E a string também deve começar com números.

parseFloat('99.50');            // Mesma função sem o Number
Number.parseFloat('99.50');     // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100');    // NaN

parseInt('99.50', 10);            // 99
parseInt('5.54444324', 10);         // 5
Number.parseInt('100 Reais', 10); // 100

let numero = '66.544444 reais';

console.log(parseInt(numero));   // 66
console.log(parseFloat(numero)); // 66.544444
*/


/* n.toFixed(decimais)
Arredonda o número com base no total de casas decimais do argumento

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455 
carro.toFixed(2); // 1000.46 <- Arredondou para cima, pois 55 é maior que 50 e tem 2 no argumento, quer dizer que é as 2 ultimas casas

const preco2 = 1499.49 
preco2.toFixed() // 1499 <- Arredondou para baixo pois é menor que 50
*/


/* n.toString(radix)
Transforma o número em uma string com base no Radix.
Usar 10 para números decimais

const preco = 2.99
preco.toString(10); // '2.99'
*/


/* n.toLocaleString(lang, options)
Formata o número de acordo com a língua e opções passadas no argumento

preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});  // 'R$ 59.49'
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});  // '$49.49'
*/


/* Math
É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns

Math.PI; // 3.14159 <- Valor de PI
Math.E;  // 2.718
Math.LN10; // 2.303
Math.abs(-5.5); // 5.5 <- Retorna o valor absoluto, transforma o negativo em positivo
Math.ceil(4.3); // 5 <- Arredonda para cima, independente do valor decimal
Math.floor(4.83); // 4 <- Arredonda para baixo, independente do valor decimal
Math.round(4.8); // 5 <- Arredonda de acordo com a matemática normal
*/

/* Math.max(), Math.min() e Math.random()
Max retorna o maior número de uma lista
Min retorna o menor número de uma lista
Random retorna um número aleatório entre 0 e 1

Math.max(1, 4, 9, 0, 3, 5); // 9 <- Maior número da lista
Math.min(1, 4, 9, 0, 3, 5); // 0 <- Menor número da lista
Math.random(); // Algum número aleatório entre 0 e 1
Math.random() * 100; // Algum número aleatório entre 0 e 100

Para retornar um numero aleatorio entre 5 e 10 \/
Poderia passar o valor direto no lugar de `max` e `min`

let max = 10;
let min = 5;
Math.floor(Math.random() * (max - min + 1)) + min;
*/


/* Exercícios */

/* Retorne um número aleatório entre 1050 e 2000 */

let max = 2000;
let min = 1050;
Math.floor(Math.random() * (max - min + 1)) + min;

/* Retorne o maior número da lista abaixo */
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaior = Math.max(...arrayNumeros);

console.log(numeroMaior);

/* Crie uma função para limpar os preços e retornar
os números com centavos arredondados e depois retorne a soma total */

const listaPrecos = ['R$ 59.99', 'R$ 100.222', 'R$ 230', 'R$ 200'];

let somaTotal = 0;

function limparPreco() {
    listaPrecos.forEach((num) => {
        somaTotal += parseInt(Math.round(num.slice(2)));
    })
    
    console.log(somaTotal);
}

limparPreco();
