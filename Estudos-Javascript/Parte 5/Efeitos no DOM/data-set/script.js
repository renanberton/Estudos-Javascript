/* DATASET
dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. 
Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

<div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">Um Span</span>


// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');            <- Seleciona a 1ª div que encontrar
div = document.querySelector('[data-cor]');         <- Seleciona a 1ª [data-cor] que encontrar
div = document.querySelector('[data-cor="azul"]');  <- Seleciona a 1ª [data-cor="azul"] que encontrar

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'

Podemos também atribuir e definir novos valores
-> div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"} 

Podemos também deletar uma propriedade
delete div.dataset.width;    <- Remove a propriedade width de data-set
*/



/* DATA ATRIBUTES
Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

<div data-anima="left" data-tempo="1000">Div 1</div>
<div data-anima="right" data-tempo="2000">Div 2</div>

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {                 // adiciona em cada div uma classe com o mesmo nome que o valor de data 
  div.classList.add(div.dataset.anima);  
}); */


/* DATA VS CLASS
A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. 
Além de deixar a estrutura da tag mais organizada.

<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div> */

/* NOMENCLATURA
Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. 
Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

<div data-anima-scroll="left">Div 1</div>

const div = document.querySelector('[data-anima-scroll]');
div.dataset; // {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;

// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo */