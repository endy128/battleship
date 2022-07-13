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

/***/ "./src/gbFactory.js":
/*!**************************!*\
  !*** ./src/gbFactory.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nconst gameboardFactory = () => {\n  const board = [\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n  ];\n  const placeShip = (name, size, y, x, direction) => {\n    const shipCoords = [];\n    if (direction === 'v') {\n      const end = size + y;\n      for (let i = y; i < end; i++) {\n        board[i][x] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x, y: i });\n      }\n    }\n    if (direction === 'h') {\n      const end = size + x;\n      for (let i = x; i < end; i++) {\n        board[y][i] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x: i, y });\n      }\n    }\n    return shipCoords;\n  };\n  const receiveAttack = (obj) => {\n    board[obj.y][obj.y] = 'm';\n  };\n  const setup = () => {\n    const s1Coords = placeShip('s1', 4, 0, 2, 'v');\n    const s1 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, s1Coords);\n    placeShip('s2', 2, 1, 4, 'h');\n    return board;\n  };\n  const getBoard = () => board;\n  return {\n    receiveAttack,\n    placeShip,\n    setup,\n    getBoard,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2JGYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYkZhY3RvcnkuanM/YzE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW1xuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gIF07XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChuYW1lLCBzaXplLCB5LCB4LCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbmQgPSBzaXplICsgeTtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV1beF0gPSBuYW1lO1xuICAgICAgICAvLyBhZGQgZWFjaCB4ICYgeSBjb29yZGluYXRlcyB0byB0aGUgYXJyYXkgZm9yIGxhdGVyIGFkZGluZyB0byB0aGUgc2hpcCB3aGVuIGNvbnN0cnVjdGVkXG4gICAgICAgIHNoaXBDb29yZHMucHVzaCh7IHgsIHk6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgY29uc3QgZW5kID0gc2l6ZSArIHg7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ldW2ldID0gbmFtZTtcbiAgICAgICAgLy8gYWRkIGVhY2ggeCAmIHkgY29vcmRpbmF0ZXMgdG8gdGhlIGFycmF5IGZvciBsYXRlciBhZGRpbmcgdG8gdGhlIHNoaXAgd2hlbiBjb25zdHJ1Y3RlZFxuICAgICAgICBzaGlwQ29vcmRzLnB1c2goeyB4OiBpLCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkcztcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChvYmopID0+IHtcbiAgICBib2FyZFtvYmoueV1bb2JqLnldID0gJ20nO1xuICB9O1xuICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBzMUNvb3JkcyA9IHBsYWNlU2hpcCgnczEnLCA0LCAwLCAyLCAndicpO1xuICAgIGNvbnN0IHMxID0gc2hpcEZhY3RvcnkoNCwgczFDb29yZHMpO1xuICAgIHBsYWNlU2hpcCgnczInLCAyLCAxLCA0LCAnaCcpO1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHBsYWNlU2hpcCxcbiAgICBzZXR1cCxcbiAgICBnZXRCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gbFactory.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gbFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gbFactory */ \"./src/gbFactory.js\");\n\n\n(0,_gbFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().setup();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9nYkZhY3RvcnknO1xuXG5nYW1lYm9hcmRGYWN0b3J5KCkuc2V0dXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipFactory = (size, coords) => {\n  const hits = [];\n  const getHits = () => hits;\n  const getSize = () => size;\n  const getCoord = () => coords;\n  const setHit = (yVal, xVal) => hits.push({ y: yVal, x: xVal });\n  const setCoord = (yVal, xVal) => coords.push({ y: yVal, x: xVal });\n  const isSunk = () => {\n    if (hits.length === getSize()) {\n      return true;\n    }\n    return false;\n  };\n  return {\n    isSunk,\n    getSize,\n    getHits,\n    getCoord,\n    setHit,\n    setCoord,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcEZhY3RvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanM/MmVkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwRmFjdG9yeSA9IChzaXplLCBjb29yZHMpID0+IHtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHNpemU7XG4gIGNvbnN0IGdldENvb3JkID0gKCkgPT4gY29vcmRzO1xuICBjb25zdCBzZXRIaXQgPSAoeVZhbCwgeFZhbCkgPT4gaGl0cy5wdXNoKHsgeTogeVZhbCwgeDogeFZhbCB9KTtcbiAgY29uc3Qgc2V0Q29vcmQgPSAoeVZhbCwgeFZhbCkgPT4gY29vcmRzLnB1c2goeyB5OiB5VmFsLCB4OiB4VmFsIH0pO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSBnZXRTaXplKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaXNTdW5rLFxuICAgIGdldFNpemUsXG4gICAgZ2V0SGl0cyxcbiAgICBnZXRDb29yZCxcbiAgICBzZXRIaXQsXG4gICAgc2V0Q29vcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shipFactory.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;