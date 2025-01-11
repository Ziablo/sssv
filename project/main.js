// Barre de progression
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
}

// Animation au défilement (dans les deux sens)
function handleScroll() {
    const elements = document.querySelectorAll('.content-card, .testimonial');
    const scrollDirection = this.oldScroll > window.pageYOffset ? 'up' : 'down';
    this.oldScroll = window.pageYOffset;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
            // Animation différente selon la direction
            element.style.animation = scrollDirection === 'up' ? 
                'floatDown 0.6s ease forwards' : 
                'floatUp 0.6s ease forwards';
        } else {
            element.classList.remove('visible');
        }
    });
}

// Initialisation
window.oldScroll = window.pageYOffset;
window.addEventListener('scroll', () => {
    updateProgressBar();
    handleScroll();
});

// Autres événements et animations existants...

// Effet de parallaxe amélioré
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const opacity = 1 - (scrolled / hero.offsetHeight);
    hero.style.opacity = Math.max(opacity, 0);
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});