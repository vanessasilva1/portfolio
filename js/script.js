let menuIcone = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuIcone.onclick = () => {
    menuIcone.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


// remove toggle icon and navbar

menuIcone.classList.remove('bx-x');
navbar.classList.remove('active');