/* Síncrono x Assíncrono */

/*  
- Síncrono
Espera a tarefa acabar para continuar com a próxima.

- Assíncrono
Move para a próxima tarefa antes da anterior acabar.
O trabalho será executado 'no fundo' e quando terminado, será colocado na fila.

Exemplos: setTimeOut, Promises, Fetch,  Async.

Vantagens: 

- Carregamento no fundo
Não tava o script.
É possivel utilizar o site enquanto o processamento é realizado no fundo.

- Função ao Término
Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.

- Requisições ao Servidor
Não precisamos recarregar a página por completo á cada requisição feita ao servidor.

*/

setTimeout(function(){
    console.log('Tempo 1');
});

setTimeout(function(){
    console.log('Tempo 2');
}, 100);

console.log('Log 1');

setTimeout(function(){
    console.log('Tempo 3');
}, 50);

console.log('Log 2');