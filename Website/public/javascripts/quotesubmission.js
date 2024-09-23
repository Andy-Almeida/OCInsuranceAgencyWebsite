//const { response } = require("../../app");

console.log("Hello World");

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quoteform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show a notification
    alert('Form submitted successfully!');

    // Optionally, you can submit the form using AJAX if you want to handle the response without reloading the page
    var formData = new FormData(this);
    fetch('/UserQuoteSubmitted', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  });
});