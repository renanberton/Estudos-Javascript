// Boolean

// Existem 2 valores booleanos
// False / True
// O boolean sempre vai servir para verificar alguma sentença
// Exemplo

// var possuiDoutorado = false;
// var possuiGraduacao = true;


// if(possuiGraduacao) { //Se possuiGraduacao é true
//     console.log('Possui Graduação'); // Faz isso
// } else {
//     console.log('Não possui graduação'); //Senao faz isso
// }

// if(false);
// if(0);
// if(nan); // Todas essas sentenças retornaram FALSE
// if(NULL);
// if(undefined);
// if('');

// if(true);
// if(1);
// if(' '); // Todas essas sentenças retornaram TRUE
// if('Rehzera');
// if(-5);

// Operador lógico de negação

// O Operador ! nega uma operação booleana.
// Ou seja !true é = FALSE

// EXEMPLO

// var possuiGraduacao = true;

// if(!possuiGraduacao) {
//   console.log("Não possui Graduação");
// } else {
//   console.log("Possui graduação.");
// }

// Operadores de comparação
// São operadores que comparam valores
// Exemplo

// 10 > 5; // True
// 5 > 10; // False
// 20 < 10; // False

// Ao comparar valores, sempre retornará false/true;

//Operadores de comparação = == ===

//O == faz uma comparação com um valor

// var x = 10; //Apenas 1 = serve para definição de algum valor.

// x == 10; //Verifica se x é = a 10 /TRUE
// x === 10; //Verifica se o valor e o tipo do dado é = a 10; /TRUE
// x === '10'; // Verifica se o valor e o tipo de dado sao = a 10 e string //FALSE
// x != 10; //Verifica se x não é igual a 10; //FALSE

// Operador lógico && (E)
// Compara se 2 expressões são verdadeiras.
// As 2 precisam ser verdadeiras para retornar TRUE, e retorna o ultimo valor  true comparado
// Caso uma delas seja false, irá retornar false e não verifica a próxima
// Exemplo:
// Só vou ao cinema se Maria E João forem.
// Se um dos dois não forem, eu não vou, os 2 tem que ir para eu ir.
// Só irei se os 2 forem.

// if((5-5) && (5+5)){
//     console.log('Verdadeiro');
// } else {
//     console.log('Falso');
// }

// // Nesse exemplo, retornará "falso"
// // Pois 5-5 é = 0, e 0 é um valor False.
// // Para retornar True, ambas as sentenças devem ser true;

// if((5-4) && (5+5)){
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }

// Nesse outro exemplo, retornará true
// Pois 5-4 = 1, e 1 é um valor true
// E 5+5 = 10, e 10 também é um valor true.

// A condicional &&, retorna o ultimo valor true (no caso 10)
// Ou o primeiro valor false.  

// Operador Lógico || (OU)
// Compara se 1 das 2 expressões é verdadeira.
// Caso uma das duas forem true, entao a sentença retorna true

// Exemplo:
// "Só vou no cinema se Maria OU João forem"
// Se Maria OU João for, eu vou.
// Se os 2 forem, eu vou
// Se nenhum dos dois forem, eu não vou.

// if((5-4) || (5+5)){
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }

// Caso uma das expressões forem true, retorna true.
// Só retorna false, caso as 2 sentenças forem false.

// Operador lógico Switch. (Caso)
// É usado quando temos uma verificação, com varias opções
// E pra cada opção existe uma ação diferente.
// Exemplo de um menu

// switch(menu) {
//   case 1: // Caso escolha a opção 1, chama a função de cadastro
//     cadastro();
//     break;
//   case 2: // Caso escolha a opção 2, chama a função de procurar
//     procurar();
//     break;
//   case 3: // Caso escolha a opção 3, chama a função de alterar
//     alterar();
//     break;
//   case 4: // Caso escolha a opção 4, chama a função de excluir
//     excluir();
//     break;
//   case 5: // Caso escolha a opção 5, sai do programa
//     sair();
//     break;
//   default:
//     console.log('Nenhuma opção foi selecionada');
//     console.log('Escolha uma das 5 opções e tente novamente.');
// }

// Exercícios
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// var renan = 26;
// var murilo = 13;

// if(renan > murilo) {
//   console.log("Renan é maior");
// } else if(renan === murilo) {
//   console.log("É igual");
// } else{
//   console.log("É menor");
// }

// // Qual valor é retornado na seguinte expressão?
// var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// resposta: verdadeiro. -> 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = 'Andre'; // Verdadeiro
// var idade = 28; //Verdadeiro
// var possuiDoutorado = false; //False
// var empregoFuturo; // false pois está como undefined
// var dinheiroNaConta = 0; // False, pois 0 é = a false

// console.log(nome, idade, possuiDoutorado, empregoFuturo, dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;

// if(brasil < china) {
//   console.log('Verdadeiro');
// }
// else if (brasil > china) {
//   console.log('Falso');
// }


// // O que irá aparecer no console?
// if(('Gato' === 'gato') && (5 > 2)) {
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }
//Resposta = false, pois Gato não é === gato

// // O que irá aparecer no console?
// if(('Gato' === 'gato') || (5 > 2)) {
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }
// //Resposta = True, pois 5 é > 2, e se uma das 2 opções for true, retorna true