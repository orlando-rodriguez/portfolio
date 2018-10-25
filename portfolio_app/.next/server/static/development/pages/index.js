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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);



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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        inverted: true,
        vertical: true,
        style: {
          padding: '3em 0em',
          marginTop: '10em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        divided: true,
        inverted: true,
        stackable: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 3
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        inverted: true,
        as: "h4",
        content: "Hire Me"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        link: true,
        inverted: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        href: "/about",
        as: "a"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        as: "a"
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        as: "a"
      }, "Religious Ceremonies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        as: "a"
      }, "Gazebo Plans"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 7
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h4",
        inverted: true
      }, "Footer Header"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-853409435"
      }, "Extra space for a call to action inside the footer that could help re-engage users."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "853409435",
        css: "div.ui.inverted.vertical.segment.jsx-853409435{margin-top:10em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QixBQUdpQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL09ybGFuZG8vRG9jdW1lbnRzL0dhbHZhbml6ZS9wb3J0Zm9saW8vcG9ydGZvbGlvX2FwcC9wYWdlcy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VnbWVudCwgQ29udGFpbmVyLCBHcmlkLCBIZWFkZXIsIExpc3QsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxTZWdtZW50IGludmVydGVkIHZlcnRpY2FsIHN0eWxlPXt7IHBhZGRpbmc6ICczZW0gMGVtJywgbWFyZ2luVG9wOiAnMTBlbScsIH19PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWQgZGl2aWRlZCBpbnZlcnRlZCBzdGFja2FibGU+XG4gICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J0hpcmUgTWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSAgaHJlZj0nL2Fib3V0JyBhcz0nYSc+QWJvdXQ8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Db250YWN0IFVzPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+UmVsaWdpb3VzIENlcmVtb25pZXM8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5HYXplYm8gUGxhbnM8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDQnIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgIEZvb3RlciBIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIHNwYWNlIGZvciBhIGNhbGwgdG8gYWN0aW9uIGluc2lkZSB0aGUgZm9vdGVyIHRoYXQgY291bGQgaGVscCByZS1lbmdhZ2UgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi51aS5pbnZlcnRlZC52ZXJ0aWNhbC5zZWdtZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/components/Footer.js */"
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
        icon: "labeled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "home",
        active: activeItem === 'home',
        onClick: this.handleItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "home"
      }), "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "about",
        active: activeItem === 'about',
        onClick: this.handleItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "user outline"
      }), "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/portfolio",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "portfolio",
        active: activeItem === 'portfolio',
        onClick: this.handleItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "book"
      }), "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/resume",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        as: "a",
        name: "resume",
        active: activeItem === 'resume',
        onClick: this.handleItemClick
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
    className: "jsx-1123197001"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: __webpack_require__(/*! ./images/orlando.jpg */ "./pages/components/images/orlando.jpg"),
    size: "large",
    alt: "Orlando Selfie",
    centered: true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1123197001"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1123197001"
  }, "Full-Stack Software Engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    columns: 3,
    relaxed: true,
    style: {
      marginTop: '2em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      borderRightStyle: 'dashed'
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
    className: "jsx-1123197001"
  }, "React")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      borderRightStyle: 'dashed'
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
    className: "jsx-1123197001"
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
    className: "jsx-1123197001"
  }, "NodeJS")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1123197001",
    css: "h2.jsx-1123197001,p.jsx-1123197001{font-family:\"Arial\";text-align:center;margin-top:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHOEIsb0JBQ0Ysa0JBQ0gsZUFDakIiLCJmaWxlIjoiL1VzZXJzL09ybGFuZG8vRG9jdW1lbnRzL0dhbHZhbml6ZS9wb3J0Zm9saW8vcG9ydGZvbGlvX2FwcC9wYWdlcy9jb21wb25lbnRzL01haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIsIEltYWdlLCBHcmlkLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuY29uc3QgTWFpbiA9ICgpID0+IChcblxuXG5cbjxkaXY+XG5cbiAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoJy4vaW1hZ2VzL29ybGFuZG8uanBnJyl9IHNpemU9J2xhcmdlJyBhbHQ9J09ybGFuZG8gU2VsZmllJyAgY2VudGVyZWQgLz5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkZ1bGwtU3RhY2sgU29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgPEdyaWQgY29sdW1ucz17M30gcmVsYXhlZCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxuICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3tib3JkZXJSaWdodFN0eWxlOiAnZGFzaGVkJ319PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoJy4vaW1hZ2VzL3JlYWN0LXNlZWtsb2dvLmNvbS5zdmcnKX0gYWx0PSdSZWFjdCBMb2dvJyBzaXplPSdzbWFsbCcgY2VudGVyZWQgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGhlaWdodDogJzE1MHB4JywgfX0gLz5cbiAgICAgICAgICA8cD5SZWFjdDwvcD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3tib3JkZXJSaWdodFN0eWxlOiAnZGFzaGVkJ319PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoJy4vaW1hZ2VzL2phdmFzY3JpcHQtanMtc2Vla2xvZ28uY29tLnN2ZycpfSBhbHQ9J0phdmFTY3JpcHQgbG9nbycgc2l6ZT0nc21hbGwnIGNlbnRlcmVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBoZWlnaHQ6ICcxNTBweCcsIGJvcmRlclJpZ2h0OiAnMXB4JywgfX0gLz5cbiAgICAgICAgICA8cD5KYXZhU2NyaXB0PC9wPlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8RGl2aWRlciB2ZXJ0aWNhbD48L0RpdmlkZXI+XG4gICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXF1aXJlKCcuL2ltYWdlcy9ub2RlanMtc2Vla2xvZ28uY29tLnN2ZycpfSBhbHQ9J05vZGVKUyBsb2dvJyBzaXplPSdzbWFsbCcgY2VudGVyZWQgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGhlaWdodDogJzE1MHB4JywgfX0gLz5cbiAgICAgICAgICA8cD5Ob2RlSlM8L3A+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgIGgyLCBwIHtcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gPC9kaXY+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19 */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/components/Main.js */"
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
      backgroundColor: '#323a45'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "styles.css"
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

/***/ "./pages/components/images/orlando.jpg":
/*!*********************************************!*\
  !*** ./pages/components/images/orlando.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/orlando-48768ca8279e19348d84b3275f4b3cf9.jpg";

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);








var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3915713125"
  }, "Orlando Rodriguez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Main_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3915713125",
    css: "h1.jsx-3915713125{font-family:\"Arial\";text-align:center;}body.jsx-3915713125{background-color:#323a45;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9PcmxhbmRvL0RvY3VtZW50cy9HYWx2YW5pemUvcG9ydGZvbGlvL3BvcnRmb2xpb19hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBRzZCLEFBSUssb0JBSFAsS0FJcEIsYUFIQSIsImZpbGUiOiIvVXNlcnMvT3JsYW5kby9Eb2N1bWVudHMvR2FsdmFuaXplL3BvcnRmb2xpby9wb3J0Zm9saW9fYXBwL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbi5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+T3JsYW5kbyBSb2RyaWd1ZXo8L2gxPlxuICAgIDxNYWluIC8+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzYTQ1O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/Orlando/Documents/Galvanize/portfolio/portfolio_app/pages/index.js */"
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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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