// Fading links
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    // Cek kalau link bukan tombol toggle
    if (!this.classList.contains('menu-toggle')) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    }
  });
});

// Page load fade-in
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});

// Toggle nav
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav-ul');

toggle.addEventListener('click', (e) => {
  e.stopPropagation(); // pastikan tidak tertangkap event bubbling
  menu.classList.toggle('active');
});
