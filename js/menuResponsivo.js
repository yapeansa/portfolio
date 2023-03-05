// $(function() {
//     // $('.open').on('click', function() {
//     //     $('.menu__mobile').stop().fadeIn('slow');
//     // });

//     // $('.close').on('click', function() {
//     //     $('.menu__mobile').stop().fadeOut('slow');
//     // });
// });

const open = document.getElementById('open__menu');
const close = document.getElementById('close__menu');
const menu = document.getElementById('menu__m');

open.addEventListener('click', () => {
    menu.style.display = 'block';
});

function hide() { menu.style.display = 'none'; }

function remClasse() { menu.classList.remove('fade-out'); }

close.addEventListener('click', function() {
    menu.classList.add('fade-out');
    setTimeout(remClasse, 1000);
    setTimeout(hide, 1000);
});
