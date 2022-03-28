// Funções
// São blocos de código que podem serrem executados e reutilizados.
// Valors podem serem passados por uma função e a mesma retorna outro valor.

// function areaQuadrado(lado){ //(lado) é o valor que deve ser passado para a função
//   return lado * lado;
// }

// console.log(areaQuadrado(4));
// console.log(areaQuadrado(5));
// console.log(areaQuadrado(2));

// Peso e Altura são os parametros.
// function imc(peso,altura) { // Declaração da função
//   const imc = peso / (altura ** 2);
//   return imc;
// }

// console.log(imc(80, 1.80)); // Exibe a função no console

// function corFavorita(cor) {
//   if (cor === 'Azul'){
//     return 'Eu gosto de azul';
//   } else if (cor === "Verde") {
//     return 'Eu gosto de verde';
//   } else {
//     return 'Eu não gosto de cores';
//   }
// }

// console.log(corFavorita('Verde'));

// addEventListener('click', function(){console.log('oi')});

// function faltaVisitar(paisesVisitados){
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} paises`; 
// }

// console.log(faltaVisitar(150));

// var profissao = 'Designer';

// function dados() {
//   var nome = 'Renan';
//   var idade = 26;
//   function outrosDados() {
//     var endereco = 'Sao Paulo';
//     var idade = 27;
//     return ` ${nome}, ${idade}, ${endereco}, ${profissao}`;
//   }
//   return outrosDados();
//   }

//   console.log(dados()); // Aqui consegue exibir a função
//   console.log(outrosDados()); //Aqui não consegue, pois a função outrosDados só funciona dentro da função dados.

// EXERCÍCIOS
// Crie uma função para verificar se um valor é Truthy
// function verifica(ver) {
//     return !!ver;
  
// }

// console.log(verifica("Hello World"));


// Crie uma função matemática que retorne o perímetro de um quadrado
//  lembrando: perímetro é a soma dos quatro lados do quadrado
// function quadrado(numero) {
//   numero = numero + numero + numero + numero;
//   return numero;
// }

// console.log(quadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// function nomeCompleto(nome, sobrenome){
//   nomeCompleto = nome + " " +sobrenome;
//   return nomeCompleto;
// }

// console.log(nomeCompleto("Renan", "Alexandre Berton"));

// Crie uma função que verifica se um número é par
// function numeroPar(numero) {
//   if (numero % 2 == 0) {
//     console.log('O numero é par');
//   } else {
//     console.log('O numero é impar');
//   }
// }


// console.log(numeroPar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// function tipoDado(dado) {
//   tipo = typeof(dado);
//   return tipo;
// }

// console.log(tipoDado("rehzera"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener("scroll", function(){console.log("Renan Alexandre Berton")});


// // Corrija o erro abaixo

// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// console.log(precisoVisitar(20));
// console.log(jaVisitei(20));