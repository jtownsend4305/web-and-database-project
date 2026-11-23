// user.js - Handles Registration and Login form submissions

// 1. Registration Form Handling
const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        // Prevent default form submission reload behavior
        event.preventDefault();

        // Retrieve input values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create a new User object
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        // Print the object to the browser console
        console.log('Registration Object Created:', user);
    });
}

// 2. Login Form Handling
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        // Prevent default form submission reload behavior
        event.preventDefault();

        // Retrieve input values
        const userLogin = document.getElementById('user-login').value;
        const loginPassword = document.getElementById('login-password').value;

        // Create a Login object
        const loginCredentials = {
            usernameOrEmail: userLogin,
            password: loginPassword
        };

        // Print the object to the browser console
        console.log('Login Object Created:', loginCredentials);
    });
}