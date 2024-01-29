const formValues = document.getElementById('formValues')
let contador = 0
const box = document.querySelector(".carrosel")
const img = document.querySelector(".slides img")
let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.carousel img').length;
  const carousel = document.querySelector('.carousel');

function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${newTransformValue})`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto play
  setInterval(nextSlide, 3000);
