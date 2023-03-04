$(function() {
    $('.open').on('click', function() {
        $('.menu__mobile').stop().fadeIn('slow');
    });

    $('.close').on('click', function() {
        $('.menu__mobile').stop().fadeOut('slow');
    });
});