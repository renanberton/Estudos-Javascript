/* Arrays
Armazenam uma coleção de elementos.
Estes podem ser strings, arrays, boolean, number, funções, objectos entre outros

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const preços = [49, 99, 69, 88];
*/


/* Construção de Arrays
Toda array herda os métodos/propriedades do protótipo do construtor Array

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

 Também podemos atribuir um valor para um novo espaço do array */
/* carros[3] = 'Mazzerati'; */

/* Ou alterar o valor de uma das casas do array */
/* carros[0] = 'Ferrari'; */
/* Aqui /\ foi alterado de Corola para Ferrari */

/* Podemos add uma casa na array que não exista, por ex: */
/* Ele add Fuscão na posição 20, ai da posição 3 até a 20 fica com espaços vazios */
/* carros[20] = 'Fuscão'; */

/* carros.length; */ // 21 -> Retorna o tamanho da array
/* Como colocamos um carro na posi 
*/

/* Array.isArray()
Verifica se o valor passaro é uma array e retorna um booleano
*/

/* Array.of(), Array() e new Array();
Array.of(10); // Cria 1 array de 1 campo com o valor 10 -> [10]
Array.of(1, 2, 3, 4, 5); // Cria 1 array com 5 campos -> [1, 2, 3, 4, 5]
Array(20); // Cria 1 array com 20 campos vazios
new Array(20)/ // Cria 1 array com 20 campos vazios
*/


/* Propriedades e métodos do prototype das Arrays


/* length 
Retorna o tamanho da array 

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3 - > Pois tem 3 campos, o 3º é uma outra array
*/


/* Métodos modificadores [].sort()
Os próximos métodos que veremos, são métodos modificadores (mutator methods)
Além de retornarem um valor, eles modificam a array original.

[].sort() organiza por ordem alfabética para strings
e ordem crescente para números

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // ['Baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); // [1, 12, 21, 32, 33, 43, 8] - > Está na ordem, pois ele ordena a 1ª casa decimal // 1, 2, 3, 4, 8
*/


/* [].unshift() e [].push()
[].unshift() adiciona elementos no início da array e retorna o length da mesma
[].push adiciona elementos no final da array e retorna o lenght da mesma

let carros = ['Fusca', 'Ferrari', 'Gol', 'Corola'];
carros.unshift('Monza', 'Mazzerati');

console.log(carros); // ['Monza', 'Mazzerati', 'Fusca', 'Ferrari', 'Gol', 'Corola']


let times = ['Corinthians', 'Palmeiras', 'Santos'];
times.push('SPFC', 'Manchester United');

console.log(times); // ['Corinthians', 'Palmeiras', 'Santos', 'SPFC', 'Manchester United']
*/


/* [].shift() e [].pop()
[].shift() -> Remove o 1º item da array e retorna o mesmo
[].pop() -> Remove o último item da array e retorna o mesmo

let carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'

carros; // ['Fiat', 'VW', 'Honda']

let ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW']

Ao usar qualquer um dos dois métodos, a array fica com 1 item a menos
Seja o primeiro ou seja o último da array
*/


/* [].reverse()
Inverte a ordem da array e retorna a nova.

const motos = ['Honda', 'Yamaha', 'BMW'];
motos.reverse(); // ['BMW', 'Yamaha', 'Honda'];
*/


/* [].splice()
[].splice(index. remover. item1. item2. ...)
Adiciona valores na array a partir do index (1º argumento)
E remove a quantidade de itens que for passado no segundo parâmetro e retorna esses itens


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // [] -> Como foi passado 0 no 2o argumento, nada foi removido, só add
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] -> A partir do 3º item, ele removeu 2
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

let motos = ['Twister', 'Fazer', 'Bros', 'Lander']; // ['Twister', 'Fazer', 'Lander'] -> Removeu a bros que é o index 2 que foi passado no 1 ªargumento, e remove só ela, pois passamos 1 no 2º argumento
// motos.splice(2, 1);

motos.splice(2, 2, 'BMW', 'Ducati'); //['Twister', 'Fazer', 'BMW', 'Ducati'] -> Removeu a Bros e a Lander, pois foi passado 2 no 2ª argumento e add 'BMW' 'Ducati'
*/


/* [].copyWithin()
[].copyWithin(alvo, inicio, final)
A partir do alvo, ele irá copiar a array começando do início até o final
e vai preencher a mesma com essa cópia.
Caso omita os valores de inicio e final, ele irá usar como início o 0 e final o valor total da array

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2, 'Item1', 'Item2']

/\ A partir do item 2[Item3] ele copiou do item 0[Item1] até o item 3[Item2] da array
*/


/* [].fill()
[].fill(valor, inicio, final)
Preenche a array com o valor, do início até o final

['Item1', 'Item2', 'Item3'].fill('Banana'); // ['Banana', 'Banana', 'Banana']
['Item1', 'Item2', 'Item3'].fill('Banana', 1) // ['Item1', 'Banana', 'Banana'] -> A partir do index 1, ele preencheu com o valor o restante
['Item1', 'Item2', 'Item3'].fill('Banana', 1, 2) // ['Item1', 'Banana', 'Item3'] -> No index 1[Item2] ele preenche com o valor e para no index 2[item3]
*/

/* [].includes(), [].indexOf() e [].lastIndexOf()
[].includes(valor) -> Verifica se a array possui o valor e retorna True ou False
[].indexOf(valor) -> Verifica se a array possui o valor e retorna o index do primeiro valor encontrado na array.
[].lastIndexOf(valor) -> Verifica se a array possui o valor e retorna o index do último valor encontrado na array.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('html'); // True
linguagens.includes('css'); // true
linguagens.includes('react'); // false -> react não existe na array

linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2


linguagens.lastIndexOf('js'); // 5 <- Retornou o index do último 'js' encontrado na array
*/


/* [].join()
[].join(separador) junta todos os valores da array e retorna uma string com eles.
O valor passado como parâmetro, será usado como separador entre as strings da array
Caso não seja passado parâmetro, ele irá separar com vírgula por padrão.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.join(); // 'html,css,js,php,python,js'
linguagens.join(' '); // 'html css js php python js'
linguagens.join('@'); // 'html@css@js@php@python@js'
*/


/* [].slice()
[].slice(inicio, final) retorna os itens da array começando pelo valor de início e parando no valor final

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python'] -> Começou do index 3 e vai até o final
linguagens.slice(1, 4); // ['css', 'js', 'php'] -> Começou do index 1 e parou no 4

O slice() é muito usado para clonar uma array

const novasLinguagens = linguagens.slice(); // Clonou os valores da array linguagens
*/



/* Exercícios */

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // Remova o primeiro valor de comidas e coloque em uma variável
primeiroValor = comidas.shift();

// // Remova o último valor de comidas e coloque em uma variável
ultimoValor = comidas.pop();

// // Adicione 'Arroz' ao final da array
comidas.push('Arroz');

// // Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');


// Arrume os estudantes em ordem alfabética
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort();

// Inverta a ordem dos estudantes
estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana'); // True

// Verifique se Juliana faz parte dos estudantes
estudantes.includes('Juliana'); // False

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li, utilizando split e join

html = html.split('section').join('ul');
html = html.split('div').join('li');


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const novaArrayCarros = carros.slice();

carros.pop();
