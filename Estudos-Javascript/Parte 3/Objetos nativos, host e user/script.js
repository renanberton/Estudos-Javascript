/* Native
Objetos nativos são aqueles definidos pela especificação da linguagem.
São Implementados independente do host

Construtores de objetos nativos

Object
String
Array
Function

Objetos nativos, funcionarão apenas no browser (host)
*/

/* Host
Objetos do host são aqueles implementados pelo próprio ambiente.
Ex: no browser temos objetos do DOM, como DomList, HTMLCollection, etc.
Em NodeJs os objetos de host são diferentes, já que estamos fora do browser

Objetos do browser(host):
NodeList
HTMLCollection
Element
*/

/* User
Objetos do user são os objetos definidos pela sua aplicação.
Ou seja, qualquer objeto que você criar/importar de alguma lib externa

Objetos user

const Pessoa = {
    nome: 'Renan';
}
*/


/* EXERCÍCIOS

1 - Liste 5 objetos nativos

1 - Object
2 - String
3 - Array
4 - Function
5 - Number

2 - Liste 5 objetos do browser (objetos do DOM)
window retorna esses objetos


1 - NodeList
2 - HTMLCollection
3 - Element
4 - Object
5 - alert   
6 - Document


3 - Liste 2 Métodos, Propriedades ou objetos presentes no Chrome e que não existam no Firefox*/