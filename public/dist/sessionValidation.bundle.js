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

/***/ "./public/src/sessionValidation.js":
/*!*****************************************!*\
  !*** ./public/src/sessionValidation.js ***!
  \*****************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  validateSession();\n});\n\nasync function validateSession() {\n  const navLinks = document.querySelectorAll(\".nav-links a\");\n  const sessionId = localStorage.getItem(\"session_Id\");\n\n  console.log(\"Session ID: \", sessionId);\n\n  if (!sessionId) {\n    redirectToLogin();\n    return;\n  }\n\n  navLinks.forEach((link) => {\n    link.addEventListener(\"click\", async (event) => {\n      event.preventDefault();\n\n      try {\n        const response = await fetch(\"http://localhost:2000/api/v1/isActive\", {\n          method: \"POST\",\n          headers: {\n            \"Content-Type\": \"application/json\",\n          },\n          body: JSON.stringify({ sessionId }),\n        });\n\n        console.log(\"Response: \", response);\n\n        if (response.ok) {\n          window.location.href = link.href;\n        } else {\n          handleSessionInvalidation();\n        }\n      } catch (error) {\n        console.error(\"Error verifying session:\", error);\n        handleSessionInvalidation();\n      }\n    });\n  });\n}\n\nfunction redirectToLogin() {\n  window.location.href = \"/pages/login.html\";\n}\n\nfunction handleSessionInvalidation() {\n  localStorage.removeItem(\"session_Id\");\n  redirectToLogin();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const currentPath = window.location.pathname;\n  const navLinks = document.querySelectorAll(\".nav-links a\");\n\n  navLinks.forEach((link) => {\n    if (link.getAttribute(\"href\") === currentPath) {\n      link.classList.add(\"active\");\n    } else {\n      link.classList.remove(\"active\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack://movie-app-client/./public/src/sessionValidation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/sessionValidation.js"]();
/******/ 	
/******/ })()
;