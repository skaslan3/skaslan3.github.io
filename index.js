// Selecteer het menu-icoon en de navigatiebalk
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Voeg een klik-event toe aan het menu-icoon
menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark'); // Verander het icoon (bijv. van een hamburger-menu naar een sluit-icoon)
    navbar.classList.toggle('active'); // Toon of verberg de navigatiebalk
};

// Selecteer alle secties en navigatielinks
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Wanneer er gescrolld wordt
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Maak de header "sticky" als je verder dan 100px scrolt

    // Loop door alle secties om de actieve link in het menu te bepalen
    sections.forEach(sec => {
        let top = window.scrollY; // Hoe ver er naar beneden is gescrold
        let offset = sec.offsetTop - 150; // De afstand van de sectie ten opzichte van de bovenkant van de pagina
        let height = sec.offsetHeight; // De hoogte van de sectie
        let id = sec.getAttribute('id'); // Haal het ID van de sectie op

        // Controleer of de gebruiker in een bepaalde sectie is
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active'); // Verwijder 'active' van alle links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Voeg 'active' toe aan de juiste link
            });
        }
    });
};

// ScrollReveal animatie-instellingen
ScrollReveal({
    distance: '80px', // Hoe ver de elementen bewegen tijdens de animatie
    duration: 2000,   // Duur van de animatie in milliseconden
    delay: 200,       // Vertraging voordat de animatie start
});

// Bepaal uit welke richting elementen in beeld verschijnen
ScrollReveal().reveal('.home-content, heading', { origin: 'top' }); // Vanaf boven
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .Contact form', { origin: 'bottom' }); // Vanaf onder
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' }); // Vanaf links
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' }); // Vanaf rechts

// Typed.js initialisatie voor automatisch typende tekst
const typed = new Typed('.multiple-text', {
    strings: ['Front End Developer', 'Web Designer', 'Back End Developer'], // De tekst die automatisch getypt wordt
    typeSpeed: 70,   // Snelheid van typen
    backSpeed: 70,   // Snelheid van backspace
    backDelay: 1000, // Wacht 1 seconde voordat de tekst wordt gewist
    loop: true       // Herhaal de animatie oneindig
});
