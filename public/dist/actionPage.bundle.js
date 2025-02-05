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

/***/ "./public/src/action.js":
/*!******************************!*\
  !*** ./public/src/action.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/src/utils.js\");\n\n\nfunction setupSubscriptionForm() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    const subscriptionForm = document.getElementById(\"subscription_email\");\n    if (!subscriptionForm) {\n      console.error(\"Element with ID 'subscription_email' not found!\");\n      return;\n    }\n\n    subscriptionForm.addEventListener(\"click\", async function (event) {\n      event.preventDefault();\n      const email = document.getElementById(\"email\").value.trim();\n\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.resetErrorMessages)();\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.showLoadingSpinner)();\n\n      if (!email) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(\"Please log in to subscribe.\");\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hideLoadingSpinner)();\n        return;\n      }\n\n      const formData = { email };\n\n      try {\n        const response = await fetch(\n          \"http://localhost:2000/api/v1/send-subscription-email\",\n          {\n            method: \"POST\",\n            headers: { \"Content-Type\": \"application/json\" },\n            body: JSON.stringify(formData),\n          }\n        );\n\n        if (!response.ok) {\n          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(\"Message not sent to admin. Please try again!\");\n        } \n\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displaySuccessMessages)(\"Message sent successfully. Thanks for reaching out to us\");\n      } catch (error) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.displayErrorMessages)(error.message || \"An error occurred. Please try again later.\");\n      } finally {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hideLoadingSpinner)();\n      }\n    });\n  });\n}\n\nsetupSubscriptionForm();\n\n\n//# sourceURL=webpack://movie-app-client/./public/src/action.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/action.js");
/******/ 	
/******/ })()
;