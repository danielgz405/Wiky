const   btn_Menu = document.querySelector('#caja'),
        menuContent = document.querySelector('.menu-content');

btn_Menu.addEventListener('click', () =>{
    menuContent.classList.toggle('menu-active');
});