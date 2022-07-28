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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawBoard\": () => (/* binding */ drawBoard),\n/* harmony export */   \"drawSquareContents\": () => (/* binding */ drawSquareContents)\n/* harmony export */ });\nconst drawBoard = (player) => {\n  const board = document.querySelector(`.${player} .board`);\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const div = document.createElement('div');\n      div.dataset.y = i;\n      div.dataset.x = j;\n      div.classList.add('square');\n      board.appendChild(div);\n    }\n  }\n};\n\nconst drawSquareContents = (player, board) => {\n  board.forEach((array, coordY) => {\n    array.forEach((element, coordX) => {\n      const y = coordY;\n      const x = coordX;\n      const div = document.querySelector(`.${player} [data-y=\"${y}\"][data-x=\"${x}\"]`);\n      div.textContent = element;\n    });\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRyYXdCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9IC5ib2FyZGApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmRhdGFzZXQueSA9IGk7XG4gICAgICBkaXYuZGF0YXNldC54ID0gajtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkcmF3U3F1YXJlQ29udGVudHMgPSAocGxheWVyLCBib2FyZCkgPT4ge1xuICBib2FyZC5mb3JFYWNoKChhcnJheSwgY29vcmRZKSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgY29vcmRYKSA9PiB7XG4gICAgICBjb25zdCB5ID0gY29vcmRZO1xuICAgICAgY29uc3QgeCA9IGNvb3JkWDtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllcn0gW2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudDtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkcmF3Qm9hcmQsIGRyYXdTcXVhcmVDb250ZW50cyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/gbFactory.js":
/*!**************************!*\
  !*** ./src/gbFactory.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nconst gameboardFactory = () => {\n  const sunkShips = [];\n  let s1;\n  let s2;\n  let s3;\n  let s4;\n  let s5;\n  let s6;\n  const board = [\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n    ['', '', '', '', '', '', '', '', '', ''],\n  ];\n  const areAllShipsSunk = () => {\n    // set number of ships\n    if (sunkShips.length >= 2) {\n      return true;\n    }\n    return false;\n  };\n  const placeShip = (name, size, y, x, direction) => {\n    const shipCoords = [];\n    if (direction === 'v') {\n      const end = size + y;\n      for (let i = y; i < end; i++) {\n        board[i][x] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x, y: i });\n      }\n    }\n    if (direction === 'h') {\n      const end = size + x;\n      for (let i = x; i < end; i++) {\n        board[y][i] = name;\n        // add each x & y coordinates to the array for later adding to the ship when constructed\n        shipCoords.push({ x: i, y });\n      }\n    }\n    return shipCoords;\n  };\n  const receiveAttack = (obj) => {\n    // m = miss, h = hit\n    if (board[obj.y][obj.x] === '') {\n      board[obj.y][obj.x] = 'm';\n    }\n    // check if a boat 's1', 's2'... is in the square\n    if (/[s]\\d/.test(board[obj.y][obj.x]) === true) {\n      const hitShip = board[obj.y][obj.x];\n      board[obj.y][obj.x] = 'h';\n      switch (hitShip) {\n        case 's1':\n          s1.setHit(obj.y, obj.x);\n          // console.log(s1.getHits());\n          if (s1.isSunk() === true) {\n            sunkShips.push('s1');\n          }\n          break;\n        case 's2':\n          s2.setHit(obj.y, obj.x);\n          if (s2.isSunk() === true) {\n            sunkShips.push('s2');\n          }\n          break;\n        case 's3':\n          s3.setHit(obj.y, obj.x);\n          if (s3.isSunk() === true) {\n            sunkShips.push('s3');\n          }\n          break;\n        case 's4':\n          s4.setHit(obj.y, obj.x);\n          if (s4.isSunk() === true) {\n            sunkShips.push('s4');\n          }\n          break;\n        case 's5':\n          s5.setHit(obj.y, obj.x);\n          if (s5.isSunk() === true) {\n            sunkShips.push('s5');\n          }\n          break;\n        case 's6':\n          s6.setHit(obj.y, obj.x);\n          if (s6.isSunk() === true) {\n            sunkShips.push('s6');\n          }\n          break;\n        default:\n          console.log('Error, no ship matched');\n      }\n    }\n    // console.table(board);\n  };\n  const setup = () => {\n    const s1Coords = placeShip('s1', 4, 0, 2, 'v');\n    const s2Coords = placeShip('s2', 2, 1, 4, 'h');\n    const s3Coords = placeShip('s3', 5, 3, 6, 'v');\n    const s4Coords = placeShip('s4', 3, 7, 1, 'h');\n    const s5Coords = placeShip('s5', 5, 9, 0, 'h');\n    const s6Coords = placeShip('s6', 3, 4, 7, 'h');\n    s1 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, s1Coords);\n    s2 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, s2Coords);\n    s3 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5, s3Coords);\n    s4 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, s4Coords);\n    s5 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5, s5Coords);\n    s6 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, s6Coords);\n    return board;\n  };\n  const getBoard = () => board;\n  return {\n    receiveAttack,\n    placeShip,\n    setup,\n    getBoard,\n    sunkShips,\n    areAllShipsSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2JGYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYkZhY3RvcnkuanM/YzE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHN1bmtTaGlwcyA9IFtdO1xuICBsZXQgczE7XG4gIGxldCBzMjtcbiAgbGV0IHMzO1xuICBsZXQgczQ7XG4gIGxldCBzNTtcbiAgbGV0IHM2O1xuICBjb25zdCBib2FyZCA9IFtcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICBdO1xuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgLy8gc2V0IG51bWJlciBvZiBzaGlwc1xuICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID49IDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChuYW1lLCBzaXplLCB5LCB4LCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbmQgPSBzaXplICsgeTtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV1beF0gPSBuYW1lO1xuICAgICAgICAvLyBhZGQgZWFjaCB4ICYgeSBjb29yZGluYXRlcyB0byB0aGUgYXJyYXkgZm9yIGxhdGVyIGFkZGluZyB0byB0aGUgc2hpcCB3aGVuIGNvbnN0cnVjdGVkXG4gICAgICAgIHNoaXBDb29yZHMucHVzaCh7IHgsIHk6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgY29uc3QgZW5kID0gc2l6ZSArIHg7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ldW2ldID0gbmFtZTtcbiAgICAgICAgLy8gYWRkIGVhY2ggeCAmIHkgY29vcmRpbmF0ZXMgdG8gdGhlIGFycmF5IGZvciBsYXRlciBhZGRpbmcgdG8gdGhlIHNoaXAgd2hlbiBjb25zdHJ1Y3RlZFxuICAgICAgICBzaGlwQ29vcmRzLnB1c2goeyB4OiBpLCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkcztcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChvYmopID0+IHtcbiAgICAvLyBtID0gbWlzcywgaCA9IGhpdFxuICAgIGlmIChib2FyZFtvYmoueV1bb2JqLnhdID09PSAnJykge1xuICAgICAgYm9hcmRbb2JqLnldW29iai54XSA9ICdtJztcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgYSBib2F0ICdzMScsICdzMicuLi4gaXMgaW4gdGhlIHNxdWFyZVxuICAgIGlmICgvW3NdXFxkLy50ZXN0KGJvYXJkW29iai55XVtvYmoueF0pID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBoaXRTaGlwID0gYm9hcmRbb2JqLnldW29iai54XTtcbiAgICAgIGJvYXJkW29iai55XVtvYmoueF0gPSAnaCc7XG4gICAgICBzd2l0Y2ggKGhpdFNoaXApIHtcbiAgICAgICAgY2FzZSAnczEnOlxuICAgICAgICAgIHMxLnNldEhpdChvYmoueSwgb2JqLngpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHMxLmdldEhpdHMoKSk7XG4gICAgICAgICAgaWYgKHMxLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCgnczEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3MyJzpcbiAgICAgICAgICBzMi5zZXRIaXQob2JqLnksIG9iai54KTtcbiAgICAgICAgICBpZiAoczIuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKCdzMicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnczMnOlxuICAgICAgICAgIHMzLnNldEhpdChvYmoueSwgb2JqLngpO1xuICAgICAgICAgIGlmIChzMy5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goJ3MzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzNCc6XG4gICAgICAgICAgczQuc2V0SGl0KG9iai55LCBvYmoueCk7XG4gICAgICAgICAgaWYgKHM0LmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCgnczQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3M1JzpcbiAgICAgICAgICBzNS5zZXRIaXQob2JqLnksIG9iai54KTtcbiAgICAgICAgICBpZiAoczUuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKCdzNScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnczYnOlxuICAgICAgICAgIHM2LnNldEhpdChvYmoueSwgb2JqLngpO1xuICAgICAgICAgIGlmIChzNi5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goJ3M2Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciwgbm8gc2hpcCBtYXRjaGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUudGFibGUoYm9hcmQpO1xuICB9O1xuICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBzMUNvb3JkcyA9IHBsYWNlU2hpcCgnczEnLCA0LCAwLCAyLCAndicpO1xuICAgIGNvbnN0IHMyQ29vcmRzID0gcGxhY2VTaGlwKCdzMicsIDIsIDEsIDQsICdoJyk7XG4gICAgY29uc3QgczNDb29yZHMgPSBwbGFjZVNoaXAoJ3MzJywgNSwgMywgNiwgJ3YnKTtcbiAgICBjb25zdCBzNENvb3JkcyA9IHBsYWNlU2hpcCgnczQnLCAzLCA3LCAxLCAnaCcpO1xuICAgIGNvbnN0IHM1Q29vcmRzID0gcGxhY2VTaGlwKCdzNScsIDUsIDksIDAsICdoJyk7XG4gICAgY29uc3QgczZDb29yZHMgPSBwbGFjZVNoaXAoJ3M2JywgMywgNCwgNywgJ2gnKTtcbiAgICBzMSA9IHNoaXBGYWN0b3J5KDQsIHMxQ29vcmRzKTtcbiAgICBzMiA9IHNoaXBGYWN0b3J5KDIsIHMyQ29vcmRzKTtcbiAgICBzMyA9IHNoaXBGYWN0b3J5KDUsIHMzQ29vcmRzKTtcbiAgICBzNCA9IHNoaXBGYWN0b3J5KDMsIHM0Q29vcmRzKTtcbiAgICBzNSA9IHNoaXBGYWN0b3J5KDUsIHM1Q29vcmRzKTtcbiAgICBzNiA9IHNoaXBGYWN0b3J5KDMsIHM2Q29vcmRzKTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGFjZVNoaXAsXG4gICAgc2V0dXAsXG4gICAgZ2V0Qm9hcmQsXG4gICAgc3Vua1NoaXBzLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gbFactory.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _gbFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gbFactory */ \"./src/gbFactory.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.drawBoard)('p1');\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.drawBoard)('p2');\n\nconst initaliseGame = () => {\n  const p1Board = (0,_gbFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const p2Board = (0,_gbFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  p1Board.setup();\n  p2Board.setup();\n  console.table(p1Board.getBoard());\n  console.table(p2Board.getBoard());\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.drawSquareContents)('p1', p1Board.getBoard());\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.drawSquareContents)('p2', p2Board.getBoard());\n};\n\ninitaliseGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRyYXdCb2FyZCwgZHJhd1NxdWFyZUNvbnRlbnRzIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9nYkZhY3RvcnknO1xuXG5kcmF3Qm9hcmQoJ3AxJyk7XG5kcmF3Qm9hcmQoJ3AyJyk7XG5cbmNvbnN0IGluaXRhbGlzZUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHAxQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IHAyQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gIHAxQm9hcmQuc2V0dXAoKTtcbiAgcDJCb2FyZC5zZXR1cCgpO1xuICBjb25zb2xlLnRhYmxlKHAxQm9hcmQuZ2V0Qm9hcmQoKSk7XG4gIGNvbnNvbGUudGFibGUocDJCb2FyZC5nZXRCb2FyZCgpKTtcbiAgZHJhd1NxdWFyZUNvbnRlbnRzKCdwMScsIHAxQm9hcmQuZ2V0Qm9hcmQoKSk7XG4gIGRyYXdTcXVhcmVDb250ZW50cygncDInLCBwMkJvYXJkLmdldEJvYXJkKCkpO1xufTtcblxuaW5pdGFsaXNlR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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