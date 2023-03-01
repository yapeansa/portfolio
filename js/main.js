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

    $('.abrir').on('click', function() {
        $('.menu__mobile').stop().fadeIn('slow');
    });

    $('.fechar').on('click', function() {
        $('.menu__mobile').stop().fadeOut('slow');
    });
});
