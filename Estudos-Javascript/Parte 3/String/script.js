<<<<<<< HEAD
/* String
É a construtora de strings, toda string possui as propriedades 
e métodos do prototype de string

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2022);

/\ Todos são iguais, a diferença é que a comida retorna uma string
E liquido, ano retornam um objeto, porém os métodos serão os mesmos para os 3.
*/

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2022);

/* str.length
Propriedade que retorna o total de caracteres da string

console.log(comida.length);  // 5
console.log(liquido.length); //4
console.log(ano.lenth);      // 4

console.log(comida[0]); // 'P' - Retorna a posição 0 da string, no caso 'P'
Para pegar a ultima letra da string: console.log(comida[comida.length -1];); // 'a'
=======
/* Métodos e Propriedades do Construtor String
É a construtora de strings, toda string possui as propriedades e métodos do prototype String

const comida = 'Pizza'; // Retornará 1 string
const liquido = new String('Água'); // Retornará 1 objeto String
const ano = new String(2022); */

/* str.lenght
const comida = 'Pizza';
const frase = "A melhor comida";

console.log(comida.length); // Retorna o comprimento da string
console.log(frase.length); // Retorna o comprimento da string

console.log(comida[0]) // Retorna a letra da posição 0 da string
console.log(frase[0]) // Retorna a letra da posição 0 da string

>>>>>>> bdfed6af59e54eca8588db2e412ca1c1c0c974ca
*/

/* str.charAt(n)
Retorna o caractere de acordo com o index (n)
<<<<<<< HEAD

const linguagem = 'Javascript';
linguagem.charAt(0); // 'J'
*/

/* str.concat(str1, str2) 
Concatena as strings e retorna o resultado

const frase = 'A melhor linguagem é: ';
const linguagem = 'Javascript';

const fraseCompleta = frase.concat(linguagem);

console.log(fraseCompleta); // 'A melhor linguagem é: Javascript';

Para concatenar, podemos somar também as strings.

const frase = 'A melhor linguagem é: ';
const linguagem = 'Javascript';

const fraseFinal = frase + linguagem;
console.log(fraseFinal); // 'A melhor linguagem é: Javascript';

Podemos concatenar quantas strings quisermos.
*/


/* str.includes(search, position)
Procura pela string exata dentro de outra string e retorna boolean, a procura é case sensitive. (Maiuscula/Minuscula influencia)
Serve para verificarmos se certa variável possui/não possui determinada string, palavra, etc

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // True
fruta.includes(listaFrutas)  // False

Podemos também verificar 1 string, a partir do index de caracteres
Por ex:

listaFrutas.includes('Banana', 10); // true
Ele começa a buscar 'Banana' a partir do 10º caractere
=======
const linguagem = 'Javascript';

console.log(linguagem.charAt(0)); // Retorna o 1º caractere - J
console.log(linguagem.charAt(1)); // Retorna o 2º caractere - a
console.log(linguagem.charAt(linguagem.length -1)); // Retorna o penultimo caractere */


/* str.concat(string1, string2) 
Concatena as strings e retorna o resultado
const frase = 'A melhor linguagem é: ';
const linguagem = 'Javascript';

const fraseCompleta = frase.concat(linguagem, '!!!'); // Concatenou frase + linguagem + '!!!' OBS: Pode concatenar quantas vezes for necessário - basta colocar + items após a virgula

console.log(fraseCompleta); // 'A melhor linguagem é: Javascript !!!';
*/

/* str.includes(search, position)
Procura pela string exata dentro de outra string. A procura é caseSensitive
Verifica se existe a string dentro de outra string
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true;
fruta.includes(listaFrutas); // false
>>>>>>> bdfed6af59e54eca8588db2e412ca1c1c0c974ca
*/


/* str.endsWith(search) e str.startsWith(search)
<<<<<<< HEAD
Verifica se a string 'termina com' ou 'começa com' determinado caractere/string

const fruta = 'Banana';
fruta.endsWith('nana');   // True
fruta.startsWith('Ba');   // True
fruta.startsWith('nana'); // False
*/

/* str.slice(start, end)
Corta a string de acordo com os valores de start e end 

const time = 'Vai Corinthians';
time.slice(0, 3);  // 'Vai'
time.slice(4, 15); // 'Corinthians'
time.slice(-11);   // 'Corinthians' -> Pegou os ultimos 11 caracteres
time.slice(4);     // 'Corinthians' -> Cortou os 4 primeiros caracteres e retornou o restante
*/


/* str.substring(start, end)
Corta a string de acordo com os valores de start e end.
Não aceita valores negativos como o slice.
É parecido com o slice

const linguagem = 'Javascript';
console.log(linguagem.substring(0,4));
*/

/* str.indexOf(search) e str.lastIndexOf(search)
Retorna o index da string, assim que achar o primeiro resultado
Ou o último (lastIndexOf)

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6 - > Posição do último 'r'
*/


/* str.padStart(n, str) e str.padEnd(n, str)
Aumenta o tamanho da string para o valor de (n)
O 2º argumento é o caractere que será inserido para aumentar a string
Caso o 2º argumento não for preenchido, por padrão, será inserido espaços na string para aumentar.

const jogo = 'Counter-Strike';
jogo.length; // 14

jogo.padStart(20, '!'); // '!!!!!!Counter-Strike'
jogo.padEnd(20, '!'); // 'Counter-Strike!!!!!!'
jogo.padStart(20); // '      Counter-Strike';
jogo.padEnd(20); //'Counter-Strike      ';
*/


/* str.repeat(n)
Repete a string (n) vezes

const frase = 'Ta';
frase.repeat(5); // "TaTaTaTaTa"
*/


/* str.replace(substring, newstring)
Troca parte de 1 string por outra.
Troca apenas a 1ª que encontrar

let time = 'Corinthians';
time.replace('Corinthians', 'Palmeiras'); // 'Palmeiras'

Ele trocou 'Corinthians' por 'Palmeiras'
*/


/* str.split(padrao)
Divide a string de acordo com o padrão e retorna 1 array

const lista = 'Imperial, Furia, Mibr, misb, pain';
lista.split(','); // (5) ['Imperial', ' Furia', ' Mibr', ' misb', ' pain']

Se passar 1 string vazia() ele quebra letra por letra da lista
*/


/* str.toUpperCase() e str.toLowerCase() 
Retorna a string em letras minusculas | letras maiusculas
*/

/* str.trim(), str.trimStart() e str.trimEnd()
Remove espaços em branco do início ou final de uma string.

const valor = '     R$ 50,00      ';
valor.trim(); // 'R$50,00' -> Tirou espaço de tudo
valor.trimStart(); // 'R$50,00      '; -> Tirou espaço do inicio(start)
valor.trimEnd();   // '        R$50,00'; -> Tirou espaço do final(end)
*/
=======
Procura pela string exada dentro de outra string, case sensitive 
String.startsWith ( Começa com);
String.endsWith(Termina com);

const fruta = 'Banana';
fruta.endsWith('nana'); // true // Verifica se a string fruta termina com 'nana'
fruta.startsWith('Ba'); // true // Verifica se a string fruta começa com 'Ba'
fruta.startsWith('na'); // false // Verifica se a string fruta começa com 'na'
*/

/* str.slice
Corta a string de acordo com os valores de start e end
const transacao1 = 'Depósito de Cliente';
const transacao2 = 'Depósito de Fornecedor';
const transacao3 = 'Taxa de Camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // Cliente // Pega os caracteres após a posição 12 da string (corta os 12 primeiros caracteres)
transacao1.slice(-4); // ente // Pega os ultimos 4 caracteres da string
transacao1.slice(3, 6); // ósi // Pega os caracteres a partir da posição 3 até a posição 6 da sting
*/

/* str.substring(start, end)
Corta a string de acordo com os valores de start e end.
Bem semelhante ao slice()
Não funciona com valores negativos
const linguagem = 'Javascript';
linguagem.substring(3, 5); // as // Começa da posição 3 e vai até a 5
linguagem.substring(0, 4); // Java // Começa da posição 0 e vai até a 4
linguagem.substring(4); // script // Pega da posição 4 a diante
linguagem.substring(-4); // Javascript // não funciona com valores negativos
*/

/* str.indexOf(search) e str.lastIndexOf(search)
indexOf() retorna o index da string, assim que achar o primeiro resultado ele já retorna.
No caso do lastIndexOf() ele retorna o último resultado 
const instrumento = 'Guitarra';
instrumento.indexOf('r'); // 5 // Retorna a posição da string que se encontra o primeiro 'r' da mesma
instrumento.lastIndexOf('r'); // 6 // Retorna a posição da string que se encontra o ultimo 'r' da mesma
instrumento.indexOf('ta'); // 3 // Retorna a posição da string que se encontra 'ta' na string.

*/

/* str.padStart(n, str) e str.padEnd(n, str)
Aumenta o tamanho da string para o valor de (n).
Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela add 2 caracteres
O preenchimento é feito com espaços, caso não seja declarado o segundo argumento (str)
no padStart ele add os caracteres no começo da string.
No padEnd ele add os caracteres no final da string.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.')); // Fará com que a string tenha 10 caracteres, caso tenha menos que 10, add . até chegar em 10 caracteres
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....
*/

/* str.repeat(n)
Repete a string (n) vezes 

const frase = 'ta';

console.log(frase.repeat(4));
*/


/* str.replace(regexp|substr, newstr|function)
Trocar parte da string por outra.
Podemos usar uma regular expression ou um valor direto.
No valor direto ela irá trocar apenas o primeiro valor que encontrar 

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', '); // Troca os espaços por uma vírgula
// Para isso, deve-se usar o regex (/[ ]+/g) para trocar todos os espaços.
// Caso fizesse assim = listaItens = listaItens.replace(' ', ', '); // Ele trocaria a vírgula por espaço só na primeira vírgula encontrada

console.log(listaItens);
*/


/* str.split()
Divide a string de acordo com o padrão passado e retorna os itens em uma array

const listaItens = ' Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');
console.log(arrayItens); // ['Camisas', 'Bonés', 'Calças', 'Bermudas', 'Vestidos', 'Saias'] // Ao encontrar espaços, ele divide a string e retorna a mesma em um array sem os espaços


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const novoArray = htmlText.split('div'); // Tira a div da string e retorna o mesmo em uma array
const novoHtml = novoArray.join('section'); // Aqui ele junta os arrays com a tag section

console.log(novoArray); // ['<', '>O melhor item</', '><', '>A melhor lista</', '>'] // Aqui ele retorna a string sem o 'div'
console.log(novoHtml)  // <section>O melhor item</section><section>A melhor lista</section> // Aqui ele add a tag 'section' nos espaços da string anterior 


const frutas = ['Banana', 'Morango', 'Limão'];
console.log(frutas.join(' + ')); // 'Banana + Morango + Limão //

/* No caso do str.join /\ ele desconstrói a array retornando uma string
e separa as mesmas com o caractere que é add como atributo
No exemplo anterior ele add um ' + ' entre os elementos da array, retornando uma string */


/* str.toLowerCase() e str.toUpperCase
Transforma a string toda em caracteres minúsculos/maiúsculos
let nome = 'Renan';

console.log(nome.toLowerCase()); // 'renan'
console.log(nome.toUpperCase()); // 'RENAN' */

/* str.trim(), str.trimStart() e str.trimEnd() 
Remove espaços em branco no início ou no final de uma string
Os espaços do meio da string, não serão afetados

const valor = '    R$ 77,00    '; 
console.log(valor.trim()); // 'R$ 77,00' // Tira os espaços da string inteira, tanto no início, quanto no final.
console.log(valor.trimStart()); // 'R$ 77,00     ' // Tira os espaços do início da string somente.
console.log(valor.trimEnd()); // '     R$ 77,00' // Tira os espaços do final da string somente.
*/


/* EXERCÍCIOS */

/* Usando o forEach() na array abaixo, some os valores de taxa e os valores de Recebimento */


/* Cada valor dessa array, é um objeto */
// const transacoes = [
//     {
//         descricao: 'Taxa do pão',
//         valor: 'R$ 39',
//     },
//     {
//         descricao: 'Taxa do Mercado',
//         valor: 'R$ 129',
//     },
//     {
//         descricao: 'Recebimento de Cliente',
//         valor: 'R$ 99',
//     },
//     {
//         descricao: 'Taxa do Banco',
//         valor: 'R$ 129',
//     }, 
//     {
//         descricao: 'Recebimento de Cliente', 
//         valor: 'R$ 49',
//     },
// ];

// let somaTaxa = 0;
// let somaRecebimento = 0;

// transacoes.forEach((transacao) => {
//     if(transacao.descricao.startsWith('Taxa')) {
//         transacao.valor = transacao.valor.split('R$ '); // Tira o 'R$' e retorna uma Array
//         transacao.valor = transacao.valor.join(' '); // Desfaz a Array e devolve uma string
//         somaTaxa += Number(transacao.valor); // transforma o valor em numero com o Number e soma os mesmos
        
//     } else if (transacao.descricao.startsWith('Recebimento')) {
//         transacao.valor = transacao.valor.split('R$ '); // Tira o 'R$' e retorna uma Array
//         transacao.valor = transacao.valor.join(' '); // Desfaz a Array e devolve uma string
//         somaRecebimento += Number(transacao.valor); // Transforma o valor em numero com o Number e soma os mesmos
//     }
// })
// console.log(somaRecebimento)
// console.log(somaTaxa);

/* Retorne uma Array com a lista abaixo */

// let transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// transportes = transportes.split(';');
// console.log(transportes);


/* Substitua todos os 'SPAN' por 'a' */

// let html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//             </ul>`


// html = html.replace(/['span']+/g, 'a');
// console.log(html);


/* Retorne o último caractere da frase */

// let frase = 'Melhor do ano!';

// console.log(frase.charAt(frase.length-1))

/* Retorne o total de taxas */

const transacoes2 = ['Taxa do Banco', 'Taxa do pão', 'taxa do mercado', 'depósito  bancário', 'tarifa especial'];

let numeroTaxas = 0;

transacoes2.forEach((transacao) => {
    transacao = transacao.split(', ');
    transacao = transacao.join(' ');
    if(transacao.startsWith('Taxa') || transacao.startsWith('taxa')) {
        numeroTaxas += 1;
    }
})

console.log(numeroTaxas);
>>>>>>> bdfed6af59e54eca8588db2e412ca1c1c0c974ca
