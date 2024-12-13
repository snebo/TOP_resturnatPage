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

/***/ "./src/assets/displayContent.js":
/*!**************************************!*\
  !*** ./src/assets/displayContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayContent: () => (/* binding */ DisplayContent)\n/* harmony export */ });\n/* harmony import */ var _images_resturant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/resturant.jpg */ \"./src/assets/images/resturant.jpg\");\n/* harmony import */ var _images_salad1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/salad1.jpg */ \"./src/assets/images/salad1.jpg\");\n/* harmony import */ var _images_salad2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/salad2.jpg */ \"./src/assets/images/salad2.jpg\");\n/* harmony import */ var _images_salad3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/salad3.jpg */ \"./src/assets/images/salad3.jpg\");\n\n\n\n\nconst DisplayContent = (() => {\n  const defaultContent = (content_container) => {\n    content_container.innerHTML = ''\n    const main = main_content()\n    const section = menu_options()\n    content_container.append(main)\n    content_container.append(section)\n  }\n\n  const menuContent = (content_container) => {\n    content_container.innerHTML = ''\n    const main = menu_content()\n    content_container.append(main)\n  }\n  const aboutContent = (content_container) => {\n    content_container.innerHTML = ''\n    const main = about_content()\n    content_container.append(main)\n  }\n  const main_content = () => {\n    const main = document.createElement('div')\n    main.classList.add('main')\n    main.innerHTML = `<img src=\"${_images_resturant_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"family centric\" />\n        <div class=\"intro-text\">\n          <h4>New Menu</h4>\n          <h1 class=\"main_text\">Now serving Winter</h1>\n          <button>Order now &RightArrow;</button>\n        </div>`\n    return main\n  }\n  const menu_options = () => {\n    const main = document.createElement('div')\n    main.classList.add('options')\n    main.innerHTML = `<ul class=\"menu-categories\">\n          <li class=\"active\" tabindex=\"0\">Salads</li>\n          <li tabindex=\"0\">Warm Bowls</li>\n          <li tabindex=\"0\">Sides</li>\n        </ul>\n        <div class=\"menu-container\">\n          <div class=\"menu-items\">\n            <div class=\"option\">\n              <div class=\"dish-image\">\n                <img src=\"${_images_salad1_jpg__WEBPACK_IMPORTED_MODULE_1__}\" />\n                <div class=\"tag\">Popular</div>\n              </div>\n              <h3 class=\"dish-name\">Kale Ceasar</h3>\n              <p class=\"dish-discription\">\n                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,\n                chopped romaine, lime squeezes and cesear dressing\n              </p>\n              <a href=\"#\" class=\"order-link\">Order now &rightarrow;</a>\n            </div>\n            <div class=\"option\">\n              <div class=\"dish-image\">\n                <img src=\"${_images_salad2_jpg__WEBPACK_IMPORTED_MODULE_2__}\" />\n                <div class=\"tag\">Popular</div>\n              </div>\n              <h3 class=\"dish-name\">Kale Ceasar</h3>\n              <p class=\"dish-discription\">\n                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,\n                chopped romaine, lime squeezes and cesear dressing\n              </p>\n              <a href=\"#\" class=\"order-link\">Order now &rightarrow;</a>\n            </div>\n            <div class=\"option\">\n              <div class=\"dish-image\">\n                <img src=\"${_images_salad3_jpg__WEBPACK_IMPORTED_MODULE_3__}\" />\n                <div class=\"tag\">Popular</div>\n              </div>\n              <h3 class=\"dish-name\">Kale Ceasar</h3>\n              <p class=\"dish-discription\">\n                Roasted chicken, tomatoes, ppameasan crips, shavedd parmesean, shredded kale,\n                chopped romaine, lime squeezes and cesear dressing\n              </p>\n              <a href=\"#\" class=\"order-link\">Order now &rightarrow;</a>\n            </div>\n          </div>\n        </div>`\n    return main\n  }\n\n  const menu_content = () => {\n    const main = document.createElement('div')\n    main.classList.add('resturant-menu-container')\n    main.innerHTML = `<div class=\"resturant-menu\">\n          <table>\n            <tr>\n              <th>no</th>\n              <th>Item</th>\n              <th>Price</th>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Burger and Fries</td>\n              <td>$12</td>\n            </tr>\n          </table>\n        </div>`\n\n    return main\n  }\n  const about_content = () => {\n    const main = document.createElement('div')\n    main.innerHTML = `<h1>I really can't think of a way to apply this</h1>\n        <p>... hmmm since i can't use lorem in script, this is going to be a very short about section</p>`\n    return main\n  }\n  return { defaultContent, menuContent, aboutContent }\n})()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2Rpc3BsYXlDb250ZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFDQTtBQUNBO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVMsQ0FBQztBQUM1QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFLLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFLLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFLLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3R1cm5hdHBhZ2UvLi9zcmMvYXNzZXRzL2Rpc3BsYXlDb250ZW50LmpzP2Q4MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc3R1cmFudCBmcm9tICcuL2ltYWdlcy9yZXN0dXJhbnQuanBnJ1xuaW1wb3J0IGRpc2gxIGZyb20gXCIuL2ltYWdlcy9zYWxhZDEuanBnXCJcbmltcG9ydCBkaXNoMiBmcm9tIFwiLi9pbWFnZXMvc2FsYWQyLmpwZ1wiXG5pbXBvcnQgZGlzaDMgZnJvbSBcIi4vaW1hZ2VzL3NhbGFkMy5qcGdcIlxuZXhwb3J0IGNvbnN0IERpc3BsYXlDb250ZW50ID0gKCgpID0+IHtcbiAgY29uc3QgZGVmYXVsdENvbnRlbnQgPSAoY29udGVudF9jb250YWluZXIpID0+IHtcbiAgICBjb250ZW50X2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnN0IG1haW4gPSBtYWluX2NvbnRlbnQoKVxuICAgIGNvbnN0IHNlY3Rpb24gPSBtZW51X29wdGlvbnMoKVxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZChtYWluKVxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZChzZWN0aW9uKVxuICB9XG5cbiAgY29uc3QgbWVudUNvbnRlbnQgPSAoY29udGVudF9jb250YWluZXIpID0+IHtcbiAgICBjb250ZW50X2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnN0IG1haW4gPSBtZW51X2NvbnRlbnQoKVxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZChtYWluKVxuICB9XG4gIGNvbnN0IGFib3V0Q29udGVudCA9IChjb250ZW50X2NvbnRhaW5lcikgPT4ge1xuICAgIGNvbnRlbnRfY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29uc3QgbWFpbiA9IGFib3V0X2NvbnRlbnQoKVxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZChtYWluKVxuICB9XG4gIGNvbnN0IG1haW5fY29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIG1haW4uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtyZXN0dXJhbnR9XCIgYWx0PVwiZmFtaWx5IGNlbnRyaWNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tdGV4dFwiPlxuICAgICAgICAgIDxoND5OZXcgTWVudTwvaDQ+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibWFpbl90ZXh0XCI+Tm93IHNlcnZpbmcgV2ludGVyPC9oMT5cbiAgICAgICAgICA8YnV0dG9uPk9yZGVyIG5vdyAmUmlnaHRBcnJvdzs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YFxuICAgIHJldHVybiBtYWluXG4gIH1cbiAgY29uc3QgbWVudV9vcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgPHVsIGNsYXNzPVwibWVudS1jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCIgdGFiaW5kZXg9XCIwXCI+U2FsYWRzPC9saT5cbiAgICAgICAgICA8bGkgdGFiaW5kZXg9XCIwXCI+V2FybSBCb3dsczwvbGk+XG4gICAgICAgICAgPGxpIHRhYmluZGV4PVwiMFwiPlNpZGVzPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2gtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGlzaDF9XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCI+UG9wdWxhcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGlzaC1uYW1lXCI+S2FsZSBDZWFzYXI8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc2gtZGlzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBSb2FzdGVkIGNoaWNrZW4sIHRvbWF0b2VzLCBwcGFtZWFzYW4gY3JpcHMsIHNoYXZlZGQgcGFybWVzZWFuLCBzaHJlZGRlZCBrYWxlLFxuICAgICAgICAgICAgICAgIGNob3BwZWQgcm9tYWluZSwgbGltZSBzcXVlZXplcyBhbmQgY2VzZWFyIGRyZXNzaW5nXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm9yZGVyLWxpbmtcIj5PcmRlciBub3cgJnJpZ2h0YXJyb3c7PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNoLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Rpc2gyfVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ1wiPlBvcHVsYXI8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRpc2gtbmFtZVwiPkthbGUgQ2Vhc2FyPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNoLWRpc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgUm9hc3RlZCBjaGlja2VuLCB0b21hdG9lcywgcHBhbWVhc2FuIGNyaXBzLCBzaGF2ZWRkIHBhcm1lc2Vhbiwgc2hyZWRkZWQga2FsZSxcbiAgICAgICAgICAgICAgICBjaG9wcGVkIHJvbWFpbmUsIGxpbWUgc3F1ZWV6ZXMgYW5kIGNlc2VhciBkcmVzc2luZ1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJvcmRlci1saW5rXCI+T3JkZXIgbm93ICZyaWdodGFycm93OzwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzaC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkaXNoM31cIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdcIj5Qb3B1bGFyPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkaXNoLW5hbWVcIj5LYWxlIENlYXNhcjwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzaC1kaXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIFJvYXN0ZWQgY2hpY2tlbiwgdG9tYXRvZXMsIHBwYW1lYXNhbiBjcmlwcywgc2hhdmVkZCBwYXJtZXNlYW4sIHNocmVkZGVkIGthbGUsXG4gICAgICAgICAgICAgICAgY2hvcHBlZCByb21haW5lLCBsaW1lIHNxdWVlemVzIGFuZCBjZXNlYXIgZHJlc3NpbmdcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwib3JkZXItbGlua1wiPk9yZGVyIG5vdyAmcmlnaHRhcnJvdzs8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgIHJldHVybiBtYWluXG4gIH1cblxuICBjb25zdCBtZW51X2NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdyZXN0dXJhbnQtbWVudS1jb250YWluZXInKVxuICAgIG1haW4uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyZXN0dXJhbnQtbWVudVwiPlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPm5vPC90aD5cbiAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QnVyZ2VyIGFuZCBGcmllczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4kMTI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICByZXR1cm4gbWFpblxuICB9XG4gIGNvbnN0IGFib3V0X2NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgPGgxPkkgcmVhbGx5IGNhbid0IHRoaW5rIG9mIGEgd2F5IHRvIGFwcGx5IHRoaXM8L2gxPlxuICAgICAgICA8cD4uLi4gaG1tbSBzaW5jZSBpIGNhbid0IHVzZSBsb3JlbSBpbiBzY3JpcHQsIHRoaXMgaXMgZ29pbmcgdG8gYmUgYSB2ZXJ5IHNob3J0IGFib3V0IHNlY3Rpb248L3A+YFxuICAgIHJldHVybiBtYWluXG4gIH1cbiAgcmV0dXJuIHsgZGVmYXVsdENvbnRlbnQsIG1lbnVDb250ZW50LCBhYm91dENvbnRlbnQgfVxufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/displayContent.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/displayContent.js */ \"./src/assets/displayContent.js\");\n\nconsole.log('Hello World!');\nconst main_content = document.querySelector('#content');\n\nconst nav_buttons = document.querySelectorAll('.page-shift')\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__.DisplayContent.defaultContent(main_content)\n})\nnav_buttons.forEach(element => {\n    element.addEventListener('click', (e) => {\n        console.log('clicked')\n        switch (e.target.id) {\n            case \"home\":\n                _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__.DisplayContent.defaultContent(main_content)\n                break\n            case \"menu\":\n                _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__.DisplayContent.menuContent(main_content)\n                break\n            case \"about\":\n                _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__.DisplayContent.aboutContent(main_content)\n                break\n            default:\n                _assets_displayContent_js__WEBPACK_IMPORTED_MODULE_0__.DisplayContent.defaultContent(main_content)\n                break\n        }\n    })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFjO0FBQzlCO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBLGdCQUFnQixxRUFBYztBQUM5QjtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFjO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0dXJuYXRwYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2Fzc2V0cy9kaXNwbGF5Q29udGVudC5qcyc7XG5jb25zb2xlLmxvZygnSGVsbG8gV29ybGQhJyk7XG5jb25zdCBtYWluX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBuYXZfYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLXNoaWZ0JylcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIERpc3BsYXlDb250ZW50LmRlZmF1bHRDb250ZW50KG1haW5fY29udGVudClcbn0pXG5uYXZfYnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgRGlzcGxheUNvbnRlbnQuZGVmYXVsdENvbnRlbnQobWFpbl9jb250ZW50KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgICAgIERpc3BsYXlDb250ZW50Lm1lbnVDb250ZW50KG1haW5fY29udGVudClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XG4gICAgICAgICAgICAgICAgRGlzcGxheUNvbnRlbnQuYWJvdXRDb250ZW50KG1haW5fY29udGVudClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBEaXNwbGF5Q29udGVudC5kZWZhdWx0Q29udGVudChtYWluX2NvbnRlbnQpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/assets/images/resturant.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/resturant.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfc0f7d8602553eb4595.jpg";

/***/ }),

/***/ "./src/assets/images/salad1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/salad1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ca30454905fe34c61d8.jpg";

/***/ }),

/***/ "./src/assets/images/salad2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/salad2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cde29546b0346d795138.jpg";

/***/ }),

/***/ "./src/assets/images/salad3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/salad3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67cecfb1b2e459850789.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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