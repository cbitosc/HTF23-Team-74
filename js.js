// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Your login page specific logic here
});

function performLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match a predefined set of credentials
    if (validateCredentials(username, password)) {
        // Successful login
        // Redirect to the home page or perform any other action
        window.location.href = 'put.html';
    } else {
        // Failed login
        const loginError = document.getElementById('loginError');
        loginError.classList.remove('hidden');
    }
}

function validateCredentials(username, password) {
    // Replace these with your actual credentials validation logic
    const validUsername = 'user';
    const validPassword = 'pass';

    return username === validUsername && password === validPassword;
}