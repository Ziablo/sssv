// Gestion du menu de navigation
const initNavbar = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
};

// Animation des icônes
const initIconAnimations = () => {
    const icons = document.querySelectorAll('.content-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initIconAnimations();
});