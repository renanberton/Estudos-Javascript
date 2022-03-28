/* Prototype */
/* Essa propriedade é um objeto adicionado a uma função, quando a mesma é criada  */

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// const andre = new Pessoa('André', 20);

// console.log(Pessoa.prototype); // Retorna os parametros da função
// console.log(andre.prototype);  // Retorna undefined, pois andré é um objeto e não uma função

/* É possível add novas propriedades/métodos ao objeto */

// Pessoa.prototype.andar = function() {
//     return this.nome + ' andou';
// }

// Pessoa.prototype.nadar = function() {
//     return this.nome + ' nadou';
// }

// console.log(Pessoa.prototype)

/* Acesso ao Protótipo
O objeto criado usando Constructor Function, possui acesso aos métodos
e propriedades do protótipo deste constructor.
Lembrando: O prototype é uma propriedade e funções apenas. */

// console.log(andre.nome);
// console.log(andre.idade);
// console.log(andre.andar());
// console.log(andre.nadar());

/* proto
O novo objeto acessa os métodos e propriedades do protótipo atrasvés
da propriedade __proto__. É papel da engine fazer essa busca.
NÃO devemos falar com __proto__ diretamente */

// andre.andar(); 
// andre.__proto__.andar();

/* Acessam o mesmo método, mas __proto__ não tera acesso ao this.nome */


/* Herança de Protótipo
O objeto possui acesso aos métodos e propriedades do protótipo do constructor
responsável por criar este objeto.

O objeto abaixo possui acesso a métodos que nunca definimos.
mas são herdados do protótipo de Object*/

// Object.prototype;
// andre.toString();
// andre.isPrototypeOf();
// andre.valueOf();


/* Construtores Nativos
Objetos, funções, números, strings e outros tipos de dados são criados usando construtores.
Esses construtores possuem 1 protótipo com propriedades e métodos, que pode ser acessados pelos tipos de dados */

// const pais = 'Brasil';
// const cidade = new String('São Paulo');

// console.log(pais.charAt(0)); // 'B'
// console.log(cidade.charAt(0)); // 'S'

// String.prototype;

/* É possível acessar a função do protótipo
É comum, principalmente em códigos antigos o uso direto de funções de protótipo de constructor array*/

// const lista = document.querySelectorAll('li');

// /* Transforma em array */
// const listaArray = Array.prototype.slice.call(lista); // Transforma em Array
// Array.from(lista); // Transforma em array

// console.log(lista);


/* Método do objeto x Protótipo

Nos objetos nativos existem métodos linkados diretamente ao objeto e outros linkados ao protótipo*/

// Array.prototype.slice.call(lista); // Transforma em array
// Array.from(lista); // Transforma em array

// console.log(Object.getOwnPropertyNames(Array)); // Retorna as propriedades, menos opções
// console.log(Object.getOwnPropertyNames(Array.prototype)); // Retorna os métodos, mais opções

/* Entenda o que está sendo retornado
Os métodos e propriedades acessados com o . são referentes ao tipo de dado que é retornado antes do . */

// const carro = {
//     marca: 'Ford',
//     preco: 2000,
//     acelerar() {
//         return true;
//     },
// }

// console.log(carro); // Retorna o objeto e suas propriedades e métodos
// console.log(carro.marca); // Retorna uma String 'Ford'
// console.log(carro.preco); // Retorna um Number 2000
// console.log(carro.acelerar); // Retorna a função
// console.log(carro.acelerar()); // Retorna Boolean -> true
// console.log(carro.marca.charAt); // Retorna a função
// console.log(carro.marca.charAt(0)); // Retorna 1 string -> 'F'


/* EXERCÍCIOS
Criar uma função Construtora de Pessoas
Deve conter nome, sobrenome e idade
Crie um método no protótipo que retorne o nome completo da pessoa */

// function Pessoa(nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;

//     Pessoa.prototype.nomeCompleto = function() {
//         return this.nome + ' ' + this.sobrenome;
//     }
// }

// const Renan = new Pessoa('Renan Alexandre', 'Berton', 27);

/* Liste os métodos acessados por dados cri ados com Nodelist, HTMLCollection, Document */

/* Node List
entries: ƒ entries()
forEach: ƒ forEach()
item: ƒ item()
keys: ƒ keys()
length: (…)
values: ƒ values()
constructor: ƒ NodeList()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "NodeList"
get length: ƒ length()
[[Prototype]]: Object
*/

/* Retorna os métodos de cada um */
// Object.getOwnPropertyNames(NodeList.prototype);
// Object.getOwnPropertyNames(HTMLCollection.prototype);
// Object.getOwnPropertyNames(Document.prototype);

/* HTMLCollection 
item: ƒ item()
length: (…)
namedItem: ƒ namedItem()
constructor: ƒ HTMLCollection()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "HTMLCollection"
get length: ƒ length()
[[Prototype]]: Object
*/

/* Document 
URL: (…)
activeElement: (…)
adoptNode: ƒ adoptNode()
adoptedStyleSheets: (…)
alinkColor: (…)
all: (…)
anchors: (…)
append: ƒ append()
applets: (…)
bgColor: (…)
body: (…)
captureEvents: ƒ captureEvents()
caretRangeFromPoint: ƒ caretRangeFromPoint()
characterSet: (…)
charset: (…)
childElementCount: (…)
children: (…)
clear: ƒ clear()
close: ƒ close()
compatMode: (…)
contentType: (…)
cookie: (…)
createAttribute: ƒ createAttribute()
createAttributeNS: ƒ createAttributeNS()
createCDATASection: ƒ createCDATASection()
createComment: ƒ createComment()
createDocumentFragment: ƒ createDocumentFragment()
createElement: ƒ createElement()
createElementNS: ƒ createElementNS()
createEvent: ƒ createEvent()
createExpression: ƒ createExpression()
createNSResolver: ƒ createNSResolver()
createNodeIterator: ƒ createNodeIterator()
createProcessingInstruction: ƒ createProcessingInstruction()
createRange: ƒ createRange()
createTextNode: ƒ createTextNode()
createTreeWalker: ƒ createTreeWalker()
currentScript: (…)
defaultView: (…)
designMode: (…)
dir: (…)
doctype: (…)
documentElement: (…)
documentURI: (…)
domain: (…)
elementFromPoint: ƒ elementFromPoint()
elementsFromPoint: ƒ elementsFromPoint()
embeds: (…)
evaluate: ƒ evaluate()
execCommand: ƒ execCommand()
exitFullscreen: ƒ exitFullscreen()
exitPictureInPicture: ƒ exitPictureInPicture()
exitPointerLock: ƒ exitPointerLock()
featurePolicy: (…)
fgColor: (…)
firstElementChild: (…)
fonts: (…)
forms: (…)
fragmentDirective: (…)
fullscreen: (…)
fullscreenElement: (…)
fullscreenEnabled: (…)
getAnimations: ƒ getAnimations()
getElementById: ƒ getElementById()
getElementsByClassName: ƒ getElementsByClassName()
getElementsByName: ƒ getElementsByName()
getElementsByTagName: ƒ getElementsByTagName()
getElementsByTagNameNS: ƒ getElementsByTagNameNS()
getSelection: ƒ getSelection()
hasFocus: ƒ hasFocus()
head: (…)
hidden: (…)
images: (…)
implementation: (…)
importNode: ƒ importNode()
inputEncoding: (…)
lastElementChild: (…)
lastModified: (…)
linkColor: (…)
links: (…)
onabort: (…)
onanimationend: (…)
onanimationiteration: (…)
onanimationstart: (…)
onauxclick: (…)
onbeforecopy: (…)
onbeforecut: (…)
onbeforepaste: (…)
onbeforexrselect: (…)
onblur: (…)
oncancel: (…)
oncanplay: (…)
oncanplaythrough: (…)
onchange: (…)
onclick: (…)
onclose: (…)
oncontextlost: (…)
oncontextmenu: (…)
oncontextrestored: (…)
oncopy: (…)
oncuechange: (…)
oncut: (…)
ondblclick: (…)
ondrag: (…)
ondragend: (…)
ondragenter: (…)
ondragleave: (…)
ondragover: (…)
ondragstart: (…)
ondrop: (…)
ondurationchange: (…)
onemptied: (…)
onended: (…)
onerror: (…)
onfocus: (…)
onformdata: (…)
onfreeze: (…)
onfullscreenchange: (…)
onfullscreenerror: (…)
ongotpointercapture: (…)
oninput: (…)
oninvalid: (…)
onkeydown: (…)
onkeypress: (…)
onkeyup: (…)
onload: (…)
onloadeddata: (…)
onloadedmetadata: (…)
onloadstart: (…)
onlostpointercapture: (…)
onmousedown: (…)
onmouseenter: undefined
onmouseleave: undefined
onmousemove: (…)
onmouseout: (…)
onmouseover: (…)
onmouseup: (…)
onmousewheel: (…)
onpaste: (…)
onpause: (…)
onplay: (…)
onplaying: (…)
onpointercancel: (…)
onpointerdown: (…)
onpointerenter: (…)
onpointerleave: (…)
onpointerlockchange: (…)
onpointerlockerror: (…)
onpointermove: (…)
onpointerout: (…)
onpointerover: (…)
onpointerrawupdate: (…)
onpointerup: (…)
onprogress: (…)
onratechange: (…)
onreadystatechange: undefined
onreset: (…)
onresize: (…)
onresume: (…)
onscroll: (…)
onsearch: (…)
onsecuritypolicyviolation: (…)
onseeked: (…)
onseeking: (…)
onselect: (…)
onselectionchange: (…)
onselectstart: (…)
onslotchange: (…)
onstalled: (…)
onsubmit: (…)
onsuspend: (…)
ontimeupdate: (…)
ontoggle: (…)
ontouchcancel: (…)
ontouchend: (…)
ontouchmove: (…)
ontouchstart: (…)
ontransitioncancel: (…)
ontransitionend: (…)
ontransitionrun: (…)
ontransitionstart: (…)
onvisibilitychange: (…)
onvolumechange: (…)
onwaiting: (…)
onwebkitanimationend: (…)
onwebkitanimationiteration: (…)
onwebkitanimationstart: (…)
onwebkitfullscreenchange: (…)
onwebkitfullscreenerror: (…)
onwebkittransitionend: (…)
onwheel: (…)
open: ƒ open()
pictureInPictureElement: (…)
pictureInPictureEnabled: (…)
plugins: (…)
pointerLockElement: (…)
prepend: ƒ prepend()
queryCommandEnabled: ƒ queryCommandEnabled()
queryCommandIndeterm: ƒ queryCommandIndeterm()
queryCommandState: ƒ queryCommandState()
queryCommandSupported: ƒ queryCommandSupported()
queryCommandValue: ƒ queryCommandValue()
querySelector: ƒ querySelector()
querySelectorAll: ƒ querySelectorAll()
readyState: (…)
referrer: (…)
releaseEvents: ƒ releaseEvents()
replaceChildren: ƒ replaceChildren()
rootElement: (…)
scripts: (…)
scrollingElement: (…)
styleSheets: (…)
timeline: (…)
title: (…)
visibilityState: (…)
vlinkColor: (…)
wasDiscarded: (…)
webkitCancelFullScreen: ƒ webkitCancelFullScreen()
webkitCurrentFullScreenElement: (…)
webkitExitFullscreen: ƒ webkitExitFullscreen()
webkitFullscreenElement: (…)
webkitFullscreenEnabled: (…)
webkitHidden: (…)
webkitIsFullScreen: (…)
webkitVisibilityState: (…)
write: ƒ write()
writeln: ƒ writeln()
xmlEncoding: (…)
xmlStandalone: (…)
xmlVersion: (…)
*/

/* Liste os construtores dos dados abaixo 
// const li = document.querySelector('li');

li // HTMLLIElement
li.click // Function ;
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Pode usar o li.constructor.name
ou o typeof li

*/

