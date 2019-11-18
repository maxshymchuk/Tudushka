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
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css':
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
        )(false);
        // Module
        exports.push([
          module.i,
          ':root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n:root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n.dialog-container {\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--inactive-background-color);\n}\n.dialog-container .dialog {\n  margin: auto;\n  box-shadow: var(--box-shadow);\n}\n.dialog-container .dialog .content input[type=text] {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n}\n.dialog-container .dialog .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n}\n.dialog-container .dialog button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.dialog-container .dialog button.submit {\n  background: url("https://image.flaticon.com/icons/svg/1632/1632596.svg") no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog button.reject {\n  background: url("https://image.flaticon.com/icons/svg/1632/1632600.svg") no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog button:hover {\n  background-color: var(--hover-button-color);\n}\n',
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
        // Module
        exports.push([
          module.i,
          ':root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n:root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n.editor {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--inactive-background-color);\n  overflow-y: auto;\n}\n.editor .note {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  padding-top: 80px;\n  box-shadow: var(--box-shadow);\n}\n.editor .note .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n  max-width: 900px;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 4px 8px -2px var(--box-shadow-color);\n}\n.editor .note .controls .reject,\n.editor .note .controls .submit {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.editor .note .controls .reject.submit,\n.editor .note .controls .submit.submit {\n  background: url("https://image.flaticon.com/icons/svg/1632/1632596.svg") no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject.reject,\n.editor .note .controls .submit.reject {\n  background: url("https://image.flaticon.com/icons/svg/1632/1632600.svg") no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject:hover,\n.editor .note .controls .submit:hover {\n  background-color: var(--hover-button-color);\n}\n.editor .note .controls .input__note_title {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n}\n.editor .note .textarea__note_content {\n  display: block;\n  width: 100%;\n  height: 2000px;\n  box-sizing: border-box;\n  resize: none;\n  border: 0;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n',
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
        // Module
        exports.push([
          module.i,
          ':root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n.grid {\n  display: grid;\n  justify-content: center;\n  padding: 70px 20px;\n  margin: 20px 0;\n  grid: 240px/repeat(auto-fill, 200px);\n  grid-gap: var(--grid-gap);\n  user-select: none;\n}\n.grid .item {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 240px;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  transition: 0.25s;\n}\n.grid .item:hover {\n  border-width: 5px;\n}\n.grid .item.folder {\n  padding: 10px;\n  justify-content: flex-end;\n  text-align: center;\n  background: url("https://image.flaticon.com/icons/svg/148/148953.svg") no-repeat center center var(--folder-color);\n  background-size: 60%;\n  border-color: #000;\n}\n.grid .item.note .title {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 5px 10px;\n  font-size: 1.5rem;\n  border-bottom: 1px solid #000;\n}\n.grid .item.note .content {\n  height: auto;\n  padding: 10px;\n  overflow: hidden;\n}\n.grid .item.note .footer {\n  margin-top: auto;\n  text-align: right;\n}\n.grid .item.note .footer span {\n  display: inline-block;\n  padding: 2px 20px;\n  cursor: pointer;\n}\n',
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
        // Module
        exports.push([
          module.i,
          '.hello {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n}\n.hello article {\n  display: block;\n  font-size: 2rem;\n}\n.hello .details {\n  font-size: 1rem;\n}\n',
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
          'html *::-webkit-scrollbar {\n  width: 10px;\n}\nhtml *::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: darkgrey;\n  box-sizing: border-box;\n  border: 2px solid #FFF;\n}\n\nbody {\n  margin: 0;\n  font-family: "Zilla Slab", serif;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: "Zilla Slab", serif;\n}\ninput:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n',
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
        // Module
        exports.push([
          module.i,
          ':root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n:root {\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #AAA;\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, 0.75);\n  --menu-color: #DDD;\n  --menu-button-color: #EEE;\n  --menu-button-hover-color: #EAEAEA;\n  --folder-color: #EEE;\n}\n\n.menu {\n  position: fixed;\n  left: 20px;\n  top: 20px;\n  padding: 10px;\n  background-color: var(--menu-color);\n  border-radius: var(--border-radius);\n  font-size: 0;\n}\n.menu button {\n  border-radius: var(--button-border-radius);\n  border: 0;\n  background-color: var(--menu-button-color);\n  margin: 0;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.menu button.menu__create_note:before, .menu button.menu__create_folder:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n.menu button.menu__create_note:before {\n  background: url("https://image.flaticon.com/icons/svg/14/14862.svg") no-repeat center center;\n  background-size: 80%;\n}\n.menu button.menu__create_folder:before {\n  background: url("https://image.flaticon.com/icons/svg/2088/2088592.svg") no-repeat center center;\n  background-size: 80%;\n}\n.menu button:hover {\n  background-color: var(--menu-button-hover-color);\n}\n.menu button:not(:last-child) {\n  margin-right: 10px;\n}\n',
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
                  var confirm = document.createElement('button');
                  var reject = document.createElement('button');
                  input.setAttribute('class', 'dialog__title');
                  input.setAttribute('type', 'text');
                  confirm.setAttribute('class', 'dialog__confirm');
                  reject.setAttribute('class', 'dialog__reject');
                  input.placeholder = question;
                  confirm.innerText = 'Ok';
                  reject.innerText = 'Cancel';
                  confirm.addEventListener('click', function() {
                    document.body.removeChild(dialogTemplate);
                    callback(input.value);
                  });
                  reject.addEventListener('click', function() {
                    return document.body.removeChild(dialogTemplate);
                  });
                  dialogTemplate.querySelector('.content').appendChild(input);
                  dialogTemplate.querySelector('.controls').appendChild(confirm);
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
            function Editor(parent) {
              _classCallCheck(this, Editor);

              this.parent = parent;
              var templateItem = document.getElementById('template__editor');
              var clone = templateItem.content.cloneNode(true);
              this.editor = clone.querySelector('.editor');
              this.parent.appendChild(this.editor);
              console.log('Editor created');
            }

            _createClass(Editor, [
              {
                key: 'close',
                value: function close() {
                  this.parent.removeChild(this.editor);
                  this.editor = null;
                }
              },
              {
                key: 'Handle',
                get: function get() {
                  return this.editor;
                }
              },
              {
                key: 'Parent',
                get: function get() {
                  return this.parent;
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
            }

            _createClass(Grid, [
              {
                key: 'AddNote',
                value: function AddNote(title, content) {
                  var gridItem = new _GridItem__WEBPACK_IMPORTED_MODULE_0__['GridItem']();
                  gridItem.createNote(title, content);
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
                  gridItem.createFolder(title);
                  backFolder.createFolder('...');
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
                key: 'Redraw',
                value: function Redraw() {
                  var _this = this;

                  this.grid.innerHTML = '';
                  this.currentDir.folders &&
                    this.currentDir.folders.forEach(function(f) {
                      _this.grid.appendChild(f.Handle);
                    }); // must redraw in alternate order!!!!!!

                  this.currentDir.notes &&
                    this.currentDir.notes.forEach(function(n) {
                      _this.grid.appendChild(n.Handle);
                    });
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
                  document.getElementById('grid__path').innerText = this.currentDir.Id;
                  this.Redraw();
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
      /*! exports provided: GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'GridItem', function() {
          return GridItem;
        });
        /* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Utils */ './src/classes/Utils.js'
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
        var GridItem =
          /*#__PURE__*/
          (function() {
            function GridItem() {
              _classCallCheck(this, GridItem);

              this.id = _Utils__WEBPACK_IMPORTED_MODULE_0__['Utils'].generateId(16);
              this.item = null;
              this.title = 'Title';
              this.content = 'Content';
              var randNum = _Utils__WEBPACK_IMPORTED_MODULE_0__['Utils'].rand(0, colors.length - 1);
              this.backgroundColor = colors[randNum][0];
              this.color = colors[randNum][1];
            }

            _createClass(GridItem, [
              {
                key: 'createNote',
                value: function createNote(title, content) {
                  var _this = this;

                  if (title) this.title = title;
                  if (content) this.content = content;
                  var templateItem = document.getElementById('template__grid_note');
                  var clone = templateItem.content.cloneNode(true);
                  this.item = clone.querySelector('.item');
                  this.item.setAttribute('id', this.id);
                  this.titleElem = this.item.querySelector('.title');
                  this.contentElem = this.item.querySelector('.content');
                  this.footerElem = this.item.querySelector('.footer');
                  this.item.style.backgroundColor = this.backgroundColor;
                  this.item.style.color = this.color;
                  this.item.style.borderColor = 'red'; //this.color; // make color darker

                  this.titleElem.style.borderColor = this.color;
                  this.titleElem.innerText = this.title;
                  this.contentElem.innerHTML = '<span>'.concat(this.content, '</span>');
                  this.item.addEventListener('dblclick', function() {
                    alert(_this.Id);
                  });
                  console.log('Note created');
                } // folder = {
                //   title: string;
                //   prevFolder: GridItem;
                //   folders: [];
                //   notes: [];
                // }
              },
              {
                key: 'createFolder',
                value: function createFolder(title) {
                  var _this2 = this;

                  if (title) this.title = title;
                  var templateItem = document.getElementById('template__grid_folder');
                  var clone = templateItem.content.cloneNode(true);
                  this.item = clone.querySelector('.item');
                  this.item.setAttribute('id', this.id);
                  this.item.innerText = this.title;
                  this.prevFolder = _scripts_grid__WEBPACK_IMPORTED_MODULE_1__['grid'].CurrentDir;
                  this.folders = [];
                  this.notes = [];
                  this.item.addEventListener('dblclick', function() {
                    if (_this2.Title === '...') {
                      // MUST BE FIXED!!!!!
                      _scripts_grid__WEBPACK_IMPORTED_MODULE_1__['grid'].CurrentDir = _this2.prevFolder;
                    } else {
                      _scripts_grid__WEBPACK_IMPORTED_MODULE_1__['grid'].CurrentDir = _this2;
                    }
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
                key: 'Title',
                get: function get() {
                  return this.title;
                }
              },
              {
                key: 'Content',
                get: function get() {
                  return this.content;
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

    /***/ './src/scripts/editor.js':
      /*!*******************************!*\
  !*** ./src/scripts/editor.js ***!
  \*******************************/
      /*! exports provided: createEditor, initEditor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'createEditor', function() {
          return createEditor;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'initEditor', function() {
          return initEditor;
        });
        /* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./grid */ './src/scripts/grid.js'
        );
        /* harmony import */ var _classes_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../classes/Editor */ './src/classes/Editor.js'
        );

        var editor = null;
        var createEditor = function createEditor(parent) {
          editor = new _classes_Editor__WEBPACK_IMPORTED_MODULE_1__['Editor'](parent);
          initEditor();
        };
        var initEditor = function initEditor() {
          document.getElementById('editor__submit').addEventListener('click', function() {
            _grid__WEBPACK_IMPORTED_MODULE_0__['grid'].AddNote(
              editor.Handle.querySelector('.input__note_title').value,
              editor.Handle.querySelector('.textarea__note_content').value
            );
            editor.close();
          });
          document.getElementById('editor__close').addEventListener('click', function() {
            editor.close();
          });
          console.log('Editor reinited');
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
          var path = document.createElement('span');
          gridElem.setAttribute('class', 'grid');
          gridElem.setAttribute('id', 'grid');
          path.setAttribute('class', 'grid__path');
          path.setAttribute('id', 'grid__path');
          document.body.insertAdjacentElement('afterbegin', path);
          document.body.appendChild(gridElem);
          grid = new _classes_Grid__WEBPACK_IMPORTED_MODULE_1__['Grid'](gridElem);
          grid.CurrentDir = new _classes_GridItem__WEBPACK_IMPORTED_MODULE_2__['GridItem']();
          grid.CurrentDir.createFolder('root');
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
        /* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./dialog */ './src/scripts/dialog.js'
        );

        var initApp = function initApp() {
          document.addEventListener('DOMContentLoaded', function() {
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
        /* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./editor */ './src/scripts/editor.js'
        );
        /* harmony import */ var _classes_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../classes/Dialog */ './src/classes/Dialog.js'
        );

        var initMenu = function initMenu() {
          var templateMenu = document.getElementById('template__menu');
          var clone = templateMenu.content.cloneNode(true);
          document.body.insertAdjacentElement('afterbegin', clone.querySelector('.menu'));
          document.getElementById('menu__create_note').addEventListener('click', function() {
            return Object(_editor__WEBPACK_IMPORTED_MODULE_2__['createEditor'])(document.body);
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
