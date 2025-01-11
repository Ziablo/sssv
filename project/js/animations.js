// Animations des éléments au scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.content-card, .testimonial, .slide-in, .fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

// Animation des boutons
const initButtonAnimations = () => {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
};

// Initialisation des animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateOnScroll();
    initButtonAnimations();
});