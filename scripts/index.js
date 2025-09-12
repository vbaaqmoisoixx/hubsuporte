const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const slides = document.querySelectorAll(".carouselSlide");

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

/* =============================== */
