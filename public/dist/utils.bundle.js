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

/***/ "./public/src/utils.js":
/*!*****************************!*\
  !*** ./public/src/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayErrorMessages: () => (/* binding */ displayErrorMessages),\n/* harmony export */   displaySuccessMessages: () => (/* binding */ displaySuccessMessages),\n/* harmony export */   hideLoadingSpinner: () => (/* binding */ hideLoadingSpinner),\n/* harmony export */   isValidPassword: () => (/* binding */ isValidPassword),\n/* harmony export */   isValidPhoneNumber: () => (/* binding */ isValidPhoneNumber),\n/* harmony export */   resetErrorMessages: () => (/* binding */ resetErrorMessages),\n/* harmony export */   setupBurgerMenu: () => (/* binding */ setupBurgerMenu),\n/* harmony export */   showLoadingSpinner: () => (/* binding */ showLoadingSpinner)\n/* harmony export */ });\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const buttons1 = document.querySelectorAll(\".showButton1\");\n  const buttons2 = document.querySelectorAll(\".showButton2\");\n\n  const sessionId = localStorage.getItem(\"session_Id\");\n\n  if (!sessionId) {\n    buttons1.forEach((button) => (button.style.display = \"inline-block\"));\n    buttons2.forEach((button) => (button.style.display = \"none\"));\n  } else {\n    buttons2.forEach((button) => (button.style.display = \"inline-block\"));\n    buttons1.forEach((button) => (button.style.display = \"none\"));\n  }\n});\n\nfunction showLoadingSpinner() {\n  const loadingSpinner = document.getElementById(\"loadingSpinner\");\n  loadingSpinner.classList.remove(\"d-none\");\n}\n\nfunction hideLoadingSpinner() {\n  const loadingSpinner = document.getElementById(\"loadingSpinner\");\n  loadingSpinner.classList.add(\"d-none\");\n}\n\nfunction displayErrorMessages(messages) {\n  const errorText = document.getElementById(\"error-text\");\n  const errorMessage = document.getElementById(\"error-message\");\n\n  errorText.innerHTML = messages;\n  errorMessage.classList.remove(\"success\");\n  errorMessage.classList.add(\"error\");\n  errorMessage.style.display = \"block\";\n\n  setTimeout(() => {\n    errorMessage.style.display = \"none\";\n  }, 10000);\n}\n\nfunction displaySuccessMessages(messages) {\n  const errorText = document.getElementById(\"error-text\");\n  const errorMessage = document.getElementById(\"error-message\");\n\n  errorText.innerHTML = messages;\n  errorMessage.classList.remove(\"error\");\n  errorMessage.classList.add(\"success\");\n  errorMessage.style.display = \"block\";\n\n  setTimeout(() => {\n    errorMessage.style.display = \"none\";\n  }, 10000);\n}\n\nfunction resetErrorMessages() {\n  const errorMessage = document.getElementById(\"error-message\");\n  const errorText = document.getElementById(\"error-text\");\n  errorMessage.style.display = \"none\";\n  errorText.innerHTML = \"\";\n}\n\nfunction setupBurgerMenu() {\n  document.getElementById(\"burger-menu\").addEventListener(\"click\", function () {\n    var navLinks = document.querySelector(\".nav-links\");\n    navLinks.classList.toggle(\"active\");\n  });\n}\n\nfunction isValidPassword(password) {\n  const minLength = 8;\n  const hasUpperCase = /[A-Z]/.test(password);\n  const hasLowerCase = /[a-z]/.test(password);\n  const hasNumber = /\\d/.test(password);\n  const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(password);\n\n  return (\n    password.length >= minLength &&\n    hasUpperCase &&\n    hasLowerCase &&\n    hasSpecialChar &&\n    hasNumber\n  );\n}\n\nfunction isValidPhoneNumber(phoneNumber) {\n  return phoneNumber.length === 11 && /^\\d+$/.test(phoneNumber);\n}\n\n//# sourceURL=webpack://movie-app-client/./public/src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/utils.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;