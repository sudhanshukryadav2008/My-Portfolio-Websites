document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.onclick = function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuBtn.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menuBtn.classList.replace('fa-xmark', 'fa-bars');
            }
        };

        // Close menu when clicking any link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.onclick = function() {
                navLinks.classList.remove('active');
                menuBtn.classList.replace('fa-xmark', 'fa-bars');
            };
        });

        // Close menu when clicking outside
        document.onclick = function(e) {
            if (!navLinks.contains(e.target) && e.target !== menuBtn) {
                navLinks.classList.remove('active');
                menuBtn.classList.replace('fa-xmark', 'fa-bars');
            }
        };
    }

    // --- 2. Scroll Spy (Highlight active section) ---
    const sections = document.querySelectorAll('section');
    const allLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        allLinks.forEach(link => {
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
