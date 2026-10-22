document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            // Toggle between bars and close icon
            if (navLinks.classList.contains('active')) {
                menuBtn.classList.remove('fa-bars');
                menuBtn.classList.add('fa-xmark');
            } else {
                menuBtn.classList.remove('fa-xmark');
                menuBtn.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking any navigation link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuBtn) {
                    menuBtn.classList.remove('fa-xmark');
                    menuBtn.classList.add('fa-bars');
                }
            }
        });
    });

    // Close mobile menu when clicking anywhere outside the navbar
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && e.target !== menuBtn) {
                navLinks.classList.remove('active');
                if (menuBtn) {
                    menuBtn.classList.remove('fa-xmark');
                    menuBtn.classList.add('fa-bars');
                }
            }
        }
    });

    // --- 2. Scroll Spy (Highlight active section in navbar) ---
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- 3. Contact Form Submission Handler ---
    const contactForm = document.querySelector('.contact-box');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = contactForm.querySelector('input[type="email"]');
            const userEmail = emailInput.value.trim();

            if (userEmail !== '') {
                alert(`Thank you! Your message from ${userEmail} was sent successfully.`);
                emailInput.value = '';
            }
        });
    }

});
