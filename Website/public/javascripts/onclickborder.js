document.addEventListener('DOMContentLoaded', function() {
  function enableBorder(link) {
    link.style.border = `2px solid rgb(0, 191, 255)`
  }
  function disableBorder(link) {
    link.style.border = ``
  }

  var productsDropDown = document.getElementById('productsdropdown');
  var aboutDropDown = document.getElementById('aboutsdropdown');
  var learningcenterDropDown = document.getElementById('learningcenterdropdown')

  var links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      enableBorder(link);
      setTimeout(() => {
        disableBorder(link);
      }, 500);
    });
  });

  productsDropDown.addEventListener('click', function() {
    enableBorder(productsDropDown);
  });

  aboutDropDown.addEventListener('click', function() {
    enableBorder(aboutDropDown);
  });

  learningcenterDropDown.addEventListener('click', function() {
    enableBorder(learningcenterDropDown);
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!productsDropDown.contains(event.target)) {
      disableBorder(productsDropDown);
    }

    if (!aboutDropDown.contains(event.target)) {
      disableBorder(aboutDropDown);
    }

    if (!learningcenterDropDown.contains(event.target)) {
      disableBorder(learningcenterDropDown);
    }
  });
});