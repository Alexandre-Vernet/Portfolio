document.querySelector('#current-year').innerHTML = '' + new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});


const hideHamburger = () => {
    navMenu.classList.toggle('show');

}