var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var error = document.getElementById("error");
  
    // Function to handle login form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm("email-login", "password-login");
    });
  
    // Function to handle register form submission
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm("email-register", "password-register");
    });
  
    // Function to validate form fields
    function validateForm(emailId, passwordId) {
      var email = document.getElementById(emailId);
      var password = document.getElementById(passwordId);
  
      // Clear the previous error message
      error.innerHTML = "";
  
      // Validate the input values
      if (email.value.trim() === "") {
        // If the email is empty, show an error message and add the invalid class to the input
        error.innerHTML = "Email is required";
        email.classList.add("invalid");
      } else if (password.value.trim() === "") {
        // If the password is empty, show an error message and add the invalid class to the input
        error.innerHTML = "Password is required";
        password.classList.add("invalid");
      } else {
        // If the input values are valid, remove the invalid class from the inputs
        email.classList.remove("invalid");
        password.classList.remove("invalid");
      }
    }
  });
  