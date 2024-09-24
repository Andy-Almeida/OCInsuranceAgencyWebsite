document.addEventListener('DOMContentLoaded', function() {
  // Nav Menu Hamburger
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

  // Dropdowns
  function toggleDropdown(dropdown, menu) {
    const rect = dropdown.getBoundingClientRect();
    menu.classList.toggle('show');
    dropdown.querySelector('.dropdownarrow').classList.toggle('rotate');
  } 

  var productsDropDown = document.getElementById('productsdropdown');
  var productsDropDownMenu = document.getElementById('products');
  var aboutDropDown = document.getElementById('aboutsdropdown');
  var aboutDropDownMenu = document.getElementById('abouts');
  var learningcenterDropDown = document.getElementById('learningcenterdropdown')
  var learningcenterDropDownMenu = document.getElementById('learningcenter')

  productsDropDown.addEventListener('click', function() {
    toggleDropdown(productsDropDown, productsDropDownMenu);
  });

  aboutDropDown.addEventListener('click', function() {
    toggleDropdown(aboutDropDown, aboutDropDownMenu);
  });

  learningcenterDropDown.addEventListener('click', function() {
    toggleDropdown(learningcenterDropDown, learningcenterDropDownMenu);
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!productsDropDown.contains(event.target) && !productsDropDownMenu.contains(event.target)) {
      productsDropDownMenu.classList.remove('show');
      productsDropDown.querySelector('.dropdownarrow').classList.remove('rotate');
    }

    if (!aboutDropDown.contains(event.target) && !aboutDropDownMenu.contains(event.target)) {
      aboutDropDownMenu.classList.remove('show');
      aboutDropDown.querySelector('.dropdownarrow').classList.remove('rotate');
    }

    if (!learningcenterDropDown.contains(event.target) && !learningcenterDropDownMenu.contains(event.target)) {
      learningcenterDropDownMenu.classList.remove('show');
      learningcenterDropDown.querySelector('.dropdownarrow').classList.remove('rotate');
    }
  });
});