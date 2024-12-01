document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();



    // Validate username (letters only)
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById('usernameerror');

    if (!/^[a-zA-Z]+$/.test(username)) {
        document.getElementById("usernameError").textContent = "Username must contain letters only.";
        document.getElementById("usernameError").style.display = "block";
        valid = false;
    }
 // Phone Number Validation
 const phone = document.getElementById('phone');
 const phoneError = document.getElementById('phoneError');
 phone.value = phone.value.replace(/[^0-9]/g, ''); // Restrict to numbers only
 if (phone.value === "") {
     isValid = false;
     phoneError.textContent = "Phone number is required";
 } else if (phone.value.length < 10) {
     isValid = false;
     phoneError.textContent = "Phone number must be at least 10 digits";
 } else {
     phoneError.textContent = "";
 }

    // Clear previous errors
    document.querySelectorAll(".error").forEach(error => error.style.display = "none");

    let valid = true;

   
    // Validate email (must contain @gmail.com)
    const email = document.getElementById("email").value;
    if (!email.endsWith("@gmail.com")) {
        document.getElementById("emailError").textContent = "Email must end with @gmail.com.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    // Validate password (8-10 chars, 1 capital, 1 symbol)
    const password = document.getElementById("password").value;
    if (!/^(?=.*[A-Z])(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,10}$/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be 8-10 characters long, include 1 uppercase letter, and 1 symbol (!@#$&*).";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    // Validate confirm password (must match password)
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

