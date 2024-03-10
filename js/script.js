

const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
hamburgerWrapper.addEventListener('click', () => {
    hamburgerWrapper.classList.toggle('active');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


