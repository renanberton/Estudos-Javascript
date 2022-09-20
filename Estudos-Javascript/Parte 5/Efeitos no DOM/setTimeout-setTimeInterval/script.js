/* SETTIMEOUT()
setTimeout(callback, tempo, arg1, arg2, ...)
Método assíncrono que ativa o callback após um determinado tempo. 
Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.
O tempo é em milisegundos, ou seja: 1000 é = a 1 segundo, 10000 é igual a 10 segundos.
O setTimeout irá ocorrer após todos os eventos síncronos que tiver no script.

function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, 'Depois de 1s'); // Após 1 segundo, ele exibiu no console 'Depois de 1s';

function Exibir(frase1, frase2){
  console.log(frase1 + ' ' + frase2);
}

setTimeout(Exibir, 5000, 'O Corinthians ', 'É o maior clube do mundo');

Também podemos usar função anônima, como no exemplo abaixo:

setTimeout( () => {
  console.log('oi');
}, 2000);

IMEDIATO
Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. 
Podemos passar uma função anônima diretamente com argumento.

setTimeout(() => {
  console.log('Após 0s?');
});

LOOPS E SETTIMEOUT
Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. 
Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.
Todos os eventos do setTimeout irão contar o tempo ao mesmo tempo, ele não espera acabar um pra iniciar outro.

for(let i = 0; i < 20; i++) { // Nesse exemplo, ele exibe do 1 ao 19 de uma vez, sem considerar o setTimeout
  setTimeout(() => {
    console.log(i);
  }, 300);
}

Para resolver isso, podemos fazer assim:
for(let i = 0; i < 20; i++) { 
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}

Ai sim ele irá exibir o log a cada .3 segundos

THIS E WINDOW
setTimeout é um método do objeto Window. 
O valor de this dentro do mesmo callback é uma referência ao seu objeto: no caso Window.

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {
    this.classList.add('active');
  }, 1000)
}
// Erro pois window.classList não existe

Para resolver isso, basta usarmos arrow function, ao invés de uma function:
Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado


const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick() {
  setTimeout(() => {
    console.log(this);
    this.classList.add('active');
  }, 1000)
}

SETINTERVAL
setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);


function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s'); // A cada segundo ele irá consolar 'Passou 1s'

// loop a cada segundo
let i = 0;
setInterval(() => { // A cada segundo ele console um incremento -> 1, 2, 3, 4, 5, 6;
  console.log(i++);
}, 1000);


CLEARINTERVAL
clearInterval(var), podemos parar um intervalo com o clearInterval. 
Para isso precisamos atribuir o setInterval a uma variável.

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}

*/


/* EXERCÍCIOS
Mude a cor da tela para azul e depois para vermelho a cada 2s.
document.body.classList.add('azul');

function mudarCor() {
  if (document.body.classList == 'azul') {
    document.body.classList.remove('azul');
    document.body.classList.add('vermelho');
  }
  else if(document.body.classList == 'vermelho') {
    document.body.classList.remove('vermelho');
    document.body.classList.add('azul');
  } 
}


setInterval(mudarCor, 1000);


Crie um cronometro utilizando o setInterval. 
Deve ser possível iniciar, pausar e resetar (duplo clique no pausar). */

let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let resetar = document.querySelector('.resetar');
let tempo = document.querySelector('h1');

let cont = tempo.innerHTML;

iniciar.addEventListener('click', () => {
  var inicio = setInterval(() => {
    tempo.innerHTML = cont++;
  }, 500);
  pausar.addEventListener('click', () => {
    clearInterval(inicio);
  })
  resetar.addEventListener('click', () => {
    tempo.innerHTML = 0;
    cont = 0;
  })
})


