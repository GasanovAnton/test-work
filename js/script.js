$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.slider-nav'),
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    dots: false,
                    arrows: false,
                    variableWidth: true
                }
            },
            {
                breakpoint: 815,
                settings: {
                    dots: false,
                    arrows: false,
                    variableWidth: true
                }
            }
        ]
    });
    $('.header__burger').click(function (event) {
        $('.header__burger,.main-menu-wrap').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.recent-posts__slider').slick({
        dots: false,
        prevArrow: $('.recent-posts__nav-prevArrow'),
        nextArrow: $('.recent-posts__nav-nextArrow'),
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1
    });
})



