/* Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const carro = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})

}) */



/* Métodos de Objects */

/* MÉTODOS DE OBJECT

// OBJECT.CREATE()
Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
Herdará as funções do objeto que foi usado para criar o novo.
Porém os valores, ficarão vazios, assim, teremos que definir igual no exemplo abaixo.

const carro = {
  marca: 'Honda',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou as ' + this.rodas + ' rodas';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const Mercedez = Object.create(carro);
// Podemos definir os valores do novo objeto \/

Mercedez.marca = 'Mercedez';
Mercedez.rodas = 4;
*/


/* OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao Objeto alvo as propriedades e métodos enumeráveis dos demais objetos. 
O assign irá modificar o objeto alvo.
No exemplo abaixo por exemplo, é criada 1 função separada.
E ao usar o Assign na moto ou no carro, ambos passam a ter acesso a função funcaoAutomovel e conseguem usar acelerar() e buzinar ()
Podemos passar quantos alvos quisermos, o alvo também pode ser uma variável

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel); 


*/


/* OBJECT.DEFINEPROPERTIES()
Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. 
A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
Essas propriedades, diferente dos métoods anteriores, podemos definir se os valores serão imutáveis ou mutáveis, com a propriedade configurable: true | false
Temos as propriedades: 
Configurable -> Que define se podemos deletar ou mudar o valor de alguma variavel do objeto -> True pode alterar ou deletar | False não deixa alterar ou deletar
Enumerable   -> True torna enumerável | False - Não permite tornar numerável
Writable     -> False Impede mudança de valor | True -> Permite mudanças de valores

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

/* GET E SET
É possível definirmos diferentes comportamentos para get e set de uma propriedade. 
Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
Não podemos ter value dentro do campo que tiver get e/ou set

const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade; // Velocidade 200

*/

/* OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade 
*/

/* OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)

Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
 Object.values(obj) retorna uma array com os valores do objeto. 
 Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]] */


/* OBJECT.GETOWNPROPERTYNAMES(OBJ)
Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro);
// ['marca', 'ano'] */


/* OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false */


/* OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
Object.freeze() impede qualquer mudança nas propriedades. 
Object.seal() previne a adição/remoção de novas propriedades e impede que as atuais sejam deletadas. 
Object.preventExtensions() previne a adição de novas propriedades e permite remoção de propriedades existentes

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // true */