jQuery('document').ready(function($)
{
    /*var menuBtn= $('.hamburguer-icon');
    var menu = $('.navigation ul');

    menuBtn.click(function()
    {
        if(menu.hasClass('show'))
        {
            menu.removeClass('show');
        }
        else
        {
            menu.addClass('show');
        }
    });*/

    $(window).scroll(function()
    {
        if($(this).scrollTop() > 0)
        {
            $('header').addClass('header2');
        }
        else
        {
            $('header').removeClass('header2');
        }
    });

});

window.addEventListener('load', () =>
{
    let menuBtn = document.querySelector('.hamburguer-icon');
    let menuBtnIcon = document.querySelector('.hamburguer-icon img');
    let menu = document.querySelector('.navigation ul');


    menuBtn.addEventListener('click', () =>
    {
        if(menu.classList.contains('show'))
        {
            menu.classList.remove('show');
            menuBtnIcon.setAttribute('src', 'img/ico/hamburger-icon.ico');
        }
        else
        {
            menu.classList.add('show');
            menuBtnIcon.setAttribute('src', 'img/ico/x-icon.ico');
        }
    });

});

