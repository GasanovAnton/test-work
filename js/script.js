$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        centerMode: true,   
        appendDots:$('.slider-nav'),
        prevArrow:$('.prevArrow'),
        nextArrow:$('.nextArrow'),
    });
})