const open = document.getElementById('open__menu');
const close = document.getElementById('close__menu');
const menu = document.getElementById('menu__m');

open.addEventListener('click', () => {
    menu.style.display = 'block';
});

close.addEventListener('click', () => {
    menu.classList.add('sumir_menu');
    setTimeout(removeClasseMenu, 600);
    setTimeout(sumirMenu, 600);
});

const removeClasseMenu = () => menu.classList.remove('sumir_menu');

const sumirMenu = () => menu.style.display = 'none';
