let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    let offset = -currentSlideIndex * 100;
    document.querySelector('.slider').style.transform = 'translateX(' + offset + 'vw)';
}

function startSlider() {
    setInterval(function () {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    updateSlider();
    startSlider();
});
// var currentSlideIndex1 = 0;
// var slides1 = document.querySelectorAll('.about-card');
// var interval1 = 3000; // Change slide every 3 seconds

// function nextSlide1() {
//     currentSlideIndex1++;
//     updateSlider1();
// }

// function updateSlider1() {
//     if (currentSlideIndex1 >= slides1.length) {
//         currentSlideIndex1 = 0;
//     }
//     var slideWidth = slides1[0].clientWidth;
//     var offset = -slideWidth * currentSlideIndex1;
//     document.querySelector('.about-in').style.transform = 'translateX(' + offset + 'px)';
// }

// function startSlider() {
//     setInterval(function () {
//         nextSlide1();
//     }, interval);
// }

// startSlider();