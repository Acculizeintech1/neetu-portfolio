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
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}