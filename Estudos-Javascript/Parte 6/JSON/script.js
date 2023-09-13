/* JSON
JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor.
 As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

{
  "id": 1,
  "nome": "Andre",
  "email": "andre@origamid.com"
} 

*/

/* 
ARRAYS E OBJETOS
É comum possuirmos array's com objetos em cada valor da array. 
Cuidado para não colocar vírgula no último item do objeto ou array.

[
  {
    id: 1,
    aula: 'JavaScript',
    tempo: '25min',
  },
  {
    id: 2,
    aula: 'HTML',
    tempo: '15min',
  },
  {
    id: 3,
    aula: 'CSS',
    tempo: '10min',
  },
]; 
*/


/* 
JSON.PARSE() E JSON.STRINGIFY()
JSON.parse() irá transformar um texto JSON em um objeto JavaScript.
JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);

*/