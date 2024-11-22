const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const bemvindo = document.getElementById('bemvindo');
const background = document.getElementById('background');
const content = document.getElementById('content');
const stopScroll = 100; // Adjust this value to change when the background fixes

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= stopScroll) {
        navbar.classList.remove('bg-transparent');
        background.style.position = 'fixed';
        background.style.height = '7%'
        background.style.zIndex = '39'
        bemvindo.style.opacity = '0'
 
    } else {
        navbar.classList.add('bg-transparent');
        background.style.position = 'fixed';
        background.style.top = '0';
    }


});

