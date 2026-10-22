document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-xmark');
        });
    }

    // Close mobile menu when clicking any link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuBtn) {
                    menuBtn.classList.remove('fa-xmark');
                }
            }
        });
    });

    // --- 2. Scroll Spy (Highlight active section) ---
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

    // --- 3. Floating Navbar Shadow Effect ---
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // --- 4. Contact Form Submission Handler ---
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
