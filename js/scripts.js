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
)
/*Slider*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);

}

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
}