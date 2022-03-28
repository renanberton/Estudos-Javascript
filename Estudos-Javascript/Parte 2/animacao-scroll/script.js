/* Função para isolar o código do restante */
/* Função para ao clicar nos itens do menu, ele já vai para a sessão referente ao item clicado do menu
Ex: Ao clicar em contato, já desce para a sessão contato direto
*/
function initTabNav() {
    /* Seletores */
    const tabMenu = document.querySelectorAll('.js-tabmenu li'); // Seletor para os itens de navegação do menu
    const tabContent = document.querySelectorAll('.js-tabcontent section'); // Seletor para a sessão (contato, faq, animais, etc)
    
    /* Condicional para verificar se existem os elementos no HTML Caso não exista, ele não roda o código */
    if(tabMenu.length && tabContent.length) {
        /* Para carregar a página com o primeiro animal já carregado Se não o usuário não tem como saber que existe texto para os animais */
        tabContent[0].classList.add('ativo');
        
        /* Função que remove a classe ativo de todos os elementos E add para o elemento do index */
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
    
/* Função para o accordion do FAQ 
Ao clicar no titulo, o accordion é ativo e exibe o conteúdo daquele elemento abaixo */
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


/* Função de ScrollSuave */
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event) {
        event.preventDefault(); // Não pode esquecer de prevenir o comportamento padrão, se não da errado.
        const href = event.currentTarget.getAttribute('href'); // Pega o atributo href do item que for clicado
        const section = document.querySelector(href); // seleciona o href, e o href devolve o #id da section clicada
        
        /* Funcionalidade que desce o scroll suave até o local */
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        /* 
        Forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        }); */
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
/* Chamando/Ativando a função */
initScrollSuave();

/* Função para animar o scroll
Os elementos começam com opacity: 0, e ao add a classe ativo, a opacidade vai para 1
E cria-se uma animação para as sections
*/
function initAnimacaoScroll() {

    const sections = document.querySelectorAll('.js-scroll');
    
    /* Verifica se existe as sections */
    if(sections.length) {
        
        /* Pega 60% do tamanho da tela do usuário */
        const windowMetade = window.innerHeight * 0.6;
        
        /* Função para o Scroll */
        function animaScroll() {
            sections.forEach((section) => {
                /* Pega o topo do elemento - 60% do tamanho da tela */
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                /* Quando o usuário chegar no elemento, add a clase ativo e o elemento aparece na tela, com animação feita no CSS */
                if(sectionTop <0) {
                    section.classList.add('ativo');
                }
            })
        }
        /* Chama a função, para que o site não fique todo escondido para o usuário
        Ai ao usuário scrollar, aparece o restante dos elementos
        */
        animaScroll();
        
        /* Evento no window de scroll, que chama a função animaScroll */
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();

/* Fim Função Anima Scroll */