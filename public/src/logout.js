document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById("logoutLink");

    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();

            const sessionId = localStorage.getItem('session_Id');
            if (!sessionId) {
                console.error('Session ID not found');
                window.location.href = "/pages/login.html";
                return;
            }

            fetch('http://localhost:2000/api/v1/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sessionId }),
            })
            .then( response => {
                if (response.ok) {
                    console.log('Logout successful');

                    localStorage.removeItem('session_Id');
                    localStorage.removeItem('token');

                    window.location.href = "/pages/login.html";
                } else {
                    return response.json().then(data => {
                        console.error("Failed to log out:", data.message || "Unknown error");
                    });
                }
            })
            .catch(error => {
                console.error("Failed to log out: ", error);
            });
        });
    }

});