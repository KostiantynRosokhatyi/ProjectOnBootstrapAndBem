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