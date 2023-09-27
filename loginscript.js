document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".btn");
    
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      window.location.href = "index.html"; // Redirect to index.html
    });
  });
  