// Selección de elementos principales
const slides = document.querySelectorAll('.slide');
const progress = document.getElementById('progress');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
let current = 0;

// Inicializa estilos y eventos
function initSlider() {
  slides.forEach((slide, i) => {
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.left = i === 0 ? '0' : '100%';
    slide.style.transition = 'left 0.5s cubic-bezier(.77,0,.18,1)';
  });
  btnNext.addEventListener('click', () => goTo(current + 1));
  btnPrev.addEventListener('click', () => goTo(current - 1));
  window.addEventListener('keydown', handleKey);
  updateProgress();
}

// Cambia a la diapositiva indicada
function goTo(index) {
  if (index < 0 || index >= slides.length || index === current) return;
  slides[current].style.left = '-100%';
  slides[index].style.left = '0';
  current = index;
  updateProgress();
}

// Actualiza la barra de progreso visual
function updateProgress() {
  const percent = ((current + 1) / slides.length) * 100;
  progress.style.width = percent + '%';
  progress.style.transition = 'width 0.4s cubic-bezier(.77,0,.18,1)';
}

// Navegación por teclado
function handleKey(e) {
  if (e.key === 'ArrowRight') btnNext.click();
  if (e.key === 'ArrowLeft') btnPrev.click();
}

// Inicialización
initSlider();