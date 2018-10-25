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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/components/images/lightbulb.jpeg":
/*!************************************************!*\
  !*** ./pages/components/images/lightbulb.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/lightbulb-02dd90eecbc213efbeaef21959b30fa1.jpeg";

/***/ }),

/***/ "./pages/components/images/map.jpg":
/*!*****************************************!*\
  !*** ./pages/components/images/map.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-e3ae1e28899b47895542ff7dd551c9d6.jpg";

/***/ }),

/***/ "./pages/components/images/popcorn.jpg":
/*!*********************************************!*\
  !*** ./pages/components/images/popcorn.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/popcorn-19845b66db3f1c5940d002e356685b85.jpg";

/***/ }),

/***/ "./pages/components/images/soapwashing.jpg":
/*!*************************************************!*\
  !*** ./pages/components/images/soapwashing.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/soapwashing-c973e3565d85d3bfadf8f86bda3db521.jpg";

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyLayout.js */ "./pages/components/MyLayout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);





var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Portfolio"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-3370695043"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3370695043"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./components/images/soapwashing.jpg */ "./pages/components/images/soapwashing.jpg"),
    alt: "Hand Washing",
    className: "jsx-3370695043"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3370695043"
  }, "Capstone"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/orlando-rodriguez/capstone",
    className: "jsx-3370695043"
  }, "Source Code")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://craftydudestore.herokuapp.com/",
    className: "jsx-3370695043"
  }, "Live Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3370695043" + " " + "description"
  }, "Crafty Dude is a natural, organic skincare solution.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3370695043"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./components/images/map.jpg */ "./pages/components/images/map.jpg"),
    alt: "Map",
    className: "jsx-3370695043"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3370695043"
  }, "Where's Orlando?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/orlando-rodriguez/wheresorlando",
    className: "jsx-3370695043"
  }, "Source Code")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://whereorlando.firebaseapp.com/",
    className: "jsx-3370695043"
  }, "Live Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3370695043" + " " + "description"
  }, "Discover a new hot spot and find Orlando along the way.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3370695043"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./components/images/popcorn.jpg */ "./pages/components/images/popcorn.jpg"),
    alt: "Popcorn",
    className: "jsx-3370695043"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3370695043"
  }, "Movie Finder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/orlando-rodriguez/galvanize-tower/tree/master/client/app/src",
    className: "jsx-3370695043"
  }, "Source Code")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://moviefinder-47753.firebaseapp.com/",
    className: "jsx-3370695043"
  }, "Live Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3370695043" + " " + "description"
  }, "Have a movie in mind? Wanna know what the plot is?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3370695043"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./components/images/lightbulb.jpeg */ "./pages/components/images/lightbulb.jpeg"),
    alt: "light bulb",
    className: "jsx-3370695043"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3370695043"
  }, "To-Do Organizer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/orlando-rodriguez/mytodomvc",
    className: "jsx-3370695043"
  }, "Source Code")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    style: {
      marginBottom: '.5em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://todo-yeoman.firebaseapp.com/",
    className: "jsx-3370695043"
  }, "Live Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3370695043" + " " + "description"
  }, "Create, Update, and Delete items from a To-Do list.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3370695043",
    css: "main.jsx-3370695043{display:grid;grid-template-columns:250px 250px;grid-template-rows:repeat(2,450px);grid-gap:20px;margin-top:44px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;grid-auto-rows:500px;}h2.jsx-3370695043{font-family:Poppins;font-size:18px;font-weight:600;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#4a4a4a;}img.jsx-3370695043{width:100%;height:150px;}button.ui.fluid.button.price.jsx-3370695043{font-family:Poppins;font-size:14px;font-weight:500;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#4a4a4a;position:relative;bottom:5px;}.description.jsx-3370695043{font-family:Work Sans;font-size:14px;font-weight:300;line-height:1.29;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;text-align:left;color:#4a4a4a;padding:10px 0px 10px 10px;border-top:1px solid #4a4a4a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFHOEIsQUFZTyxBQVNULEFBSVMsQUFVRSxXQWJULEVBckJxQixPQVluQixBQWFBLEVBVUEsRUFiakIsV0FUa0IsQUFhQSxFQVVBLFVBbkNvQixJQWFmLEFBYUEsRUFVSixpQkFDSSxZQXBDUCxjQUNFLGdCQUNhLHdDQVdYLEFBYUEsa0JBWkosQUFhQSxDQVVFLGFBckJsQixBQVlvQixHQVVKLGNBQ2EsQ0FWaEIsV0FDYixlQVUrQixPQXJDVCxzQkFzQ3RCLDJFQXJDdUIsNEVBQ0EscUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvcG9ydGZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8TGF5b3V0IHRpdGxlPSdQb3J0Zm9saW8nPlxuICAgIDxtYWluPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuL2NvbXBvbmVudHMvaW1hZ2VzL3NvYXB3YXNoaW5nLmpwZycpfSBhbHQ9XCJIYW5kIFdhc2hpbmdcIiAvPlxuICAgICAgICAgIDxoMj5DYXBzdG9uZTwvaDI+XG4gICAgICAgICAgPEJ1dHRvbiBmbHVpZCBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41ZW0nfX0gPjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vcmxhbmRvLXJvZHJpZ3Vlei9jYXBzdG9uZSc+U291cmNlIENvZGU8L2E+PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBmbHVpZCBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41ZW0nfX0gPjxhIGhyZWY9J2h0dHBzOi8vY3JhZnR5ZHVkZXN0b3JlLmhlcm9rdWFwcC5jb20vJz5MaXZlIFNpdGU8L2E+PC9CdXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBDcmFmdHkgRHVkZSBpcyBhIG5hdHVyYWwsIG9yZ2FuaWMgc2tpbmNhcmUgc29sdXRpb24uXG4gICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZXMvbWFwLmpwZycpfSBhbHQ9XCJNYXBcIiAvPlxuICAgICAgICAgIDxoMj5XaGVyZSdzIE9ybGFuZG8/PC9oMj5cbiAgICAgICAgICA8QnV0dG9uICBmbHVpZCBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41ZW0nfX0gPjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vcmxhbmRvLXJvZHJpZ3Vlei93aGVyZXNvcmxhbmRvJz5Tb3VyY2UgQ29kZTwvYT48L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGZsdWlkIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnLjVlbSd9fSA+PGEgaHJlZj0naHR0cHM6Ly93aGVyZW9ybGFuZG8uZmlyZWJhc2VhcHAuY29tLyc+TGl2ZSBTaXRlPC9hPjwvQnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgRGlzY292ZXIgYSBuZXcgaG90IHNwb3QgYW5kIGZpbmQgT3JsYW5kbyBhbG9uZyB0aGUgd2F5LlxuICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuL2NvbXBvbmVudHMvaW1hZ2VzL3BvcGNvcm4uanBnJyl9IGFsdD1cIlBvcGNvcm5cIiAvPlxuICAgICAgICAgIDxoMj5Nb3ZpZSBGaW5kZXI8L2gyPlxuICAgICAgICAgIDxCdXR0b24gIGZsdWlkIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnLjVlbSd9fSA+PGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL29ybGFuZG8tcm9kcmlndWV6L2dhbHZhbml6ZS10b3dlci90cmVlL21hc3Rlci9jbGllbnQvYXBwL3NyYyc+U291cmNlIENvZGU8L2E+PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBmbHVpZCBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41ZW0nfX0gPjxhIGhyZWY9J2h0dHBzOi8vbW92aWVmaW5kZXItNDc3NTMuZmlyZWJhc2VhcHAuY29tLyc+TGl2ZSBTaXRlPC9hPjwvQnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgSGF2ZSBhIG1vdmllIGluIG1pbmQ/IFdhbm5hIGtub3cgd2hhdCB0aGUgcGxvdCBpcz9cbiAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi9jb21wb25lbnRzL2ltYWdlcy9saWdodGJ1bGIuanBlZycpfSBhbHQ9XCJsaWdodCBidWxiXCIgLz5cbiAgICAgICAgICA8aDI+VG8tRG8gT3JnYW5pemVyPC9oMj5cbiAgICAgICAgICA8QnV0dG9uICBmbHVpZCBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41ZW0nfX0gPjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vcmxhbmRvLXJvZHJpZ3Vlei9teXRvZG9tdmMnPlNvdXJjZSBDb2RlPC9hPjwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gZmx1aWQgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcuNWVtJ319ID48YSBocmVmPSdodHRwczovL3RvZG8teWVvbWFuLmZpcmViYXNlYXBwLmNvbS8nPkxpdmUgU2l0ZTwvYT48L0J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgQ3JlYXRlLCBVcGRhdGUsIGFuZCBEZWxldGUgaXRlbXMgZnJvbSBhIFRvLURvIGxpc3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDI1MHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQ1MHB4KTtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogNTAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICBidXR0b24udWkuZmx1aWQuYnV0dG9uLnByaWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFdvcmsgU2FucztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yOTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YTRhNGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICA8L2Rpdj5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdfQ== */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/portfolio.js */"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/portfolio.js */"./pages/portfolio.js");


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
//# sourceMappingURL=portfolio.js.map