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
    linksContainer.classList.add('show-links');
});
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
