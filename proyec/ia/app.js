const slides = document.querySelectorAll('.slide');
const progress = document.getElementById('progress');
let current = 0;

document.getElementById('next').addEventListener('click', () => {
  if (current < slides.length - 1) {
    goTo(current + 1);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    goTo(current - 1);
  }
});

function goTo(index) {
  slides[current].style.left = '-100%';
  slides[index].style.left = '0';
  current = index;
  updateProgress();
}

function updateProgress() {
  const percent = ((current + 1) / slides.length) * 100;
  progress.style.width = percent + '%';
}

// Opcional: navegación por teclado
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
});

// Inicializa barra
updateProgress();