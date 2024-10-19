// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// seleziono la data dal DOM
const date = document.getElementById('date');
// imposto la data dinamicamente 
date.innerHTML = new Date().getFullYear();
// ********** close links ************
// seleziono gli elementi del DOM necessari alla chiususra e apertura della navbar
const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelector('.links');

const linksContainer = document.querySelector('.links-container');

// aggancio un ascoltatore di eventi al pulsante per aprire e chiudere la navbar
navToggle.addEventListener('click', () => {
    // uso il metodo toggle per aggiungere o togliere una classe
    // linksContainer.classList.add('show-links');
    // uso un metodo per avere l'altezza del contenitore dei link
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // uso lo stesso metodo per avere l'altezza dei link
    const linksHeight = navLinks.getBoundingClientRect().height;
    // stabilisco la condizione per controllare dinamicamente l'altezza del contenitore dei link
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
// ********** fixed navbar ************
// seleziono la navbar
const navbar = document.getElementById('nav');
// seleziono il link che riporta in cima alla pagina
const topLink = document.querySelector('.top-link');
// aggancio un ascoltatore di eventi alla finestra
window.addEventListener('scroll', () => {
    // dichiaro una variabile che contenga l'altezza della pagina già scorsa
    const scrollHeight = window.pageYOffset;
    // dichiaro una variabile per l'altezza della navbar
    const navHeight = navbar.getBoundingClientRect().height;
    // stabilisco le condizioni per attribuire la classe al nav
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    };
    // stabilisco la condizione per mostrare il link che manda in cima alla pagina
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    };
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

// itero su ogni link

scrollLinks.forEach(scrollLink => {
    // aggancio un ascoltatore di eventi a ogni link
    scrollLink.addEventListener('click', e => {
        // uso l'evento per impedire il comportamento normale
        e.preventDefault();
        // salvo l'href di ogni link in una variabile
        const id = e.currentTarget.getAttribute('href').slice(1);
        // uso questo id per selezionare i link
        const element = document.getElementById(id);
    })
})