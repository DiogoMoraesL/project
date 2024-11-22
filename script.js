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

lucide.createIcons();


//Vai verificar a página que está, se for a mesma página do botão da navbar irá voltar para o topo suave
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isCurrentPage = href === currentPage || (currentPage === '' && href === 'index.html');
            
            if (isCurrentPage) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, 
                        behavior: 'smooth'
                    });
                }
            } else {
 
                this.href = href + (href.includes('?') ? '&' : '?') + 'scrollTop=true';
            }
        });
    });


    if (window.location.search.includes('scrollTop=true')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const url = new URL(window.location);
        url.searchParams.delete('scrollTop');
        window.history.replaceState({}, '', url);
    }
});