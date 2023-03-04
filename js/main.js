$(document).ready(function() {
    
    $(window).on('scroll', function() {
        const altura = screen.availHeight - 100;
        if ($(this).scrollTop() > altura) {
            $('.botao__topo').fadeIn('slow');
        }
        else {
            $('.botao__topo').fadeOut('slow');
        }
    });
    
    $('.open').on('click', function() {
        $('.menu__mobile').stop().fadeIn('slow');
    });

    $('.close').on('click', function() {
        $('.menu__mobile').stop().fadeOut('slow');
    });

});

// const botao = document.getElementById('to-top');

// window.addEventListener('scroll', function(e) {
//     console.log(e);
//     if (document.documentElement.scrollTop > screen.availHeight) {
//         botao.style.display = 'block';
//     }
//     else {
//         botao.classList.add('desaparecer');
//         setTimeout(removerClasse, 2000);
//         setTimeout(desaparecerSuave, 2000);
//     }
// });

// function desaparecerSuave() {
//     botao.style.display = 'none';
// }

// function removerClasse() {
//     botao.classList.remove('desaparecer');
// }