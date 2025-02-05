import { showLoadingSpinner, hideLoadingSpinner, displayErrorMessages, resetErrorMessages, setupBurgerMenu } from './utils.js';

const form = document.getElementById("page-form");
const errorMessage = document.getElementById("error-message");
const errorText = document.getElementById("error-text");
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    resetErrorMessages();

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;   

    submitButton.disabled = true;
    showLoadingSpinner(); 

    if (password !== confirmPassword) {
        displayErrorMessages("Passwords do not match");
        submitButton.disabled = false;
        hideLoadingSpinner();
        return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        displayErrorMessages("Invalid phone number. Phone number should be exactly 11 digits.");
        submitButton.disabled = false;
        hideLoadingSpinner(); 
        return;
    }

    if (!isValidPassword(password)) {
        displayErrorMessages("Password must contain at least 8 characters, including uppercase, lowercase, special characters and a number.");
        submitButton.disabled = false;
        hideLoadingSpinner();
        return;
    }

    const formData = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        phone_number: phoneNumber,
        password: password,
        confirm_password: confirmPassword,
    };

    fetch('http://localhost:2000/api/v1/register-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async response => {

        console.log("Raw Response from server: ", response);

        const data = await response.json();

        console.log("Raw response text:", data);

        if (!response.ok) {
            
            displayErrorMessages(data.message || "Registration failed, please try again");
            submitButton.disabled=false;
            return
        } else {
            window.location.href = '/pages/activate.html';
        }
    })
    .catch(error => {
        console.error("Error: ", error);
        displayErrorMessages(error.message || "An unknown error occurred.");
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
