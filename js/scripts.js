let menu__item_a_active_function  = function()
{
    //Get item siblings
    let siblings =($(this).siblings());

    //Remove active class on all buttons
    siblings.each(function (index)
        {
            $(this).removeClass('menu__item_a-active');
        }
    )


    //Add the clicked button class
    $(this).addClass('menu__item_a-active');
}

//Attach events to menu
$(document).ready(
    function()
    {
        $(".menu li").click(menu__item_a_active_function);
    }
);
/*/!*Slider*!/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);

};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("authors__bt");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" authors__bt_selected", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " authors__bt_selected";
};*/
/*Menu*/
jQuery(document).ready(function($){
    /* Меню */
    $('ul.menu a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        $('ul.menu a[href^="#"]').css({'color':'#212121'});
        $(this).css({'color':'#004bee'});

        return false;
    });
    /*  Menu*/

    /*Button to Top*/
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });


    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column'
        })
        if ($(".menu-icon").html() == '<i class="fas fa-bars" aria-hidden="true"></i>') {
            $(this).html("<i class='fas fa-times'></i>");

        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });
});
$(document).ready(function(){
    $('.sliders').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: 'dots-style'
});
});







