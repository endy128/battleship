/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const shipFactory = (length, coord) => ({\n  length,\n  coord,\n  hits: [[1, 2], [2, 2]],\n  isSunk: false,\n  getLength() { return length; },\n  getHits() { return this.hits; },\n});\n\nconst ship1 = shipFactory(4);\nconsole.log(ship1);\nconsole.log(ship1.getLength());\nconsole.log(ship1.getHits());\nconsole.log(ship1.isSunk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIGNvb3JkKSA9PiAoe1xuICBsZW5ndGgsXG4gIGNvb3JkLFxuICBoaXRzOiBbWzEsIDJdLCBbMiwgMl1dLFxuICBpc1N1bms6IGZhbHNlLFxuICBnZXRMZW5ndGgoKSB7IHJldHVybiBsZW5ndGg7IH0sXG4gIGdldEhpdHMoKSB7IHJldHVybiB0aGlzLmhpdHM7IH0sXG59KTtcblxuY29uc3Qgc2hpcDEgPSBzaGlwRmFjdG9yeSg0KTtcbmNvbnNvbGUubG9nKHNoaXAxKTtcbmNvbnNvbGUubG9nKHNoaXAxLmdldExlbmd0aCgpKTtcbmNvbnNvbGUubG9nKHNoaXAxLmdldEhpdHMoKSk7XG5jb25zb2xlLmxvZyhzaGlwMS5pc1N1bmspO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;