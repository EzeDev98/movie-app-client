import { showLoadingSpinner, hideLoadingSpinner, displayErrorMessages, resetErrorMessages, displaySuccessMessages, } from "./utils.js";

document
  .getElementById("page-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phonenumber = document.getElementById("phonenumber").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = this.querySelector('input[type="submit"]');

    resetErrorMessages();
    submitButton.disabled = true;
    showLoadingSpinner();

    if (!name) {
      displayErrorMessages("Name field cannot be empty");
      submitButton.disabled = false;
      hideLoadingSpinner();
      return;
    }

    if (!email) {
      displayErrorMessages("Email field cannot be empty");
      submitButton.disabled = false;
      hideLoadingSpinner();
      return;
    }

    if (!phonenumber) {
      displayErrorMessages("Phone number field cannot be empty");
      submitButton.disabled = false;
      hideLoadingSpinner();
      return;
    }

    if (!subject) {
      displayErrorMessages("Subject field cannot be empty");
      submitButton.disabled = false;
      hideLoadingSpinner();
      return;
    }

    if (!message) {
      displayErrorMessages("Message field cannot be empty");
      submitButton.disabled = false;
      hideLoadingSpinner();
      return;
    }

    const formData = { name, email, phonenumber, subject, message };

    try {
      const response = await fetch("http://localhost:2000/api/v1/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        displayErrorMessages("Message not sent to admin. Please try again!");
      }

      displaySuccessMessages(
        "Message sent successfully. Thanks for reaching out to us"
      );
    } catch (error) {
      displayErrorMessages(
        error.message || "An error occurred. Please try again later."
      );
    } finally {
      submitButton.disabled = false;
      hideLoadingSpinner();
    }
  });
