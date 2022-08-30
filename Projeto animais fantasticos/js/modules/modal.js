let btnLogin = document.getElementById('abrir-modal');
let modal = document.querySelector('.modal-container');
let btnFecharModal = document.querySelector('.fechar');

export default function abrirModal() {
    /* Botão do login, que abre o modal */
    btnLogin.addEventListener('click', (e) => {
        modal.classList.toggle('ativo');
        e.preventDefault();
    })
    /* Botão 'x' que fecha o modal */
    btnFecharModal.addEventListener('click', () => {
        modal.classList.toggle('ativo');
    })
    /* Ao clicar fora do modal, ele também fecha o modal */
    modal.addEventListener('click', () => {
        modal.classList.toggle('ativo');
    })
}