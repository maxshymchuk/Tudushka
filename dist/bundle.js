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
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.breadcrumbs {\n  display: block;\n  position: fixed;\n  top: 90px;\n  left: 20px;\n  line-height: 20px;\n  border-radius: var(--border-radius);\n  padding: 0 10px;\n  background-color: var(--menu-color);\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css':
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Imports
        var getUrl = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        var ___CSS_LOADER_URL___0___ = getUrl(
          __webpack_require__(/*! ../images/submit.svg */ './src/images/submit.svg')
        );
        var ___CSS_LOADER_URL___1___ = getUrl(
          __webpack_require__(/*! ../images/reject.svg */ './src/images/reject.svg')
        );
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.dialog-container {\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--inactive-background-color);\n}\n.dialog-container .dialog {\n  margin: auto;\n  box-shadow: var(--box-shadow);\n}\n.dialog-container .dialog .content input[type=text] {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n}\n.dialog-container .dialog .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n}\n.dialog-container .dialog .controls button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.dialog-container .dialog .controls button.submit {\n  background: url(' +
            ___CSS_LOADER_URL___0___ +
            ') no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog .controls button.reject {\n  background: url(' +
            ___CSS_LOADER_URL___1___ +
            ') no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog .controls button:hover {\n  background-color: var(--hover-button-color);\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/editor.css':
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/editor.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Imports
        var getUrl = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        var ___CSS_LOADER_URL___0___ = getUrl(
          __webpack_require__(/*! ../images/submit.svg */ './src/images/submit.svg')
        );
        var ___CSS_LOADER_URL___1___ = getUrl(
          __webpack_require__(/*! ../images/reject.svg */ './src/images/reject.svg')
        );
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.editor {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--inactive-background-color);\n  overflow-y: auto;\n}\n.editor .note {\n  width: 100%;\n  height: 70%;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 80px;\n  box-sizing: border-box;\n  position: relative;\n  box-shadow: var(--box-shadow);\n}\n.editor .note .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n  max-width: 500px;\n  position: absolute;\n  top: 0;\n}\n.editor .note .controls .reject,\n.editor .note .controls .submit {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.editor .note .controls .reject.submit,\n.editor .note .controls .submit.submit {\n  background: url(' +
            ___CSS_LOADER_URL___0___ +
            ') no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject.reject,\n.editor .note .controls .submit.reject {\n  background: url(' +
            ___CSS_LOADER_URL___1___ +
            ') no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject:hover,\n.editor .note .controls .submit:hover {\n  background-color: var(--hover-button-color);\n}\n.editor .note .controls .input__note_title {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n  background-color: var(--folder-color);\n}\n.editor .note .textarea__note_content {\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  resize: none;\n  border: 0;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/grid.css':
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Imports
        var getUrl = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        var ___CSS_LOADER_URL___0___ = getUrl(
          __webpack_require__(/*! ../images/folder.svg */ './src/images/folder.svg')
        );
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.grid {\n  display: grid;\n  justify-content: center;\n  padding: 110px 20px;\n  margin: 20px 0;\n  grid: 240px/repeat(auto-fill, 200px);\n  grid-gap: var(--grid-gap);\n  user-select: none;\n}\n.grid .item {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 240px;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.grid .item .title-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #000;\n  padding: 0 10px;\n  min-height: 40px;\n}\n.grid .item .title-section .title {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 40px;\n  font-size: 1.5rem;\n}\n.grid .item .checkbox {\n  display: none;\n}\n.grid .item .checkbox + .checkbox__label {\n  cursor: pointer;\n  min-width: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  border: 5px solid var(--hover-button-color);\n  transition: border var(--transition-time), box-shadow var(--transition-time);\n}\n.grid .item .checkbox:checked + .checkbox__label {\n  border: 15px solid var(--hover-button-color);\n}\n.grid .item .checkbox:not(:checked) + .checkbox__label {\n  border: 5px solid transparent;\n}\n.grid .item:hover .checkbox + .checkbox__label {\n  box-shadow: inset 0 0 0 5px var(--hover-button-color);\n}\n.grid .item.folder {\n  background: url(' +
            ___CSS_LOADER_URL___0___ +
            ') no-repeat center 65% var(--folder-color);\n  background-size: 60%;\n  transition: background-color var(--transition-time);\n}\n.grid .item.folder:hover {\n  background-color: var(--folder-hover-color);\n}\n.grid .item.note {\n  transition: box-shadow var(--transition-time);\n  box-shadow: var(--box-shadow);\n}\n.grid .item.note:hover {\n  box-shadow: 0 0 10px 5px var(--box-shadow-color);\n}\n.grid .item.note .content {\n  display: block;\n  justify-self: stretch;\n  margin: 10px;\n  margin-top: 0;\n  padding-right: 5px;\n  word-break: break-word;\n  overflow-y: auto;\n}\n.grid .item.note .content p {\n  padding: 5px 0;\n  margin: 0;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/hello.css':
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/hello.css ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Imports
        var getUrl = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        var ___CSS_LOADER_URL___0___ = getUrl(
          __webpack_require__(/*! ../images/create_note.svg */ './src/images/create_note.svg')
        );
        var ___CSS_LOADER_URL___1___ = getUrl(
          __webpack_require__(/*! ../images/create_folder.svg */ './src/images/create_folder.svg')
        );
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.hello {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n  overflow: hidden;\n}\n.hello .title {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3rem;\n  color: #FFF;\n  padding: 30px 0;\n  font-weight: bold;\n  letter-spacing: 5px;\n  background-color: var(--accent-color);\n}\n.hello .details {\n  font-size: 1rem;\n  padding: 30px 0;\n}\n.hello .button {\n  border-radius: var(--button-border-radius);\n  border: 0;\n  background-color: var(--menu-button-color);\n  margin: 0;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  padding: 8px 100px;\n  transition: all 0.5s;\n}\n.hello .button.menu__create_note:before, .hello .button.menu__create_folder:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n.hello .button.menu__create_note:before {\n  background: url(' +
            ___CSS_LOADER_URL___0___ +
            ') no-repeat center center;\n  background-size: 80%;\n}\n.hello .button.menu__create_folder:before {\n  background: url(' +
            ___CSS_LOADER_URL___1___ +
            ') no-repeat center center;\n  background-size: 80%;\n}\n.hello .button:hover {\n  background-color: var(--menu-button-hover-color);\n}\n.hello .button:hover {\n  background-color: var(--accent-color);\n  padding: 8px 200px;\n  color: #FFF;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/index.css':
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Module
        exports.push([
          module.i,
          'html *::-webkit-scrollbar {\n  width: 10px;\n}\nhtml *::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: transparent;\n  box-sizing: border-box;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n}\n\nbody {\n  margin: 0;\n  font-family: "Zilla Slab", serif;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: "Zilla Slab", serif;\n}\ninput:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/menu.css':
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Imports
        var getUrl = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        var ___CSS_LOADER_URL___0___ = getUrl(
          __webpack_require__(/*! ../images/create_note.svg */ './src/images/create_note.svg')
        );
        var ___CSS_LOADER_URL___1___ = getUrl(
          __webpack_require__(/*! ../images/create_folder.svg */ './src/images/create_folder.svg')
        );
        // Module
        exports.push([
          module.i,
          ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.menu {\n  position: fixed;\n  left: 20px;\n  top: 20px;\n  padding: 10px;\n  background-color: var(--menu-color);\n  border-radius: var(--border-radius);\n  font-size: 0;\n}\n.menu button {\n  border-radius: var(--button-border-radius);\n  border: 0;\n  background-color: var(--menu-button-color);\n  margin: 0;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.menu button.menu__create_note:before, .menu button.menu__create_folder:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n.menu button.menu__create_note:before {\n  background: url(' +
            ___CSS_LOADER_URL___0___ +
            ') no-repeat center center;\n  background-size: 80%;\n}\n.menu button.menu__create_folder:before {\n  background: url(' +
            ___CSS_LOADER_URL___1___ +
            ') no-repeat center center;\n  background-size: 80%;\n}\n.menu button:hover {\n  background-color: var(--menu-button-hover-color);\n}\n.menu button:not(:last-child) {\n  margin-right: 10px;\n}\n',
          ''
        ]);

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function(useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return '@media '.concat(item[2], '{').concat(content, '}');
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names

          list.i = function(modules, mediaQuery) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = modules[_i]; // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              // when a module is imported multiple times with different media queries.
              // I hope this will never occur (Hey this way we have smaller bundles)

              if (item[0] == null || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = '('.concat(item[2], ') and (').concat(mediaQuery, ')');
                }

                list.push(item);
              }
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return '/*# sourceURL='.concat(cssMapping.sourceRoot).concat(source, ' */');
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)

        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
          return '/*# '.concat(data, ' */');
        }

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        module.exports = function(url, needQuotes) {
          // eslint-disable-next-line no-underscore-dangle, no-param-reassign
          url = url.__esModule ? url.default : url;

          if (typeof url !== 'string') {
            return url;
          } // If url is already wrapped in quotes, remove them

          if (/^['"].*['"]$/.test(url)) {
            // eslint-disable-next-line no-param-reassign
            url = url.slice(1, -1);
          } // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls

          if (/["'() \t\n]/.test(url) || needQuotes) {
            return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"');
          }

          return url;
        };

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var stylesInDom = {};

        var isOldIE = (function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === 'undefined') {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(window && document && document.all && !window.atob);
            }

            return memo;
          };
        })();

        var getTarget = (function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === 'undefined') {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        })();

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {
              css: css,
              media: media,
              sourceMap: sourceMap
            };

            if (!newStyles[id]) {
              styles.push(
                (newStyles[id] = {
                  id: id,
                  parts: [part]
                })
              );
            } else {
              newStyles[id].parts.push(part);
            }
          }

          return styles;
        }

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            var j = 0;

            if (domStyle) {
              domStyle.refs++;

              for (; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = {
                id: item.id,
                refs: 1,
                parts: parts
              };
            }
          }
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');

          if (typeof options.attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              options.attributes.nonce = nonce;
            }
          }

          Object.keys(options.attributes).forEach(function(key) {
            style.setAttribute(key, options.attributes[key]);
          });

          if (typeof options.insert === 'function') {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || 'head');

            if (!target) {
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */

        var replaceText = (function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
          };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute('media', media);
          }

          if (sourceMap && btoa) {
            css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
              ' */'
            );
          } // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update((obj = newObj));
            } else {
              remove();
            }
          };
        }

        module.exports = function(list, options) {
          options = options || {};
          options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          var styles = listToStyles(list, options);
          addStylesToDom(styles, options);
          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              if (domStyle) {
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var _i = 0; _i < mayRemove.length; _i++) {
              var _domStyle = mayRemove[_i];

              if (_domStyle.refs === 0) {
                for (var j = 0; j < _domStyle.parts.length; j++) {
                  _domStyle.parts[j]();
                }

                delete stylesInDom[_domStyle.id];
              }
            }
          };
        };

        /***/
      },

    /***/ './src/classes/Breadcrumbs.js':
      /*!************************************!*\
  !*** ./src/classes/Breadcrumbs.js ***!
  \************************************/
      /*! exports provided: Breadcrumbs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Breadcrumbs', function() {
          return Breadcrumbs;
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Breadcrumbs =
          /*#__PURE__*/
          (function() {
            function Breadcrumbs(element) {
              _classCallCheck(this, Breadcrumbs);

              this.path = ['root'];
              this.element = element;
              this.Redraw();
            }

            _createClass(Breadcrumbs, [
              {
                key: 'AddPath',
                value: function AddPath(path) {
                  this.path.push(path);
                  this.Redraw();
                }
              },
              {
                key: 'RemovePath',
                value: function RemovePath() {
                  this.path.pop();
                  this.Redraw();
                }
              },
              {
                key: 'Redraw',
                value: function Redraw() {
                  this.element.innerText = this.path.join(' / ');
                }
              }
            ]);

            return Breadcrumbs;
          })();

        /***/
      },

    /***/ './src/classes/Dialog.js':
      /*!*******************************!*\
  !*** ./src/classes/Dialog.js ***!
  \*******************************/
      /*! exports provided: Dialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Dialog', function() {
          return Dialog;
        });
        /* harmony import */ var _scripts_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scripts/dialog */ './src/scripts/dialog.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Dialog =
          /*#__PURE__*/
          (function() {
            function Dialog() {
              _classCallCheck(this, Dialog);
            }

            _createClass(Dialog, null, [
              {
                key: 'Prompt',
                value: function Prompt(question, callback) {
                  var dialogTemplate = Object(_scripts_dialog__WEBPACK_IMPORTED_MODULE_0__['initDialog'])();
                  var input = document.createElement('input');
                  var submit = document.createElement('button');
                  var reject = document.createElement('button');
                  input.setAttribute('class', 'dialog__title');
                  input.setAttribute('type', 'text');
                  submit.setAttribute('class', 'submit');
                  reject.setAttribute('class', 'reject');
                  input.placeholder = question;
                  submit.addEventListener('click', function() {
                    document.body.removeChild(dialogTemplate);
                    callback(input.value);
                  });
                  reject.addEventListener('click', function() {
                    return document.body.removeChild(dialogTemplate);
                  });
                  dialogTemplate.querySelector('.content').appendChild(input);
                  dialogTemplate.querySelector('.controls').appendChild(submit);
                  dialogTemplate.querySelector('.controls').appendChild(reject);
                  document.body.appendChild(dialogTemplate);
                }
              },
              {
                key: 'Confirm',
                value: function Confirm() {}
              },
              {
                key: 'Alert',
                value: function Alert() {}
              },
              {
                key: 'DatePicker',
                value: function DatePicker() {}
              },
              {
                key: 'Notify',
                value: function Notify() {}
              }
            ]);

            return Dialog;
          })();

        /***/
      },

    /***/ './src/classes/Editor.js':
      /*!*******************************!*\
  !*** ./src/classes/Editor.js ***!
  \*******************************/
      /*! exports provided: Editor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Editor', function() {
          return Editor;
        });
        /* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/editor.css */ './src/styles/editor.css'
        );
        /* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_editor_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scripts/grid */ './src/scripts/grid.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Editor =
          /*#__PURE__*/
          (function() {
            function Editor(target) {
              var _this = this;

              _classCallCheck(this, Editor);

              this.title = target ? target.Title : '';
              this.content = target ? target.Content : '';
              var templateItem = document.getElementById('template__editor');
              var clone = templateItem.content.cloneNode(true);
              this.editor = clone.querySelector('.editor');
              this.textarea = this.editor.querySelector('.textarea__note_content');
              this.inputTitle = this.editor.querySelector('.input__note_title');
              this.submit = this.editor.querySelector('.submit');
              this.reject = this.editor.querySelector('.reject');

              if (target) {
                this.inputTitle.value = this.title;
                this.textarea.value = this.content;
                this.textarea.style.color = target.color;
                this.textarea.style.backgroundColor = target.backgroundColor;
              }

              this.submit.addEventListener('click', function(e) {
                if (target) {
                  target.Title = _this.inputTitle.value;
                  target.Content = _this.textarea.value;
                } else {
                  _scripts_grid__WEBPACK_IMPORTED_MODULE_1__['grid'].AddNote(
                    _this.inputTitle.value,
                    _this.textarea.value
                  );
                }

                _this.close();
              });
              this.reject.addEventListener('click', function(e) {
                _this.close();
              });
              document.body.appendChild(this.editor);
              console.log('Editor created');
            }

            _createClass(Editor, [
              {
                key: 'close',
                value: function close() {
                  document.body.removeChild(this.editor);
                  this.editor = null;
                }
              }
            ]);

            return Editor;
          })();

        /***/
      },

    /***/ './src/classes/Grid.js':
      /*!*****************************!*\
  !*** ./src/classes/Grid.js ***!
  \*****************************/
      /*! exports provided: Grid */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Grid', function() {
          return Grid;
        });
        /* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./GridItem */ './src/classes/GridItem.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Grid =
          /*#__PURE__*/
          (function() {
            function Grid(element) {
              _classCallCheck(this, Grid);

              this.grid = element;
              this.selected = [];
            }

            _createClass(Grid, [
              {
                key: 'AddNote',
                value: function AddNote(title, content) {
                  var gridItem = new _GridItem__WEBPACK_IMPORTED_MODULE_0__['GridItem']();
                  gridItem.CreateNote(title, content);
                  this.currentDir.notes.push(gridItem);
                  this.Redraw();
                  console.log('Note added');
                }
              },
              {
                key: 'AddFolder',
                value: function AddFolder(title) {
                  var gridItem = new _GridItem__WEBPACK_IMPORTED_MODULE_0__['GridItem']();
                  var backFolder = new _GridItem__WEBPACK_IMPORTED_MODULE_0__['GridItem']();
                  gridItem.CreateFolder(_GridItem__WEBPACK_IMPORTED_MODULE_0__['FolderType'].folder, title);
                  backFolder.CreateFolder(_GridItem__WEBPACK_IMPORTED_MODULE_0__['FolderType'].backFolder, '...');
                  gridItem.folders.push(backFolder);
                  this.currentDir.folders.push(gridItem);
                  this.currentDir.folders.sort(function(a, b) {
                    return a.Title > b.Title ? 1 : -1;
                  });
                  this.Redraw();
                  console.log('Folder added');
                }
              },
              {
                key: 'RemoveItem',
                value: function RemoveItem(type, item) {
                  switch (type) {
                    case _GridItem__WEBPACK_IMPORTED_MODULE_0__['ItemType'].note:
                      this.currentDir.notes.splice(this.currentDir.notes.indexOf(item), 1);
                      break;

                    case _GridItem__WEBPACK_IMPORTED_MODULE_0__['ItemType'].folder:
                      this.currentDir.folders.splice(this.currentDir.folders.indexOf(item), 1);
                      break;
                  }

                  this.Redraw();
                }
              },
              {
                key: 'Redraw',
                value: function Redraw() {
                  var _this = this;

                  this.grid.innerHTML = '';
                  this.currentDir.folders &&
                    this.currentDir.folders.forEach(function(f) {
                      if (f.folderType === _GridItem__WEBPACK_IMPORTED_MODULE_0__['FolderType'].backFolder) {
                        f.Handle.style.backgroundImage = 'url(./src/images/back.svg)';

                        _this.grid.insertAdjacentElement('afterbegin', f.Handle);
                      } else {
                        _this.grid.appendChild(f.Handle);
                      }
                    });
                  this.currentDir.notes &&
                    this.currentDir.notes.forEach(function(n) {
                      _this.grid.appendChild(n.Handle);
                    });
                }
              },
              {
                key: 'isSelected',
                value: function isSelected(record) {
                  return this.selected.includes(record);
                }
              },
              {
                key: 'Select',
                value: function Select(record) {
                  this.selected.push(record);
                }
              },
              {
                key: 'Unselect',
                value: function Unselect(record) {
                  this.selected.splice(this.selected.indexOf(record), 1);
                }
              },
              {
                key: 'UnselectAll',
                value: function UnselectAll() {
                  this.selected = [];
                }
              },
              {
                key: 'Handle',
                get: function get() {
                  return this.grid;
                }
              },
              {
                key: 'CurrentDir',
                get: function get() {
                  return this.currentDir;
                },
                set: function set(folder) {
                  this.currentDir = folder;
                  this.Redraw();
                }
              },
              {
                key: 'Selected',
                get: function get() {
                  return this.selected;
                }
              }
            ]);

            return Grid;
          })();

        /***/
      },

    /***/ './src/classes/GridItem.js':
      /*!*********************************!*\
  !*** ./src/classes/GridItem.js ***!
  \*********************************/
      /*! exports provided: ItemType, FolderType, GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ItemType', function() {
          return ItemType;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FolderType', function() {
          return FolderType;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'GridItem', function() {
          return GridItem;
        });
        /* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Utils */ './src/classes/Utils.js'
        );
        /* harmony import */ var _classes_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../classes/Editor */ './src/classes/Editor.js'
        );
        /* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../scripts/grid */ './src/scripts/grid.js'
        );
        /* harmony import */ var _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../scripts/breadcrumbs */ './src/scripts/breadcrumbs.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var colors = [
          ['#EDE604', '#000'],
          ['#FFCC01', '#000'],
          ['#FEAC00', '#000'],
          ['#FF8100', '#FFF'],
          ['#FF5800', '#FFF'],
          ['#FF3BA7', '#FFF'],
          ['#CC42A2', '#FFF'],
          ['#9F49AC', '#FFF'],
          ['#486EAF', '#FFF'],
          ['#179067', '#FFF'],
          ['#50B517', '#FFF'],
          ['#9ED112', '#000']
        ];
        var ItemType = {
          note: 'note',
          folder: 'folder'
        };
        var FolderType = {
          backFolder: 'backFolder',
          folder: 'folder'
        };
        var GridItem =
          /*#__PURE__*/
          (function() {
            function GridItem() {
              _classCallCheck(this, GridItem);

              this.id = _Utils__WEBPACK_IMPORTED_MODULE_0__['Utils'].generateId(16);
              this.item = null;
              this.title = 'Title';
              this.content = 'Content';
              this.itemType = null;
              var randNum = _Utils__WEBPACK_IMPORTED_MODULE_0__['Utils'].rand(0, colors.length - 1);
              this.backgroundColor = colors[randNum][0];
              this.color = colors[randNum][1];
            }

            _createClass(GridItem, [
              {
                key: 'itemSelect',
                value: function itemSelect(e) {
                  if (e.target.checked) {
                    _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Select(this);
                  } else {
                    _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Unselect(this);
                  }
                }
              },
              {
                key: 'itemDragOver',
                value: function itemDragOver(e) {
                  e.preventDefault();
                }
              },
              {
                key: 'itemDragEnd',
                value: function itemDragEnd(e) {
                  // grid.Unselect(e.target);
                }
              },
              {
                key: 'itemDragStart',
                value: function itemDragStart(e) {
                  if (this.itemType === ItemType.note || this.folderType === FolderType.folder) {
                    if (!_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].isSelected(this))
                      _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Select(this);
                  }

                  console.log('Item drag started');
                }
              },
              {
                key: 'itemOption',
                value: function itemOption(e) {
                  e.preventDefault();
                }
              },
              {
                key: 'itemOpen',
                value: function itemOpen(e) {
                  switch (this.itemType) {
                    case ItemType.folder:
                      if (this.folderType === FolderType.backFolder) {
                        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].CurrentDir = this.prevFolder;
                        _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__['breadcrumbs'].RemovePath(this.title);
                      } else {
                        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].CurrentDir = this;
                        _scripts_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__['breadcrumbs'].AddPath(this.title);
                      }

                      break;

                    case ItemType.note:
                      new _classes_Editor__WEBPACK_IMPORTED_MODULE_1__['Editor'](this);
                      break;
                  }

                  console.log('Item opened');
                }
              },
              {
                key: 'itemDrop',
                value: function itemDrop(e) {
                  var _this = this;

                  e.preventDefault();

                  if (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected) {
                    for (var i = 0; i < _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected.length; i++) {
                      _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i].checkboxElem.checked = false;
                      if (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i] === this) break;

                      switch (_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i].itemType) {
                        case ItemType.note:
                          switch (this.folderType) {
                            case FolderType.folder:
                              this.notes.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i]);
                              break;

                            case FolderType.backFolder:
                              this.prevFolder.notes.push(
                                _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i]
                              );
                              break;
                          }

                          break;

                        case ItemType.folder:
                          switch (this.folderType) {
                            case FolderType.folder:
                              _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i].folders.forEach(function(
                                f
                              ) {
                                return (f.prevFolder = _this);
                              });
                              this.folders.push(_scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i]);
                              break;

                            case FolderType.backFolder:
                              _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i].folders.forEach(function(
                                f
                              ) {
                                return (f.prevFolder = _this.prevFolder);
                              });
                              this.prevFolder.folders.push(
                                _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i]
                              );
                              break;
                          }

                          break;
                      }

                      _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].RemoveItem(
                        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i].itemType,
                        _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].Selected[i]
                      );
                    }
                  }

                  _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].UnselectAll();
                  console.log('Item dropped');
                }
              },
              {
                key: 'CreateNote',
                value: function CreateNote(title, content) {
                  var _this2 = this;

                  this.itemType = ItemType.note;
                  if (title) this.title = title;
                  if (content) this.content = content;
                  var templateItem = document.getElementById('template__grid_note');
                  var clone = templateItem.content.cloneNode(true);
                  this.item = clone.querySelector('.item');
                  this.item.setAttribute('id', this.id);
                  this.checkboxElem = clone.querySelector('.checkbox');
                  this.checkboxLabelElem = clone.querySelector('.checkbox__label');
                  this.titleSectionElem = clone.querySelector('.title-section');
                  this.contentElem = clone.querySelector('.content');
                  this.footerElem = clone.querySelector('.footer');
                  this.item.style.backgroundColor = this.backgroundColor;
                  this.item.style.color = this.color;
                  this.titleSectionElem.style.borderColor = this.color;
                  this.checkboxElem.setAttribute('id', 'checkbox_'.concat(this.id));
                  this.checkboxLabelElem.setAttribute('for', 'checkbox_'.concat(this.id));
                  this.titleSectionElem.querySelector('.title').innerText = this.title;
                  this.contentElem.innerHTML = marked(this.content);
                  this.checkboxElem.addEventListener('change', function(e) {
                    return _this2.itemSelect(e);
                  });
                  this.item.addEventListener('dragstart', function(e) {
                    return _this2.itemDragStart(e);
                  });
                  this.item.addEventListener('dragend', function(e) {
                    return _this2.itemDragEnd(e);
                  });
                  this.item.addEventListener('dblclick', function(e) {
                    return _this2.itemOpen(e);
                  });
                  this.item.addEventListener('contextmenu', function(e) {
                    return _this2.itemOption(e);
                  });
                  console.log('Note created');
                }
              },
              {
                key: 'CreateFolder',
                value: function CreateFolder(folderType, title) {
                  var _this3 = this;

                  this.itemType = ItemType.folder;
                  this.folderType = folderType;
                  if (title) this.title = title;
                  var templateItem = document.getElementById('template__grid_folder');
                  var clone = templateItem.content.cloneNode(true);
                  this.item = clone.querySelector('.item');
                  this.item.setAttribute('id', this.id);
                  this.checkboxElem = clone.querySelector('.checkbox');
                  this.checkboxLabelElem = clone.querySelector('.checkbox__label');
                  this.titleSectionElem = clone.querySelector('.title-section');
                  this.checkboxElem.setAttribute('id', 'checkbox_'.concat(this.id));
                  this.checkboxLabelElem.setAttribute('for', 'checkbox_'.concat(this.id));
                  this.titleSectionElem.querySelector('.title').innerText = this.title;

                  if (this.folderType === FolderType.backFolder) {
                    this.prevFolder = _scripts_grid__WEBPACK_IMPORTED_MODULE_2__['grid'].CurrentDir;
                  }

                  this.folders = [];
                  this.notes = [];

                  if (this.folderType === FolderType.backFolder) {
                    this.item.removeAttribute('draggable');
                    this.titleSectionElem.removeChild(this.checkboxElem);
                    this.titleSectionElem.removeChild(this.checkboxLabelElem);
                  } else {
                    this.checkboxElem.addEventListener('change', function(e) {
                      return _this3.itemSelect(e);
                    });
                  }

                  this.item.addEventListener('dragstart', function(e) {
                    return _this3.itemDragStart(e);
                  });
                  this.item.addEventListener('dragend', function(e) {
                    return _this3.itemDragEnd(e);
                  });
                  this.item.addEventListener('dragover', function(e) {
                    return _this3.itemDragOver(e);
                  });
                  this.item.addEventListener('drop', function(e) {
                    return _this3.itemDrop(e);
                  });
                  this.item.addEventListener('dblclick', function(e) {
                    return _this3.itemOpen(e);
                  });
                  this.item.addEventListener('contextmenu', function(e) {
                    return _this3.itemOption(e);
                  });
                  console.log('Folder created');
                }
              },
              {
                key: 'Handle',
                get: function get() {
                  return this.item;
                }
              },
              {
                key: 'Id',
                get: function get() {
                  return this.id;
                }
              },
              {
                key: 'Type',
                get: function get() {
                  return this.itemType;
                }
              },
              {
                key: 'Title',
                get: function get() {
                  return this.title;
                },
                set: function set(title) {
                  this.title = title;
                  this.titleSectionElem.querySelector('.title').innerText = this.title;
                }
              },
              {
                key: 'Content',
                get: function get() {
                  return this.content;
                },
                set: function set(content) {
                  this.content = content;
                  this.contentElem.innerHTML = marked(this.content);
                }
              }
            ]);

            return GridItem;
          })();

        /***/
      },

    /***/ './src/classes/Utils.js':
      /*!******************************!*\
  !*** ./src/classes/Utils.js ***!
  \******************************/
      /*! exports provided: Utils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Utils', function() {
          return Utils;
        });
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        }

        function _iterableToArray(iter) {
          if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Utils =
          /*#__PURE__*/
          (function() {
            function Utils() {
              _classCallCheck(this, Utils);
            }

            _createClass(Utils, null, [
              {
                key: 'generateId',
                value: function generateId(length) {
                  var letters =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : _toConsumableArray('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
                  var string = '';

                  for (var i = 0; i < length; i++) {
                    string += letters[Math.trunc(Math.random() * letters.length)];
                  }

                  return string;
                }
              },
              {
                key: 'rand',
                value: function rand(a, b) {
                  return Math.trunc(Math.random() * (b - a + 1)) + a;
                }
              }
            ]);

            return Utils;
          })();

        /***/
      },

    /***/ './src/images/create_folder.svg':
      /*!**************************************!*\
  !*** ./src/images/create_folder.svg ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDMuMjk0IDQ0My4yOTQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQzLjI5NCA0NDMuMjk0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNzcuMDU5IDMzMi40NzFoMjcuNzA2di01NS40MTJoNTUuNDEydi0yNy43MDZoLTU1LjQxMnYtNTUuNDEyaC0yNy43MDZ2NTUuNDEyaC01NS40MTJ2MjcuNzA2aDU1LjQxMnoiLz48cGF0aCBkPSJtNDE1LjU4OCA4My4xMThoLTIwMi4wNThsLTUxLjM1My01MS4zNTNjLTIuNTk3LTIuNTk3LTYuMTE1LTQuMDU4LTkuNzk0LTQuMDU4aC0xMjQuNjc3Yy0xNS4yNzQtLjAwMS0yNy43MDYgMTIuNDMxLTI3LjcwNiAyNy43MDV2MzMyLjQ3MWMwIDE1LjI3MyAxMi40MzIgMjcuNzA2IDI3LjcwNiAyNy43MDZoMzg3Ljg4MmMxNS4yNzMgMCAyNy43MDYtMTIuNDMyIDI3LjcwNi0yNy43MDZ2LTI3Ny4wNTljMC0xNS4yNzQtMTIuNDMyLTI3LjcwNi0yNy43MDYtMjcuNzA2em0wIDMwNC43NjRoLTM4Ny44ODJ2LTMzMi40N2gxMTguOTRsNTEuMzU0IDUxLjM1M2MyLjU5NyAyLjU5NyA2LjExNSA0LjA1OCA5Ljc5NCA0LjA1OGgyMDcuNzk0eiIvPjwvc3ZnPg==';

        /***/
      },

    /***/ './src/images/create_note.svg':
      /*!************************************!*\
  !*** ./src/images/create_note.svg ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzAuOTAyIDcwLjkwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzAuOTAyIDcwLjkwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNNjUuNjk1LDIzLjE2MWMtMC4wMTItMC4xODItMC4wNDctMC4zNjEtMC4xMTEtMC41NDlsLTAuMDY2LTAuMTc2DQoJCQljLTAuMTEtMC4yNDQtMC4yNDYtMC40NDctMC40MTktMC42MTlMNDMuODkyLDAuNjFjLTAuMTctMC4xNjgtMC4zNy0wLjMwMy0wLjY0LTAuNDI2Yy0wLjA0NC0wLjAxOC0wLjA4Ny0wLjAzMy0wLjE1OS0wLjA1Nw0KCQkJYy0wLjE5LTAuMDY0LTAuMzc0LTAuMTAyLTAuNTcyLTAuMTExTDQyLjQxNiwwSDI4LjQwNWMtNS4wMzgsMC05LjEzNyw0LjA5OC05LjEzNyw5LjEzN3YxLjIyOWgtNC45NDQNCgkJCWMtNS4wMzcsMC05LjEzNiw0LjEtOS4xMzYsOS4xMzd2NDIuMjYyYzAsNS4wMzcsNC4wOTksOS4xMzcsOS4xMzYsOS4xMzdoMjguMTc1YzUuMDM3LDAsOS4xMzYtNC4xLDkuMTM2LTkuMTM3di0xLjIzaDQuOTQzDQoJCQljNS4wMzgsMCw5LjEzNy00LjA5OCw5LjEzNy05LjEzN1YyMy4zMDFMNjUuNjk1LDIzLjE2MXogTTQ0LjUwNyw3LjE0NWwxNC4wNjEsMTQuMDYzaC05LjExMWMtMi43MjksMC00Ljk0OS0yLjIyMS00Ljk0OS00Ljk1MQ0KCQkJTDQ0LjUwNyw3LjE0NUw0NC41MDcsNy4xNDV6IE00Ny40NDgsNjEuNzY0YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxSDE0LjMyM2MtMi43MjksMC00Ljk1LTIuMjIxLTQuOTUtNC45NTFWMTkuNTAyDQoJCQljMC0yLjczLDIuMjIxLTQuOTUxLDQuOTUtNC45NTFoMTEuOTE4djEyLjA3YzAsNS4wMzksNC4wOTksOS4xMzcsOS4xMzcsOS4xMzdoMTIuMDdWNjEuNzY0eiBNMzAuNDI3LDI2LjYyMnYtOS4xMWwxNC4wNjIsMTQuMDYxDQoJCQloLTkuMTFDMzIuNjQ3LDMxLjU3MywzMC40MjcsMjkuMzUyLDMwLjQyNywyNi42MjJ6IE02MS41MjgsNTEuMzk3YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxaC00Ljk0M1YzMy42NjVsLTAuMDItMC4xMzcNCgkJCWMtMC4wMTItMC4xODItMC4wNDYtMC4zNTUtMC4xMS0wLjU0N2wtMC4wNzItMC4xODljLTAuMTExLTAuMjQyLTAuMjQ2LTAuNDM5LTAuNDEtMC42MDRsLTIxLjIxLTIxLjIxMw0KCQkJYy0wLjE2OC0wLjE2Ni0wLjM2OS0wLjMwMS0wLjU4NS0wLjM5OGMtMC4wNjItMC4wMjktMC4xMjYtMC4wNTUtMC4yMDctMC4wOGMtMC4xODUtMC4wNjQtMC4zNzMtMC4xMDItMC41NDctMC4xMTF2MC4wMDQNCgkJCWwtMC4xMzktMC4wMjNoLTQuODgxVjkuMTM4YzAtMi43MywyLjIyMS00Ljk1MSw0Ljk1MS00Ljk1MWgxMS45MTh2MTIuMDdjMCw1LjAzOSw0LjA5OCw5LjEzNyw5LjEzNSw5LjEzN2gxMi4wN1Y1MS4zOTd6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjkuNjUsMzguNzQ3YzAtMS4xMDQtMC44OTYtMi0yLTJzLTIsMC44OTYtMiwydjcuMTcyaC03LjE3MmMtMS4xMDQsMC0yLDAuODk2LTIsMg0KCQkJYzAsMS4xMDUsMC44OTYsMiwyLDJoNy4xNzJ2Ny4xNzJjMCwxLjEwNSwwLjg5NiwyLDIsMnMyLTAuODk1LDItMnYtNy4xNzJoNy4xNzNjMS4xMDQsMCwyLTAuODk1LDItMmMwLTEuMTA0LTAuODk2LTItMi0ySDI5LjY1DQoJCQlWMzguNzQ3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';

        /***/
      },

    /***/ './src/images/folder.svg':
      /*!*******************************!*\
  !*** ./src/images/folder.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTQ2LjMyNCw1Mi41SDEuNTY1Yy0xLjAzLDAtMS43NzktMC45NzgtMS41MS0xLjk3M2wxMC4xNjYtMjcuODcxDQoJYzAuMTg0LTAuNjgyLDAuODAzLTEuMTU2LDEuNTEtMS4xNTZINTYuNDljMS4wMywwLDEuNTEsMC45ODQsMS41MSwxLjk3M0w0Ny44MzQsNTEuMzQ0QzQ3LjY1LDUyLjAyNiw0Ny4wMzEsNTIuNSw0Ni4zMjQsNTIuNXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQkJBMTY7IiBkPSJNNTAuMjY4LDEyLjVIMjVsLTUtN0gxLjczMkMwLjc3Niw1LjUsMCw2LjI3NSwwLDcuMjMyVjQ5Ljk2YzAuMDY5LDAuMDAyLDAuMTM4LDAuMDA2LDAuMjA1LDAuMDENCgkJbDEwLjAxNS0yNy4zMTRjMC4xODQtMC42ODMsMC44MDMtMS4xNTYsMS41MS0xLjE1Nkg1MnYtNy4yNjhDNTIsMTMuMjc1LDUxLjIyNCwxMi41LDUwLjI2OCwxMi41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

        /***/
      },

    /***/ './src/images/reject.svg':
      /*!*******************************!*\
  !*** ./src/images/reject.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOS4yNDhwdCIgdmlld0JveD0iMCAwIDUwOS4yNDggNTA5LjI0OCIgd2lkdGg9IjUwOS4yNDhwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzkzLjgyNDIxOSA1MDkuMjQ2MDk0LTEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5IDEzOS4xOTkyMTktMTE1LjQyNTc4MS0xMTUuNDIxODc1IDEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyNTc4MS0xMTUuNDI1NzgxIDEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyMTg3NSAxMTUuNDI1NzgxLTEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5IDEzOS4xOTkyMTl6bTAgMCIgZmlsbD0iI2U3NmU1NCIvPjwvc3ZnPg==';

        /***/
      },

    /***/ './src/images/submit.svg':
      /*!*******************************!*\
  !*** ./src/images/submit.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOXB0IiB2aWV3Qm94PSIwIC0zNiA1MDkuMjQ4IDUwOSIgd2lkdGg9IjUwOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNzEuOTAyMzQ0IDQzOC4wNzQyMTktMTcxLjkwMjM0NC0xNzEuOTAyMzQ0IDEwMC42MjUtMTAwLjYwOTM3NSA3MS4yNzczNDQgNzEuMjk2ODc1IDIzNi43MjI2NTYtMjM2LjczNDM3NSAxMDAuNjIxMDk0IDEwMC42MjEwOTR6bTAgMCIgZmlsbD0iI2FkZGIzMSIvPjwvc3ZnPg==';

        /***/
      },

    /***/ './src/scripts/breadcrumbs.js':
      /*!************************************!*\
  !*** ./src/scripts/breadcrumbs.js ***!
  \************************************/
      /*! exports provided: breadcrumbs, initBreadcrumbs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'breadcrumbs', function() {
          return breadcrumbs;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initBreadcrumbs', function() {
          return initBreadcrumbs;
        });
        /* harmony import */ var _styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/breadcrumbs.css */ './src/styles/breadcrumbs.css'
        );
        /* harmony import */ var _styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_breadcrumbs_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _classes_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../classes/Breadcrumbs */ './src/classes/Breadcrumbs.js'
        );

        var breadcrumbs = null;
        var initBreadcrumbs = function initBreadcrumbs() {
          var breadcrumbsElem = document.createElement('span');
          breadcrumbsElem.setAttribute('class', 'breadcrumbs');
          breadcrumbsElem.setAttribute('id', 'breadcrumbs');
          document.body.insertAdjacentElement('afterbegin', breadcrumbsElem);
          breadcrumbs = new _classes_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__['Breadcrumbs'](breadcrumbsElem);
        };

        /***/
      },

    /***/ './src/scripts/dialog.js':
      /*!*******************************!*\
  !*** ./src/scripts/dialog.js ***!
  \*******************************/
      /*! exports provided: initDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initDialog', function() {
          return initDialog;
        });
        /* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/dialog.css */ './src/styles/dialog.css'
        );
        /* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_dialog_css__WEBPACK_IMPORTED_MODULE_0__
        );

        var initDialog = function initDialog() {
          var templateItem = document.getElementById('template__dialog');
          var clone = templateItem.content.cloneNode(true);
          console.log('Dialog inited');
          return clone.querySelector('.dialog-container');
        };

        /***/
      },

    /***/ './src/scripts/grid.js':
      /*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
      /*! exports provided: grid, initGrid */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'grid', function() {
          return grid;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initGrid', function() {
          return initGrid;
        });
        /* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/grid.css */ './src/styles/grid.css'
        );
        /* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_grid_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _classes_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../classes/Grid */ './src/classes/Grid.js'
        );
        /* harmony import */ var _classes_GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../classes/GridItem */ './src/classes/GridItem.js'
        );

        var grid = null;
        var initGrid = function initGrid() {
          var gridElem = document.createElement('section');
          gridElem.setAttribute('class', 'grid');
          gridElem.setAttribute('id', 'grid');
          document.body.appendChild(gridElem);
          grid = new _classes_Grid__WEBPACK_IMPORTED_MODULE_1__['Grid'](gridElem);
          grid.CurrentDir = new _classes_GridItem__WEBPACK_IMPORTED_MODULE_2__['GridItem']();
          grid.CurrentDir.CreateFolder(_classes_GridItem__WEBPACK_IMPORTED_MODULE_2__['FolderType'].folder, 'root');
          console.log('Grid inited');
        };

        /***/
      },

    /***/ './src/scripts/hello.js':
      /*!******************************!*\
  !*** ./src/scripts/hello.js ***!
  \******************************/
      /*! exports provided: initHello */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initHello', function() {
          return initHello;
        });
        /* harmony import */ var _styles_hello_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/hello.css */ './src/styles/hello.css'
        );
        /* harmony import */ var _styles_hello_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_hello_css__WEBPACK_IMPORTED_MODULE_0__
        );

        var initHello = function initHello() {
          // localStorage.clear();
          var isVisited = localStorage.getItem('visited');

          if (!isVisited) {
            var templateItem = document.getElementById('template__hello');
            var clone = templateItem.content.cloneNode(true);
            var hello = clone.querySelector('.hello');
            document.body.appendChild(hello);
            localStorage.setItem('visited', true);
            hello.querySelector('input[type="button"]').addEventListener('click', function() {
              document.body.removeChild(hello);
              hello = null;
            });
          }
        };

        /***/
      },

    /***/ './src/scripts/index.js':
      /*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/index.css */ './src/styles/index.css'
        );
        /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_index_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./hello */ './src/scripts/hello.js'
        );
        /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./menu */ './src/scripts/menu.js'
        );
        /* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./grid */ './src/scripts/grid.js'
        );
        /* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./breadcrumbs */ './src/scripts/breadcrumbs.js'
        );

        var initApp = function initApp() {
          document.addEventListener('DOMContentLoaded', function() {
            Object(_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__['initBreadcrumbs'])();
            Object(_hello__WEBPACK_IMPORTED_MODULE_1__['initHello'])();
            Object(_grid__WEBPACK_IMPORTED_MODULE_3__['initGrid'])();
            Object(_menu__WEBPACK_IMPORTED_MODULE_2__['initMenu'])();
            console.log('App inited');
          });
        };

        initApp();

        /***/
      },

    /***/ './src/scripts/menu.js':
      /*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
      /*! exports provided: initMenu */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initMenu', function() {
          return initMenu;
        });
        /* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/menu.css */ './src/styles/menu.css'
        );
        /* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./grid */ './src/scripts/grid.js'
        );
        /* harmony import */ var _classes_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../classes/Editor */ './src/classes/Editor.js'
        );
        /* harmony import */ var _classes_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../classes/Dialog */ './src/classes/Dialog.js'
        );

        var initMenu = function initMenu() {
          var templateMenu = document.getElementById('template__menu');
          var clone = templateMenu.content.cloneNode(true);
          document.body.insertAdjacentElement('afterbegin', clone.querySelector('.menu'));
          document.getElementById('menu__create_note').addEventListener('click', function() {
            return new _classes_Editor__WEBPACK_IMPORTED_MODULE_2__['Editor']();
          });
          document.getElementById('menu__create_folder').addEventListener('click', function() {
            return _classes_Dialog__WEBPACK_IMPORTED_MODULE_3__['Dialog'].Prompt(
              'Folder name:',
              _grid__WEBPACK_IMPORTED_MODULE_1__['grid'].AddFolder.bind(_grid__WEBPACK_IMPORTED_MODULE_1__['grid'])
            );
          });
          console.log('Menu inited');
        };

        /***/
      },

    /***/ './src/styles/breadcrumbs.css':
      /*!************************************!*\
  !*** ./src/styles/breadcrumbs.css ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./breadcrumbs.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/breadcrumbs.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/dialog.css':
      /*!*******************************!*\
  !*** ./src/styles/dialog.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./dialog.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/editor.css':
      /*!*******************************!*\
  !*** ./src/styles/editor.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./editor.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/editor.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/grid.css':
      /*!*****************************!*\
  !*** ./src/styles/grid.css ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./grid.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/grid.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/hello.css':
      /*!******************************!*\
  !*** ./src/styles/hello.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./hello.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/hello.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/index.css':
      /*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/index.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      },

    /***/ './src/styles/menu.css':
      /*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!./menu.css */ './node_modules/css-loader/dist/cjs.js!./src/styles/menu.css'
        );

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};

        options.insert = 'head';
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=bundle.js.map
