//Array
//É um grupo de galores, geralmente relacionados.
//Serve para guardar diferentes valores em uma única variável.

// var videoGames = ['Switch', 'Ps4', 'Xbox'];

// // console.log(videoGames);

// for (var cont = 0; cont < videoGames.length; cont++) {
//   console.log(videoGames[cont])
// }

// for(var numero = 0; numero <4; numero++){
//   console.log(numero);
// }

//O for possui 3 partes: Inicio, condição e incremento.

//While loop

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//Arrays e Loops

// var videoGames = ['Switch', 'PS4', 'XBOX', 'PS5'];

// for (var i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i])
// }

//Break
//O loop irá parar caso encontre a palavra break.

// var videoGames = ['Switch', 'Ps4', 'Ps5', 'Xbox'];
//   for (var i = 0; i < videoGames.length; i++) {
//     console.log(videoGames[i]);
//     if (videoGames[i] === 'Xbox') {
//       break;
//     }
//   }

//forEach
// É um método que executa uma função para cada item da array.
// É uma forma mais simples de utilizarmos um loop com array.

var videoGames = ['Switch', 'Ps4', 'Xbox', 'Ps5'];
  videoGames.forEach(function(item, index) {
    item = item.toUpperCase();
    console.log(item, index);
  });

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// var copasVencidas = [1959, 1962, 1970, 1994, 2002];

// // Interaja com a array utilizando um loop, para mostrar
// // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// for (var i = 0; i < copasVencidas.length; i++) {
//   console.log("O brasil ganhou a copa de", copasVencidas[i]);
// }

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// for (var i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
//     if (frutas[i] === 'Pera') {
//       break;
//     }
// }

// // // Coloque a última fruta da array acima em uma variável,
// // // sem remover a mesma da array.

// var ultimaFruta = frutas[frutas.length - 1];

// console.log(ultimaFruta);