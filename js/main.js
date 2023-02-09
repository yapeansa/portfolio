$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(this).scrollTop() > screen.availHeight){
            $('.botao__topo').fadeIn('slow');
        }
        else {
            $('.botao__topo').fadeOut('slow');
        }
    });
    $('.abrir').on('click', function(){
        $('.menu__mobile').stop().fadeIn('slow');
    });
    $('.fechar').on('click', function(){
        $('.menu__mobile').stop().fadeOut('slow');
    })
});
