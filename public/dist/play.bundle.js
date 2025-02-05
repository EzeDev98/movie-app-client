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

/***/ "./public/src/play.js":
/*!****************************!*\
  !*** ./public/src/play.js ***!
  \****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    const urlParams = new URLSearchParams(window.location.search);\n    const videoId = urlParams.get('videoId');\n    \n    if (videoId) {\n        const iframe = document.getElementById('videoIframe');\n        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;\n    } else {\n        window.location.href = '/pages/search.html';\n    }\n});\n\n\n//# sourceURL=webpack://movie-app-client/./public/src/play.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/play.js"]();
/******/ 	
/******/ })()
;