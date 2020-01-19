/*jQuery('document').ready(function($)
{
    var menuBtn= $('.hamburguer-icon');
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
    });

});*/

window.addEventListener('load', () =>
{
    let menuBtn = document.querySelector('.hamburguer-icon');
    let menu = document.querySelector('.navigation ul');

    menuBtn.addEventListener('click', () =>
    {
        if(menu.classList.contains('show'))
        {
            menu.classList.remove('show');
        }
        else
        {
            menu.classList.add('show');
        }
    });
});

