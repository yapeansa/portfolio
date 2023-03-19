const menu = document.querySelector('#menu__m');
const navegacao = document.getElementsByTagName('nav');

// Criando o elemento botão abrir do menu responsivo

const elementoAbrir = document.createElement('div');
elementoAbrir.classList.add('open');
elementoAbrir.id = 'open__menu';
navegacao[0].appendChild(elementoAbrir);

for (let i = 0; i < 3; i++)
    elementoAbrir.innerHTML += '<div class="open-line"></div>';

// Criando o elemento botão fechar do menu responsivo

const menuResponsivo = document.getElementById('m_responsivo');
const elementoFechar = document.createElement('div');
elementoFechar.classList.add('close');
elementoFechar.id = 'close__menu';
menuResponsivo.prepend(elementoFechar);

for (let j = 0; j < 2; j++)
    elementoFechar.innerHTML += '<div class="close-line"></div>';

// Pegando os botões pelo id e inserindo as ações de clique/toque

const open = document.querySelector('#open__menu');
const close = document.querySelector('#close__menu');

open.addEventListener('click', () => menu.style.display = 'block');

close.addEventListener('click', () => {
    menu.classList.add('sumir_menu');
    setTimeout(removeClasseMenu, 600);
    setTimeout(sumirMenu, 600);
});

function removeClasseMenu () { menu.classList.remove('sumir_menu') }

function sumirMenu () { menu.style.display = 'none' }
