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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Montserrat/Montserrat-Light.ttf */ \"./src/Montserrat/Montserrat-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* general */\\n@font-face {\\n    font-family: Montserrat;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n*, ::before, *::after {\\n    box-sizing: border-box;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    margin: 0;\\n}\\n\\nhtml {\\n    font-size: 62.5%;\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n    font-family: Montserrat, sans-serif;\\n    font-size: 1.6rem;\\n}\\n\\n#content {\\n    flex: 1;\\n    display: flex;\\n    background: #40562d;\\n    justify-content: center;\\n}\\n\\n.header {\\n    padding: 0 25px;\\n    text-decoration: 2px underline #e64f2f;\\n    text-underline-offset: 12px;\\n}\\n\\n/* navigation */\\n.nav-bar {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding: 10px;\\n}\\n\\n.logo {\\n    width: 200px;\\n}\\n\\n.nav-links {\\n    display: flex;\\n    list-style: none;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n.nav-link {\\n    position: relative;\\n    padding: 10px 5px;\\n    margin: 0 25px;\\n}\\n\\n.nav-link:hover {\\n    cursor: pointer;\\n}\\n\\n.nav-link::after {\\n    content: '';\\n    position: absolute;\\n    width: 100%;\\n    height: 2px;\\n    bottom: 0;\\n    left: 0;\\n    background-color: #e64f2f;\\n    opacity: 1;\\n    transform: scaleX(0);\\n    transform-origin: center;\\n    transition: opacity 300ms, transform 300ms;\\n}\\n\\n.nav-link:hover::after{\\n    transform: scale(1);\\n}\\n\\n/* home page */\\n.home {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.container {\\n    flex: 1.5;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    position: relative;\\n    width: 100%;\\n    height: auto;\\n    min-height: 400px;\\n    padding: 0 50px;\\n    background: #ebefe1;\\n    line-height: 2;\\n}\\n\\n.about {\\n    width: 50%;\\n    border-bottom: 2px solid #e64f2f;\\n}\\n\\n.reservation {\\n    display: inline-block;\\n    width: 200px;\\n    height: auto;\\n    margin: 25px 0;\\n    padding: 10px;\\n    border-radius: 10px;\\n    background: #e64f2f;\\n    text-decoration: none;\\n    color: white;\\n    text-align: center;\\n    font-weight: 700;\\n}\\n\\n.reservation:hover, .reservation:active {\\n    background: #d43a1a;\\n}\\n\\n.reservation:active {\\n    border: 5px solid #f5b9ac;\\n}\\n\\n.image-container {\\n    flex: 1;\\n}\\n\\n.img {\\n    width: 100%;\\n    height: auto;\\n    vertical-align: middle;\\n}\\n\\n/* menu */\\n.menu {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 25px;\\n    padding: 50px;\\n    outline: 2px solid #e64f2f;\\n    outline-offset: -3rem;\\n    background: white;\\n    text-align: center;\\n}\\n\\n.menu-category {\\n    list-style: none;\\n    margin: 0;\\n    padding: 0;\\n    text-align: center;\\n    font-size: 2rem;\\n}\\n\\n.menu-category-header {\\n    font-weight: 700;\\n}\\n\\n.menu-item {\\n    display: flex;\\n    justify-content: center;\\n    font-size: 1.6rem;\\n    font-style: italic;\\n}\\n\\n.menu-item p {\\n    padding: 0 10px;\\n}\\n\\n.spark {\\n    width: 25px;\\n    height: 25px;\\n    margin: 25px;\\n}\\n\\n/* contact */\\n.contact {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 25px;\\n    background: #ebefe1;\\n    text-align: center;\\n}\\n\\n.contact-info {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n\\n\\n\\n/* media queries */\\n@media (max-width: 600px) {\\n    .home {\\n        flex-direction: column;\\n        text-align: center;\\n    }\\n\\n    .about, .reservation {\\n        align-self: center;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/img-01.jpg":
/*!*******************************!*\
  !*** ./src/images/img-01.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/img-01.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/images/img-01.jpg?");

/***/ }),

/***/ "./src/images/spark-bistro-logo.jpeg":
/*!*******************************************!*\
  !*** ./src/images/spark-bistro-logo.jpeg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/spark-bistro-logo.jpeg\");\n\n//# sourceURL=webpack://restaurant-page/./src/images/spark-bistro-logo.jpeg?");

/***/ }),

/***/ "./src/images/spark.jpg":
/*!******************************!*\
  !*** ./src/images/spark.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/spark.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/images/spark.jpg?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n    const content = document.querySelector('#content');\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    // contact info\n    const contactInfo = document.createElement('div');\n    const contactInfoHeader = document.createElement('h2');\n    const phone = document.createElement('div');\n    const email = document.createElement('div');\n\n    contactInfo.classList.add('contact-info');\n    contactInfoHeader.classList.add('header');\n    phone.classList.add('phone');\n    email.classList.add('email');\n    \n    contactInfoHeader.innerHTML = 'CONTACT';\n    phone.innerHTML = '+82 02-543-8986';\n    email.innerHTML = 'shawnpark@outlook.com';\n\n    contactInfo.appendChild(contactInfoHeader);\n    contactInfo.appendChild(phone);\n    contactInfo.appendChild(email);\n\n    // hours & location\n    const hoursAndLocation = document.createElement('div');\n    const hoursAndLocationHeader = document.createElement('h2');\n    const address = document.createElement('div');\n    const daysOfOperation = document.createElement('div');\n    const lunchHours = document.createElement('div');\n    const dinnerHours = document.createElement('div');\n\n    hoursAndLocation.classList.add('hours-and-location');\n    hoursAndLocationHeader.classList.add('header');\n    address.classList.add('address');\n    daysOfOperation.classList.add('days-of-operation');\n    lunchHours.classList.add('lunch-hours');\n    dinnerHours.classList.add('dinner-hours');\n\n    hoursAndLocationHeader.innerHTML = 'HOURS AND LOCATION';\n    address.innerHTML = '330 Apgujeong-ro, Gangnam-gu, Seoul';\n    daysOfOperation.innerHTML = 'tues - sat';\n    lunchHours.innerHTML = 'lunch: 12pm - 3pm';\n    dinnerHours.innerHTML = 'dinner: 6pm - 10pm';\n\n    hoursAndLocation.appendChild(hoursAndLocationHeader);\n    hoursAndLocation.appendChild(address);\n    hoursAndLocation.appendChild(daysOfOperation);\n    hoursAndLocation.appendChild(lunchHours);\n    hoursAndLocation.appendChild(dinnerHours);\n\n    // add contact info and hours & location to container\n    contact.append(contactInfo);\n    contact.append(hoursAndLocation)\n\n    // add map to container\n    const map = document.createElement('iframe');\n    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.142397871777!2d127.03548301533044!3d37.52814043408367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3886677d925%3A0xd1e237b9033d955e!2sSpark!5e0!3m2!1sen!2sus!4v1634587806354!5m2!1sen!2sus';\n    map.width = 400;\n    map.height = 300;\n    map.loading = 'lazy';\n    contact.appendChild(map);\n\n    content.appendChild(contact);\n\n    \n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _images_img_01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/img-01.jpg */ \"./src/images/img-01.jpg\");\n\n\nconst homepage = () => {\n    const content = document.querySelector('#content');\n\n    const home = document.createElement('div');\n    const imageContainer = document.createElement('div');\n    const img01 = document.createElement('img');\n    const container = document.createElement('div');\n    const about = document.createElement('h2');\n    const description = document.createElement('p');\n    const reservation = document.createElement('a');\n\n    home.classList.add('home');\n    imageContainer.classList.add('image-container');\n    img01.classList.add('img');\n    imageContainer.appendChild(img01);\n    container.classList.add('container');\n    about.classList.add('about');\n    reservation.classList.add('reservation');\n\n    about.innerHTML = 'ABOUT SPARK'\n    description.innerHTML = \"Since 2016, Bistro Spark has brought the best of Italian cuisine to the busy neighborhood of Apgujeong, Seoul. Stepping off the loud and trendy Apgujeong Rodeo Street and into Bistro Spark, diners are transported into a cozy space that evokes the ambiance of Italy's finest restaurants. Chef Shawn Park serves up classic menu items like abalone risotto and wagyu carpaccio that have attracted celebrities and chefs across the world.\"\n    img01.src = _images_img_01_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    reservation.innerHTML = 'Reservations';\n    reservation.href = 'https://app.catchtable.co.kr/ct/shop/spark';\n    reservation.target = '_blank';\n\n    container.appendChild(about);\n    container.appendChild(description);\n    container.appendChild(reservation);\n    \n    home.appendChild(container);\n    home.appendChild(imageContainer);\n\n    content.appendChild(home);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _images_spark_bistro_logo_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/spark-bistro-logo.jpeg */ \"./src/images/spark-bistro-logo.jpeg\");\n\n\n\n\n\n\n// nav bar\nconst nav = () => {\n    const body = document.querySelector('body');\n    const content = document.querySelector('#content');\n    \n    const navbar = document.createElement('nav');\n    const logo = document.createElement('img');\n\n    const navlinks = document.createElement('ul');\n    const homeTab = document.createElement('li');\n    const menuTab = document.createElement('li');\n    const contactTab = document.createElement('li');\n    \n    navbar.classList.add('nav-bar');\n    logo.classList.add('logo');\n    navlinks.classList.add('nav-links');\n    homeTab.classList.add('nav-link');\n    menuTab.classList.add('nav-link');\n    contactTab.classList.add('nav-link');\n\n    logo.src = _images_spark_bistro_logo_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    homeTab.innerHTML = 'Home';\n    menuTab.innerHTML = 'Menu';\n    contactTab.innerHTML = 'Contact';\n    \n    homeTab.addEventListener('click', () => {\n        content.innerHTML = '';\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepage)();\n    })\n    menuTab.addEventListener('click', () => {\n        content.innerHTML = '';\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n    })\n    contactTab.addEventListener('click', () => {\n        content.innerHTML = '';\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n    })\n    \n    navlinks.appendChild(homeTab);\n    navlinks.appendChild(menuTab);\n    navlinks.appendChild(contactTab);\n\n    navbar.appendChild(logo);\n    navbar.appendChild(navlinks);\n\n    body.prepend(navbar);\n}\n\nnav();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_spark_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/spark.jpg */ \"./src/images/spark.jpg\");\n\n\nconst menu = () => {\n    const content = document.querySelector('#content');\n    function addItems(menuCategory, menuItems, categoryName) {\n        const header = document.createElement('div');\n        header.classList.add('menu-category-header');\n        header.innerHTML = categoryName;\n        menuCategory.appendChild(header);\n        for (const item in menuItems) {\n            const menuItem = document.createElement('li');\n            menuItem.classList.add('menu-item');\n            const itemName = document.createElement('p');\n            const itemPrice = document.createElement('p');\n\n            itemName.innerHTML = item;\n            itemPrice.innerHTML = menuItems[item];\n            \n            menuItem.appendChild(itemName);\n            menuItem.appendChild(itemPrice);\n            menuCategory.appendChild(menuItem);\n        }\n    }\n\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    const menuHeader = document.createElement('h2');\n    menuHeader.classList.add('header');\n    menuHeader.innerHTML = 'SPARK MENU';\n    menu.appendChild(menuHeader);\n\n    // starters\n    const starters = document.createElement('ul');\n    starters.classList.add('menu-category');\n    const starterItems = {\n        'sicilian arancini': '15,000 won',\n        'bruschetta w/ tomatoes, burrata, & anchovies': '14,000 won',\n        'signature octopus in garlic oil': '23,000 won',\n        'grilled wild oyster mushrooms & wagyu carpaccio': '22,000 won'\n    };\n\n    // sides\n    const sides = document.createElement('ul');\n    sides.classList.add('menu-category');\n    const sideItems = {\n        'vegetable plate': '14,000 won',\n        'truffle fries': '13,000 won'\n    };\n\n    // pasta and risotto\n    const pasta = document.createElement('ul');\n    pasta.classList.add('menu-category');\n    const pastaItems = {\n        'oil spaghetti w/ fresh seafood medley': '34,000 won',\n        'paccheri pasta w/ truffle cream sauce': '33,000 won',\n        'spaghetti w/ bolognese sauce': '32,000 won',\n        'soft steamed abalone risotto': '34,000 won'\n    };\n\n    // mains\n    const mains = document.createElement('ul');\n    mains.classList.add('menu-category');\n    const mainItems = {\n        'grilled iberico pork belly': '34,000 won',\n        'charcoal grilled beef rib steak': '39,000 won'\n    };\n\n    // desserts\n    const desserts = document.createElement('ul');\n    desserts.classList.add('menu-category');\n    const dessertItems = {\n        'panettone w/ vanilla ice cream': '15,000 won',\n        'affogato': '7,000 won'\n    };\n\n    addItems(starters, starterItems, 'starters');\n    addItems(sides, sideItems, 'sides');\n    addItems(pasta, pastaItems, 'pasta & risotto');\n    addItems(mains, mainItems, 'mains');\n    addItems(desserts, dessertItems, 'desserts');\n\n    // menu\n    const spark = document.createElement('img');\n    spark.classList.add('spark');\n    spark.src = _images_spark_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    menu.appendChild(spark.cloneNode(true))\n    menu.appendChild(starters);\n    menu.appendChild(spark.cloneNode(true))\n    menu.appendChild(sides);\n    menu.appendChild(spark.cloneNode(true))\n    menu.appendChild(pasta);\n    menu.appendChild(spark.cloneNode(true))\n    menu.appendChild(mains);\n    menu.appendChild(spark.cloneNode(true))\n    menu.appendChild(desserts);\n    menu.appendChild(spark.cloneNode(true))\n\n    content.appendChild(menu);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/Montserrat/Montserrat-Light.ttf":
/*!*********************************************!*\
  !*** ./src/Montserrat/Montserrat-Light.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02afb26fe72fcc052988.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Montserrat/Montserrat-Light.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;