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
*/

/* str.charAt(n)
Retorna o caractere de acordo com o index (n)

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
*/


/* str.endsWith(search) e str.startsWith(search)
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