
export default function initDropDownMenu() {
    
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
    menu.addEventListener('click', handleClick);
    menu.addEventListener('touchstart', handleClick);
})

function handleClick(event) {
    event.preventDefault();
    console.log(event);
    this.classList.toggle('active')
}