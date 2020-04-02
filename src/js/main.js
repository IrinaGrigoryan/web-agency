// Smooth scroll to navigation
$('.menu a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800, 'linear');
    }
    return false;
});

//Burger menu
$(function() {
    $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu-opened');
    });
});
