document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quoteform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);
    var formDataItem = document.getElementById('quoteform').elements;

    
    fetch('/UserQuoteSubmitted', {
      method: 'POST',
      body: formData,
    }).then(response => response.json())
      .then(data => {
      if (data.message) {
        // Show a notification
        alert(data.message);
        console.log("FormDataItem stuff:");
        console.log(formDataItem);
        console.log(data.message);
        //window.location.href = '/'; // Redirect to the homepage
      } else {
        console.error('Form submission failed');
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  });
});