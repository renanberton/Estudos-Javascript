//Strings
// var nome = 'Renan';

// console.log(nome.length); //Conta quantos caracteres tem na string
// console.log(nome.charAt(1)); //Mostra o caractere da posicao 1, no caso E
// console.log(nome.replace('nan', 'nato')); //Troca o nan, por nato = Renato
// console.log(nome);

// nomeMaiusculo = nome.toUpperCase(); // Transforma o nome em MAIUSCULO.
// console.log(nomeMaiusculo);

//Números

// var altura = 1.8;

// altura.toString() ;//Transforma o numero em uma string '1.8'
// altura.toFixed(); //Arredonda o valor = '2'
// console.log(altura.toString()); 
// console.log(altura.toFixed()); 

//Por um breve momento o número é envolvido em um objeto (coersão)
//tendo acesso as suas propriedades e métodos.
//Retornará o valor e depois sumirá.
//E o número deixa de ser um objeto e volta a ser um número.

//Funções

// function areaQuadrado(lado) {
//   return lado * lado;
// }

// areaQuadrado.toString(); // Irá transformar todo o conteúdo da função em 1 string.
// // "function areaQuadrado(lado) {
// //   return lado * lado;
// // }"

// areaQuadrado.length(); //Irá retornar o número de argumentos que a função pode receber, no caso 1


//Seletores
//Para selecionar um documento com JS,
//Precisa-se falar com o objeto documento // Document
//document.querySelector('.btn'); serve para selecionar a tag btn la do html, como se fosse no css

// var btn = document.querySelector('.btn'); //Serve para selecionar a tag btn lá do html, basta chama-la como se fosse no css.
// btn.classList.add('ativo'); //Serve para add uma classe 'ativo' ao btn no html
// btn.addEventListener('click', function() { //Essa função irá retornar no console 'clicou' sempre que o btn for clicado
//   console.log('clicou');
// })

//Exercícios

//Nomeie 3 propriedades ou métodos de strings
// var nome = 'Renan';

// nome.toUpperCase();
// nome.fixed();
// nome.length();

//Nomeie 5 propriedades/métodos de elementos do DOM

// var btn = document.querySelector('.btn');
// btn.addEventListener();
// btn.before();
// btn.after();
// btn.append();
// btn.getElementsByClassName();

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}