const open = document.getElementById('open__menu');
const close = document.getElementById('close__menu');
const menu = document.getElementById('menu__m');

open.addEventListener('click', () => {
    menu.style.display = 'block';
});

close.addEventListener('click', function() {
    menu.classList.add('sumir_menu');
    setTimeout(removeClasseMenu, 1000);
    setTimeout(sumirMenu, 1000);
});

function removeClasseMenu() {
    menu.classList.remove('sumir_menu');
}

function sumirMenu() {
    menu.style.display = 'none';
}
