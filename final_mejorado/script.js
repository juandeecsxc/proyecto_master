function expandImage(img) {
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');
  overlayImg.src = img.src;
  overlay.style.display = 'flex';
}

function closeImage() {
  document.getElementById('overlay').style.display = 'none';
}

function toggleResumen(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Scroll para resaltar el menú activo
window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});
