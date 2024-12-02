/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeArray: () => (/* binding */ analyzeArray),\n/* harmony export */   caesarCipher: () => (/* binding */ caesarCipher),\n/* harmony export */   calculate: () => (/* binding */ calculate),\n/* harmony export */   capitalize: () => (/* binding */ capitalize),\n/* harmony export */   reverseString: () => (/* binding */ reverseString)\n/* harmony export */ });\n//#!/usr/bin/env node\n\nfunction capitalize(word) {\n  if (!word) return \"\";\n  return word.charAt(0).toUpperCase() + word.slice(1);\n}\n\nfunction reverseString(str) {\n  return str.split(\"\").reverse().join(\"\");\n}\n\nfunction calculate(a, b, operation) {\n  switch (operation) {\n    case \"add\":\n      return a + b;\n    case \"subtract\":\n      return a - b;\n    case \"divide\":\n      return b !== 0 ? a / b : null; // Prevent division by zero\n    case \"multiply\":\n      return a * b;\n    default:\n      throw new Error(\"Invalid operation\");\n  }\n}\n\nfunction caesarCipher(str, shift) {\n  return str.replace(/[a-zA-Z]/g, (char) => {\n    const start = char >= \"a\" ? 97 : 65; // ASCII value for 'a' or 'A'\n    return String.fromCharCode(\n      ((char.charCodeAt(0) - start + shift) % 26) + start\n    );\n  });\n}\n\nfunction analyzeArray(arr) {\n  const sum = arr.reduce((total, num) => total + num, 0);\n  const average = sum / arr.length;\n  const min = Math.min(...arr);\n  const max = Math.max(...arr);\n  const length = arr.length;\n\n  return { average, min, max, length };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHdvcmQpIHtcbiAgaWYgKCF3b3JkKSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZShhLCBiLCBvcGVyYXRpb24pIHtcbiAgc3dpdGNoIChvcGVyYXRpb24pIHtcbiAgICBjYXNlIFwiYWRkXCI6XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgY2FzZSBcInN1YnRyYWN0XCI6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSBcImRpdmlkZVwiOlxuICAgICAgcmV0dXJuIGIgIT09IDAgPyBhIC8gYiA6IG51bGw7IC8vIFByZXZlbnQgZGl2aXNpb24gYnkgemVyb1xuICAgIGNhc2UgXCJtdWx0aXBseVwiOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wZXJhdGlvblwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2Flc2FyQ2lwaGVyKHN0ciwgc2hpZnQpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bYS16QS1aXS9nLCAoY2hhcikgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gY2hhciA+PSBcImFcIiA/IDk3IDogNjU7IC8vIEFTQ0lJIHZhbHVlIGZvciAnYScgb3IgJ0EnXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAoKGNoYXIuY2hhckNvZGVBdCgwKSAtIHN0YXJ0ICsgc2hpZnQpICUgMjYpICsgc3RhcnRcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVBcnJheShhcnIpIHtcbiAgY29uc3Qgc3VtID0gYXJyLnJlZHVjZSgodG90YWwsIG51bSkgPT4gdG90YWwgKyBudW0sIDApO1xuICBjb25zdCBhdmVyYWdlID0gc3VtIC8gYXJyLmxlbmd0aDtcbiAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uYXJyKTtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyKTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICByZXR1cm4geyBhdmVyYWdlLCBtaW4sIG1heCwgbGVuZ3RoIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;