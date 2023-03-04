$(document).ready(function() {
    
    // $(window).on('scroll', function() {
    //     const altura = screen.availHeight - 100;
    //     if ($(this).scrollTop() > altura) {
    //         $('.botao__topo').fadeIn('slow');
    //     }
    //     else {
    //         $('.botao__topo').fadeOut('slow');
    //     }
    // });
    
    $('.open').on('click', function() {
        $('.menu__mobile').stop().fadeIn('slow');
    });

    $('.close').on('click', function() {
        $('.menu__mobile').stop().fadeOut('slow');
    });

});

const botao = document.getElementById('to-top');
const altura = screen.availHeight - 110;

document.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > altura) {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(aparecer, 100);
    } else {
        botao.classList.add('fade-out');
        setTimeout(removeClasse, 300);
        setTimeout(desaparecer, 300);
    }
});

function aparecer() {
    botao.style.display = 'block';
}

function removeClasse() {
    botao.classList.remove('fade-out');
}

function desaparecer() {
    botao.style.display = 'none';
}
