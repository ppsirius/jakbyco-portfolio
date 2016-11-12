/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new _app2.default(); // import 'babel-polyfill';
	// import 'animejs';
	
	setTimeout(function () {
	  app.render();
	}, 2000);
	app.render();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _about = __webpack_require__(2);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App() {
	    var _this = this;
	
	    _classCallCheck(this, App);
	
	    this.domLoaded = false;
	    window.addEventListener('DOMContentLoaded', function () {
	      return _this.domLoaded = true;
	    });
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      if (this.domLoaded) {
	        var about = new _about2.default().render();
	        document.body.innerHTML = '' + about;
	      }
	    }
	  }, {
	    key: 'checkDevice',
	    value: function checkDevice() {
	      // @todo check device for browser happy or retina display
	    }
	  }, {
	    key: 'async',
	    value: function async() {
	      // @todo async load assets
	    }
	  }]);
	
	  return App;
	}();
	
	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var About = function () {
	  function About() {
	    _classCallCheck(this, About);
	  }
	
	  _createClass(About, [{
	    key: "render",
	    value: function render() {
	      return "<div class=\"about\">\n                <h3>about</h3>\n                <span>Morbi cursus, mi eget luctus pulvinar, sapien sem euismod nisl, a rutrum purus erat at turpis. Pellentesque vel leo facilisis, pharetra quam vel, consectetur felis. In feugiat blandit tellus, sit amet varius odio venenatis a. </span>\n            </div>";
	    }
	  }]);
	
	  return About;
	}();
	
	exports.default = About;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map