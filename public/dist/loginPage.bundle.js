/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/loginPage.js":
/*!*********************************!*\
  !*** ./public/src/loginPage.js ***!
  \*********************************/
/***/ (() => {

eval("document.getElementById(\"page-form\").addEventListener(\"submit\", function(event) {\n    event.preventDefault();\n\n    const errorMessage = document.getElementById(\"error-message\");\n    const errorText = document.getElementById(\"error-text\");\n    const username = document.getElementById(\"username\").value;\n    const password = document.getElementById(\"password\").value;\n    const submitButton = this.querySelector('input[type=\"submit\"]');\n\n \n    errorMessage.style.display = \"none\";\n    errorText.innerHTML = '';\n    submitButton.disabled = true;\n\n    if (!username) {\n        displayErrorMessages(\"Username field cannot be empty\");\n        submitButton.disabled = false;\n        return;\n    }\n\n    if (!password) {\n        displayErrorMessages(\"Password field cannot be empty\");\n        submitButton.disabled = false;\n        return;\n    }\n\n    const formData = { username, password };\n\n    fetch(\"http://localhost:2000/api/v1/login-user\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        body: JSON.stringify(formData)\n    })\n    .then(async response => {\n        console.log(\"Raw Response from server: \", response);\n\n        if (response.ok) {\n            window.location.href = '../index.html';\n            return response.json();\n        } else {\n            const data = await response.json();\n            displayErrorMessages(data.messages || \"Login failed!\");\n            submitButton.disabled = false;\n        }\n    })\n    .catch(error => {\n        console.error(\"Error: \", error);\n        displayErrorMessages(\"An unexpected error occurred. Login failed\");\n        submitButton.disabled = false;\n    });\n});\n\nfunction displayErrorMessages(messages) {\n    const errorText = document.getElementById(\"error-text\");\n    const errorMessage = document.getElementById(\"error-message\");\n    errorText.innerHTML = messages;\n    errorMessage.style.display = 'block';\n}\n\n\n\n// const form = document.getElementById(\"page-form\");\n// const errorMessage = document.getElementById(\"error-message\");\n// const errorText = document.getElementById(\"error-text\");\n\n// form.addEventListener(\"submit\", function(event) {\n//     event.preventDefault();\n\n//     errorMessage.style.display = \"none\";\n//     errorText.innerHTML = '';\n\n//     const username = document.getElementById(\"username\").value;\n//     const password = document.getElementById(\"password\").value;\n\n//     // Use empty string check instead of null\n//     if (username === \"\") {\n//         displayErrorMessages(\"Username field cannot be empty\");\n//         return;\n//     }\n\n//     if (password === \"\") {\n//         displayErrorMessages(\"Password field cannot be empty\");\n//         return;\n//     }\n\n//     const formData = {\n//         username: username,\n//         password: password,\n//     };\n\n//     // Log formData for debugging\n//     console.log(\"Form Data Sent: \", formData);\n\n//     fetch(\"http://localhost:2000/api/v1/login-user\", {\n//         method: \"POST\",\n//         headers: {\n//             \"Content-Type\": \"application/json\"\n//         },\n//         body: JSON.stringify(formData)\n//     })\n//     .then(async response => {\n//         console.log(\"Raw Response from server: \", response);\n\n//         // response.ok checks for 2xx status codes\n//         if (response.ok) {\n//             window.location.href = '/pages/index.html';\n//             return response.json();\n//         } else {\n//             // Handle error response and display messages\n//             const data = await response.json();\n//             displayErrorMessages(data.messages || \"Login failed!\");\n//         }\n//     })\n//     .catch(error => {\n//         console.error(\"Error: \", error);\n//         displayErrorMessages(\"An unexpected error occurred. Login failed\");\n//     });\n// });\n\n// // Function to display error messages\n// function displayErrorMessages(messages) {\n//     errorText.innerHTML = messages;\n//     errorMessage.style.display = 'block';\n// }\n\n\n//# sourceURL=webpack://movie-app-client/./public/src/loginPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/loginPage.js"]();
/******/ 	
/******/ })()
;