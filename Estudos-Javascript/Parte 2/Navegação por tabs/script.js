/* Seletores */
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

/* Condicional para verificar se existem os elementos no HTML
Caso não exista, ele não roda o código */
if(tabMenu.length && tabContent.length) {
    /* Para carregar a página com o primeiro animal já carregado
    Se não o usuário não tem como saber que existe texto para os animais */
    tabContent[0].classList.add('ativo');
    
    /* Função que remove a classe ativo de todos os elementos
    E add para o elemento do index */
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        })
        tabContent[index].classList.add('ativo');
    };
    
    /* forEach que percorre todos os animais
    Ao clicar em algum, ele chama a função activeTab que add a classe ativo ao elemento
    Fazendo exibir o conteudo (texto do respectivo animal) ao lado. */
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}