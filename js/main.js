$(document).ready(function(){

    $(window).on('scroll', function(){
        const altura = screen.availHeight - 100
        if($(this).scrollTop() > altura){
            $('.botao__topo').fadeIn('slow')
        }
        else {
            $('.botao__topo').fadeOut('slow')
        }
    });

    $('.abrir').on('click', function(){
        $('.menu__mobile').stop().fadeIn('slow')
    });

    $('.fechar').on('click', function(){
        $('.menu__mobile').stop().fadeOut('slow')
    });

    $('#nome, #email, #mensagem').on('focus', function(){
        $(this).attr('placeholder', '');
    });

    $('#nome').on('blur', function(){
        $(this).attr('placeholder', 'Digite seu nome aqui...');
    });

    $('#email').on('blur', function(){
        $(this).attr('placeholder', 'Digite seu e-mail aqui...');
    });

    $('#mensagem').on('blur', function(){
        $(this).attr('placeholder', 'Digite sua mensagem aqui...');
    });

});
