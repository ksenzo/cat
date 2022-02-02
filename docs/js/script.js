let openMenu = document.querySelector('.open-btn');
let body = document.querySelector('body');
let menu = document.querySelector('.menu-mobile');

openMenu.onclick = function () {
   openMenu.classList.toggle('__active');
   body.classList.toggle('__noscroll');
   menu.classList.toggle('__active');
};