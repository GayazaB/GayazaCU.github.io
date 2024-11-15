// Carousel slider functionality
const slides = document.querySelectorAll('.slides img');
let currentSlide = 0;

// Function to show next slide
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Function to show previous slide
function showPreviousSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Set interval to automatically change slides
setInterval(showNextSlide, 3000);

// Event listeners for manual navigation
document.querySelector('.slider-prev').addEventListener('click', showPreviousSlide);
document.querySelector('.slider-next').addEventListener('click', showNextSlide);

// Initialize first slide
slides[0].classList.add('active');
