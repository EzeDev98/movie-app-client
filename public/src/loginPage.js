document.getElementById("page-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const errorMessage = document.getElementById("error-message");
    const errorText = document.getElementById("error-text");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const submitButton = this.querySelector('input[type="submit"]');

 
    errorMessage.style.display = "none";
    errorText.innerHTML = '';
    submitButton.disabled = true;

    if (!username) {
        displayErrorMessages("Username field cannot be empty");
        submitButton.disabled = false;
        return;
    }

    if (!password) {
        displayErrorMessages("Password field cannot be empty");
        submitButton.disabled = false;
        return;
    }

    const formData = { username, password };

    fetch("http://localhost:2000/api/v1/login-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        console.log("Raw Response from server: ", response);

        if (response.ok) {
            window.location.href = '../index.html';
            return response.json();
        } else {
            const data = await response.json();
            displayErrorMessages(data.messages || "Login failed!");
            submitButton.disabled = false;
        }
    })
    .catch(error => {
        console.error("Error: ", error);
        displayErrorMessages("An unexpected error occurred. Login failed");
        submitButton.disabled = false;
    });
});

function displayErrorMessages(messages) {
    const errorText = document.getElementById("error-text");
    const errorMessage = document.getElementById("error-message");
    errorText.innerHTML = messages;
    errorMessage.style.display = 'block';
}



// const form = document.getElementById("page-form");
// const errorMessage = document.getElementById("error-message");
// const errorText = document.getElementById("error-text");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     errorMessage.style.display = "none";
//     errorText.innerHTML = '';

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Use empty string check instead of null
//     if (username === "") {
//         displayErrorMessages("Username field cannot be empty");
//         return;
//     }

//     if (password === "") {
//         displayErrorMessages("Password field cannot be empty");
//         return;
//     }

//     const formData = {
//         username: username,
//         password: password,
//     };

//     // Log formData for debugging
//     console.log("Form Data Sent: ", formData);

//     fetch("http://localhost:2000/api/v1/login-user", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(async response => {
//         console.log("Raw Response from server: ", response);

//         // response.ok checks for 2xx status codes
//         if (response.ok) {
//             window.location.href = '/pages/index.html';
//             return response.json();
//         } else {
//             // Handle error response and display messages
//             const data = await response.json();
//             displayErrorMessages(data.messages || "Login failed!");
//         }
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//         displayErrorMessages("An unexpected error occurred. Login failed");
//     });
// });

// // Function to display error messages
// function displayErrorMessages(messages) {
//     errorText.innerHTML = messages;
//     errorMessage.style.display = 'block';
// }
