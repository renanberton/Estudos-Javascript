//Escopo de função
//Variáveis declaradas dentro de funções, não são acessadas de fora da função
//Pois são variáveis locais

// function mostrarCarro() {
//   var carro = 'Fusca';
//   console.log(carro);
// }

// mostrarCarro();

// mostrarCarro();
// console.log(carro); //Carro é uma var local, portanto não funciona fora da função.

//O escopo evita o conflito entre nomes.

//Variável global (erro)
//Declarar uma variaval sem as palavras var/let/const cria uma var global
// 'use strict'
// function mostrarCarro() {
//   carro = 'Fusca';
//   console.log(carro);
// }

// mostrarCarro();
// console.log(carro);

//Escopo de função (pai)
//Variáveis declaradas no escopo pai da função, podem ser acessadas pela função.

// var carro = 'Fusca';

// function mostrarCarro() {
//   var frase = `Meu carro é um ${carro}`;
//   console.log(frase);
// }

// mostrarCarro();
// console.log(carro);
// console.log(frase); //Não funciona, pois a variavel só funciona dentro da função.

// Escopo de Bloco
// Variáveis criadas com VAR, vazam o bloco.
// Por isso com a introdução do ES6 a melhor forma de declarar uma variável
// é utilizando o const e let, pois estas respeitam o bloco.

// if(true) {
//   var carro = 'Fusca';
//   console.log(carro); //Fusca
// }

// console.log(carro); //Fusca
//Dessa forma, a variavel funciona dentro e fora do bloco if (true)
//Diferente da função, que a variavel só funciona dentro da função.
//Porém, isso foi uma falha de implementação do Javascript.
//Por isso, o ideal é criar variaveis locais com let ou const.
//Pois let e const respeitam o bloco, evitando conflitos com o restante do código.
//Usando let/const a variavel só funcionará dentro do bloco.

//Var vaza o bloco
//Mesmo com a condição falsa, a váriavel ainda será declarada usando o hoisting.
//E o valor ficará como undefined

// if(false) {
//   var carro = 'Fusca';
//   console.log(carro);
// }

// console.log(carro); //Undefined

//Const e Let no lugar de Var
//A partir de agora, vamos usar apenas const e let para declarar variáveis

// if (true) {
//   const carro = 'Fusca';
//   console.log(carro);
// }

// console.log(carro); // Carro is not defined

//{} cria um bloco
// Chaves {} criam um bloco
// = {} criam um objeto
// Tomar cuidado para não se confundir.

// {
//   var carro = 'Fusca';
//   const mes = 'Dezembro';
// }

// console.log(carro); // 'Fusca' //Funciona pois o var vazou o bloco
// console.log(ano); // ano it not defined, pois o const não vaza o bloco

//For loop com var
//Ao usar var dentro de um loop for(que é um bloco)
//O valor da variável irá vazar e existir fora do loop.

// for (var i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

// console.log(i);//Ao usar o var, a variavel vaza do bloco // 10
// Por isso é importante usar o let/const.

//For loop com let
//Com o let evitamos que o número vaze o bloco

// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

//   console.log(i); //i is not defined

//Const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variavel.
//Evitando bugs no código

// const mes = 'Dezembro';
// // mes = 'Janeiro'; //Erro, tentou modificar o valor
// // const semana; //Erro, declarou sem valor.

// const data = {
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2018,
// }

// data.dia = 29; // Assim funciona
// // data = 'Janeiro'; //Erro, pois tentou modificar

// console.log(data.dia, data.mes, data.ano); // 29 'dezembro' 2018

//Let
//Mantém o escopo no bloco, impede a redeclaração.
//Mas permite a modificação do valor da variável.

// let ano;
// ano = 2021;
// ano++;
// console.log(ano); //2022

// let ano = 2020; //Erro, tentou redeclarar a variável.

//Exercícios

//Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);

//Primeiro que deveria ser cor ao invés de var no console.log
//Segundo que const e let só funcionarao dentro do bloco, sendo assim dá erro.
//O certo seria colocar o console.log dentro do bloco, ai sim funcionaria.

// // Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   const dois = 2; // Declarando a constante dois na função
//   return x / dois; // Pois ela só estava declarada na função somar
// }
// console.log(somarDois(4));
// console.log(dividirDois(6));

// // // O que fazer para total retornar 500?
// const numero = 50; // Basta trocar o var numero por const numero

// for(let numero = 0; numero < 10; numero++) { //E trocar o var por let
//   console.log(numero); //Assim o var não foge do bloco
// }

// const total = 10 * numero; //E será feita a conta 10 * 50 do const numero = 50
// console.log(total); // 500