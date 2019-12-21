/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/scripts/index.js'));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/breadcrumbs.css':
      /*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/breadcrumbs.css ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n.breadcrumbs {\\n  display: inline-block;\\n  position: relative;\\n  opacity: 0;\\n  margin: 0 20px;\\n  line-height: 20px;\\n  border-radius: var(--border-radius);\\n  padding: 0 10px;\\n  background-color: var(--menu-color);\\n  z-index: 1;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/breadcrumbs.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css':
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/submit.svg */ "./src/images/submit.svg"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/reject.svg */ "./src/images/reject.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n:root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n.dialog-container {\\n  display: flex;\\n  position: fixed;\\n  overflow: hidden;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n  background-color: var(--inactive-background-color);\\n  z-index: 999;\\n}\\n.dialog-container .dialog {\\n  position: relative;\\n  margin: auto;\\n  box-shadow: var(--box-shadow);\\n}\\n.dialog-container .dialog .content input[type=text] {\\n  width: 100%;\\n  line-height: 40px;\\n  padding: 0 20px;\\n  font-size: 1.4rem;\\n  font-weight: bold;\\n  border: 0;\\n  box-sizing: border-box;\\n}\\n.dialog-container .dialog .controls {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  background-color: #fff;\\n}\\n.dialog-container .dialog .controls button {\\n  display: block;\\n  width: 40px;\\n  height: 40px;\\n  border: 0;\\n  background-color: transparent;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  cursor: pointer;\\n}\\n.dialog-container .dialog .controls button.submit {\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\n  background-size: 50%;\\n}\\n.dialog-container .dialog .controls button.reject {\\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center center;\\n  background-size: 50%;\\n}\\n.dialog-container .dialog .controls button:hover {\\n  background-color: var(--hover-button-color);\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/dialog.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/editor.css':
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/editor.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/submit.svg */ "./src/images/submit.svg"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/reject.svg */ "./src/images/reject.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n:root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n@keyframes rotating {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  50%, 100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes fading-moving-top {\\n  0% {\\n    top: 50px;\\n    opacity: 0;\\n  }\\n  100% {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n@keyframes fading-moving-left {\\n  0% {\\n    left: -50px;\\n    opacity: 0;\\n  }\\n  100% {\\n    left: 0;\\n    opacity: 1;\\n  }\\n}\\n@keyframes fading {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes bubble {\\n  0% {\\n    transform: scale(1);\\n  }\\n  50% {\\n    transform: scale(1.1);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n}\\n@keyframes shaking {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  33% {\\n    transform: rotate(-5deg);\\n  }\\n  66% {\\n    transform: rotate(5deg);\\n  }\\n  100% {\\n    transform: rotate(0);\\n  }\\n}\\n@keyframes disappearing {\\n  0% {\\n    transform: scale(1);\\n  }\\n  50% {\\n    transform: scale(1.1);\\n  }\\n  100% {\\n    transform: scale(0);\\n  }\\n}\\n.editor {\\n  display: flex;\\n  position: fixed;\\n  overflow: hidden;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n  background-color: var(--inactive-background-color);\\n  z-index: 999;\\n}\\n.editor .note {\\n  position: relative;\\n  width: 100%;\\n  height: 70%;\\n  max-width: 500px;\\n  margin: auto;\\n  padding-top: 80px;\\n  box-sizing: border-box;\\n  position: relative;\\n  box-shadow: var(--box-shadow);\\n}\\n.editor .note .controls {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  background-color: #fff;\\n  max-width: 500px;\\n  position: absolute;\\n  top: 0;\\n}\\n.editor .note .controls .reject,\\n.editor .note .controls .submit {\\n  display: block;\\n  width: 40px;\\n  height: 40px;\\n  border: 0;\\n  background-color: transparent;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  cursor: pointer;\\n}\\n.editor .note .controls .reject.submit,\\n.editor .note .controls .submit.submit {\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\n  background-size: 50%;\\n}\\n.editor .note .controls .reject.reject,\\n.editor .note .controls .submit.reject {\\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center center;\\n  background-size: 50%;\\n}\\n.editor .note .controls .reject:hover,\\n.editor .note .controls .submit:hover {\\n  background-color: var(--hover-button-color);\\n}\\n.editor .note .controls .input__note_title {\\n  width: 100%;\\n  line-height: 40px;\\n  padding: 0 20px;\\n  font-size: 1.4rem;\\n  font-weight: bold;\\n  border: 0;\\n  box-sizing: border-box;\\n  background-color: var(--folder-color);\\n}\\n.editor .note .textarea__note_content {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  box-sizing: border-box;\\n  resize: none;\\n  border: 0;\\n  padding: 20px;\\n  font-size: 1.2rem;\\n}\\n.editor .note .textarea__note_content::placeholder {\\n  color: var(--placeholder-color);\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/editor.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/grid.css':
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/submit.svg */ "./src/images/submit.svg"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/folder.svg */ "./src/images/folder.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n.grid {\\n  display: grid;\\n  justify-content: center;\\n  padding: 25px 20px;\\n  grid: 240px/repeat(auto-fill, 200px);\\n  grid-gap: var(--grid-gap);\\n  user-select: none;\\n  position: relative;\\n}\\n.grid .item {\\n  display: flex;\\n  flex-direction: column;\\n  width: 200px;\\n  height: 240px;\\n  border-radius: var(--border-radius);\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  position: relative;\\n}\\n.grid .item .complete {\\n  position: absolute;\\n  border: 0;\\n  width: 30px;\\n  height: 30px;\\n  margin: 10px;\\n  border-radius: 50%;\\n  bottom: -40px;\\n  right: 0;\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center var(--hover-button-color);\\n  background-size: 60%;\\n  cursor: pointer;\\n  transition: bottom var(--transition-time), background-color var(--transition-time);\\n}\\n.grid .item .complete:hover {\\n  background-color: var(--placeholder-color);\\n}\\n.grid .item .title-section {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #000;\\n  padding: 0 10px;\\n  min-height: 40px;\\n}\\n.grid .item .title-section .title {\\n  display: block;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  line-height: 40px;\\n  font-size: 1.5rem;\\n}\\n.grid .item .checkbox {\\n  display: none;\\n}\\n.grid .item .checkbox + .checkbox__label {\\n  cursor: pointer;\\n  min-width: 30px;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  box-sizing: border-box;\\n  position: relative;\\n  border: 5px solid var(--hover-button-color);\\n  transition: border var(--transition-time), box-shadow var(--transition-time);\\n}\\n.grid .item .checkbox:checked + .checkbox__label {\\n  border: 15px solid var(--hover-button-color);\\n}\\n.grid .item .checkbox:not(:checked) + .checkbox__label {\\n  border: 5px solid transparent;\\n}\\n.grid .item:hover .complete {\\n  bottom: 0;\\n}\\n.grid .item:hover .checkbox + .checkbox__label {\\n  box-shadow: inset 0 0 0 5px var(--hover-button-color);\\n}\\n.grid .item.folder {\\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center 65% var(--folder-color);\\n  background-size: 60%;\\n  transition: background-color var(--transition-time);\\n}\\n.grid .item.folder:hover {\\n  background-color: var(--folder-hover-color);\\n}\\n.grid .item.note {\\n  transition: box-shadow var(--transition-time);\\n  box-shadow: var(--box-shadow);\\n}\\n.grid .item.note:hover {\\n  box-shadow: 0 0 10px 5px var(--box-shadow-color);\\n}\\n.grid .item.note .content {\\n  display: block;\\n  justify-self: stretch;\\n  margin: 10px;\\n  margin-top: 0;\\n  padding-right: 5px;\\n  word-break: break-word;\\n  overflow-y: auto;\\n}\\n.grid .item.note .content p {\\n  padding: 5px 0;\\n  margin: 0;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/grid.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/hello.css':
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/hello.css ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/favicon.svg */ "./src/images/favicon.svg"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/create_note.svg */ "./src/images/create_note.svg"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../images/create_folder.svg */ "./src/images/create_folder.svg"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../images/complete.svg */ "./src/images/complete.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n:root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n@keyframes rotating {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  50%, 100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes fading-moving-top {\\n  0% {\\n    top: 50px;\\n    opacity: 0;\\n  }\\n  100% {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n@keyframes fading-moving-left {\\n  0% {\\n    left: -50px;\\n    opacity: 0;\\n  }\\n  100% {\\n    left: 0;\\n    opacity: 1;\\n  }\\n}\\n@keyframes fading {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes bubble {\\n  0% {\\n    transform: scale(1);\\n  }\\n  50% {\\n    transform: scale(1.1);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n}\\n@keyframes shaking {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  33% {\\n    transform: rotate(-5deg);\\n  }\\n  66% {\\n    transform: rotate(5deg);\\n  }\\n  100% {\\n    transform: rotate(0);\\n  }\\n}\\n@keyframes disappearing {\\n  0% {\\n    transform: scale(1);\\n  }\\n  50% {\\n    transform: scale(1.1);\\n  }\\n  100% {\\n    transform: scale(0);\\n  }\\n}\\n.hello {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #fff;\\n  overflow: hidden;\\n  user-select: none;\\n}\\n.hello .logo {\\n  min-width: 100px;\\n  min-height: 100px;\\n  padding: 20px;\\n  border-radius: 50%;\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center #fff;\\n  background-size: 80%;\\n  position: relative;\\n  top: 30px;\\n  z-index: 2;\\n  animation: rotating 6s 1s infinite normal ease-in-out;\\n}\\n.hello .title {\\n  width: 100%;\\n  text-align: center;\\n  display: block;\\n  font-size: 3rem;\\n  color: #fff;\\n  padding: 30px 0;\\n  font-weight: bold;\\n  letter-spacing: 5px;\\n  background-color: var(--accent-color);\\n}\\n.hello .details {\\n  font-size: 1rem;\\n  padding: 30px 0;\\n}\\n.hello .button {\\n  border-radius: var(--button-border-radius);\\n  border: 0;\\n  background-color: var(--menu-button-color);\\n  margin: 5px 0;\\n  padding: 5px 10px;\\n  line-height: 20px;\\n  cursor: pointer;\\n  text-transform: uppercase;\\n  font-size: 1.2rem;\\n  padding: 8px 100px;\\n  transition: all 0.5s;\\n}\\n.hello .button.menu__create_note:before, .hello .button.menu__create_folder:before, .hello .button.menu__open_completed:before {\\n  content: \\"\\";\\n  display: block;\\n  width: 20px;\\n  height: 20px;\\n  float: left;\\n  margin-right: 5px;\\n}\\n.hello .button.menu__create_note:before {\\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.hello .button.menu__create_folder:before {\\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.hello .button.menu__open_completed:before {\\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.hello .button:hover {\\n  background-color: var(--menu-button-hover-color);\\n}\\n.hello .button:hover {\\n  background-color: var(--accent-color);\\n  padding: 8px 200px;\\n  color: #fff;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/hello.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/index.css':
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "html *::-webkit-scrollbar {\\n  width: 10px;\\n}\\nhtml *::-webkit-scrollbar-thumb {\\n  border-radius: 10px;\\n  background-color: transparent;\\n  box-sizing: border-box;\\n  border: 2px solid rgba(0, 0, 0, 0.2);\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: \\"Zilla Slab\\", serif;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  font-family: \\"Zilla Slab\\", serif;\\n}\\ninput:focus,\\nbutton:focus,\\ntextarea:focus {\\n  outline: none;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/index.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/list.css':
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/list.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n:root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n.list-section {\\n  display: flex;\\n  position: fixed;\\n  overflow: hidden;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n  background-color: var(--inactive-background-color);\\n  z-index: 999;\\n  overflow-y: hidden;\\n}\\n.list-section .reject {\\n  position: fixed;\\n  right: 0;\\n  top: 0;\\n  width: 60px;\\n  height: 60px;\\n  margin: 20px;\\n  border: 0;\\n  border-radius: 50%;\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\n  background-size: 40%;\\n  cursor: pointer;\\n  transition: background-color var(--transition-time);\\n}\\n.list-section .reject:hover {\\n  background-color: var(--hover-button-color);\\n}\\n.list-section .list {\\n  width: 100%;\\n  max-width: 500px;\\n  max-height: 100%;\\n  margin: auto;\\n  position: relative;\\n}\\n.list-section .list .item {\\n  height: auto;\\n  padding: 10px;\\n  border-radius: var(--border-radius);\\n  box-shadow: var(--box-shadow);\\n  margin: 10px 0;\\n}\\n.list-section .list .item .title {\\n  font-size: 2rem;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n}\\n.list-section .list .item .content {\\n  font-size: 1.2rem;\\n}\\n.list-section .list .item .content p {\\n  margin: 0;\\n}\\n.list-section .list .item label {\\n  display: none;\\n}\\n.list-section .list .item input {\\n  display: none;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/list.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/menu.css':
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/create_note.svg */ "./src/images/create_note.svg"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/create_folder.svg */ "./src/images/create_folder.svg"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../images/complete.svg */ "./src/images/complete.svg"));\n// Module\nexports.push([module.i, ":root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n:root {\\n  --accent-color: rgb(42, 209, 0);\\n  --transition-time: 0.25s;\\n  --border-radius: 10px;\\n  --button-border-radius: 5px;\\n  --grid-gap: 20px;\\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\\n  --box-shadow-color: #aaa;\\n  --placeholder-color: rgba(0, 0, 0, 0.5);\\n  --hover-button-color: rgba(0, 0, 0, 0.1);\\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\\n  --inactive-background-opacity: 0.75;\\n  --menu-color: #ddd;\\n  --menu-button-color: #eee;\\n  --menu-button-hover-color: #eaeaea;\\n  --folder-color: #eee;\\n  --folder-hover-color: #ddd;\\n}\\n\\n.menu {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  opacity: 0;\\n  padding: 20px;\\n  z-index: 1;\\n}\\n.menu button {\\n  border-radius: var(--button-border-radius);\\n  border: 0;\\n  background-color: var(--menu-button-color);\\n  margin: 5px 0;\\n  padding: 5px 10px;\\n  line-height: 20px;\\n  cursor: pointer;\\n  font-size: 1rem;\\n}\\n.menu button.menu__create_note:before, .menu button.menu__create_folder:before, .menu button.menu__open_completed:before {\\n  content: \\"\\";\\n  display: block;\\n  width: 20px;\\n  height: 20px;\\n  float: left;\\n  margin-right: 5px;\\n}\\n.menu button.menu__create_note:before {\\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.menu button.menu__create_folder:before {\\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.menu button.menu__open_completed:before {\\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat center center;\\n  background-size: 80%;\\n}\\n.menu button:hover {\\n  background-color: var(--menu-button-hover-color);\\n}\\n.menu button.menu__open_completed {\\n  background-color: var(--accent-color);\\n  color: #fff;\\n  font-weight: bold;\\n}\\n.menu button:not(:last-child) {\\n  margin-right: 10px;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/styles/menu.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], "{").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== \'string\') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/["\'() \\t\\n]/.test(url) || needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, \'\\\\n\'), "\\"");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?"
        );

        /***/
      },

    /***/ './src/classes/Animation.js':
      /*!**********************************!*\
  !*** ./src/classes/Animation.js ***!
  \**********************************/
      /*! exports provided: AnimeDir, Animation */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimeDir\", function() { return AnimeDir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AnimeDir = {\n  Normal: 'normal',\n  Reverse: 'reverse'\n};\nvar Animation =\n/*#__PURE__*/\nfunction () {\n  function Animation() {\n    _classCallCheck(this, Animation);\n  }\n\n  _createClass(Animation, null, [{\n    key: \"Animate\",\n    value: function Animate(object, props, callback) {\n      if (!object) return;\n      if (!props.time) props.time = 500;\n      if (!props.animeType) props.animeType = 'ease-in-out';\n      if (!props.dir) props.dir = AnimeDir.Normal;\n      if (!props.count) props.count = 1;\n      if (!props.fillMode) props.fillMode = 'forwards';\n      object.style.animation = [props.name, \"\".concat(props.time / 1000, \"s\"), props.dir, props.animeType, props.count, props.fillMode].join(' ');\n      object.style.pointerEvents = 'none';\n      setTimeout(function () {\n        if (callback) callback();\n        object.style.animation = '';\n        object.style.pointerEvents = 'auto';\n      }, props.time);\n    }\n  }]);\n\n  return Animation;\n}();\n\n//# sourceURL=webpack:///./src/classes/Animation.js?"
        );

        /***/
      },

    /***/ './src/classes/Breadcrumbs.js':
      /*!************************************!*\
  !*** ./src/classes/Breadcrumbs.js ***!
  \************************************/
      /*! exports provided: Breadcrumbs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/classes/Animation.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Breadcrumbs =\n/*#__PURE__*/\nfunction () {\n  function Breadcrumbs(element) {\n    var _this = this;\n\n    _classCallCheck(this, Breadcrumbs);\n\n    this.path = [\'root\'];\n    this.element = element;\n    _Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(this.element, {\n      name: \'fading-moving-left\',\n      dir: _Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Normal\n    }, function () {\n      _this.element.style.opacity = 1;\n    });\n    this.Redraw();\n  }\n\n  _createClass(Breadcrumbs, [{\n    key: "AddPath",\n    value: function AddPath(path) {\n      this.path.push(path);\n      this.Redraw();\n      _Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(this.element, {\n        name: \'bubble\',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Normal,\n        animeType: \'cubic-bezier(1.000, 1.030, 0.045, 1.475)\'\n      });\n    }\n  }, {\n    key: "RemovePath",\n    value: function RemovePath() {\n      this.path.pop();\n      this.Redraw();\n      _Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(this.element, {\n        name: \'bubble\',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Normal,\n        animeType: \'cubic-bezier(1.000, 1.030, 0.045, 1.475)\'\n      });\n    }\n  }, {\n    key: "Redraw",\n    value: function Redraw() {\n      this.element.innerText = this.path.join(\' / \');\n    }\n  }]);\n\n  return Breadcrumbs;\n}();\n\n//# sourceURL=webpack:///./src/classes/Breadcrumbs.js?'
        );

        /***/
      },

    /***/ './src/classes/Dialog.js':
      /*!*******************************!*\
  !*** ./src/classes/Dialog.js ***!
  \*******************************/
      /*! exports provided: Dialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return Dialog; });\n/* harmony import */ var _scripts_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/dialog */ \"./src/scripts/dialog.js\");\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation */ \"./src/classes/Animation.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Dialog =\n/*#__PURE__*/\nfunction () {\n  function Dialog() {\n    _classCallCheck(this, Dialog);\n  }\n\n  _createClass(Dialog, null, [{\n    key: \"Prompt\",\n    value: function Prompt(question, callback) {\n      var _this = this;\n\n      this.dialogTemplate = Object(_scripts_dialog__WEBPACK_IMPORTED_MODULE_0__[\"initDialog\"])();\n      this.dialog = this.dialogTemplate.querySelector('.dialog');\n      var input = document.createElement('input');\n      var submit = document.createElement('button');\n      var reject = document.createElement('button');\n      input.setAttribute('class', 'dialog__title');\n      input.setAttribute('type', 'text');\n      submit.setAttribute('class', 'submit');\n      reject.setAttribute('class', 'reject');\n      input.placeholder = question;\n      submit.addEventListener('click', function () {\n        _this.close(_this.dialogTemplate);\n\n        callback(input.value);\n      });\n      reject.addEventListener('click', function () {\n        return _this.close(_this.dialogTemplate);\n      });\n      this.dialog.querySelector('.content').appendChild(input);\n      this.dialog.querySelector('.controls').appendChild(submit);\n      this.dialog.querySelector('.controls').appendChild(reject);\n      document.body.appendChild(this.dialogTemplate);\n      _Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"].Animate(this.dialogTemplate, {\n        name: 'fading',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_1__[\"AnimeDir\"].Normal\n      });\n      _Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"].Animate(this.dialog, {\n        name: 'fading-moving-top',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_1__[\"AnimeDir\"].Normal\n      });\n    }\n  }, {\n    key: \"Confirm\",\n    value: function Confirm() {}\n  }, {\n    key: \"Alert\",\n    value: function Alert() {}\n  }, {\n    key: \"DatePicker\",\n    value: function DatePicker() {}\n  }, {\n    key: \"Notify\",\n    value: function Notify() {}\n  }, {\n    key: \"close\",\n    value: function close(obj) {\n      _Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"].Animate(this.dialog, {\n        name: 'fading-moving-top',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_1__[\"AnimeDir\"].Reverse\n      });\n      _Animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"].Animate(this.dialogTemplate, {\n        name: 'fading',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_1__[\"AnimeDir\"].Reverse\n      }, function () {\n        document.body.removeChild(obj);\n      });\n    }\n  }]);\n\n  return Dialog;\n}();\n\n//# sourceURL=webpack:///./src/classes/Dialog.js?"
        );

        /***/
      },

    /***/ './src/classes/Editor.js':
      /*!*******************************!*\
  !*** ./src/classes/Editor.js ***!
  \*******************************/
      /*! exports provided: Editor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });\n/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/editor.css */ "./src/styles/editor.css");\n/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/grid */ "./src/scripts/grid.js");\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation */ "./src/classes/Animation.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Editor =\n/*#__PURE__*/\nfunction () {\n  function Editor(target) {\n    var _this = this;\n\n    _classCallCheck(this, Editor);\n\n    this.title = target ? target.Title : \'\';\n    this.content = target ? target.Content : \'\';\n    var templateItem = document.getElementById(\'template__editor\');\n    var clone = templateItem.content.cloneNode(true);\n    this.editor = clone.querySelector(\'.editor\');\n    this.note = this.editor.querySelector(\'.note\');\n    this.textarea = this.editor.querySelector(\'.textarea__note_content\');\n    this.inputTitle = this.editor.querySelector(\'.input__note_title\');\n    this.submit = this.editor.querySelector(\'.submit\');\n    this.reject = this.editor.querySelector(\'.reject\');\n\n    if (target) {\n      this.inputTitle.value = this.title;\n      this.textarea.value = this.content;\n      this.textarea.style.color = target.color;\n      this.textarea.style.backgroundColor = target.backgroundColor;\n    }\n\n    this.submit.addEventListener(\'click\', function () {\n      if (target) {\n        target.Title = _this.inputTitle.value;\n        target.Content = _this.textarea.value;\n      } else {\n        _scripts_grid__WEBPACK_IMPORTED_MODULE_1__["grid"].AddNote(_this.inputTitle.value, _this.textarea.value);\n      }\n\n      _this.close();\n    });\n    this.reject.addEventListener(\'click\', function () {\n      _this.close();\n    });\n    document.body.appendChild(this.editor);\n    _Animation__WEBPACK_IMPORTED_MODULE_2__["Animation"].Animate(this.editor, {\n      name: \'fading\',\n      dir: _Animation__WEBPACK_IMPORTED_MODULE_2__["AnimeDir"].Normal\n    });\n    _Animation__WEBPACK_IMPORTED_MODULE_2__["Animation"].Animate(this.note, {\n      name: \'fading-moving-top\',\n      dir: _Animation__WEBPACK_IMPORTED_MODULE_2__["AnimeDir"].Normal\n    });\n    console.log(\'Editor created\');\n  }\n\n  _createClass(Editor, [{\n    key: "close",\n    value: function close() {\n      var _this2 = this;\n\n      _Animation__WEBPACK_IMPORTED_MODULE_2__["Animation"].Animate(this.note, {\n        name: \'fading-moving-top\',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_2__["AnimeDir"].Reverse\n      });\n      _Animation__WEBPACK_IMPORTED_MODULE_2__["Animation"].Animate(this.editor, {\n        name: \'fading\',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_2__["AnimeDir"].Reverse\n      }, function () {\n        document.body.removeChild(_this2.editor);\n      });\n    }\n  }]);\n\n  return Editor;\n}();\n\n//# sourceURL=webpack:///./src/classes/Editor.js?'
        );

        /***/
      },

    /***/ './src/classes/Grid.js':
      /*!*****************************!*\
  !*** ./src/classes/Grid.js ***!
  \*****************************/
      /*! exports provided: Grid */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });\n/* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridItem */ "./src/classes/GridItem.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Grid =\n/*#__PURE__*/\nfunction () {\n  function Grid(element) {\n    _classCallCheck(this, Grid);\n\n    this.grid = element;\n    this.selected = [];\n  }\n\n  _createClass(Grid, [{\n    key: "AddNote",\n    value: function AddNote(title, content) {\n      var gridItem = new _GridItem__WEBPACK_IMPORTED_MODULE_0__["GridItem"]();\n      gridItem.CreateNote(title, content);\n      this.currentDir.notes.push(gridItem);\n      this.Redraw();\n      console.log(\'Note added\');\n    }\n  }, {\n    key: "AddFolder",\n    value: function AddFolder(title) {\n      var gridItem = new _GridItem__WEBPACK_IMPORTED_MODULE_0__["GridItem"]();\n      var backFolder = new _GridItem__WEBPACK_IMPORTED_MODULE_0__["GridItem"]();\n      gridItem.CreateFolder(_GridItem__WEBPACK_IMPORTED_MODULE_0__["FolderType"].folder, title);\n      backFolder.CreateFolder(_GridItem__WEBPACK_IMPORTED_MODULE_0__["FolderType"].backFolder, \'...\');\n      gridItem.folders.push(backFolder);\n      this.currentDir.folders.push(gridItem);\n      this.currentDir.folders.sort(function (a, b) {\n        return a.Title > b.Title ? 1 : -1;\n      });\n      this.Redraw();\n      console.log(\'Folder added\');\n    }\n  }, {\n    key: "RemoveItem",\n    value: function RemoveItem(item) {\n      switch (item.itemType) {\n        case _GridItem__WEBPACK_IMPORTED_MODULE_0__["ItemType"].note:\n          this.currentDir.notes.splice(this.currentDir.notes.indexOf(item), 1);\n          break;\n\n        case _GridItem__WEBPACK_IMPORTED_MODULE_0__["ItemType"].folder:\n          this.currentDir.folders.splice(this.currentDir.folders.indexOf(item), 1);\n          break;\n      }\n\n      this.Redraw();\n    }\n  }, {\n    key: "Redraw",\n    value: function Redraw() {\n      var _this = this;\n\n      this.grid.innerHTML = \'\';\n      this.currentDir.folders && this.currentDir.folders.forEach(function (f) {\n        if (f.folderType === _GridItem__WEBPACK_IMPORTED_MODULE_0__["FolderType"].backFolder) {\n          f.Element.style.backgroundImage = \'url(./src/images/back.svg)\';\n\n          _this.grid.insertAdjacentElement(\'afterbegin\', f.Element);\n        } else {\n          _this.grid.appendChild(f.Element);\n        }\n      });\n      this.currentDir.notes && this.currentDir.notes.forEach(function (n) {\n        _this.grid.appendChild(n.Element);\n      });\n    }\n  }, {\n    key: "isSelected",\n    value: function isSelected(record) {\n      return this.selected.includes(record);\n    }\n  }, {\n    key: "Select",\n    value: function Select(record) {\n      record.Element.querySelector(\'.checkbox\').checked = true;\n      this.selected.push(record);\n    }\n  }, {\n    key: "Unselect",\n    value: function Unselect(record) {\n      record.Element.querySelector(\'.checkbox\').checked = false;\n      this.selected.splice(this.selected.indexOf(record), 1);\n    }\n  }, {\n    key: "UnselectAll",\n    value: function UnselectAll() {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.selected[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var record = _step.value;\n          this.Unselect(record);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: "Element",\n    get: function get() {\n      return this.grid;\n    }\n  }, {\n    key: "CurrentDir",\n    get: function get() {\n      return this.currentDir;\n    },\n    set: function set(folder) {\n      this.currentDir = folder;\n      this.Redraw();\n    }\n  }, {\n    key: "Selected",\n    get: function get() {\n      return this.selected;\n    }\n  }]);\n\n  return Grid;\n}();\n\n//# sourceURL=webpack:///./src/classes/Grid.js?'
        );

        /***/
      },

    /***/ './src/classes/GridItem.js':
      /*!*********************************!*\
  !*** ./src/classes/GridItem.js ***!
  \*********************************/
      /*! exports provided: ItemType, FolderType, GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemType\", function() { return ItemType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FolderType\", function() { return FolderType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridItem\", function() { return GridItem; });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/classes/Utils.js\");\n/* harmony import */ var _classes_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Editor */ \"./src/classes/Editor.js\");\n/* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/grid */ \"./src/scripts/grid.js\");\n/* harmony import */ var _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/breadcrumbs */ \"./src/scripts/breadcrumbs.js\");\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Animation */ \"./src/classes/Animation.js\");\n/* harmony import */ var _scripts_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/list */ \"./src/scripts/list.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar colors = [['#EDE604', '#000'], ['#FFCC01', '#000'], ['#FEAC00', '#000'], ['#FF8100', '#FFF'], ['#FF5800', '#FFF'], ['#FF3BA7', '#FFF'], ['#CC42A2', '#FFF'], ['#9F49AC', '#FFF'], ['#486EAF', '#FFF'], ['#179067', '#FFF'], ['#50B517', '#FFF'], ['#9ED112', '#000']];\nvar ItemType = {\n  note: 'note',\n  folder: 'folder'\n};\nvar FolderType = {\n  backFolder: 'backFolder',\n  folder: 'folder'\n};\nvar GridItem =\n/*#__PURE__*/\nfunction () {\n  function GridItem() {\n    _classCallCheck(this, GridItem);\n\n    this.id = _Utils__WEBPACK_IMPORTED_MODULE_0__[\"Utils\"].generateId(16);\n    this.title = 'Title';\n    this.content = 'Content';\n    var randNum = _Utils__WEBPACK_IMPORTED_MODULE_0__[\"Utils\"].rand(0, colors.length - 1);\n    this.backgroundColor = colors[randNum][0];\n    this.color = colors[randNum][1];\n  }\n\n  _createClass(GridItem, [{\n    key: \"itemSelect\",\n    value: function itemSelect(e) {\n      if (e.target.checked) {\n        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Select(this);\n      } else {\n        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Unselect(this);\n      }\n    }\n  }, {\n    key: \"itemDragOver\",\n    value: function itemDragOver(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: \"itemDragStart\",\n    value: function itemDragStart() {\n      if (this.itemType === ItemType.note || this.folderType === FolderType.folder) {\n        if (!_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].isSelected(this)) _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Select(this);\n      }\n\n      console.log('Item drag started');\n    }\n  }, {\n    key: \"itemDragEnd\",\n    value: function itemDragEnd() {\n      _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].UnselectAll();\n      console.log('Item drag ended');\n    }\n  }, {\n    key: \"itemOption\",\n    value: function itemOption(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: \"itemOpen\",\n    value: function itemOpen() {\n      switch (this.itemType) {\n        case ItemType.folder:\n          if (this.folderType === FolderType.backFolder) {\n            _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].CurrentDir = this.prevFolder;\n            _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__[\"breadcrumbs\"].RemovePath(this.title);\n          } else {\n            _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].CurrentDir = this;\n            _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__[\"breadcrumbs\"].AddPath(this.title);\n          }\n\n          break;\n\n        case ItemType.note:\n          new _classes_Editor__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"](this);\n          break;\n      }\n\n      console.log('Item opened');\n    }\n  }, {\n    key: \"itemComplete\",\n    value: function itemComplete() {\n      var _this = this;\n\n      _scripts_list__WEBPACK_IMPORTED_MODULE_5__[\"list\"].Add(this);\n      _Animation__WEBPACK_IMPORTED_MODULE_4__[\"Animation\"].Animate(this.item, {\n        name: 'disappearing',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_4__[\"AnimeDir\"].Normal\n      }, function () {\n        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].RemoveItem(_this);\n      });\n      console.log('Item completed');\n    }\n  }, {\n    key: \"itemDrop\",\n    value: function itemDrop(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n\n      if (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected) {\n        for (var i = 0; i < _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected.length; i++) {\n          if (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i] === this) continue;\n\n          switch (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i].itemType) {\n            case ItemType.note:\n              switch (this.folderType) {\n                case FolderType.folder:\n                  this.notes.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i]);\n                  break;\n\n                case FolderType.backFolder:\n                  this.prevFolder.notes.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i]);\n                  break;\n              }\n\n              break;\n\n            case ItemType.folder:\n              switch (this.folderType) {\n                case FolderType.folder:\n                  _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i].folders.forEach(function (f) {\n                    return f.prevFolder = _this2;\n                  });\n                  this.folders.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i]);\n                  break;\n\n                case FolderType.backFolder:\n                  _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i].folders.forEach(function (f) {\n                    return f.prevFolder = _this2.prevFolder;\n                  });\n                  this.prevFolder.folders.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i]);\n                  break;\n              }\n\n              break;\n          }\n\n          _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].RemoveItem(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].Selected[i]);\n          _Animation__WEBPACK_IMPORTED_MODULE_4__[\"Animation\"].Animate(this.item, {\n            name: 'shaking',\n            dir: _Animation__WEBPACK_IMPORTED_MODULE_4__[\"AnimeDir\"].Normal,\n            time: 300\n          });\n        }\n      }\n\n      _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].UnselectAll();\n      console.log('Item dropped');\n    }\n  }, {\n    key: \"CreateNote\",\n    value: function CreateNote(title, content) {\n      var _this3 = this;\n\n      this.itemType = ItemType.note;\n      if (title) this.title = title;\n      if (content) this.content = content;\n      var templateItem = document.getElementById('template__grid_note');\n      var clone = templateItem.content.cloneNode(true);\n      this.item = clone.querySelector('.item');\n      this.item.setAttribute('id', this.id);\n      this.completeElem = clone.querySelector('.complete');\n      this.checkboxElem = clone.querySelector('.checkbox');\n      this.checkboxLabelElem = clone.querySelector('.checkbox__label');\n      this.titleSectionElem = clone.querySelector('.title-section');\n      this.contentElem = clone.querySelector('.content');\n      this.footerElem = clone.querySelector('.footer');\n      this.item.style.backgroundColor = this.backgroundColor;\n      this.item.style.color = this.color;\n      this.titleSectionElem.style.borderColor = this.color;\n      this.checkboxElem.setAttribute('id', \"checkbox_\".concat(this.id));\n      this.checkboxLabelElem.setAttribute('for', \"checkbox_\".concat(this.id));\n      this.titleSectionElem.querySelector('.title').innerText = this.title;\n      this.contentElem.innerHTML = marked(this.content);\n      this.completeElem.addEventListener('click', function (e) {\n        e.stopPropagation();\n\n        _this3.itemComplete();\n      });\n      this.checkboxElem.addEventListener('change', function (e) {\n        return _this3.itemSelect(e);\n      });\n      this.checkboxLabelElem.addEventListener('dblclick', function (e) {\n        return e.stopPropagation();\n      });\n      this.item.addEventListener('dragstart', function () {\n        return _this3.itemDragStart();\n      });\n      this.item.addEventListener('dragend', function () {\n        return _this3.itemDragEnd();\n      });\n      this.item.addEventListener('dblclick', function () {\n        return _this3.itemOpen();\n      });\n      this.item.addEventListener('contextmenu', function (e) {\n        return _this3.itemOption(e);\n      });\n      _Animation__WEBPACK_IMPORTED_MODULE_4__[\"Animation\"].Animate(this.item, {\n        name: 'bubble',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_4__[\"AnimeDir\"].Normal,\n        animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'\n      });\n      console.log('Note created');\n    }\n  }, {\n    key: \"CreateFolder\",\n    value: function CreateFolder(folderType, title) {\n      var _this4 = this;\n\n      this.itemType = ItemType.folder;\n      this.folderType = folderType;\n      if (title) this.title = title;\n      var templateItem = document.getElementById('template__grid_folder');\n      var clone = templateItem.content.cloneNode(true);\n      this.item = clone.querySelector('.item');\n      this.item.setAttribute('id', this.id);\n      this.checkboxElem = clone.querySelector('.checkbox');\n      this.checkboxLabelElem = clone.querySelector('.checkbox__label');\n      this.titleSectionElem = clone.querySelector('.title-section');\n      this.checkboxElem.setAttribute('id', \"checkbox_\".concat(this.id));\n      this.checkboxLabelElem.setAttribute('for', \"checkbox_\".concat(this.id));\n      this.titleSectionElem.querySelector('.title').innerText = this.title;\n\n      if (this.folderType === FolderType.backFolder) {\n        this.prevFolder = _scripts_grid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].CurrentDir;\n      }\n\n      this.folders = [];\n      this.notes = [];\n\n      if (this.folderType === FolderType.backFolder) {\n        this.item.removeAttribute('draggable');\n        this.titleSectionElem.removeChild(this.checkboxElem);\n        this.titleSectionElem.removeChild(this.checkboxLabelElem);\n      } else {\n        this.checkboxElem.addEventListener('change', function (e) {\n          return _this4.itemSelect(e);\n        });\n        this.checkboxLabelElem.addEventListener('dblclick', function (e) {\n          return e.stopPropagation();\n        });\n      }\n\n      this.item.addEventListener('dragstart', function () {\n        return _this4.itemDragStart();\n      });\n      this.item.addEventListener('drop', function (e) {\n        return _this4.itemDrop(e);\n      });\n      this.item.addEventListener('dragover', function (e) {\n        return _this4.itemDragOver(e);\n      });\n      this.item.addEventListener('dragend', function () {\n        return _this4.itemDragEnd();\n      });\n      this.item.addEventListener('dblclick', function () {\n        return _this4.itemOpen();\n      });\n      this.item.addEventListener('contextmenu', function (e) {\n        return _this4.itemOption(e);\n      });\n      _Animation__WEBPACK_IMPORTED_MODULE_4__[\"Animation\"].Animate(this.item, {\n        name: 'bubble',\n        dir: _Animation__WEBPACK_IMPORTED_MODULE_4__[\"AnimeDir\"].Normal,\n        animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'\n      });\n      console.log(\"Folder created - \".concat(this.folderType));\n    }\n  }, {\n    key: \"Element\",\n    get: function get() {\n      return this.item;\n    }\n  }, {\n    key: \"Id\",\n    get: function get() {\n      return this.id;\n    }\n  }, {\n    key: \"Type\",\n    get: function get() {\n      return this.itemType;\n    }\n  }, {\n    key: \"Title\",\n    get: function get() {\n      return this.title;\n    },\n    set: function set(title) {\n      this.title = title;\n      this.titleSectionElem.querySelector('.title').innerText = this.title;\n    }\n  }, {\n    key: \"Content\",\n    get: function get() {\n      return this.content;\n    },\n    set: function set(content) {\n      this.content = content;\n      this.contentElem.innerHTML = marked(this.content);\n    }\n  }]);\n\n  return GridItem;\n}();\n\n//# sourceURL=webpack:///./src/classes/GridItem.js?"
        );

        /***/
      },

    /***/ './src/classes/List.js':
      /*!*****************************!*\
  !*** ./src/classes/List.js ***!
  \*****************************/
      /*! exports provided: List */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });\n/* harmony import */ var _classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Animation */ "./src/classes/Animation.js");\n/* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/grid */ "./src/scripts/grid.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List() {\n    var _this = this;\n\n    _classCallCheck(this, List);\n\n    this.list = [];\n    var templateItem = document.getElementById(\'template__list\');\n    var clone = templateItem.content.cloneNode(true);\n    this.listSectionElem = clone.querySelector(\'.list-section\');\n    this.listElem = clone.querySelector(\'.list\');\n    this.reject = clone.querySelector(\'.reject\');\n    this.reject.addEventListener(\'click\', function () {\n      _this.listSectionElem.style.overflowY = \'hidden\';\n      _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(_this.listSectionElem, {\n        name: \'fading\',\n        dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Reverse\n      }, function () {\n        document.body.removeChild(_this.listSectionElem);\n      });\n      _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(_this.listElem, {\n        name: \'fading-moving-top\',\n        dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Reverse\n      });\n    });\n  }\n\n  _createClass(List, [{\n    key: "Add",\n    value: function Add(record) {\n      _scripts_grid__WEBPACK_IMPORTED_MODULE_1__["grid"].Unselect(record);\n      record.item.removeAttribute(\'draggable\');\n      this.list.push(record);\n    }\n  }, {\n    key: "Remove",\n    value: function Remove(record) {\n      this.list.splice(this.list.indexOf(record), 1);\n    }\n  }, {\n    key: "Show",\n    value: function Show() {\n      var _this2 = this;\n\n      this.list.forEach(function (i) {\n        _this2.listElem.appendChild(i.Element);\n      });\n      document.body.appendChild(this.listSectionElem);\n      _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(this.listSectionElem, {\n        name: \'fading\',\n        dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Normal\n      }, function () {\n        _this2.listSectionElem.style.overflowY = \'auto\';\n      });\n      _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"].Animate(this.listElem, {\n        name: \'fading-moving-top\',\n        dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["AnimeDir"].Normal\n      });\n    }\n  }]);\n\n  return List;\n}();\n\n//# sourceURL=webpack:///./src/classes/List.js?'
        );

        /***/
      },

    /***/ './src/classes/Utils.js':
      /*!******************************!*\
  !*** ./src/classes/Utils.js ***!
  \******************************/
      /*! exports provided: Utils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Utils =\n/*#__PURE__*/\nfunction () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, null, [{\n    key: "generateId",\n    value: function generateId(length) {\n      var letters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _toConsumableArray(\'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\');\n      var string = \'\';\n\n      for (var i = 0; i < length; i++) {\n        string += letters[Math.trunc(Math.random() * letters.length)];\n      }\n\n      return string;\n    }\n  }, {\n    key: "rand",\n    value: function rand(a, b) {\n      return Math.trunc(Math.random() * (b - a + 1)) + a;\n    }\n  }]);\n\n  return Utils;\n}();\n\n//# sourceURL=webpack:///./src/classes/Utils.js?'
        );

        /***/
      },

    /***/ './src/images/close.svg':
      /*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODgNCgkJYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0Mg0KCQlDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkNCgkJczEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"\n\n//# sourceURL=webpack:///./src/images/close.svg?'
        );

        /***/
      },

    /***/ './src/images/complete.svg':
      /*!*********************************!*\
  !*** ./src/images/complete.svg ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTAwLjY5OCwxMTUuMTY0TDQ2NC45MDMsNzkuMzdjLTE1LjM0LTE1LjM0MS00MC45MDgtMTUuMzQxLTU2LjI0OCwwTDIxMC45MzIsMjc4Ljc5OEwxMDMuNTQ4LDE3MS40MTMgICAgYy0xNS4zNDEtMTUuMzQtNDAuOTA4LTE1LjM0LTU2LjI0OCwwbC0zNS43OTQsMzUuNzk0Yy0xNS4zNCwxNS4zNC0xNS4zNCw0MC45MDgsMCw1Ni4yNDlsMTY4Ljc0NiwxNjguNzQ2ICAgIGM2LjgxOCw2LjgxOCwxNy4wNDUsMTEuOTMyLDI4Ljk3NiwxMS45MzJoMS43MDVjMTAuMjI3LDAsMjAuNDU0LTMuNDA5LDI3LjI3Mi0xMS45MzJsMjYwLjc4OS0yNjAuNzkgICAgQzUxNi4wMzgsMTU2LjA3Miw1MTYuMDM4LDEzMC41MDUsNTAwLjY5OCwxMTUuMTY0eiBNNDc2LjgzNSwxNDcuNTVsLTI2MC43OSwyNjAuNzg5Yy0xLjcwNSwxLjcwNS0zLjQwOSwxLjcwNS0zLjQwOSwxLjcwNWgtMS43MDUgICAgYy0xLjcwNSwwLTMuNDA5LDAtMy40MDktMS43MDVMMzguNzc2LDIzOS41OTRjLTMuNDA5LTMuNDA5LTMuNDA5LTYuODE4LTEuNzA1LTguNTIzbDM1Ljc5NC0zNS43OTQgICAgYzEuNzA0LTEuNzA1LDMuNDA5LTEuNzA1LDMuNDA5LTEuNzA1czMuNDA5LDAsMy40MDksMS43MDVsMTE5LjMxNSwxMTkuMzE1YzYuODE4LDYuODE4LDE3LjA0NSw2LjgxOCwyMy44NjMsMGwyMTEuMzU5LTIxMS4zNTkgICAgYzMuNDA5LTMuNDA5LDUuMTEzLTMuNDA5LDguNTIzLDBsMzUuNzk1LDM1Ljc5NEM0NzguNTM5LDE0MC43MzIsNDc4LjUzOSwxNDQuMTQxLDQ3Ni44MzUsMTQ3LjU1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K"\n\n//# sourceURL=webpack:///./src/images/complete.svg?'
        );

        /***/
      },

    /***/ './src/images/create_folder.svg':
      /*!**************************************!*\
  !*** ./src/images/create_folder.svg ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDMuMjk0IDQ0My4yOTQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQzLjI5NCA0NDMuMjk0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNzcuMDU5IDMzMi40NzFoMjcuNzA2di01NS40MTJoNTUuNDEydi0yNy43MDZoLTU1LjQxMnYtNTUuNDEyaC0yNy43MDZ2NTUuNDEyaC01NS40MTJ2MjcuNzA2aDU1LjQxMnoiLz48cGF0aCBkPSJtNDE1LjU4OCA4My4xMThoLTIwMi4wNThsLTUxLjM1My01MS4zNTNjLTIuNTk3LTIuNTk3LTYuMTE1LTQuMDU4LTkuNzk0LTQuMDU4aC0xMjQuNjc3Yy0xNS4yNzQtLjAwMS0yNy43MDYgMTIuNDMxLTI3LjcwNiAyNy43MDV2MzMyLjQ3MWMwIDE1LjI3MyAxMi40MzIgMjcuNzA2IDI3LjcwNiAyNy43MDZoMzg3Ljg4MmMxNS4yNzMgMCAyNy43MDYtMTIuNDMyIDI3LjcwNi0yNy43MDZ2LTI3Ny4wNTljMC0xNS4yNzQtMTIuNDMyLTI3LjcwNi0yNy43MDYtMjcuNzA2em0wIDMwNC43NjRoLTM4Ny44ODJ2LTMzMi40N2gxMTguOTRsNTEuMzU0IDUxLjM1M2MyLjU5NyAyLjU5NyA2LjExNSA0LjA1OCA5Ljc5NCA0LjA1OGgyMDcuNzk0eiIvPjwvc3ZnPg=="\n\n//# sourceURL=webpack:///./src/images/create_folder.svg?'
        );

        /***/
      },

    /***/ './src/images/create_note.svg':
      /*!************************************!*\
  !*** ./src/images/create_note.svg ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzAuOTAyIDcwLjkwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzAuOTAyIDcwLjkwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNNjUuNjk1LDIzLjE2MWMtMC4wMTItMC4xODItMC4wNDctMC4zNjEtMC4xMTEtMC41NDlsLTAuMDY2LTAuMTc2DQoJCQljLTAuMTEtMC4yNDQtMC4yNDYtMC40NDctMC40MTktMC42MTlMNDMuODkyLDAuNjFjLTAuMTctMC4xNjgtMC4zNy0wLjMwMy0wLjY0LTAuNDI2Yy0wLjA0NC0wLjAxOC0wLjA4Ny0wLjAzMy0wLjE1OS0wLjA1Nw0KCQkJYy0wLjE5LTAuMDY0LTAuMzc0LTAuMTAyLTAuNTcyLTAuMTExTDQyLjQxNiwwSDI4LjQwNWMtNS4wMzgsMC05LjEzNyw0LjA5OC05LjEzNyw5LjEzN3YxLjIyOWgtNC45NDQNCgkJCWMtNS4wMzcsMC05LjEzNiw0LjEtOS4xMzYsOS4xMzd2NDIuMjYyYzAsNS4wMzcsNC4wOTksOS4xMzcsOS4xMzYsOS4xMzdoMjguMTc1YzUuMDM3LDAsOS4xMzYtNC4xLDkuMTM2LTkuMTM3di0xLjIzaDQuOTQzDQoJCQljNS4wMzgsMCw5LjEzNy00LjA5OCw5LjEzNy05LjEzN1YyMy4zMDFMNjUuNjk1LDIzLjE2MXogTTQ0LjUwNyw3LjE0NWwxNC4wNjEsMTQuMDYzaC05LjExMWMtMi43MjksMC00Ljk0OS0yLjIyMS00Ljk0OS00Ljk1MQ0KCQkJTDQ0LjUwNyw3LjE0NUw0NC41MDcsNy4xNDV6IE00Ny40NDgsNjEuNzY0YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxSDE0LjMyM2MtMi43MjksMC00Ljk1LTIuMjIxLTQuOTUtNC45NTFWMTkuNTAyDQoJCQljMC0yLjczLDIuMjIxLTQuOTUxLDQuOTUtNC45NTFoMTEuOTE4djEyLjA3YzAsNS4wMzksNC4wOTksOS4xMzcsOS4xMzcsOS4xMzdoMTIuMDdWNjEuNzY0eiBNMzAuNDI3LDI2LjYyMnYtOS4xMWwxNC4wNjIsMTQuMDYxDQoJCQloLTkuMTFDMzIuNjQ3LDMxLjU3MywzMC40MjcsMjkuMzUyLDMwLjQyNywyNi42MjJ6IE02MS41MjgsNTEuMzk3YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxaC00Ljk0M1YzMy42NjVsLTAuMDItMC4xMzcNCgkJCWMtMC4wMTItMC4xODItMC4wNDYtMC4zNTUtMC4xMS0wLjU0N2wtMC4wNzItMC4xODljLTAuMTExLTAuMjQyLTAuMjQ2LTAuNDM5LTAuNDEtMC42MDRsLTIxLjIxLTIxLjIxMw0KCQkJYy0wLjE2OC0wLjE2Ni0wLjM2OS0wLjMwMS0wLjU4NS0wLjM5OGMtMC4wNjItMC4wMjktMC4xMjYtMC4wNTUtMC4yMDctMC4wOGMtMC4xODUtMC4wNjQtMC4zNzMtMC4xMDItMC41NDctMC4xMTF2MC4wMDQNCgkJCWwtMC4xMzktMC4wMjNoLTQuODgxVjkuMTM4YzAtMi43MywyLjIyMS00Ljk1MSw0Ljk1MS00Ljk1MWgxMS45MTh2MTIuMDdjMCw1LjAzOSw0LjA5OCw5LjEzNyw5LjEzNSw5LjEzN2gxMi4wN1Y1MS4zOTd6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjkuNjUsMzguNzQ3YzAtMS4xMDQtMC44OTYtMi0yLTJzLTIsMC44OTYtMiwydjcuMTcyaC03LjE3MmMtMS4xMDQsMC0yLDAuODk2LTIsMg0KCQkJYzAsMS4xMDUsMC44OTYsMiwyLDJoNy4xNzJ2Ny4xNzJjMCwxLjEwNSwwLjg5NiwyLDIsMnMyLTAuODk1LDItMnYtNy4xNzJoNy4xNzNjMS4xMDQsMCwyLTAuODk1LDItMmMwLTEuMTA0LTAuODk2LTItMi0ySDI5LjY1DQoJCQlWMzguNzQ3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"\n\n//# sourceURL=webpack:///./src/images/create_note.svg?'
        );

        /***/
      },

    /***/ './src/images/favicon.svg':
      /*!********************************!*\
  !*** ./src/images/favicon.svg ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MzcgNzM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MzcgNzM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRjAwO30NCgkuc3Qxe2ZpbGw6IzAwRkYwMDt9DQoJLnN0MntmaWxsOiMwMDAwRkY7fQ0KCS5zdDN7ZmlsbDojRkYwMDAwO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNjkiIGN5PSIxMDAiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTAwIiBjeT0iMzY4LjIiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNjM3IiBjeT0iMzY4LjIiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzY5IiBjeT0iNjM3IiByPSIxMDAiLz4NCjwvc3ZnPg0K"\n\n//# sourceURL=webpack:///./src/images/favicon.svg?'
        );

        /***/
      },

    /***/ './src/images/folder.svg':
      /*!*******************************!*\
  !*** ./src/images/folder.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTQ2LjMyNCw1Mi41SDEuNTY1Yy0xLjAzLDAtMS43NzktMC45NzgtMS41MS0xLjk3M2wxMC4xNjYtMjcuODcxDQoJYzAuMTg0LTAuNjgyLDAuODAzLTEuMTU2LDEuNTEtMS4xNTZINTYuNDljMS4wMywwLDEuNTEsMC45ODQsMS41MSwxLjk3M0w0Ny44MzQsNTEuMzQ0QzQ3LjY1LDUyLjAyNiw0Ny4wMzEsNTIuNSw0Ni4zMjQsNTIuNXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQkJBMTY7IiBkPSJNNTAuMjY4LDEyLjVIMjVsLTUtN0gxLjczMkMwLjc3Niw1LjUsMCw2LjI3NSwwLDcuMjMyVjQ5Ljk2YzAuMDY5LDAuMDAyLDAuMTM4LDAuMDA2LDAuMjA1LDAuMDENCgkJbDEwLjAxNS0yNy4zMTRjMC4xODQtMC42ODMsMC44MDMtMS4xNTYsMS41MS0xLjE1Nkg1MnYtNy4yNjhDNTIsMTMuMjc1LDUxLjIyNCwxMi41LDUwLjI2OCwxMi41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="\n\n//# sourceURL=webpack:///./src/images/folder.svg?'
        );

        /***/
      },

    /***/ './src/images/reject.svg':
      /*!*******************************!*\
  !*** ./src/images/reject.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOS4yNDhwdCIgdmlld0JveD0iMCAwIDUwOS4yNDggNTA5LjI0OCIgd2lkdGg9IjUwOS4yNDhwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzkzLjgyNDIxOSA1MDkuMjQ2MDk0LTEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5IDEzOS4xOTkyMTktMTE1LjQyNTc4MS0xMTUuNDIxODc1IDEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyNTc4MS0xMTUuNDI1NzgxIDEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyMTg3NSAxMTUuNDI1NzgxLTEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5IDEzOS4xOTkyMTl6bTAgMCIgZmlsbD0iI2U3NmU1NCIvPjwvc3ZnPg=="\n\n//# sourceURL=webpack:///./src/images/reject.svg?'
        );

        /***/
      },

    /***/ './src/images/submit.svg':
      /*!*******************************!*\
  !*** ./src/images/submit.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOXB0IiB2aWV3Qm94PSIwIC0zNiA1MDkuMjQ4IDUwOSIgd2lkdGg9IjUwOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNzEuOTAyMzQ0IDQzOC4wNzQyMTktMTcxLjkwMjM0NC0xNzEuOTAyMzQ0IDEwMC42MjUtMTAwLjYwOTM3NSA3MS4yNzczNDQgNzEuMjk2ODc1IDIzNi43MjI2NTYtMjM2LjczNDM3NSAxMDAuNjIxMDk0IDEwMC42MjEwOTR6bTAgMCIgZmlsbD0iI2FkZGIzMSIvPjwvc3ZnPg=="\n\n//# sourceURL=webpack:///./src/images/submit.svg?'
        );

        /***/
      },

    /***/ './src/scripts/breadcrumbs.js':
      /*!************************************!*\
  !*** ./src/scripts/breadcrumbs.js ***!
  \************************************/
      /*! exports provided: breadcrumbs, initBreadcrumbs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadcrumbs", function() { return breadcrumbs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBreadcrumbs", function() { return initBreadcrumbs; });\n/* harmony import */ var _styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/breadcrumbs.css */ "./src/styles/breadcrumbs.css");\n/* harmony import */ var _styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Breadcrumbs */ "./src/classes/Breadcrumbs.js");\n\n\nvar breadcrumbs;\nvar initBreadcrumbs = function initBreadcrumbs() {\n  var breadcrumbsElem = document.getElementById(\'breadcrumbs\');\n  breadcrumbs = new _classes_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["Breadcrumbs"](breadcrumbsElem);\n};\n\n//# sourceURL=webpack:///./src/scripts/breadcrumbs.js?'
        );

        /***/
      },

    /***/ './src/scripts/dialog.js':
      /*!*******************************!*\
  !*** ./src/scripts/dialog.js ***!
  \*******************************/
      /*! exports provided: initDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDialog\", function() { return initDialog; });\n/* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/dialog.css */ \"./src/styles/dialog.css\");\n/* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_dialog_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initDialog = function initDialog() {\n  var templateItem = document.getElementById('template__dialog');\n  var clone = templateItem.content.cloneNode(true);\n  console.log('Dialog inited');\n  return clone.querySelector('.dialog-container');\n};\n\n//# sourceURL=webpack:///./src/scripts/dialog.js?"
        );

        /***/
      },

    /***/ './src/scripts/grid.js':
      /*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
      /*! exports provided: grid, initGrid */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGrid", function() { return initGrid; });\n/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/grid.css */ "./src/styles/grid.css");\n/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Grid */ "./src/classes/Grid.js");\n/* harmony import */ var _classes_GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/GridItem */ "./src/classes/GridItem.js");\n\n\n\nvar grid;\nvar initGrid = function initGrid() {\n  var gridElem = document.createElement(\'section\');\n  gridElem.setAttribute(\'class\', \'grid\');\n  gridElem.setAttribute(\'id\', \'grid\');\n  document.body.appendChild(gridElem);\n  grid = new _classes_Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](gridElem);\n  grid.CurrentDir = new _classes_GridItem__WEBPACK_IMPORTED_MODULE_2__["GridItem"]();\n  grid.CurrentDir.CreateFolder(_classes_GridItem__WEBPACK_IMPORTED_MODULE_2__["FolderType"].folder, \'root\');\n  console.log(\'Grid inited\');\n};\n\n//# sourceURL=webpack:///./src/scripts/grid.js?'
        );

        /***/
      },

    /***/ './src/scripts/hello.js':
      /*!******************************!*\
  !*** ./src/scripts/hello.js ***!
  \******************************/
      /*! exports provided: initHello */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHello", function() { return initHello; });\n/* harmony import */ var _styles_hello_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/hello.css */ "./src/styles/hello.css");\n/* harmony import */ var _styles_hello_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_hello_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/scripts/grid.js");\n/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./src/scripts/breadcrumbs.js");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/scripts/menu.js");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/scripts/list.js");\n/* harmony import */ var _classes_Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/Animation */ "./src/classes/Animation.js");\n\n\n\n\n\n\n\nfunction loadApp(hello) {\n  Object(_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["initBreadcrumbs"])();\n  Object(_grid__WEBPACK_IMPORTED_MODULE_1__["initGrid"])();\n  Object(_menu__WEBPACK_IMPORTED_MODULE_3__["initMenu"])();\n  Object(_list__WEBPACK_IMPORTED_MODULE_4__["initList"])();\n  _classes_Animation__WEBPACK_IMPORTED_MODULE_5__["Animation"].Animate(hello, {\n    name: \'fading\',\n    dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_5__["AnimeDir"].Reverse\n  }, function () {\n    document.body.removeChild(hello);\n  });\n}\n\nvar initHello = function initHello() {\n  localStorage.clear();\n  var isVisited = localStorage.getItem(\'visited\');\n\n  if (!isVisited) {\n    var templateItem = document.getElementById(\'template__hello\');\n    var clone = templateItem.content.cloneNode(true);\n    var hello = clone.querySelector(\'.hello\');\n    document.body.appendChild(hello);\n    _classes_Animation__WEBPACK_IMPORTED_MODULE_5__["Animation"].Animate(hello, {\n      name: \'fading\',\n      dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_5__["AnimeDir"].Normal\n    });\n    localStorage.setItem(\'visited\', true);\n    hello.querySelector(\'input[type="button"]\').addEventListener(\'click\', function () {\n      loadApp(hello);\n    });\n  } else {\n    loadApp();\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/hello.js?'
        );

        /***/
      },

    /***/ './src/scripts/index.js':
      /*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello */ "./src/scripts/hello.js");\n\n\n\nvar initApp = function initApp() {\n  document.addEventListener(\'DOMContentLoaded\', function () {\n    Object(_hello__WEBPACK_IMPORTED_MODULE_1__["initHello"])();\n    console.log(\'App inited\');\n  });\n};\n\ninitApp();\n\n//# sourceURL=webpack:///./src/scripts/index.js?'
        );

        /***/
      },

    /***/ './src/scripts/list.js':
      /*!*****************************!*\
  !*** ./src/scripts/list.js ***!
  \*****************************/
      /*! exports provided: list, initList */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initList", function() { return initList; });\n/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/list.css */ "./src/styles/list.css");\n/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_list_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/List */ "./src/classes/List.js");\n\n\nvar list;\nvar initList = function initList() {\n  list = new _classes_List__WEBPACK_IMPORTED_MODULE_1__["List"]();\n};\n\n//# sourceURL=webpack:///./src/scripts/list.js?'
        );

        /***/
      },

    /***/ './src/scripts/menu.js':
      /*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
      /*! exports provided: initMenu */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMenu", function() { return initMenu; });\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/scripts/grid.js");\n/* harmony import */ var _classes_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Editor */ "./src/classes/Editor.js");\n/* harmony import */ var _classes_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Dialog */ "./src/classes/Dialog.js");\n/* harmony import */ var _classes_Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Animation */ "./src/classes/Animation.js");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ "./src/scripts/list.js");\n\n\n\n\n\n\nvar initMenu = function initMenu() {\n  var menu = document.querySelector(\'header .menu\');\n  menu.querySelector(\'.menu__create_note\').addEventListener(\'click\', function () {\n    return new _classes_Editor__WEBPACK_IMPORTED_MODULE_2__["Editor"]();\n  });\n  menu.querySelector(\'.menu__create_folder\').addEventListener(\'click\', function () {\n    return _classes_Dialog__WEBPACK_IMPORTED_MODULE_3__["Dialog"].Prompt(\'Folder name:\', _grid__WEBPACK_IMPORTED_MODULE_1__["grid"].AddFolder.bind(_grid__WEBPACK_IMPORTED_MODULE_1__["grid"]));\n  });\n  menu.querySelector(\'.menu__open_completed\').addEventListener(\'click\', function () {\n    return _list__WEBPACK_IMPORTED_MODULE_5__["list"].Show();\n  });\n  _classes_Animation__WEBPACK_IMPORTED_MODULE_4__["Animation"].Animate(menu, {\n    name: \'fading-moving-left\',\n    dir: _classes_Animation__WEBPACK_IMPORTED_MODULE_4__["AnimeDir"].Normal\n  }, function () {\n    menu.style.opacity = 1;\n  });\n  console.log(\'Menu inited\');\n};\n\n//# sourceURL=webpack:///./src/scripts/menu.js?'
        );

        /***/
      },

    /***/ './src/styles/breadcrumbs.css':
      /*!************************************!*\
  !*** ./src/styles/breadcrumbs.css ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./breadcrumbs.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/breadcrumbs.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/breadcrumbs.css?'
        );

        /***/
      },

    /***/ './src/styles/dialog.css':
      /*!*******************************!*\
  !*** ./src/styles/dialog.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/dialog.css?'
        );

        /***/
      },

    /***/ './src/styles/editor.css':
      /*!*******************************!*\
  !*** ./src/styles/editor.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./editor.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/editor.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/editor.css?'
        );

        /***/
      },

    /***/ './src/styles/grid.css':
      /*!*****************************!*\
  !*** ./src/styles/grid.css ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/grid.css?'
        );

        /***/
      },

    /***/ './src/styles/hello.css':
      /*!******************************!*\
  !*** ./src/styles/hello.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./hello.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/hello.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/hello.css?'
        );

        /***/
      },

    /***/ './src/styles/index.css':
      /*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/index.css?'
        );

        /***/
      },

    /***/ './src/styles/list.css':
      /*!*****************************!*\
  !*** ./src/styles/list.css ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./list.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/list.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/list.css?'
        );

        /***/
      },

    /***/ './src/styles/menu.css':
      /*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/menu.css?'
        );

        /***/
      }

    /******/
  }
);
