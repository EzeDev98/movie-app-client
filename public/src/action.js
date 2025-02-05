import { showLoadingSpinner, hideLoadingSpinner, displayErrorMessages, resetErrorMessages, displaySuccessMessages } from './utils.js';

function setupSubscriptionForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const subscriptionForm = document.getElementById("subscription_email");
    if (!subscriptionForm) {
      console.error("Element with ID 'subscription_email' not found!");
      return;
    }

    subscriptionForm.addEventListener("click", async function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();

      resetErrorMessages();
      showLoadingSpinner();

      if (!email) {
        displayErrorMessages("Please log in to subscribe.");
        hideLoadingSpinner();
        return;
      }

      const formData = { email };

      try {
        const response = await fetch(
          "http://localhost:2000/api/v1/send-subscription-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          displayErrorMessages("Message not sent to admin. Please try again!");
        } 

        displaySuccessMessages("Message sent successfully. Thanks for reaching out to us");
      } catch (error) {
        displayErrorMessages(error.message || "An error occurred. Please try again later.");
      } finally {
        hideLoadingSpinner();
      }
    });
  });
}

setupSubscriptionForm();
