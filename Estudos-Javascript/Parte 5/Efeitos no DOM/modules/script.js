/* MÓDULOS
3 Motivos para dividirmos o projeto em módulos:

Manutenção

Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

Compartilhamento

O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

Nativo no ES6+

Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo.
Grunt, Gulp, Webpack, Browserify, Parcel e outras. 
Mas agora os módulos são nativos. */

// Os módulos consistem em separar por exemplo uma função que cria 1 accordion, em um script separado
// E importar esse script para ser usado em algum local, semelhante ao modo que usamos no React

/* NAMED EXPORTS
Você pode exportar mais de um valor. 
Quando for importar utilize as chaves para especificar cada valor. 
O nome importado deve ser igual ao exportado.

// arquivo scroll.js
export function scrollSuave() {
  ...
};
export function scrollAnimacao() {
  ...
};

// arquivo script.js
import { scrollSuave, scrollAnimacao } from './scroll.js';
scrollSuave();
scrollAnimacao();

// Importe todos os valores em um objeto
import * as scroll from './scroll.js';
scroll.scrollSuave();
scroll.scrollAnimacao(); */

/* VALORES DO EXPORT
Podemos exportar objetos, funções, classes, números, strings e mais.

// arquivo configuracao.js
export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {};

// arquivo script.js
import * as conf from './configuracao.js';
conf.str;
conf.obj;
conf.ano; */