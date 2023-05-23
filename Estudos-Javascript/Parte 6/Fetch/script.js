/* const doc = fetch('./doc.txt');

console.log(doc); // Só retorna que a requisição deu certo, naõ retorna o texto do arquivo.

 */


/* RESPONSE
O objeto Response, possui um corpo com o conteúdo da resposta. 
Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. 
Estes retornam outras promises.


fetch('./doc.txt').then(response => response.text() 
).then(function(corpo) {
  console.log(corpo); // Aqui sim, retorna o texto do arquivo no console.log
});

 */


/* 
.JSON()
Um tipo de formato de dados muito utilizado com JavaScript é o JSON, pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. 
.json() transforma um corpo em json em um objeto JavaScript.

fetch('https://viacep.com.br/ws/09895770/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro, cep.localidade);
}); 

*/

/* 
.BLOB()
Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. 
O blob pode ser utilizado para transformarmos requisições de imagens por exemplo.
 O blob gera um URL único. 
 

const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  console.log(blobUrl);
});

*/


/* 
.CLONE()
Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. 
Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.

const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});

 */


/* 
.HEADERS
É uma propriedade que possui os cabeçalhos da requisição.
 É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  response.headers.forEach(console.log);
});
 */


/* 
.STATUS E .OK
Retorna o status da requisição. 
Se for 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
}); */