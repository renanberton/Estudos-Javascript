/* new Promisse() */

/* Promisse é uma função construtora de promessas.
Existem dois resultados possíveis de uma promessa, ela pode ser resolvida com a execução do 1º argumento,
ou rejeitada se o segundo argumento for ativado.

*/

/* const promessa = new Promise((resolve, reject) => {
    let condicao = true;

    if(condicao){
        resolve('Promessa Resolvida'); // Podemos passar um argumento na função resolve(), esse será exibido junto da função resolve
    } else {
        reject('Promessa Rejeitada');  // O mesmo para o reject
    }
})


promessa.then(resolucao => { // O then só será executado se a promisse for resolvida
    console.log(resolucao); // 'Promessa Resolvida' 
}).catch((resolucao) => {
    console.log(resolucao); // 'Promessa Rejeitada' -> Se a condicao for = false, acionará esse erro
}) */

/* Se ativarmos a função resolve() a promessa será resolvida.
Se ativarmos a função reject() a função será rejeitada. 
Não precisa ser necessáriamente resolve/reject, pode-se usar qualquer string
*/

/* .then()
O poder das Promises, está no método then().
O callback desse método só será ativado quando a promise for resolvida.
O argumento de callback será o valor passado na função resolve.
O then, fica esperando a promessa ser resolvida, com a promessa resolvida, o then é ativado

*/

/* Assíncrono
As Promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono.
O poder está na execução de código assíncrono que executará o resolve() ao final dele.
*/

const promessa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa2 Resolvida');
    }, 2000); // Dessa forma, a promessa será resolvida após 2 segundos.
});

promessa2.then( resolucao => { // E o then, será executado após a promessa ser resolvida, no tempo de 2 segundos.
    console.log(resolucao); // Após os 2 segundos, ai sim, irá executar esse log
}).catch(() => {
    console.log('Deu ruim')
}).finally(() => {
    console.log('Finally')
})


/* catch()
O método Catch(), do protótipo de promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada
*/

/* finally()
Executará a função anônima assim que a promessa acabar.
A diferença é que o finally será executado independente do resultado, se for resolvida ou rejeitada.
O finally sempre é executado
*/


/* 
THEN().THEN()
O método then() retorna outra Promise. 
Podemos colocar then() após then() e fazer um encadeamento de promessas. 
O valor do primeiro argumento de cada then, será o valor do retorno anterior.


const promessa = new Promise((resolve, reject) => {
  resolve('Etapa 1');
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Etapa 1';
  return 'Etapa 2';
}).then(resolucao => {
  console.log(resolucao) // 'Etapa 2';
  return 'Etapa 3';
}).then(r => r + 4)
.then(r => {
  console.log(r); // Etapa 34
});
 */


/* CATCH()
O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}).catch(reject => {
  console.log(reject);
}); */


/* PROMISE.ALL()
Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. 
A resposta é uma array com as respostas de cada promise. 
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});
*/


/* PROMISE.RACE()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. 
Essa nova promise terá a resposta da primeira resolvida.
Retornará a que for resolvida 1º, tipo uma corrida */

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});
