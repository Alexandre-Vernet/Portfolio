document.querySelector('#current-year').innerHTML = '' + new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

const hideHamburger = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
}