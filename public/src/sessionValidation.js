document.addEventListener("DOMContentLoaded", function () {
  validateSession();
});

async function validateSession() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sessionId = localStorage.getItem("session_Id");

  console.log("Session ID: ", sessionId);

  if (!sessionId) {
    redirectToLogin();
    return;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:2000/api/v1/isActive", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        console.log("Response: ", response);

        if (response.ok) {
          window.location.href = link.href;
        } else {
          handleSessionInvalidation();
        }
      } catch (error) {
        console.error("Error verifying session:", error);
        handleSessionInvalidation();
      }
    });
  });
}

function redirectToLogin() {
  window.location.href = "/pages/login.html";
}

function handleSessionInvalidation() {
  localStorage.removeItem("session_Id");
  redirectToLogin();
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
