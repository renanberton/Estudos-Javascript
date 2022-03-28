/* Função para isolar o código do restante */
function initTabNav() {
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
}
/* Chamando/Ativando a função */
initTabNav();
    
/* Função para o accordion do FAQ */
function initAccordion() {
    /* Seletor */
    const accordionList = document.querySelectorAll('.js-accordion dt');
    /* Condicional, se o accordionList tiver algo ele faz a operação, se não, não faz nada, para evitar erros caso não exista nada. */
    if(accordionList.length) {
        accordionList[0].nextElementSibling.classList.add('ativo');  // Já add a classe 'ativo' ao iniciar o projeto, para que o usuário saiba que ali é um accordion.
        
        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        /* Ao clicar, chama a função activeAccordion, que faz um toggle com a classe ativo para exibir/esconder o conteúdo do accordion */        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
/* Chamando/Ativando a função */
initAccordion();