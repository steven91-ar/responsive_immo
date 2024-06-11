let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
});

window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menu.classList.remove('fa-times');
    }
});