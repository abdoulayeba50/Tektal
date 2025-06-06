document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgerMenu');

  burger.addEventListener('click', function () {
    // Toggle entre visible et caché
    burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
  });
});
