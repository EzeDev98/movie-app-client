/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/loginPage.js":
/*!*********************************!*\
  !*** ./public/src/loginPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/src/utils.js\");\n\n\ndocument.getElementById(\"page-form\").addEventListener(\"submit\", function(event) {\n    event.preventDefault();\n\n    const email = document.getElementById(\"email\").value;\n    const password = document.getElementById(\"password\").value;\n    const submitButton = this.querySelector('input[type=\"submit\"]');\n\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.resetErrorMessages)();\n    submitButton.disabled = true;\n\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.showLoadingSpinner)();\n\n    if (!email) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(\"Username field cannot be empty\");\n        submitButton.disabled = false;\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hideLoadingSpinner)(); \n        return;\n    }\n\n    if (!password) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(\"Password field cannot be empty\");\n        submitButton.disabled = false;\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hideLoadingSpinner)(); \n        return;\n    }\n\n    const formData = { email, password };\n\n    fetch(\"http://localhost:2000/api/v1/login-user\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        body: JSON.stringify(formData)\n    })\n    .then(async response => {\n        console.log(\"Raw Response from server: \", response);\n\n        const data = await response.json();\n\n        console.log(\"Payload: \", data);\n\n        if (!response.ok) {\n            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(data.message || \"Login failed, please try again\");\n            submitButton.disabled = false;\n            return;\n        } else {\n\n            localStorage.setItem(\"token\", data.token);\n            localStorage.setItem(\"session_Id\", data.sessionId);\n            localStorage.setItem(\"email\", data.email);\n\n            window.location.href = '../index.html';\n        }\n    })\n    .catch(error => {\n        console.error(\"Error: \", error);\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(\"An unexpected error occurred. Login failed\");\n        submitButton.disabled = false;\n    })\n    .finally(() => {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hideLoadingSpinner)();\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    document.querySelectorAll('.toggle-password').forEach(button => {\n        button.addEventListener('click', function () {\n        \n            const inputContainer = button.closest('.input-box');\n            const passwordInput = inputContainer.querySelector('input');\n            const icon = button.querySelector('i');\n\n            if (passwordInput.type === 'password') {\n                passwordInput.type = 'text';\n                icon.classList.replace('fa-eye', 'fa-eye-slash');\n            } else {\n                passwordInput.type = 'password';\n                icon.classList.replace('fa-eye-slash', 'fa-eye');\n            }\n\n        });\n    });\n});\n\n\n\n\n//# sourceURL=webpack://movie-app-client/./public/src/loginPage.js?");

/***/ }),

/***/ "./public/src/utils.js":
/*!*****************************!*\
  !*** ./public/src/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayErrorMessages: () => (/* binding */ displayErrorMessages),\n/* harmony export */   displaySuccessMessages: () => (/* binding */ displaySuccessMessages),\n/* harmony export */   hideLoadingSpinner: () => (/* binding */ hideLoadingSpinner),\n/* harmony export */   isValidPassword: () => (/* binding */ isValidPassword),\n/* harmony export */   isValidPhoneNumber: () => (/* binding */ isValidPhoneNumber),\n/* harmony export */   resetErrorMessages: () => (/* binding */ resetErrorMessages),\n/* harmony export */   setupBurgerMenu: () => (/* binding */ setupBurgerMenu),\n/* harmony export */   showLoadingSpinner: () => (/* binding */ showLoadingSpinner)\n/* harmony export */ });\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const buttons1 = document.querySelectorAll(\".showButton1\");\n  const buttons2 = document.querySelectorAll(\".showButton2\");\n\n  const sessionId = localStorage.getItem(\"session_Id\");\n\n  if (!sessionId) {\n    buttons1.forEach((button) => (button.style.display = \"inline-block\"));\n    buttons2.forEach((button) => (button.style.display = \"none\"));\n  } else {\n    buttons2.forEach((button) => (button.style.display = \"inline-block\"));\n    buttons1.forEach((button) => (button.style.display = \"none\"));\n  }\n});\n\nfunction showLoadingSpinner() {\n  const loadingSpinner = document.getElementById(\"loadingSpinner\");\n  loadingSpinner.classList.remove(\"d-none\");\n}\n\nfunction hideLoadingSpinner() {\n  const loadingSpinner = document.getElementById(\"loadingSpinner\");\n  loadingSpinner.classList.add(\"d-none\");\n}\n\nfunction displayErrorMessages(messages) {\n  const errorText = document.getElementById(\"error-text\");\n  const errorMessage = document.getElementById(\"error-message\");\n\n  errorText.innerHTML = messages;\n  errorMessage.classList.remove(\"success\");\n  errorMessage.classList.add(\"error\");\n  errorMessage.style.display = \"block\";\n\n  setTimeout(() => {\n    errorMessage.style.display = \"none\";\n  }, 10000);\n}\n\nfunction displaySuccessMessages(messages) {\n  const errorText = document.getElementById(\"error-text\");\n  const errorMessage = document.getElementById(\"error-message\");\n\n  errorText.innerHTML = messages;\n  errorMessage.classList.remove(\"error\");\n  errorMessage.classList.add(\"success\");\n  errorMessage.style.display = \"block\";\n\n  setTimeout(() => {\n    errorMessage.style.display = \"none\";\n  }, 10000);\n}\n\nfunction resetErrorMessages() {\n  const errorMessage = document.getElementById(\"error-message\");\n  const errorText = document.getElementById(\"error-text\");\n  errorMessage.style.display = \"none\";\n  errorText.innerHTML = \"\";\n}\n\nfunction setupBurgerMenu() {\n  document.getElementById(\"burger-menu\").addEventListener(\"click\", function () {\n    var navLinks = document.querySelector(\".nav-links\");\n    navLinks.classList.toggle(\"active\");\n  });\n}\n\nfunction isValidPassword(password) {\n  const minLength = 8;\n  const hasUpperCase = /[A-Z]/.test(password);\n  const hasLowerCase = /[a-z]/.test(password);\n  const hasNumber = /\\d/.test(password);\n  const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(password);\n\n  return (\n    password.length >= minLength &&\n    hasUpperCase &&\n    hasLowerCase &&\n    hasSpecialChar &&\n    hasNumber\n  );\n}\n\nfunction isValidPhoneNumber(phoneNumber) {\n  return phoneNumber.length === 11 && /^\\d+$/.test(phoneNumber);\n}\n\n//# sourceURL=webpack://movie-app-client/./public/src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/loginPage.js");
/******/ 	
/******/ })()
;