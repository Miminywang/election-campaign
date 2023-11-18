document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.ham-icon');
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
  });
});