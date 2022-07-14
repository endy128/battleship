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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nconst gameboardFactory = () => {\n  const sunkShips = [];\n  let s1;\n  let s2;\n  let s3;\n  let s4;\n  const board = [\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n  ];\n  const placeShip = (name, size, y, x, direction) => {\n    const shipCoords = [];\n    if (direction === 'v') {\n      const end = size + y;\n      for (let i = y; i < end; i++) {\n        board[i][x] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x, y: i });\n      }\n    }\n    if (direction === 'h') {\n      const end = size + x;\n      for (let i = x; i < end; i++) {\n        board[y][i] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x: i, y });\n      }\n    }\n    return shipCoords;\n  };\n  const receiveAttack = (obj) => {\n    // m = miss, h = hit\n    if (board[obj.y][obj.x] === '') {\n      board[obj.y][obj.x] = 'm';\n    }\n    // check if a boat 's1', 's2'... is in the square\n    if (/[s]\\d/.test(board[obj.y][obj.x]) === true) {\n      const hitShip = board[obj.y][obj.x];\n      board[obj.y][obj.x] = 'h';\n      switch (hitShip) {\n        case 's1':\n          s1.setHit(obj.y, obj.x);\n          // console.log(s1.getHits());\n          if (s1.isSunk() === true) {\n            sunkShips.push('s1');\n          }\n          break;\n        case 's2':\n          s2.setHit(obj.y, obj.x);\n          if (s2.isSunk() === true) {\n            sunkShips.push('s2');\n          }\n          break;\n        case 's3':\n          s3.setHit(obj.y, obj.x);\n          if (s3.isSunk() === true) {\n            sunkShips.push('s3');\n          }\n          break;\n        case 's4':\n          s4.setHit(obj.y, obj.x);\n          if (s4.isSunk() === true) {\n            sunkShips.push('s4');\n          }\n          break;\n        default:\n          console.log('Error, no ship matched');\n      }\n    }\n    // console.table(board);\n  };\n  const setup = () => {\n    const s1Coords = placeShip('s1', 4, 0, 2, 'v');\n    const s2Coords = placeShip('s2', 2, 1, 4, 'h');\n    s1 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, s1Coords);\n    s2 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, s2Coords);\n    return board;\n  };\n  const getBoard = () => board;\n  return {\n    receiveAttack,\n    placeShip,\n    setup,\n    getBoard,\n    sunkShips,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2JGYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYkZhY3RvcnkuanM/YzE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHN1bmtTaGlwcyA9IFtdO1xuICBsZXQgczE7XG4gIGxldCBzMjtcbiAgbGV0IHMzO1xuICBsZXQgczQ7XG4gIGNvbnN0IGJvYXJkID0gW1xuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gIF07XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChuYW1lLCBzaXplLCB5LCB4LCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbmQgPSBzaXplICsgeTtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV1beF0gPSBuYW1lO1xuICAgICAgICAvLyBhZGQgZWFjaCB4ICYgeSBjb29yZGluYXRlcyB0byB0aGUgYXJyYXkgZm9yIGxhdGVyIGFkZGluZyB0byB0aGUgc2hpcCB3aGVuIGNvbnN0cnVjdGVkXG4gICAgICAgIHNoaXBDb29yZHMucHVzaCh7IHgsIHk6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgY29uc3QgZW5kID0gc2l6ZSArIHg7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ldW2ldID0gbmFtZTtcbiAgICAgICAgLy8gYWRkIGVhY2ggeCAmIHkgY29vcmRpbmF0ZXMgdG8gdGhlIGFycmF5IGZvciBsYXRlciBhZGRpbmcgdG8gdGhlIHNoaXAgd2hlbiBjb25zdHJ1Y3RlZFxuICAgICAgICBzaGlwQ29vcmRzLnB1c2goeyB4OiBpLCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkcztcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChvYmopID0+IHtcbiAgICAvLyBtID0gbWlzcywgaCA9IGhpdFxuICAgIGlmIChib2FyZFtvYmoueV1bb2JqLnhdID09PSAnJykge1xuICAgICAgYm9hcmRbb2JqLnldW29iai54XSA9ICdtJztcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgYSBib2F0ICdzMScsICdzMicuLi4gaXMgaW4gdGhlIHNxdWFyZVxuICAgIGlmICgvW3NdXFxkLy50ZXN0KGJvYXJkW29iai55XVtvYmoueF0pID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBoaXRTaGlwID0gYm9hcmRbb2JqLnldW29iai54XTtcbiAgICAgIGJvYXJkW29iai55XVtvYmoueF0gPSAnaCc7XG4gICAgICBzd2l0Y2ggKGhpdFNoaXApIHtcbiAgICAgICAgY2FzZSAnczEnOlxuICAgICAgICAgIHMxLnNldEhpdChvYmoueSwgb2JqLngpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHMxLmdldEhpdHMoKSk7XG4gICAgICAgICAgaWYgKHMxLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCgnczEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3MyJzpcbiAgICAgICAgICBzMi5zZXRIaXQob2JqLnksIG9iai54KTtcbiAgICAgICAgICBpZiAoczIuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKCdzMicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnczMnOlxuICAgICAgICAgIHMzLnNldEhpdChvYmoueSwgb2JqLngpO1xuICAgICAgICAgIGlmIChzMy5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goJ3MzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzNCc6XG4gICAgICAgICAgczQuc2V0SGl0KG9iai55LCBvYmoueCk7XG4gICAgICAgICAgaWYgKHM0LmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCgnczQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yLCBubyBzaGlwIG1hdGNoZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS50YWJsZShib2FyZCk7XG4gIH07XG4gIGNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHMxQ29vcmRzID0gcGxhY2VTaGlwKCdzMScsIDQsIDAsIDIsICd2Jyk7XG4gICAgY29uc3QgczJDb29yZHMgPSBwbGFjZVNoaXAoJ3MyJywgMiwgMSwgNCwgJ2gnKTtcbiAgICBzMSA9IHNoaXBGYWN0b3J5KDQsIHMxQ29vcmRzKTtcbiAgICBzMiA9IHNoaXBGYWN0b3J5KDIsIHMyQ29vcmRzKTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGFjZVNoaXAsXG4gICAgc2V0dXAsXG4gICAgZ2V0Qm9hcmQsXG4gICAgc3Vua1NoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gbFactory.js\n");

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