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

/***/ "./public/src/logout.js":
/*!******************************!*\
  !*** ./public/src/logout.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function() {\n    const logoutButton = document.getElementById(\"logoutLink\");\n\n    if (logoutButton) {\n        logoutButton.addEventListener('click', function(event) {\n            event.preventDefault();\n\n            const sessionId = localStorage.getItem('session_Id');\n            if (!sessionId) {\n                console.error('Session ID not found');\n                window.location.href = \"/pages/login.html\";\n                return;\n            }\n\n            fetch('http://localhost:2000/api/v1/logout', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({ sessionId }),\n            })\n            .then( response => {\n                if (response.ok) {\n                    console.log('Logout successful');\n\n                    localStorage.removeItem('session_Id');\n                    localStorage.removeItem('token');\n\n                    window.location.href = \"/pages/login.html\";\n                } else {\n                    return response.json().then(data => {\n                        console.error(\"Failed to log out:\", data.message || \"Unknown error\");\n                    });\n                }\n            })\n            .catch(error => {\n                console.error(\"Failed to log out: \", error);\n            });\n        });\n    }\n\n});\n\n//# sourceURL=webpack://movie-app-client/./public/src/logout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/logout.js"]();
/******/ 	
/******/ })()
;