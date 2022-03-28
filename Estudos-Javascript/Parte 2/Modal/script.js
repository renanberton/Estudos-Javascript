const btn = document.getElementById('buttonId');
const modal = document.getElementById('modal');
const container = document.getElementById('container');
const botao = document.getElementById('btn');

botao.addEventListener('click', () => {
    botao.style="display: none;";
})

function createModal(texto) {
    let container = document.createElement('div');
    let modal = document.createElement('div');
    let txt = document.createElement('p');
    let btn = document.createElement('button');
    
    container.setAttribute('id', 'container');
    modal.setAttribute('id', 'modal');
    btn.setAttribute('id', 'buttonId');
    btn.innerHTML = "Clique para fechar";
    container.classList.add('container')
    modal.classList.add('modal');
    
    txt.innerHTML = texto;
    
    container.appendChild(modal);
    modal.appendChild(txt);
    modal.appendChild(btn);
    
    document.body.appendChild(container);    
    
    const elementosFechaveis = [btn, container];
    elementosFechaveis.forEach((item) =>{
        item.addEventListener('click', () => {
            elementosFechaveis[1].remove();
            botao.style="display: block;"
        })
    });
}

