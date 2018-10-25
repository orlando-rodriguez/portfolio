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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MyLayout.js */ "./pages/components/MyLayout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About Orlando"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Orlando"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./components/images/nodejs-seeklogo.com.svg */ "./pages/components/images/nodejs-seeklogo.com.svg"),
    size: "small",
    floated: "left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./components/images/nodejs-seeklogo.com.svg */ "./pages/components/images/nodejs-seeklogo.com.svg"),
    size: "small",
    floated: "right"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id."))));
});

/***/ }),

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
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: '#323a45'
        },
        href: "mailto:orlando.r@me.com"
      }, "orlando.r@me.com")))))));
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
          backgroundColor: '#5faeb6'
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
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./pages/components/images/nodejs-seeklogo.com.svg":
/*!*********************************************************!*\
  !*** ./pages/components/images/nodejs-seeklogo.com.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI4OXB4IiB2aWV3Qm94PSIwIDAgMjU2IDI4OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljk5OTk5OSwyODguNDYzNzcxIEMxMjQuMDI0ODQ0LDI4OC40NjM3NzEgMTIwLjMxNDY5OSwyODcuNDAzNzI4IDExNi44Njk1NjQsMjg1LjU0ODY1NiBMODEuNjIzMTg4NCwyNjQuNjEyODM4IEM3Ni4zMjI5OCwyNjEuNjk3NzI0IDc4Ljk3MzA4NTQsMjYwLjYzNzY4MiA4MC41NjMxNDU4LDI2MC4xMDc2NjEgQzg3LjcxODQyNTksMjU3LjcyMjU3IDg5LjA0MzQ3NzUsMjU3LjE5MjU0NyA5Ni40NjM3Njg4LDI1Mi45NTIzODEgQzk3LjI1ODc5NzksMjUyLjQyMjM2MSA5OC4zMTg4NDA1LDI1Mi42ODczNzIgOTkuMTEzODcxOCwyNTMuMjE3MzkyIEwxMjYuMTQ0OTI3LDI2OS4zODMwMjQgQzEyNy4yMDQ5NywyNjkuOTEzMDQ1IDEyOC41MzAwMjEsMjY5LjkxMzA0NSAxMjkuMzI1MDUzLDI2OS4zODMwMjQgTDIzNS4wNjQxODIsMjA4LjE2NTYzNCBDMjM2LjEyNDIyNSwyMDcuNjM1NjExIDIzNi42NTQyNDUsMjA2LjU3NTU3MSAyMzYuNjU0MjQ1LDIwNS4yNTA1MTkgTDIzNi42NTQyNDUsODMuMDgwNzQ2NyBDMjM2LjY1NDI0NSw4MS43NTU2OTI5IDIzNi4xMjQyMjUsODAuNjk1NjUyNiAyMzUuMDY0MTgyLDgwLjE2NTYzMjQgTDEyOS4zMjUwNTMsMTkuMjEzMjUwNiBDMTI4LjI2NTAxLDE4LjY4MzIzMDUgMTI2LjkzOTk1OSwxOC42ODMyMzA1IDEyNi4xNDQ5MjcsMTkuMjEzMjUwNiBMMjAuNDA1Nzk1NCw4MC4xNjU2MzI0IEMxOS4zNDU3NTUxLDgwLjY5NTY1MjYgMTguODE1NzM0OSw4Mi4wMjA3MDQxIDE4LjgxNTczNDksODMuMDgwNzQ2NyBMMTguODE1NzM0OSwyMDUuMjUwNTE5IEMxOC44MTU3MzQ5LDIwNi4zMTA1NiAxOS4zNDU3NTUxLDIwNy42MzU2MTEgMjAuNDA1Nzk1NCwyMDguMTY1NjM0IEw0OS4yOTE5MjQ3LDIyNC44NjEyODYgQzY0LjkyNzUzNjQsMjMyLjgxMTU5NSA3NC43MzI5MTk2LDIyMy41MzYyMzQgNzQuNzMyOTE5NiwyMTQuMjYwODcxIEw3NC43MzI5MTk2LDkzLjY4MTE1OSBDNzQuNzMyOTE5Niw5Mi4wOTEwOTg1IDc2LjA1Nzk3MTEsOTAuNTAxMDM1OCA3Ny45MTMwNDI4LDkwLjUwMTAzNTggTDkxLjQyODU3MTYsOTAuNTAxMDM1OCBDOTMuMDE4NjM0Myw5MC41MDEwMzU4IDk0LjYwODY5NDgsOTEuODI2MDg3MyA5NC42MDg2OTQ4LDkzLjY4MTE1OSBMOTQuNjA4Njk0OCwyMTQuMjYwODcxIEM5NC42MDg2OTQ4LDIzNS4xOTY2ODkgODMuMjEzMjUxMiwyNDcuMzg3MTY0IDYzLjMzNzQ3MzcsMjQ3LjM4NzE2NCBDNTcuMjQyMjM2MiwyNDcuMzg3MTY0IDUyLjQ3MjA1MDIsMjQ3LjM4NzE2NCAzOC45NTY1MjE0LDI0MC43NjE5MDYgTDExLjEzMDQzNDcsMjI0Ljg2MTI4NiBDNC4yNDAxNjU4MSwyMjAuODg2MTI5IDUuNjg0MzQxODllLTE0LDIxMy40NjU4NCA1LjY4NDM0MTg5ZS0xNCwyMDUuNTE1NTI4IEw1LjY4NDM0MTg5ZS0xNCw4My4zNDU3NTU3IEM1LjY4NDM0MTg5ZS0xNCw3NS4zOTU0NDY1IDQuMjQwMTY1ODEsNjcuOTc1MTU1MiAxMS4xMzA0MzQ3LDY0LjAwMDAwMDYgTDExNi44Njk1NjQsMi43ODI2MDc1MiBDMTIzLjQ5NDgyNCwtMC45Mjc1MzU4NDEgMTMyLjUwNTE3NiwtMC45Mjc1MzU4NDEgMTM5LjEzMDQzNiwyLjc4MjYwNzUyIEwyNDQuODY5NTY1LDY0LjAwMDAwMDYgQzI1MS43NTk4MzQsNjcuOTc1MTU1MiAyNTYsNzUuMzk1NDQ2NSAyNTYsODMuMzQ1NzU1NyBMMjU2LDIwNS41MTU1MjggQzI1NiwyMTMuNDY1ODQgMjUxLjc1OTgzNCwyMjAuODg2MTI5IDI0NC44Njk1NjUsMjI0Ljg2MTI4NiBMMTM5LjEzMDQzNiwyODYuMDc4Njc2IEMxMzUuNjg1Mjk5LDI4Ny42Njg3MzkgMTMxLjcxMDE0NSwyODguNDYzNzcxIDEyNy45OTk5OTksMjg4LjQ2Mzc3MSBMMTI3Ljk5OTk5OSwyODguNDYzNzcxIFogTTE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBDMTE0LjIxOTQ2MSwyMDQuNDU1NDg4IDEwNC42NzkwODksMTgzLjI1NDY1OSAxMDQuNjc5MDg5LDE2NS4yMzM5NTUgQzEwNC42NzkwODksMTYzLjY0Mzg5MyAxMDYuMDA0MTQxLDE2Mi4wNTM4MzIgMTA3Ljg1OTIxMiwxNjIuMDUzODMyIEwxMjEuNjM5NzUyLDE2Mi4wNTM4MzIgQzEyMy4yMjk4MTMsMTYyLjA1MzgzMiAxMjQuNTU0ODY0LDE2My4xMTM4NzIgMTI0LjU1NDg2NCwxNjQuNzAzOTM1IEMxMjYuNjc0OTQ3LDE3OC43NDk0ODQgMTMyLjc3MDE4NywxODUuNjM5NzUzIDE2MC44NjEyODMsMTg1LjYzOTc1MyBDMTgzLjEyMjE1NCwxODUuNjM5NzUzIDE5Mi42NjI1MjYsMTgwLjYwNDU1NiAxOTIuNjYyNTI2LDE2OC42NzkwOSBDMTkyLjY2MjUyNiwxNjEuNzg4ODIxIDE5MC4wMTI0MjMsMTU2Ljc1MzYyNCAxNTUuMjk2MDY1LDE1My4zMDg0ODkgQzEyNi40MDk5MzgsMTUwLjM5MzM3NSAxMDguMzg5MjM1LDE0NC4wMzMxMjYgMTA4LjM4OTIzNSwxMjAuOTc3MjI2IEMxMDguMzg5MjM1LDk5LjUxMTM4NzUgMTI2LjQwOTkzOCw4Ni43OTA4OTAxIDE1Ni42MjExMTksODYuNzkwODkwMSBDMTkwLjU0MjQ0Myw4Ni43OTA4OTAxIDIwNy4yMzgwOTUsOTguNDUxMzQ3MiAyMDkuMzU4MTc4LDEyMy44OTIzNCBDMjA5LjM1ODE3OCwxMjQuNjg3MzcxIDIwOS4wOTMxNjcsMTI1LjQ4MjQwMyAyMDguNTYzMTQ3LDEyNi4yNzc0MzQgQzIwOC4wMzMxMjcsMTI2LjgwNzQ1NCAyMDcuMjM4MDk1LDEyNy4zMzc0NzQgMjA2LjQ0MzA2NCwxMjcuMzM3NDc0IEwxOTIuNjYyNTI2LDEyNy4zMzc0NzQgQzE5MS4zMzc0NzUsMTI3LjMzNzQ3NCAxOTAuMDEyNDIzLDEyNi4yNzc0MzQgMTg5Ljc0NzQxMiwxMjQuOTUyMzgyIEMxODYuNTY3Mjg5LDExMC4zNzY4MTMgMTc4LjM1MTk2NiwxMDUuNjA2NjI1IDE1Ni42MjExMTksMTA1LjYwNjYyNSBDMTMyLjI0MDE2NSwxMDUuNjA2NjI1IDEyOS4zMjUwNTMsMTE0LjA4Njk1NyAxMjkuMzI1MDUzLDEyMC40NDcyMDUgQzEyOS4zMjUwNTMsMTI4LjEzMjUwNiAxMzIuNzcwMTg3LDEzMC41MTc2IDE2NS42MzE0NzEsMTM0Ljc1Nzc2NiBDMTk4LjIyNzc0NCwxMzguOTk3OTMxIDIxMy41OTgzNDQsMTQ1LjA5MzE2OSAyMTMuNTk4MzQ0LDE2Ny44ODQwNTggQzIxMy4zMzMzMzMsMTkxLjIwNDk3IDE5NC4yNTI1ODksMjA0LjQ1NTQ4OCAxNjAuNTk2Mjc0LDIwNC40NTU0ODggTDE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBaIiBmaWxsPSIjNTM5RTQzIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


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

/***/ })

/******/ });
//# sourceMappingURL=about.js.map