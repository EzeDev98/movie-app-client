import { showLoadingSpinner, hideLoadingSpinner, displayErrorMessages, resetErrorMessages, setupBurgerMenu } from './utils.js';

document.getElementById("page-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const submitButton = this.querySelector('input[type="submit"]');

    resetErrorMessages();
    submitButton.disabled = true;

    showLoadingSpinner();

    if (!email) {
        displayErrorMessages("Username field cannot be empty");
        submitButton.disabled = false;
        hideLoadingSpinner(); 
        return;
    }

    if (!password) {
        displayErrorMessages("Password field cannot be empty");
        submitButton.disabled = false;
        hideLoadingSpinner(); 
        return;
    }

    const formData = { email, password };

    fetch("http://localhost:2000/api/v1/login-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        console.log("Raw Response from server: ", response);

        const data = await response.json();

        console.log("Payload: ", data);

        if (!response.ok) {
            displayErrorMessages(data.message || "Login failed, please try again");
            submitButton.disabled = false;
            return;
        } else {

            localStorage.setItem("token", data.token);
            localStorage.setItem("session_Id", data.sessionId);
            localStorage.setItem("email", data.email);

            window.location.href = '../index.html';
        }
    })
    .catch(error => {
        console.error("Error: ", error);
        displayErrorMessages("An unexpected error occurred. Login failed");
        submitButton.disabled = false;
    })
    .finally(() => {
        hideLoadingSpinner();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function () {
        
            const inputContainer = button.closest('.input-box');
            const passwordInput = inputContainer.querySelector('input');
            const icon = button.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }

        });
    });
});


