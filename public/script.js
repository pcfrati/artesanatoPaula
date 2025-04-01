let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.product-cards');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}px)`;
}
