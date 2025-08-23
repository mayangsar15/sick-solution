document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = this.href;
    }, 300);
  });
});

window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});
