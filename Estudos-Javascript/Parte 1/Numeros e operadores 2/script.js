// Números e operadores (A ordem importa)

// Primeiro resolve-se as operações entre ();
// Após os () Vem multiplicação e divisão;
// Depois soma e subtracao;

// var total1 = 20 + 5 * 2; // 30
// var total2 = (20+5) * 2; // 50 
// var total3 = 20 / 2 * 5; // 50
// var total4 = 10 + 10 * 2 + 20 / 2; //40

// console.log(total1);
// console.log(total2);
// console.log(total3);
// console.log(total4);

// var incremento = 1;
// console.log(incremento++);
// console.log(incremento);


// var idade = '28'; //se botar var idade = +'28' // Também já transforma a string em numero
// var somaIdade = 5;

// console.log(idade +5); // 285 -> Aqui contatena os valores, pois é string + numero
// console.log(+idade +5); // 33 -> Aqui soma os valores, pois transforma o idade em numero.


//Exercícios
//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
resultado = 35;

console.log(resultado);

// Crie duas expressões que retornem NaN
var exp = "Comprei 100";
noan = exp / 2; //Para retornar NaN deve-se / ou * os valores.
naon = exp * 2; //Caso tente somar, ele ira concatenar os valores

console.log(noan);
console.log(naon);


// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50; //o + antes da string, transforma ele em numero
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado

var incremento = 5;
console.log(++incremento);


// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg' -> concatenou os valores
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(numero /2);