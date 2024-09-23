document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menu-icon');
  var navMenu = document.getElementById('nav-menu');

  menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    menuIcon.classList.toggle('open');
    if (menuIcon.textContent === '☰') {
      menuIcon.textContent = '✖';
    } else {
      menuIcon.textContent = '☰';
    }
  });
});