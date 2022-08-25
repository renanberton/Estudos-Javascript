/* OBJECT
Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const pessoa = new Object({
  nome: 'André',
  idade: 27,
  cidade: 'São Bernardo do Campo',
  estado: 'SP',
})

console.log(pessoa);
/* Object
cidade: "São Bernardo do Campo"
estado: "SP"
idade: 27
nome: "André" 

/* Dessa forma também funciona 

const pessoa = {
  nome: 'renan',
  idade: 27
}

console.log(pessoa);

*/


/* MÉTODOS DE OBJECT */

/* Object.create(objeto, defineProperties)

Object.create(objeto, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
Lembra a Herança de Orientação a Objetos
O parâmetro 'objeto' deve ser o objeto que você deseja criar.
Serve para criar um protótipo a partir de um objeto existente

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro); // Cria um novo objeto, com os parâmetros do antigo.
honda.init('Honda').acelerar();     // Define o nome da marca como 'Honda' e acelera(), porém a const carro não é alterada

*/


/* OBJECT.ASSIGN()

Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. 
O assign irá modificar o objeto alvo.
O assign add funções/propriedades de algum objeto ou de vários(obj1, obj2) no objeto alvo (alvo)
No ex abaixo, criamos a função exibir, que tem 2 funções que exibem o nome e a mensagem
Ao usar o assign, ele add no objecto pessoa, as funções exibirNome e exibirMensagem
Podemos add quantos precisarmos.

const exibir =  {
  exibirNome() {
    console.log(this.nome)
  },
  exibirMensagem() {
    console.log(this.mensagem);
  },
}

const pessoa = {
  nome: 'Renan',
  mensagem: 'Testando o método Assign do JS'
}

Object.assign(pessoa, exibir);
console.log(pessoa.exibirMensagem()); // 'Testando o método Assign do JS'
console.log(pessoa.exibirNome());     // 'Renan'

*/


/* OBJECT.DEFINEPROPERTIES()
Object.defineProperties(objetoAlvo, propriedades) adiciona ao alvo novas propriedades. 
A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
Tem o defineProperties e o defineProperty que define somente 1 propriedade.

const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

*/

const pessoa = {};

Object.defineProperties(pessoa, {
  nome: {
    value: 'Renan',       // Aqui é o valor da propriedade
    configurable: true,   // Impede deletar a propriedade e mudança de valor,
    writable: true,       // Aqui é se o valor da propriedade poderá ser editado, escrito, por padrão, os 2 /\ são false
    enumerable: true,     // Torna o campo enumerável.
  }
})

pessoa.nome = 'André';    //Se o configurable | writable estiverem como false, isso aqui não funciona.
console.log(pessoa);