module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        vertical: true,
        style: {
          padding: '3em 0em',
          marginTop: '10em',
          backgroundColor: '#778899'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        divided: true,
        stackable: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        link: true,
        inverted: true,
        style: {
          color: '#778899',
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          padding: '1em 0em'
        },
        href: "/about",
        as: "a"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          paddingBottom: '1em'
        },
        href: "/portfolio",
        as: "a"
      }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          paddingBottom: '1em'
        },
        href: "/resume",
        as: "a"
      }, "Resume"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        inverted: true,
        as: "h5",
        content: "\xA9 OR 2018",
        style: {
          color: '#323a45',
          textAlign: 'center'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 6
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        as: "h3",
        inverted: true
      }, "Hire Orlando"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          color: '#323a45',
          margin: 0
        }
      }, "Available for full-time, contract, and freelance work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"].Group, {
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "envelope open outline"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: '#323a45'
        },
        href: "mailto:orlando.r@me.com"
      }, "orlando.r@me.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"].Group, {
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "linkedin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: '#323a45'
        },
        href: "https://www.linkedin.com/in/rodriguez-orlando/"
      }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"].Group, {
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "github"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: '#323a45'
        },
        href: "https://github.com/orlando-rodriguez"
      }, "GitHub"))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var linkStyle = {
  marginRight: 15
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      return _this.setState({
        activeItem: name
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        fluid: true,
        widths: 4,
        icon: "labeled",
        style: {
          backgroundColor: '#5FAEB6'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "home",
        active: activeItem === 'home',
        onClick: this.handleItemClick,
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "home"
      }), "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "about",
        active: activeItem === 'about',
        onClick: this.handleItemClick,
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "user outline"
      }), "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/portfolio",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "portfolio",
        active: activeItem === 'portfolio',
        onClick: this.handleItemClick,
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "book"
      }), "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/resume",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "resume",
        active: activeItem === 'resume',
        onClick: this.handleItemClick,
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "newspaper outline"
      }), "Resume")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/components/Main.js":
/*!**********************************!*\
  !*** ./pages/components/Main.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);




var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3078888583"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./images/orlandocutout.jpg */ "./pages/components/images/orlandocutout.jpg"),
    size: "large",
    alt: "Orlando Selfie",
    centered: true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3078888583"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3078888583"
  }, "Software Developer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    columns: 3,
    relaxed: true,
    style: {
      marginTop: '2em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      borderRightStyle: 'dashed',
      borderRightColor: '#778899'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./images/react-seeklogo.com.svg */ "./pages/components/images/react-seeklogo.com.svg"),
    alt: "React Logo",
    size: "small",
    centered: true,
    style: {
      width: '150px',
      height: '150px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3078888583"
  }, "React")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      borderRightStyle: 'dashed',
      borderRightColor: '#778899'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./images/javascript-js-seeklogo.com.svg */ "./pages/components/images/javascript-js-seeklogo.com.svg"),
    alt: "JavaScript logo",
    size: "small",
    centered: true,
    style: {
      width: '150px',
      height: '150px',
      borderRight: '1px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3078888583"
  }, "JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    vertical: true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./images/nodejs-seeklogo.com.svg */ "./pages/components/images/nodejs-seeklogo.com.svg"),
    alt: "NodeJS logo",
    size: "small",
    centered: true,
    style: {
      width: '150px',
      height: '150px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3078888583"
  }, "NodeJS")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3078888583",
    css: "h2.jsx-3078888583,p.jsx-3078888583{font-family:\"Arial\";text-align:center;margin-top:1em;color:#5faeb6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHOEIsb0JBQ0Ysa0JBQ0gsZUFDRCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvT3JsYW5kby9Eb2N1bWVudHMvR2FsdmFuaXplL3BvcnRmb2xpby9wb3J0Zm9saW9fYXBwL3BhZ2VzL2NvbXBvbmVudHMvTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciwgSW1hZ2UsIEdyaWQsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuXG5cblxuPGRpdj5cblxuICAgPEltYWdlIHNyYz17cmVxdWlyZSgnLi9pbWFnZXMvb3JsYW5kb2N1dG91dC5qcGcnKX0gc2l6ZT0nbGFyZ2UnIGFsdD0nT3JsYW5kbyBTZWxmaWUnICBjZW50ZXJlZCAvPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+U29mdHdhcmUgRGV2ZWxvcGVyPC9oMj5cbiAgICAgIDxHcmlkIGNvbHVtbnM9ezN9IHJlbGF4ZWQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cbiAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7Ym9yZGVyUmlnaHRTdHlsZTogJ2Rhc2hlZCcsIGJvcmRlclJpZ2h0Q29sb3I6ICcjNzc4ODk5Jyx9fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXF1aXJlKCcuL2ltYWdlcy9yZWFjdC1zZWVrbG9nby5jb20uc3ZnJyl9IGFsdD0nUmVhY3QgTG9nbycgc2l6ZT0nc21hbGwnIGNlbnRlcmVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBoZWlnaHQ6ICcxNTBweCcsIH19IC8+XG4gICAgICAgICAgPHA+UmVhY3Q8L3A+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7Ym9yZGVyUmlnaHRTdHlsZTogJ2Rhc2hlZCcsIGJvcmRlclJpZ2h0Q29sb3I6ICcjNzc4ODk5Jyx9fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXF1aXJlKCcuL2ltYWdlcy9qYXZhc2NyaXB0LWpzLXNlZWtsb2dvLmNvbS5zdmcnKX0gYWx0PSdKYXZhU2NyaXB0IGxvZ28nIHNpemU9J3NtYWxsJyBjZW50ZXJlZCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgaGVpZ2h0OiAnMTUwcHgnLCBib3JkZXJSaWdodDogJzFweCcsIH19IC8+XG4gICAgICAgICAgPHA+SmF2YVNjcmlwdDwvcD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPERpdmlkZXIgdmVydGljYWw+PC9EaXZpZGVyPlxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZSgnLi9pbWFnZXMvbm9kZWpzLXNlZWtsb2dvLmNvbS5zdmcnKX0gYWx0PSdOb2RlSlMgbG9nbycgc2l6ZT0nc21hbGwnIGNlbnRlcmVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBoZWlnaHQ6ICcxNTBweCcsIH19IC8+XG4gICAgICAgICAgPHA+Tm9kZUpTPC9wPlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBoMiwgcCB7XG4gICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgY29sb3I6ICM1ZmFlYjY7XG4gICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gPC9kaXY+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19 */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/components/Main.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./pages/components/MyLayout.js":
/*!**************************************!*\
  !*** ./pages/components/MyLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./pages/components/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





var layoutStyle = {
  margin: 0,
  padding: 0
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Orlando's Portfolio" : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 0,
      margin: 0,
      backgroundColor: '#f6f7f9'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "HTML, CSS, JavaScript, React, Portfolio, Software Engineer, Resume"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Orlando Rodriguez' Software Engineering Portfolio"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Orlando Rodriguez"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    src: __webpack_require__(/*! ./images/orlandocutout.jpg */ "./pages/components/images/orlandocutout.jpg")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:400,600",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans",
    rel: "stylesheet"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./pages/components/images/javascript-js-seeklogo.com.svg":
/*!****************************************************************!*\
  !*** ./pages/components/images/javascript-js-seeklogo.com.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTAsMCBMMjU2LDAgTDI1NiwyNTYgTDAsMjU2IEwwLDAgWiIgZmlsbD0iI0Y3REYxRSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik02Ny4zMTE3NDYsMjEzLjkzMjI5MiBMODYuOTAyNjU0LDIwMi4wNzYyNDEgQzkwLjY4MjEwNzksMjA4Ljc3NzM0NiA5NC4xMjAyMjg2LDIxNC40NDcxMzcgMTAyLjM2NzA4NiwyMTQuNDQ3MTM3IEMxMTAuMjcyMjAzLDIxNC40NDcxMzcgMTE1LjI1NjA3NiwyMTEuMzU0ODE5IDExNS4yNTYwNzYsMTk5LjMyNjg4MyBMMTE1LjI1NjA3NiwxMTcuNTI4Nzg3IEwxMzkuMzEzNTc1LDExNy41Mjg3ODcgTDEzOS4zMTM1NzUsMTk5LjY2Njk5NyBDMTM5LjMxMzU3NSwyMjQuNTg0MzMgMTI0LjcwNzc1OSwyMzUuOTI1OTQzIDEwMy4zOTg0LDIzNS45MjU5NDMgQzg0LjE1MzI5NTIsMjM1LjkyNTk0MyA3Mi45ODE5NDI5LDIyNS45NTg2MDMgNjcuMzExMzM5NywyMTMuOTMwMjYiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTUyLjM4MDk1MiwyMTEuMzU0NDEzIEwxNzEuOTY5NDIyLDIwMC4wMTI4IEMxNzcuMTI1OTk0LDIwOC40MzM5ODEgMTgzLjgyNzkxMSwyMTQuNjE5ODM1IDE5NS42ODQzNjgsMjE0LjYxOTgzNSBDMjA1LjY1MjUyMSwyMTQuNjE5ODM1IDIxMi4wMDkwNDEsMjA5LjYzNTk2MiAyMTIuMDA5MDQxLDIwMi43NjIxNTkgQzIxMi4wMDkwNDEsMTk0LjUxMzY3NiAyMDUuNDc5NDE2LDE5MS41OTIwMjUgMTk0LjQ4MTE2OCwxODYuNzgyMDcgTDE4OC40Njg0MTksMTg0LjIwMjU2NSBDMTcxLjExMTIxMywxNzYuODE0NzMgMTU5LjU5NzMwOCwxNjcuNTM1MzQgMTU5LjU5NzMwOCwxNDcuOTQ0ODM4IEMxNTkuNTk3MzA4LDEyOS45MDEzMDggMTczLjM0NDUwOCwxMTYuMTUzMjk1IDE5NC44MjU3NTIsMTE2LjE1MzI5NSBDMjEwLjExOTkyNCwxMTYuMTUzMjk1IDIyMS4xMTc3NjUsMTIxLjQ4MDk0IDIyOS4wMjE2NjMsMTM1LjQwMDQzMiBMMjEwLjI5MDU5LDE0Ny40Mjg3NzUgQzIwNi4xNjYxNDYsMTQwLjA0MDEyNyAyMDEuNjk5NTU2LDEzNy4xMTkyODkgMTk0LjgyNjE1OSwxMzcuMTE5Mjg5IEMxODcuNzgwNDcsMTM3LjExOTI4OSAxODMuMzEyMjU0LDE0MS41ODcwOTggMTgzLjMxMjI1NCwxNDcuNDI4Nzc1IEMxODMuMzEyMjU0LDE1NC42NDYzNDkgMTg3Ljc4MDQ3LDE1Ny41Njg0MDYgMTk4LjA4OTk1NiwxNjIuMDM2NjIyIEwyMDQuMTAzOTI0LDE2NC42MTQwOTUgQzIyNC41NTM0NDgsMTczLjM3ODY0MSAyMzYuMDY3MzUyLDE4Mi4zMTM0NDggMjM2LjA2NzM1MiwyMDIuNDE4Mzg3IEMyMzYuMDY3MzUyLDIyNC4wNzE5MjQgMjE5LjA1NTEzNywyMzUuOTI3OTc1IDE5Ni4yMDA0MzIsMjM1LjkyNzk3NSBDMTczLjg2MDk3OCwyMzUuOTI3OTc1IDE1OS40MjU4MjksMjI1LjI3NDMxMSAxNTIuMzgxMzU5LDIxMS4zNTQ0MTMiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./pages/components/images/nodejs-seeklogo.com.svg":
/*!*********************************************************!*\
  !*** ./pages/components/images/nodejs-seeklogo.com.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI4OXB4IiB2aWV3Qm94PSIwIDAgMjU2IDI4OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljk5OTk5OSwyODguNDYzNzcxIEMxMjQuMDI0ODQ0LDI4OC40NjM3NzEgMTIwLjMxNDY5OSwyODcuNDAzNzI4IDExNi44Njk1NjQsMjg1LjU0ODY1NiBMODEuNjIzMTg4NCwyNjQuNjEyODM4IEM3Ni4zMjI5OCwyNjEuNjk3NzI0IDc4Ljk3MzA4NTQsMjYwLjYzNzY4MiA4MC41NjMxNDU4LDI2MC4xMDc2NjEgQzg3LjcxODQyNTksMjU3LjcyMjU3IDg5LjA0MzQ3NzUsMjU3LjE5MjU0NyA5Ni40NjM3Njg4LDI1Mi45NTIzODEgQzk3LjI1ODc5NzksMjUyLjQyMjM2MSA5OC4zMTg4NDA1LDI1Mi42ODczNzIgOTkuMTEzODcxOCwyNTMuMjE3MzkyIEwxMjYuMTQ0OTI3LDI2OS4zODMwMjQgQzEyNy4yMDQ5NywyNjkuOTEzMDQ1IDEyOC41MzAwMjEsMjY5LjkxMzA0NSAxMjkuMzI1MDUzLDI2OS4zODMwMjQgTDIzNS4wNjQxODIsMjA4LjE2NTYzNCBDMjM2LjEyNDIyNSwyMDcuNjM1NjExIDIzNi42NTQyNDUsMjA2LjU3NTU3MSAyMzYuNjU0MjQ1LDIwNS4yNTA1MTkgTDIzNi42NTQyNDUsODMuMDgwNzQ2NyBDMjM2LjY1NDI0NSw4MS43NTU2OTI5IDIzNi4xMjQyMjUsODAuNjk1NjUyNiAyMzUuMDY0MTgyLDgwLjE2NTYzMjQgTDEyOS4zMjUwNTMsMTkuMjEzMjUwNiBDMTI4LjI2NTAxLDE4LjY4MzIzMDUgMTI2LjkzOTk1OSwxOC42ODMyMzA1IDEyNi4xNDQ5MjcsMTkuMjEzMjUwNiBMMjAuNDA1Nzk1NCw4MC4xNjU2MzI0IEMxOS4zNDU3NTUxLDgwLjY5NTY1MjYgMTguODE1NzM0OSw4Mi4wMjA3MDQxIDE4LjgxNTczNDksODMuMDgwNzQ2NyBMMTguODE1NzM0OSwyMDUuMjUwNTE5IEMxOC44MTU3MzQ5LDIwNi4zMTA1NiAxOS4zNDU3NTUxLDIwNy42MzU2MTEgMjAuNDA1Nzk1NCwyMDguMTY1NjM0IEw0OS4yOTE5MjQ3LDIyNC44NjEyODYgQzY0LjkyNzUzNjQsMjMyLjgxMTU5NSA3NC43MzI5MTk2LDIyMy41MzYyMzQgNzQuNzMyOTE5NiwyMTQuMjYwODcxIEw3NC43MzI5MTk2LDkzLjY4MTE1OSBDNzQuNzMyOTE5Niw5Mi4wOTEwOTg1IDc2LjA1Nzk3MTEsOTAuNTAxMDM1OCA3Ny45MTMwNDI4LDkwLjUwMTAzNTggTDkxLjQyODU3MTYsOTAuNTAxMDM1OCBDOTMuMDE4NjM0Myw5MC41MDEwMzU4IDk0LjYwODY5NDgsOTEuODI2MDg3MyA5NC42MDg2OTQ4LDkzLjY4MTE1OSBMOTQuNjA4Njk0OCwyMTQuMjYwODcxIEM5NC42MDg2OTQ4LDIzNS4xOTY2ODkgODMuMjEzMjUxMiwyNDcuMzg3MTY0IDYzLjMzNzQ3MzcsMjQ3LjM4NzE2NCBDNTcuMjQyMjM2MiwyNDcuMzg3MTY0IDUyLjQ3MjA1MDIsMjQ3LjM4NzE2NCAzOC45NTY1MjE0LDI0MC43NjE5MDYgTDExLjEzMDQzNDcsMjI0Ljg2MTI4NiBDNC4yNDAxNjU4MSwyMjAuODg2MTI5IDUuNjg0MzQxODllLTE0LDIxMy40NjU4NCA1LjY4NDM0MTg5ZS0xNCwyMDUuNTE1NTI4IEw1LjY4NDM0MTg5ZS0xNCw4My4zNDU3NTU3IEM1LjY4NDM0MTg5ZS0xNCw3NS4zOTU0NDY1IDQuMjQwMTY1ODEsNjcuOTc1MTU1MiAxMS4xMzA0MzQ3LDY0LjAwMDAwMDYgTDExNi44Njk1NjQsMi43ODI2MDc1MiBDMTIzLjQ5NDgyNCwtMC45Mjc1MzU4NDEgMTMyLjUwNTE3NiwtMC45Mjc1MzU4NDEgMTM5LjEzMDQzNiwyLjc4MjYwNzUyIEwyNDQuODY5NTY1LDY0LjAwMDAwMDYgQzI1MS43NTk4MzQsNjcuOTc1MTU1MiAyNTYsNzUuMzk1NDQ2NSAyNTYsODMuMzQ1NzU1NyBMMjU2LDIwNS41MTU1MjggQzI1NiwyMTMuNDY1ODQgMjUxLjc1OTgzNCwyMjAuODg2MTI5IDI0NC44Njk1NjUsMjI0Ljg2MTI4NiBMMTM5LjEzMDQzNiwyODYuMDc4Njc2IEMxMzUuNjg1Mjk5LDI4Ny42Njg3MzkgMTMxLjcxMDE0NSwyODguNDYzNzcxIDEyNy45OTk5OTksMjg4LjQ2Mzc3MSBMMTI3Ljk5OTk5OSwyODguNDYzNzcxIFogTTE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBDMTE0LjIxOTQ2MSwyMDQuNDU1NDg4IDEwNC42NzkwODksMTgzLjI1NDY1OSAxMDQuNjc5MDg5LDE2NS4yMzM5NTUgQzEwNC42NzkwODksMTYzLjY0Mzg5MyAxMDYuMDA0MTQxLDE2Mi4wNTM4MzIgMTA3Ljg1OTIxMiwxNjIuMDUzODMyIEwxMjEuNjM5NzUyLDE2Mi4wNTM4MzIgQzEyMy4yMjk4MTMsMTYyLjA1MzgzMiAxMjQuNTU0ODY0LDE2My4xMTM4NzIgMTI0LjU1NDg2NCwxNjQuNzAzOTM1IEMxMjYuNjc0OTQ3LDE3OC43NDk0ODQgMTMyLjc3MDE4NywxODUuNjM5NzUzIDE2MC44NjEyODMsMTg1LjYzOTc1MyBDMTgzLjEyMjE1NCwxODUuNjM5NzUzIDE5Mi42NjI1MjYsMTgwLjYwNDU1NiAxOTIuNjYyNTI2LDE2OC42NzkwOSBDMTkyLjY2MjUyNiwxNjEuNzg4ODIxIDE5MC4wMTI0MjMsMTU2Ljc1MzYyNCAxNTUuMjk2MDY1LDE1My4zMDg0ODkgQzEyNi40MDk5MzgsMTUwLjM5MzM3NSAxMDguMzg5MjM1LDE0NC4wMzMxMjYgMTA4LjM4OTIzNSwxMjAuOTc3MjI2IEMxMDguMzg5MjM1LDk5LjUxMTM4NzUgMTI2LjQwOTkzOCw4Ni43OTA4OTAxIDE1Ni42MjExMTksODYuNzkwODkwMSBDMTkwLjU0MjQ0Myw4Ni43OTA4OTAxIDIwNy4yMzgwOTUsOTguNDUxMzQ3MiAyMDkuMzU4MTc4LDEyMy44OTIzNCBDMjA5LjM1ODE3OCwxMjQuNjg3MzcxIDIwOS4wOTMxNjcsMTI1LjQ4MjQwMyAyMDguNTYzMTQ3LDEyNi4yNzc0MzQgQzIwOC4wMzMxMjcsMTI2LjgwNzQ1NCAyMDcuMjM4MDk1LDEyNy4zMzc0NzQgMjA2LjQ0MzA2NCwxMjcuMzM3NDc0IEwxOTIuNjYyNTI2LDEyNy4zMzc0NzQgQzE5MS4zMzc0NzUsMTI3LjMzNzQ3NCAxOTAuMDEyNDIzLDEyNi4yNzc0MzQgMTg5Ljc0NzQxMiwxMjQuOTUyMzgyIEMxODYuNTY3Mjg5LDExMC4zNzY4MTMgMTc4LjM1MTk2NiwxMDUuNjA2NjI1IDE1Ni42MjExMTksMTA1LjYwNjYyNSBDMTMyLjI0MDE2NSwxMDUuNjA2NjI1IDEyOS4zMjUwNTMsMTE0LjA4Njk1NyAxMjkuMzI1MDUzLDEyMC40NDcyMDUgQzEyOS4zMjUwNTMsMTI4LjEzMjUwNiAxMzIuNzcwMTg3LDEzMC41MTc2IDE2NS42MzE0NzEsMTM0Ljc1Nzc2NiBDMTk4LjIyNzc0NCwxMzguOTk3OTMxIDIxMy41OTgzNDQsMTQ1LjA5MzE2OSAyMTMuNTk4MzQ0LDE2Ny44ODQwNTggQzIxMy4zMzMzMzMsMTkxLjIwNDk3IDE5NC4yNTI1ODksMjA0LjQ1NTQ4OCAxNjAuNTk2Mjc0LDIwNC40NTU0ODggTDE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBaIiBmaWxsPSIjNTM5RTQzIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./pages/components/images/orlandocutout.jpg":
/*!***************************************************!*\
  !*** ./pages/components/images/orlandocutout.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/orlandocutout-06497e298a22447f1da1e4a419bf88a8.jpg";

/***/ }),

/***/ "./pages/components/images/react-seeklogo.com.svg":
/*!********************************************************!*\
  !*** ./pages/components/images/react-seeklogo.com.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-seeklogo.com-ee61ca49ec2188e4ac026017e8b315b7.svg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MyLayout.js */ "./pages/components/MyLayout.js");
/* harmony import */ var _components_Main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Main.js */ "./pages/components/Main.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1656992141"
  }, "Orlando Rodriguez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Main_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1656992141",
    css: "h1.jsx-1656992141{font-family:\"Arial\";text-align:center;color:#5faeb6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBRzZCLG9CQUNGLGtCQUNKLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluLmpzJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPk9ybGFuZG8gUm9kcmlndWV6PC9oMT5cbiAgICA8TWFpbiAvPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNWZhZWI2O1xuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map