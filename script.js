// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    });
});

// Highlight actieve sectie
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

    // Functie om tekst te kopiëren
    function copyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    // Functie om de gekopieerd-melding te tonen
    function showCopiedMessage(element) {
        const message = element.querySelector('.copied-message');
        message.classList.add('visible');
        setTimeout(() => {
            message.classList.remove('visible');
        }, 2000);
    }

    // Voeg event listeners toe aan de e-mail en telefoonnummer
    document.querySelector('.email').addEventListener('click', function() {
        copyText('chaudryhussain13@gmail.com');
        showCopiedMessage(this);
    });

    document.querySelector('.phone').addEventListener('click', function() {
        copyText('+31 6 40 37 98 37');
        showCopiedMessage(this);
    });
    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', function () {
            let currentSection = '';
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 500; // Verlaag de waarde voor een eerdere activering
                const sectionBottom = sectionTop + section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSection = section.getAttribute('id');
                }
            });
    
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        });
    });
    