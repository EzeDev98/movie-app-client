document.addEventListener("DOMContentLoaded", function () {
  const buttons1 = document.querySelectorAll(".showButton1");
  const buttons2 = document.querySelectorAll(".showButton2");

  const sessionId = localStorage.getItem("session_Id");

  if (!sessionId) {
    buttons1.forEach((button) => (button.style.display = "inline-block"));
    buttons2.forEach((button) => (button.style.display = "none"));
  } else {
    buttons2.forEach((button) => (button.style.display = "inline-block"));
    buttons1.forEach((button) => (button.style.display = "none"));
  }
});

export function showLoadingSpinner() {
  const loadingSpinner = document.getElementById("loadingSpinner");
  loadingSpinner.classList.remove("d-none");
}

export function hideLoadingSpinner() {
  const loadingSpinner = document.getElementById("loadingSpinner");
  loadingSpinner.classList.add("d-none");
}

export function displayErrorMessages(messages) {
  const errorText = document.getElementById("error-text");
  const errorMessage = document.getElementById("error-message");

  errorText.innerHTML = messages;
  errorMessage.classList.remove("success");
  errorMessage.classList.add("error");
  errorMessage.style.display = "block";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 10000);
}

export function displaySuccessMessages(messages) {
  const errorText = document.getElementById("error-text");
  const errorMessage = document.getElementById("error-message");

  errorText.innerHTML = messages;
  errorMessage.classList.remove("error");
  errorMessage.classList.add("success");
  errorMessage.style.display = "block";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 10000);
}

export function resetErrorMessages() {
  const errorMessage = document.getElementById("error-message");
  const errorText = document.getElementById("error-text");
  errorMessage.style.display = "none";
  errorText.innerHTML = "";
}

export function setupBurgerMenu() {
  document.getElementById("burger-menu").addEventListener("click", function () {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  });
}

export function isValidPassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasSpecialChar &&
    hasNumber
  );
}

export function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.length === 11 && /^\d+$/.test(phoneNumber);
}