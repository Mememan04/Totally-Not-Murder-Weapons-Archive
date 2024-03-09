// Variables for all carousels
let currentSlide = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;

// Functions for the first carousel
function showSlide(index) {
    const carousel = document.querySelectorAll('.carousel')[0];
    const slides = carousel.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    carousel.style.transform = `translateX(${-currentSlide * 100 / slides.length}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Functions for the second carousel
function showSlide2(index) {
    const carousel2 = document.querySelectorAll('.carousel')[1];
    const slides2 = carousel2.querySelectorAll('.slide');
    if (index >= slides2.length) {
        currentSlide2 = 0;
    } else if (index < 0) {
        currentSlide2 = slides2.length - 1;
    } else {
        currentSlide2 = index;
    }
    carousel2.style.transform = `translateX(${-currentSlide2 * 100 / slides2.length}%)`;
}

function nextSlide2() {
    showSlide2(currentSlide2 + 1);
}

function prevSlide2() {
    showSlide2(currentSlide2 - 1);
}

// Functions for the third carousel
function showSlide3(index) {
    const carousel3 = document.querySelectorAll('.carousel')[2];
    const slides3 = carousel3.querySelectorAll('.slide');
    if (index >= slides3.length) {
        currentSlide3 = 0;
    } else if (index < 0) {
        currentSlide3 = slides3.length - 1;
    } else {
        currentSlide3 = index;
    }
    carousel3.style.transform = `translateX(${-currentSlide3 * 100 / slides3.length}%)`;
}

function nextSlide3() {
    showSlide3(currentSlide3 + 1);
}

function prevSlide3() {
    showSlide3(currentSlide3 - 1);
}