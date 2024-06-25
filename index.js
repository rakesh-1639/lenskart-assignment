const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;
let index = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        index = parseInt(event.target.dataset.index);
        updateCarousel();
    });
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

updateCarousel();
