document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Contact Form Handler
    const contactForm = document.querySelector('.contact-box');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = contactForm.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim() !== '') {
                alert(`Thank you! Message from ${emailInput.value} received.`);
                emailInput.value = '';
            }
        });
    }

});
