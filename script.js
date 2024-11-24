const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const bemvindo = document.getElementById('bemvindo');
const background = document.getElementById('background');
const sobreMim = document.getElementById('sobreMim');
const foto = document.getElementById('foto');
const cards = document.getElementById('cards');

const stopScroll = 100; 

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

//Animação da introdução/background.
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= stopScroll) {

        background.style.position = 'fixed';
        background.style.height = '64px'
        background.style.zIndex = '39'
        background.style.transitionDuration = '600ms'
        bemvindo.style.opacity = '0'
        cards.style.opacity = '100'
        cards.style.transitionDuration = '600ms'
        foto.style.opacity = '100'
        foto.style.transitionDuration = '600ms'
        lucide.createIcons();
 
    } else {

        background.style.position = 'absolute';
        background.style.top = '0';
        background.style.height = '70%'
        bemvindo.style.opacity = '100'
        cards.style.opacity = '0'
        foto.style.opacity = '0'

    }

    const maxDistance = 100; // Distância máxima em pixels
    const distance = Math.min(scrollPosition / 2, maxDistance);
    sobreMim.style.transform = `translateY(${distance}px)`;

    
});


if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
} else {
    console.log('Lucide icons não carregados corretamente.');
}
