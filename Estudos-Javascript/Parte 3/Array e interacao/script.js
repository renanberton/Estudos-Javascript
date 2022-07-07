/* [].forEach()
[].forEach(callback(itemAtual, index, array))
O forEach é um loop que irá percorrer todos os itens da array
(O callback executará alguma função em todos os itens da array)

Possui 3 argumentos:

itemAtual(valor do item da array)
index(index do valor na array)
array(array original)
*/

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((carro, index, array) => {
//     console.log(carro.toUpperCase(), index, array);
// }) 

/* 
Imprimiu no console o nome de cada carro em letra maiúscula (Um de cada vez), o index de cada carro, e a array original
Porém não alterou a array original

FORD 0 (3) ['Ford', 'Fiat', 'Honda']
FIAT 1 (3) ['Ford', 'Fiat', 'Honda']
HONDA 2 (3) ['Ford', 'Fiat', 'Honda']
 */


/* Arrow Function
É muito comum usar arrow function no forEach
const li = document.querySelectorAll('li');

li.forEach(item => item.classList.add('ativa'));

É o mesmo que isso:

li.forEach(function(item) {
  item.classList.add('ativa');
});
*/


/* Modificar a Array Original

O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
COPIAR
É melhor utilizarmos o map para isso
*/


/* [].map()
[].map(callback(itemAtual, index, array))
Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined
retorna uma nova array com valores atualizados de acordo com o return de cada iteração

Para retornar algo no console, devemos colocar o return.
Se não irá retornar undefined igual o forEach()

O map() é muito usado para retornar valores de uma array com alguma modificação nesses valores

const carros = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros.map((item) => {
    return 'Carro: ' + item;
})

// ['Carro: Ford', 'Carro: Fiat', 'Carro: Honda']


const valores = [1, 2, 3, 4, 5];

const preco = valores.map((valor) => {
    return 'R$ ' + valor;
})

// ['R$ 1', 'R$ 2', 'R$ 3', 'R$ 4', 'R$ 5']
*/


/* Arrow Function e map()

Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42]; 
*/


/* map x forEach
Se o objetivo for criar 1 nova array a partir de uma já existente, utilize o map
Se não precisar de uma nova array, só precisa alterar essa array(add classes, tirar classes) utilize o forEach
*/


/* map com Objetos
Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

  aulas.map(aula => {
    console.log(aula.nome.toUpperCase());
  })

/* Pegando todos os nomes 
let nomes = aulas.map(aula => aula.nome);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

/* Pegando todos os tempos 
let tempo = aulas.map(aula => aula.min);
// [15, 10, 20, 25] */


/* [].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) 

Executa a função de callback para cada item da Array.
Existe um valor especial nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
Diferentemente do map e do ForEach o reduce retorna apenas o valor total da última iteração.
O acumulador é o valor do item anterior.
É semelhante ao cálcul ode Fibonnacci


const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0); // Não esquecer de botar o acumulador 0 se não ele pula a 1ª iteração. total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165 

const numeros = [10, 25, 30, 3, 5, 53];

console.log(numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}));

/* Função para retornar maior número de uma array 
const maiorNumero = numeros.reduce((acumulador, itemAtual) => {
  if (acumulador > itemAtual) {
    return acumulador;
  } else {
    return itemAtual
  }
})

console.log(maiorNumero) // 53;
*/


/* [].REDUCERIGHT()
Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva */


/* [].SOME()
[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
Serve para verificar se existe algum item 'x' na sua array, uma classe por ex.
Semelhante ao operador lógico OU | aonde somente uma das condições devem ser true.


const motos = [ {
  marca : 'Honda',
  valor : 25000,
},
{marca: 'Yamaha',
valor: 21000,
},
{
  marca: 'BMW',
  valor: 50000,
},
{
  marca: 'Suzuki',
  valor: 100000,
}
]

let maiorqueVinte = motos.some((moto) => {
  return moto.valor > 20000 && moto.marca =='Honda'; // True, pois as motos tem o valor > que 20.000 e pelo menos uma delas tem a marca == 'Honda'
})

console.log(maiorqueVinte);


/* [].EVERY()
[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. 
Se pelo menos um for falsy, ele irá retornar false.
Semelhente ao operador lógico AND aonde todas as condições devem ser true, para retornar true.
Podemos verificar se em um array, todos os campos tem valor ou não.

const motos = [ {
  marca : 'Honda',
  valor : 25000,
},
{marca: 'Yamaha',
valor: 21000,
},
{
  marca: 'BMW',
  valor: 50000,
},
{
  marca: 'Suzuki',
  valor: 100000,
}
]

let maiorqueVinte = motos.every((moto) => {
  return moto.valor > 20000 && moto.nome =='Honda'; // True, pois todas as motos tem o valor > que 20.000
})

let maiorqueVinte = motos.every((moto) => {
  return moto.valor > 20000 && moto.marca =='Honda'; // False, pois todas as motos tem o valor > que 20.000 porém nem todas tem a marca == 'Honda'
})

console.log(maiorqueVinte);


// False pois pelo menos uma fruta está vazia '', o que é um valor falsy

const numeros = [6, 43, 22, 88, 101, 29];
Os numeros são maiores que 3 ? \/
const maiorQue3 = numeros.every(x => x > 3); // true */

/* 
[].FIND() E [].FINDINDEX()
O [].find() retorna o 1º valor que ele encontrar na array, valor que for passado no return
Já o [].findIndex(), ao invés de retornar o valor, retorna o index do 1ª valor que for true na array, valor esse que for passado no return

let jogadores = [ {
  jogador: 'FaLLen',
  arma: 'AWP'
},
{
  jogador: 'Fer',
  arma: 'AK47'
}, 
{
  jogador: 'VINI',
  arma: 'Famas'
},
{
  jogador: 'Boltz',
  arma: 'M4A1S',
},
{
  jogador: 'fnx',
  arma: 'M4A1S'
}
]


let jogadoresFind = jogadores.find((imp) => { // Retornou o valor do array do 1º jogador == 'FaLLen' se encontra -> 0 {jogador: 'FaLLen', arma: 'AWP'}
  return imp.jogador == 'FaLLen';             // Podemos também especificar no console.log(jogadoresFind.arma) por exemplo e ele retorna só a arma, ou só o nome
})

let jogadoresFindIndex = jogadores.findIndex((imp) => { // Aqui retornou a posição do 1º jogador da array que tem a arma == 'M4A1S' -> Posição 3
  return imp.arma == 'M4A1S';
})

console.log(jogadoresFind);

console.log(jogadoresFindIndex);
*/


/* [].filter()
[].filter() retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
Serve para limpar uma array apenas com valores verdadeiros
Se não colocar return, ele retorna uma array vazia, tem que colocar o return.

let emails = ['renan_berton@yahoo.com.br', null, undefined, 'isabella@hotmail.com', 0];

let emailsFiltrados = emails.filter((email) => {
  return email;
})

console.log(emailsFiltrados); // Retornou a quantidade e apenas os emails que foram true -> (2) ['renan_berton@yahoo.com.br', 'isabella@hotmail.com']

let numeros = [1, 5, 67, 59, 44, 56, 1024, 256, 528];

let numerosMaioresQue100 = numeros.filter((numero) => { // Retornou a quantidade, e apenas os números que são > 100 -> (3) [1024, 256, 528]
  return numero > 100;
})

let numerosMaioresQue500 = numeros.filter((numero) => { // Retornou a quantidade, e apenas os números que são > 500 -> (2) [1024, 528]
  return numero > 500;
})

console.log(numerosMaioresQue100); 
console.log(numerosMaioresQue500);
*/


/* []filter() em Objetos 

const cursos = [ 
  { nome: 'Javascript',
    duracao: 70
  },
  {
    nome: 'HTML',
    duracao: 45
  },
  {
    nome: 'React',
    duracao: 60
  },
  {
    nome: 'CSS',
    duracao: 20
  }
]

let cursoJs = cursos.filter((js) => { // Retornou uma array de objetos apenas com o index do curso.nome que for == 'Javascript' -> 0: {nome: 'Javascript', duracao: 70}
  return js.nome == 'Javascript';
})

let cursosMaioresQue20 = cursos.filter((curso) => { // Retornou uma array de objetos com 3 posições dos cursos.duracao que forem > que 20
  return curso.duracao > 20;                        // 0: {nome: 'Javascript', duracao: 70} 1: {nome: 'HTML', duracao: 45} 2: {nome: 'React', duracao: 60}
})

console.log(cursoJs);
console.log(cursosMaioresQue20);
*/


/* Exercícios */

// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

/* Resolução

const cursos = document.querySelectorAll('.curso');
// console.log(cursos);
/* O querySelectorAll retorna uma nodeList, então precisamos transformar o resultado em uma array 

const arrayCursos = Array.from(cursos); // Transformando a NodeList em uma array
// console.log(arrayCursos);

const objetosCurso = arrayCursos.map((curso) => { /* Transformando a array em objeto 
return {
  titulo: curso.childNodes[1].textContent,
  descricao: curso.childNodes[3].textContent,
  aulas: curso.childNodes[5].textContent,
  horas: curso.childNodes[7].textContent,
}
})

console.log(objetosCurso);
*/

// // Retorne uma lista com os números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];

// let numerosMaioresQue100 = numeros.filter((numero) => {
//   return numero > 100;
// })

// console.log(numerosMaioresQue100);


// // Verifique se Baixo faz parte da lista de instrumentos e retorne true
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// const verificaInstrumentos = instrumentos.some((baixo) => {
//   return baixo == 'Baixo';
// })

// console.log(verificaInstrumentos);


// // Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let soma = 0;
let somaCompras = compras.forEach((compra) => {
  let valorLimpo =  parseFloat(compra.preco.replace('R$','').replace(',', '.')); // No 1º replace tirei o R$ e no 2º mudei a ',' por '.' para poder somar os valores decimais
  soma += valorLimpo;
})
console.log(soma); // Retornou a soma -> 49.42
