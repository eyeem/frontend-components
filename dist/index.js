(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"), require("react-create-component-from-tag-prop"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("eyeem-components", ["react", "styled-components", "react-create-component-from-tag-prop", "_"], factory);
	else if(typeof exports === 'object')
		exports["eyeem-components"] = factory(require("react"), require("styled-components"), require("react-create-component-from-tag-prop"), require("lodash"));
	else
		root["eyeem-components"] = factory(root["react"], root["styled-components"], root["react-create-component-from-tag-prop"], root["_"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.idealTextColor = exports.isRgbaColor = exports.propsColorFromTheme = exports.alignItems = exports.fromPropsTernary = exports.fromProps = exports.fromTheme = exports.fromInternalTheme = exports.font = exports.media = exports.STYLED_SYSTEM_BP = exports.BREAKPOINTS = undefined;

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = __webpack_require__(1);

var _theme = __webpack_require__(3);

var theme = _interopRequireWildcard(_theme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// breakpoint lower limits
var BREAKPOINTS = exports.BREAKPOINTS = {
  small: 0,
  medium: 641,
  large: 769,
  xlarge: 1025
};
/* eslint-disable security/detect-object-injection */
var STYLED_SYSTEM_BP = exports.STYLED_SYSTEM_BP = {
  sm: BREAKPOINTS.small + 'px',
  md: BREAKPOINTS.medium + 'px',
  lg: BREAKPOINTS.large + 'px',
  xl: BREAKPOINTS.xlarge + 'px'
};

// iterate through the sizes and create a media template
var media = exports.media = Object.keys(BREAKPOINTS).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = BREAKPOINTS[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(['@media (min-width:', 'em){', ';}'], emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

var typeToFontFamily = {
  regular: '"Sailec Regular", sans-serif',
  bold: '"Sailec Bold", sans-serif',
  light: '"Sailec Light", sans-serif'
};

// eslint-disable-next-line
var font = exports.font = function font() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular" | "light";
  return '\n  font-weight: 300;\n  font-family: ' + typeToFontFamily[type] + ';\n';
};

var fromInternalTheme = exports.fromInternalTheme = function fromInternalTheme(selector) {
  return function () {
    return _lodash2.default.get(theme, selector);
  };
};
var fromTheme = exports.fromTheme = function fromTheme(selector) {
  return function (props) {
    return _lodash2.default.get(props.theme, selector);
  };
};
var fromProps = exports.fromProps = function fromProps(selector) {
  return function (props) {
    return _lodash2.default.get(props, selector);
  };
};
var fromPropsTernary = exports.fromPropsTernary = function fromPropsTernary(selector, ifCase, elseCase) {
  return function (props) {
    if (_lodash2.default.get(props, selector)) {
      return ifCase;
    }
    return elseCase;
  };
};

// Flexbox helper
var alignItems = exports.alignItems = function alignItems(position) {
  return position ? '\n    align-items: ' + position + ';\n  ' : '';
};

var propsColorFromTheme = exports.propsColorFromTheme = function propsColorFromTheme(selector) {
  return function (props) {
    return fromInternalTheme('colors.' + _lodash2.default.get(props, selector))(props);
  };
};

var isRgbaColor = exports.isRgbaColor = function isRgbaColor(color) {
  return _lodash2.default.startsWith(color, 'rgba');
};

var getRGBComponents = function getRGBComponents(color) {
  if (isRgbaColor(color)) {
    var rgba = color.match(/\d+/g);
    return {
      red: rgba[0],
      green: rgba[1],
      blue: rgba[2],
      alpha: rgba[3]
    };
  }

  var red = color.substring(1, 3);
  var green = color.substring(3, 5);
  var blue = color.substring(5, 7);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16)
  };
};

var idealTextColor = exports.idealTextColor = function idealTextColor(bgColor) {
  var threshold = 105;
  var components = getRGBComponents(bgColor);
  var bgDelta = components.red * 0.299 + components.green * 0.587 + components.blue * 0.114;

  if (components.alpha && components.alpha < 0.4) {
    return '#000000';
  }

  return 255 - bgDelta < threshold ? '#000000' : '#ffffff';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoints = exports.space = exports.borderRadius = exports.colors = undefined;

var _styleUtils = __webpack_require__(2);

var colors = exports.colors = {
  whites: {
    white: '#ffffff',
    pearlWhite: '#fafafa',
    transparent: 'rgba(0,0,0,0)'
  },

  greys: {
    grey1: '#666666',
    grey2: '#888888',
    grey3: '#999999',
    grey4: '#cccccc',
    grey5: '#e5e5e5',
    grey6: '#f2f2f2',
    grey7: '#f5f5f5'
  },

  blacks: {
    black1: '#000000',
    black2: '#111111',
    black3: '#1d1d1d',
    black4: '#292929',
    black5: '#333333'
  },

  lightColors: {
    lightRed: '#fff5f5',
    lightBlue: '#e7f0fb'
  },

  solidColors: {
    green: '#22cc88',
    greenv2: '#48B307',
    greenHover: '#4ed69f',
    greenActive: '#1ba36c',
    orange: '#ffaa33',
    orangeHover: '#ffbb5b',
    orangeActive: '#cc8828',
    red: '#ff3333',
    redHover: '#ff5b5b',
    redActive: '#cc2828',
    redv2: '#EA3223'
  },

  foreigns: {
    tumblr: '#34465d',
    twitter: '#55acee',
    facebook1: '#3a5795',
    facebook2: '#3b5998',
    facebook2Hover: '#4c70ba',
    facebook2Disabled: '#96abd6',
    paypal: '#009cde',
    paypalActive: '#007CB1',
    paypalDisabled: '#7FCEEF',
    paypalHover: '#008CC8'
  },

  uncategorized: {
    unnamed1: '#b2b2b2',
    unnamed3: 'rgba(255,255,255,.2)',
    unnamed7: 'rgba(51,51,51,.6)',
    unnamed8: 'rgba(0,0,0,.8)',
    unnamed9: 'rgba(0,0,0,.6)',
    unnamed10: 'rgba(0,0,0,.4)',
    unnamed12: 'rgba(255,255,255,.3)',
    unnamed13: 'rgba(255,255,255,.1)',
    unnamed15: 'rgba(0,0,0,.1)',
    unnamed16: 'rgba(0,0,0,.2)',
    unnamed17: 'rgba(0,0,0,.7)',
    unnamed24: '#ff6666',
    unnamed28: 'rgba(255,255,255,.6)',
    unnamed30: 'rgba(255,255,255,.5)',
    unnamed31: '#5555ff',
    unnamed39: 'rgba(0,0,0,.5)'
  }
};

var borderRadius = exports.borderRadius = '2px';

/* NOTE: styled-system
         https://styled-system.com/#space-theming
         https://styled-system.com/#responsive-styles
*/
var space = exports.space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
exports.breakpoints = _styleUtils.STYLED_SYSTEM_BP;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormRow = _styledComponents2.default.div.withConfig({
  displayName: 'formRow__FormRow',
  componentId: 'sc-1xmjsh9-0'
})(['position:relative;margin-top:', 'px;&:first-child{margin-top:0;}'], (0, _styleUtils.fromPropsTernary)('largeMargin', 40, 16));

exports.default = FormRow;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flyout = _styledComponents2.default.div.withConfig({
  displayName: 'flyout__Flyout',
  componentId: 'sc-3zobcu-0'
})(['position:absolute;top:45px;right:inherit;bottom:inherit;left:12px;margin-right:12px;margin-bottom:20px;font-size:12px;line-height:16px;padding:6px 12px 8px 12px;min-width:100px;max-width:320px;width:auto;text-align:left;white-space:inherit;z-index:3;color:', ';background:', ';border-radius:', ';box-shadow:0 0 0 1px ', ';&:before,&:after{position:absolute;border-width:0 8px 8px;border-color:', ' transparent;border-style:solid;content:\'\';top:-8px;left:16px;width:0;}'], (0, _styleUtils.propsColorFromTheme)('fontColor'), (0, _styleUtils.propsColorFromTheme)('backgroundColor'), (0, _styleUtils.fromInternalTheme)('borderRadius'), (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed3'), (0, _styleUtils.propsColorFromTheme)('backgroundColor'));

exports.default = Flyout;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _box = __webpack_require__(89);

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _box2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var textSizes = exports.textSizes = {
  default: {
    font: {
      small: 14,
      medium: 16,
      large: 16,
      xlarge: 16
    },
    letterSpacing: 0.4
  },
  pStatic: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  editorialBody: {
    font: {
      small: 18,
      medium: 18,
      large: 18,
      xlarge: 18
    },
    letterSpacing: 0
  },
  pMin: {
    font: {
      small: 12,
      medium: 12,
      large: 12,
      xlarge: 12
    },
    letterSpacing: 0
  },
  headline: {
    font: {
      small: 24,
      medium: 32,
      large: 40,
      xlarge: 56
    },
    letterSpacing: 0.3
  },
  headline2: {
    font: {
      small: 20,
      medium: 24,
      large: 32,
      xlarge: 40
    },
    letterSpacing: 0.3
  },
  headline2Pumped: {
    font: {
      small: 24,
      medium: 28,
      large: 36,
      xlarge: 44
    },
    letterSpacing: 0.3
  },
  headline3: {
    font: {
      small: 18,
      medium: 22,
      large: 28,
      xlarge: 32
    },
    letterSpacing: 0.3
  },
  headline4: {
    font: {
      small: 20,
      medium: 20,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0.3
  },
  sub1: {
    font: {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0.3
  },
  sub2: {
    font: {
      small: 14,
      medium: 24,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0
  },
  subHeader: {
    font: {
      small: 12,
      medium: 12,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  loudSub: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 16
    },
    letterSpacing: 0.3
  },
  loud: {
    font: {
      small: 56,
      medium: 48,
      large: 56,
      xlarge: 64
    },
    letterSpacing: 0.3
  },
  cap: {
    font: {
      small: 12,
      medium: 14,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  tableP: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 16
    },
    letterSpacing: 0.3
  },
  sidebarP: {
    font: {
      small: 12,
      medium: 12,
      large: 12,
      xlarge: 14
    },
    letterSpacing: 0
  },
  footerSection: {
    font: {
      small: 16,
      medium: 16,
      large: 16,
      xlarge: 16
    },
    letterSpacing: 0.2
  },
  footerSub: {
    font: {
      small: 10,
      medium: 10,
      large: 10,
      xlarge: 10
    },
    letterSpacing: 0.1
  },
  tablePrice: {
    font: {
      small: 40,
      medium: 20,
      large: 20,
      xlarge: 20
    },
    letterSpacing: 0.2
  }
};

var textFonts = exports.textFonts = ['regular', 'bold'];
var textDisplays = exports.textDisplays = ['block', 'inline-block', 'inline'];
var textAligns = exports.textAligns = ['left', 'center', 'right'];
var textTopMargins = exports.textTopMargins = {
  none: {
    small: 0,
    medium: 0,
    large: 0,
    xlarge: 0
  },
  regular: {
    small: 36,
    medium: 56,
    large: 56,
    xlarge: 56
  },
  xsmall: {
    small: 4,
    medium: 4,
    large: 4,
    xlarge: 8
  },
  xsmall2: {
    small: 0,
    medium: 0,
    large: 2,
    xlarge: 4
  },
  small: {
    small: 16,
    medium: 24,
    large: 24,
    xlarge: 24
  },
  smallStatic: {
    small: 16,
    medium: 16,
    large: 16,
    xlarge: 16
  },
  small2: {
    small: 12,
    medium: 12,
    large: 12,
    xlarge: 12
  },
  medium: {
    small: 45,
    medium: 68,
    large: 76,
    xlarge: 76
  },
  large: {
    small: 48,
    medium: 48,
    large: 48,
    xlarge: 48
  },
  large2: {
    small: 40,
    medium: 40,
    large: 40,
    xlarge: 40
  },
  xlarge: {
    small: 104,
    medium: 104,
    large: 104,
    xlarge: 104
  }
};
var textColors = exports.textColors = {
  default: { regular: 'blacks.black5' },
  black: { regular: 'blacks.black1' },
  green: { regular: 'solidColors.green' },
  white: { regular: 'whites.white' },
  grey1: { regular: 'greys.grey1' },
  grey2: { regular: 'greys.grey2' },
  grey3: { regular: 'greys.grey3' },
  orange: { regular: 'solidColors.orange' },
  opacityWhite: {
    regular: 'uncategorized.unnamed28'
  },
  link: {
    regular: 'greys.grey3',
    hover: 'greys.grey4',
    active: 'blacks.black5'
  },
  linkOnDark: {
    regular: 'greys.grey4',
    hover: 'whites.white',
    active: 'greys.grey5'
  },
  linkBlack: {
    regular: 'blacks.black5',
    hover: 'uncategorized.unnamed7',
    active: 'blacks.black5'
  },
  linkGreen: {
    regular: 'solidColors.green',
    hover: 'solidColors.greenHover',
    active: 'solidColors.greenActive'
  },
  linkOrange: {
    regular: 'solidColors.orange',
    hover: 'solidColors.orangeHover',
    active: 'solidColors.orangeActive'
  },
  linkRed: {
    regular: 'solidColors.red',
    hover: 'solidColors.redHover',
    active: 'solidColors.redActive'
  },
  linkWhite: {
    regular: 'whites.white',
    hover: 'greys.grey4',
    active: 'greys.grey4'
  }
};

var buttonColors = exports.buttonColors = {
  default: {
    fontRegular: 'whites.white',
    bgRegular: 'uncategorized.unnamed1',
    bgHover: 'greys.grey4',
    bgActive: 'greys.grey3',
    bgDisabled: 'greys.grey1',
    fontDisabled: 'whites.white'
  },
  green: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.green',
    bgHover: 'solidColors.greenHover',
    bgActive: 'solidColors.greenActive',
    bgDisabled: 'solidColors.greenHover',
    fontDisabled: 'whites.white'
  },
  greenFont: {
    fontRegular: 'solidColors.green',
    bgRegular: 'whites.transparent',
    fontHover: 'whites.white',
    bgHover: 'solidColors.green',
    bgActive: 'solidColors.greenActive',
    bgDisabled: 'whites.transparent',
    fontDisabled: 'solidColors.green'
  },
  orange: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.orange',
    bgHover: 'solidColors.orangeHover',
    bgActive: 'solidColors.orangeActive',
    bgDisabled: 'solidColors.orangeHover',
    fontDisabled: 'whites.white'
  },
  red: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.red',
    bgHover: 'solidColors.redHover',
    bgActive: 'solidColors.redActive',
    bgDisabled: 'greys.grey1',
    fontDisabled: 'whites.white'
  },
  white: {
    fontRegular: 'blacks.black1',
    bgRegular: 'whites.white',
    bgHover: 'uncategorized.unnamed28',
    bgActive: 'uncategorized.unnamed12',
    bgDisabled: 'uncategorized.unnamed28',
    fontDisabled: 'uncategorized.unnamed17'
  },
  black: {
    fontRegular: 'whites.white',
    bgRegular: 'blacks.black1',
    bgHover: 'blacks.black5',
    bgActive: 'blacks.black1',
    bgDisabled: 'blacks.black1',
    fontDisabled: 'whites.white'
  },
  bluePaypal: {
    fontRegular: 'whites.white',
    bgRegular: 'foreigns.paypal',
    bgHover: 'foreigns.paypalHover',
    bgActive: 'foreigns.paypalActive',
    bgDisabled: 'foreigns.paypalDisabled',
    fontDisabled: 'whites.white'
  },
  whiteTrans: {
    fontRegular: 'greys.grey1',
    bgRegular: 'uncategorized.unnamed3',
    bgHover: 'uncategorized.unnamed12',
    bgActive: 'uncategorized.unnamed12',
    bgDisabled: 'uncategorized.unnamed12',
    fontDisabled: 'whites.white'
  },
  blackTrans: {
    fontRegular: 'whites.white',
    bgRegular: 'uncategorized.unnamed10',
    bgHover: 'uncategorized.unnamed8',
    bgActive: 'uncategorized.unnamed8',
    bgDisabled: 'uncategorized.unnamed8',
    fontDisabled: 'whites.white'
  },
  facebook: {
    fontRegular: 'whites.white',
    bgRegular: 'foreigns.facebook2',
    bgHover: 'foreigns.facebook2Hover',
    bgActive: 'foreigns.facebook2Active',
    bgDisabled: 'foreigns.facebook2Disabled',
    fontDisabled: 'whites.white'
  },
  ghostWhite: {
    fontRegular: 'whites.white',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    fontDisabled: 'whites.white',
    borderRegular: 'whites.white',
    borderHover: 'whites.white',
    borderActive: 'whites.white'
  },
  ghostGreen: {
    fontRegular: 'solidColors.green',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    borderRegular: 'solidColors.green',
    borderHover: 'solidColors.greenHover',
    borderActive: 'solidColors.greenActive',
    fontDisabled: 'solidColors.greenHover',
    borderDisabled: 'solidColors.greenHover'
  },
  ghostGrey: {
    fontRegular: 'blacks.black5',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    borderRegular: 'greys.grey4',
    fontDisabled: 'blacks.black5',
    fontHover: 'solidColors.green',
    fontActive: 'solidColors.green',
    borderDisabled: 'blacks.black1',
    borderHover: 'solidColors.green',
    borderActive: 'solidColors.green'
  },
  transparent: {
    fontRegular: 'greys.grey3',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    bgHover: 'uncategorized.unnamed15',
    fontHover: 'whites.white',
    bgActive: 'whites.transparent'
  }
};

// prefills some default values if they were omitted in the definitions
var getButtonColorSet = exports.getButtonColorSet = function getButtonColorSet(color) {
  return _extends({
    borderRegular: 'whites.transparent',
    borderHover: 'whites.transparent',
    borderActive: 'whites.transparent',
    borderDisabled: buttonColors[color].borderRegular || 'whites.transparent',
    fontHover: buttonColors[color].fontRegular,
    fontActive: buttonColors[color].fontRegular,
    fontDisabled: buttonColors[color].fontRegular
  }, buttonColors[color]);
};

var buttonSizes = exports.buttonSizes = {
  default: {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '7px 15px',
    maxHeight: '40px',
    iconSize: '16'
  },
  large: {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '11px 16px 12px 16px',
    maxHeight: '48px',
    iconSize: '18'
  },
  small: {
    fontSize: '14px',
    lineHeight: '16px',
    padding: '7px 15px',
    maxHeight: '40px',
    iconSize: '14'
  },
  minimal: {
    padding: '8px',
    fontSize: '12px',
    lineHeight: '16px',
    maxHeight: '32px',
    iconSize: '16'
  }
};

var buttonv2Sizes = exports.buttonv2Sizes = {
  default: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '12px 20px',
    maxHeight: '48px',
    iconSize: '16'
  },
  large: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '16px 24px',
    maxHeight: '56px',
    iconSize: '18'
  },
  xlarge: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '20px 28px',
    maxHeight: '64px',
    iconSize: '18'
  },
  small: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '8px 16px',
    maxHeight: '40px',
    iconSize: '14'
  },
  minimal: {
    padding: '4px 12px',
    fontSize: '14px',
    lineHeight: '16px',
    maxHeight: '32px',
    iconSize: '16'
  }
};

var icons = exports.icons = {
  eyeconfont: ['star', 'image', 'mail', 'phone', 'close', 'timing', 'prize', 'remove', 'alert', 'flag', 'embed', 'delete', 'edit', 'backToTop', 'contactEyeEm', 'contactFacebook', 'contactTwitter', 'contactTumblr'],
  buttons: ['cart', 'checkmark', 'download', 'upload', 'upgrade', 'compDownload', 'like', 'comment', 'addToLightbox', 'isInLightbox', 'dragndrop', 'share', 'facebook', 'paypal'],
  services: ['dropbox', 'googledrive', 'flickr', 'picasa', 'instagram'],
  uncategorized: ['leftArrow', 'rightArrow', 'leftArrow2', 'rightArrow2', 'plus', 'terms', 'market', 'growth', 'star2', 'star3', 'more']
};

var fills = exports.fills = ['solid', 'outline'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(24);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLabelColor = exports.getBorderForState = exports.textColor = undefined;

var _styledTheming = __webpack_require__(15);

var _styledTheming2 = _interopRequireDefault(_styledTheming);

var _theme = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderColorDefault = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey3,
  dark: _theme.colors.greys.grey2
});

var borderColorDisabled = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey4,
  dark: _theme.colors.greys.grey1
});

var borderColorHover = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey1,
  dark: _theme.colors.greys.grey4
});

var borderColorActive = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.blacks.black1,
  dark: _theme.colors.whites.white
});

var borderColorInvalid = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.solidColors.redv2,
  dark: _theme.colors.solidColors.redv2
});

var labelColorHover = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey1,
  dark: _theme.colors.greys.grey4
});

var labelColorFocus = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey3,
  dark: _theme.colors.greys.grey2
});

var labelColor = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.greys.grey3,
  dark: _theme.colors.greys.grey2
});

var textColor = exports.textColor = (0, _styledTheming2.default)('mode', {
  light: _theme.colors.blacks.black1,
  dark: _theme.colors.whites.white
});

var getBorderForState = exports.getBorderForState = function getBorderForState(state) {
  if (state.isInvalid) {
    return borderColorInvalid;
  }
  if (state.isFocused) {
    return borderColorActive;
  }
  if (state.isValidated) {
    return borderColorDefault;
  }
  if (state.isDisabled) {
    return borderColorDisabled;
  }
  if (state.isHovered) {
    return state.isInvalid // eslint-disable-line
    ? _theme.colors.solidColors.redv2 : state.isDisabled ? borderColorDisabled : borderColorHover;
  }

  return borderColorDefault;
};

var getLabelColor = exports.getLabelColor = function getLabelColor(state) {
  if (state.isHovered) {
    return labelColorHover;
  }

  if (state.isFocused) {
    return labelColorFocus;
  }

  return labelColor;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textColorDisabled = exports.textColorHover = exports.textColorActive = exports.textColorDefault = exports.borderColorDisabled = exports.borderColorActive = exports.borderColorHover = exports.borderColorDefault = exports.backgroundColorDisabled = exports.backgroundColorActive = exports.backgroundColorHover = exports.backgroundColorDefault = undefined;

var _styledTheming = __webpack_require__(15);

var _styledTheming2 = _interopRequireDefault(_styledTheming);

var _theme = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundColorDefault = exports.backgroundColorDefault = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  },
  solid: {
    light: _theme.colors.blacks.black1,
    dark: _theme.colors.whites.white
  }
});

var backgroundColorHover = exports.backgroundColorHover = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  },
  solid: {
    light: _theme.colors.greys.grey1,
    dark: _theme.colors.greys.grey4
  }
});

var backgroundColorActive = exports.backgroundColorActive = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  },
  solid: {
    light: _theme.colors.greys.grey3,
    dark: _theme.colors.greys.grey2
  }
});

var backgroundColorDisabled = exports.backgroundColorDisabled = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  },
  solid: {
    light: _theme.colors.greys.grey4,
    dark: _theme.colors.greys.grey1
  }
});

var borderColorDefault = exports.borderColorDefault = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.blacks.black1,
    dark: _theme.colors.whites.white
  },
  solid: {
    light: _theme.colors.blacks.black1,
    dark: _theme.colors.whites.white
  }
});

var borderColorHover = exports.borderColorHover = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey1,
    dark: _theme.colors.greys.grey4
  },
  solid: {
    light: _theme.colors.greys.grey1,
    dark: _theme.colors.greys.grey4
  }
});

var borderColorActive = exports.borderColorActive = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey3,
    dark: _theme.colors.greys.grey2
  },
  solid: {
    light: _theme.colors.greys.grey1,
    dark: _theme.colors.greys.grey3
  }
});

var borderColorDisabled = exports.borderColorDisabled = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey4,
    dark: _theme.colors.greys.grey1
  },
  solid: {
    light: _theme.colors.greys.grey4,
    dark: _theme.colors.greys.grey1
  }
});

var textColorDefault = exports.textColorDefault = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.blacks.black1,
    dark: _theme.colors.whites.white
  },
  solid: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  }
});

var textColorActive = exports.textColorActive = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey3,
    dark: _theme.colors.greys.grey2
  },
  solid: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  }
});

var textColorHover = exports.textColorHover = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey1,
    dark: _theme.colors.greys.grey4
  },
  solid: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  }
});

var textColorDisabled = exports.textColorDisabled = _styledTheming2.default.variants('mode', 'fill', {
  outline: {
    light: _theme.colors.greys.grey4,
    dark: _theme.colors.greys.grey1
  },
  solid: {
    light: _theme.colors.whites.white,
    dark: _theme.colors.blacks.black1
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getThemeValue(name, props, values) {
  var value = (
    props.theme &&
    props.theme[name]
  );

  var themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

function theme(name, values) {
  return function(props) {
    return getThemeValue(name, props, values);
  };
}

theme.variants = function(name, prop, values) {
  return function(props) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};

module.exports = theme;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorWrapper = exports.ElementWrapper = exports.StyledWrapper = exports.StyledLabel = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _box = __webpack_require__(6);

var _box2 = _interopRequireDefault(_box);

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _theme = __webpack_require__(3);

var _colors = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLabel = exports.StyledLabel = _styledComponents2.default.label.withConfig({
  displayName: 'styledFields__StyledLabel',
  componentId: 'sc-12srbdi-0'
})(['position:absolute;transition:transform 0.2s ease;top:22px;color:', ';transform-origin:left;font-weight:', ';transform:', ';'], _colors.getLabelColor, function (props) {
  return props.isActive ? '600' : 'initial';
}, function (props) {
  return props.isActive ? 'translateY(-12px) scale(0.8)' : 'translateY(0) scale(1)';
});
var StyledWrapper = exports.StyledWrapper = (0, _styledComponents2.default)(_box2.default).withConfig({
  displayName: 'styledFields__StyledWrapper',
  componentId: 'sc-12srbdi-1'
})(['padding:12px 16px;position:relative;border-width:1.5px;border-style:solid;transition:border-color 0.2s ease;border-color:', ';'], _colors.getBorderForState);

var ElementWrapper = exports.ElementWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'styledFields__ElementWrapper',
  componentId: 'sc-12srbdi-2'
})(['height:96px;position:relative;']);

var ErrorWrapper = exports.ErrorWrapper = (0, _styledComponents2.default)(_text2.default).withConfig({
  displayName: 'styledFields__ErrorWrapper',
  componentId: 'sc-12srbdi-3'
})(['position:absolute;bottom:8px;left:0;line-height:16px;color:', ';&:hover,&:focus{color:', ';}'], _theme.colors.solidColors.redv2, _theme.colors.solidColors.redv2);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBreakpoints", function() { return defaultBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num", function() { return num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeGet", function() { return themeGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneFunc", function() { return cloneFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMediaQuery", function() { return createMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return textColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColor", function() { return bgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return sizeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return sizeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratioPadding", function() { return ratioPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratio", function() { return ratio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return verticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return borders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return backgroundPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return backgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixed", function() { return mixed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);

 // utils

var noop = function noop(n) {
  return n;
};

var propTypes = {
  numberOrString: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  responsive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var is = function is(n) {
  return n !== undefined && n !== null;
};
var num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};
var px = function px(n) {
  return num(n) ? n + 'px' : n;
};
var isArray = Array.isArray;

var isObject = function isObject(n) {
  return typeof n === 'object' && n !== null;
};
var get = function get(obj) {
  for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  return paths.join('.').split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj);
};
var themeGet = function themeGet(paths, fallback) {
  return function (props) {
    return get(props.theme, paths) || fallback;
  };
};
var cloneFunc = function cloneFunc(fn) {
  return function () {
    return fn.apply(void 0, arguments);
  };
};
var merge = function merge(a, b) {
  return Object.assign({}, a, b, Object.keys(b || {}).reduce(function (obj, key) {
    var _Object$assign;

    return Object.assign(obj, (_Object$assign = {}, _Object$assign[key] = a[key] !== null && typeof a[key] === 'object' ? merge(a[key], b[key]) : b[key], _Object$assign));
  }, {}));
};
var compose = function compose() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  var fn = function fn(props) {
    return funcs.map(function (fn) {
      return fn(props);
    }).filter(Boolean).reduce(merge, {});
  };

  fn.propTypes = funcs.map(function (fn) {
    return fn.propTypes;
  }).reduce(merge, {});
  return fn;
};
var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + px(n) + ")";
};

var getStyles = function getStyles(_ref) {
  var props = _ref.props,
      style = _ref.style,
      value = _ref.value;

  if (!isObject(value)) {
    return style(value);
  } // how to hoist this up??


  var breakpoints = get(props.theme, 'breakpoints') || defaultBreakpoints;

  if (isArray(value)) {
    var _styles = style(value[0]) || {};

    for (var i = 1; i < value.length; i++) {
      var rule = style(value[i]);

      if (rule) {
        var media = createMediaQuery(breakpoints[i - 1]);
        _styles[media] = rule;
      }
    }

    return _styles;
  }

  var styles = {};

  for (var breakpoint in value) {
    var _minWidth = breakpoints[breakpoint];

    if (!_minWidth) {
      Object.assign(styles, style(value[breakpoint]));
    } else {
      var _rule = style(value[breakpoint]);

      var _media = createMediaQuery(_minWidth);

      styles[_media] = _rule;
    }
  }

  return styles;
};

var style = function style(_ref2) {
  var _fn$propTypes;

  var prop = _ref2.prop,
      cssProperty = _ref2.cssProperty,
      key = _ref2.key,
      getter = _ref2.getter,
      transformValue = _ref2.transformValue,
      _ref2$scale = _ref2.scale,
      defaultScale = _ref2$scale === void 0 ? {} : _ref2$scale;
  var css = cssProperty || prop;
  var transform = transformValue || getter || noop;

  var fn = function fn(props) {
    var value = props[prop];
    if (!is(value)) return null;
    var scale = get(props.theme, key) || defaultScale;

    var style = function style(n) {
      var _ref3;

      return is(n) ? (_ref3 = {}, _ref3[css] = transform(get(scale, n) || n), _ref3) : null;
    };

    return getStyles({
      props: props,
      style: style,
      value: value
    });
  };

  fn.propTypes = (_fn$propTypes = {}, _fn$propTypes[prop] = cloneFunc(propTypes.responsive), _fn$propTypes);
  fn.propTypes[prop].meta = {
    prop: prop,
    themeKey: key,
    styleType: 'responsive'
  };
  return fn;
};
var getWidth = function getWidth(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
}; // variant

var variant = function variant(_ref4) {
  var _fn$propTypes2;

  var key = _ref4.key,
      _ref4$prop = _ref4.prop,
      prop = _ref4$prop === void 0 ? 'variant' : _ref4$prop;

  var fn = function fn(props) {
    return get(props.theme, key, props[prop]) || null;
  };

  fn.propTypes = (_fn$propTypes2 = {}, _fn$propTypes2[prop] = propTypes.numberOrString, _fn$propTypes2);
  return fn;
};
var util = {
  propTypes: propTypes,
  defaultBreakpoints: defaultBreakpoints,
  is: is,
  num: num,
  px: px,
  get: get,
  themeGet: themeGet,
  cloneFunc: cloneFunc,
  merge: merge,
  compose: compose,
  createMediaQuery: createMediaQuery,
  style: style // space

};

var isNegative = function isNegative(n) {
  return n < 0;
};

var REG = /^[mp][trblxy]?$/;
var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};

var getProperties = function getProperties(key) {
  var _key$split = key.split(''),
      a = _key$split[0],
      b = _key$split[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
};

var getValue = function getValue(scale) {
  return function (n) {
    if (!num(n)) {
      return px(get(scale, n) || n);
    }

    var abs = Math.abs(n);
    var neg = isNegative(n);
    var value = scale[abs] || abs;

    if (!num(value)) {
      return neg ? '-' + value : value;
    }

    return px(value * (neg ? -1 : 1));
  };
};

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var space = function space(props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  var scale = get(props.theme, 'space') || defaultScale;
  var getStyle = getValue(scale);
  return keys.map(function (key) {
    var value = props[key];
    var properties = getProperties(key);

    var style = function style(n) {
      return is(n) ? properties.reduce(function (a, prop) {
        var _extends2;

        return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, a, (_extends2 = {}, _extends2[prop] = getStyle(n), _extends2));
      }, {}) : null;
    };

    return getStyles({
      props: props,
      style: style,
      value: value
    });
  }).reduce(merge, {});
};
space.propTypes = {
  m: cloneFunc(propTypes.responsive),
  mt: cloneFunc(propTypes.responsive),
  mr: cloneFunc(propTypes.responsive),
  mb: cloneFunc(propTypes.responsive),
  ml: cloneFunc(propTypes.responsive),
  mx: cloneFunc(propTypes.responsive),
  my: cloneFunc(propTypes.responsive),
  p: cloneFunc(propTypes.responsive),
  pt: cloneFunc(propTypes.responsive),
  pr: cloneFunc(propTypes.responsive),
  pb: cloneFunc(propTypes.responsive),
  pl: cloneFunc(propTypes.responsive),
  px: cloneFunc(propTypes.responsive),
  py: cloneFunc(propTypes.responsive)
};

var meta = function meta(prop) {
  return {
    prop: prop,
    themeKey: 'space',
    styleType: 'responsive'
  };
};

Object.keys(space.propTypes).forEach(function (prop) {
  space.propTypes[prop].meta = meta(prop);
}); // styles

var width = style({
  prop: 'width',
  transformValue: getWidth
});
var fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: px,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});
var textColor = style({
  prop: 'color',
  key: 'colors'
});
var bgColor = style({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});
var color = compose(textColor, bgColor); // typography

var fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts'
});
var textAlign = style({
  prop: 'textAlign'
});
var lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
});
var fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights'
});
var fontStyle = style({
  prop: 'fontStyle'
});
var letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: px
}); // layout

var display = style({
  prop: 'display'
});
var maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: px
});
var minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: px
});
var height = style({
  prop: 'height',
  key: 'heights',
  transformValue: px
});
var maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: px
});
var minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: px
});
var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transformValue: px
});
var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transformValue: px
});
var size = compose(sizeHeight, sizeWidth);
var ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: function transformValue(n) {
    return n * 100 + '%';
  }
});
var ratio = function ratio(props) {
  return props.ratio ? Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    height: 0
  }, ratioPadding(props)) : null;
};
ratio.propTypes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, ratioPadding.propTypes);
var verticalAlign = style({
  prop: 'verticalAlign'
}); // flexbox

var alignItems = style({
  prop: 'alignItems'
});
var alignContent = style({
  prop: 'alignContent'
});
var justifyItems = style({
  prop: 'justifyItems'
});
var justifyContent = style({
  prop: 'justifyContent'
});
var flexWrap = style({
  prop: 'flexWrap'
});
var flexBasis = style({
  prop: 'flexBasis',
  transformValue: getWidth
});
var flexDirection = style({
  prop: 'flexDirection'
});
var flex = style({
  prop: 'flex'
});
var justifySelf = style({
  prop: 'justifySelf'
});
var alignSelf = style({
  prop: 'alignSelf'
});
var order = style({
  prop: 'order'
}); // grid

var gridGap = style({
  prop: 'gridGap',
  transformValue: px,
  key: 'space'
});
var gridColumnGap = style({
  prop: 'gridColumnGap',
  transformValue: px,
  key: 'space'
});
var gridRowGap = style({
  prop: 'gridRowGap',
  transformValue: px,
  key: 'space'
});
var gridColumn = style({
  prop: 'gridColumn'
});
var gridRow = style({
  prop: 'gridRow'
});
var gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
var gridArea = style({
  prop: 'gridArea'
}); // borders

var getBorder = function getBorder(n) {
  return num(n) && n > 0 ? n + 'px solid' : n;
};

var border = style({
  prop: 'border',
  key: 'borders',
  transformValue: getBorder
});
var borderTop = style({
  prop: 'borderTop',
  key: 'borders',
  transformValue: getBorder
});
var borderRight = style({
  prop: 'borderRight',
  key: 'borders',
  transformValue: getBorder
});
var borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
  transformValue: getBorder
});
var borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
  transformValue: getBorder
});
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft);
var borderColor = style({
  prop: 'borderColor',
  key: 'colors'
});
var borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: px
});
var boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
});
var opacity = style({
  prop: 'opacity'
});
var overflow = style({
  prop: 'overflow'
}); // backgrounds

var background = style({
  prop: 'background'
});
var backgroundImage = style({
  prop: 'backgroundImage'
});
var backgroundSize = style({
  prop: 'backgroundSize'
});
var backgroundPosition = style({
  prop: 'backgroundPosition'
});
var backgroundRepeat = style({
  prop: 'backgroundRepeat'
}); // position

var position = style({
  prop: 'position'
});
var zIndex = style({
  prop: 'zIndex'
});
var top = style({
  prop: 'top',
  transformValue: px
});
var right = style({
  prop: 'right',
  transformValue: px
});
var bottom = style({
  prop: 'bottom',
  transformValue: px
});
var left = style({
  prop: 'left',
  transformValue: px
});
var textStyle = variant({
  prop: 'textStyle',
  key: 'textStyles'
});
var colorStyle = variant({
  prop: 'colors',
  key: 'colorStyles'
});
var buttonStyle = variant({
  key: 'buttons'
});
var styles = {
  space: space,
  width: width,
  fontSize: fontSize,
  textColor: textColor,
  bgColor: bgColor,
  color: color,
  fontFamily: fontFamily,
  textAlign: textAlign,
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  fontStyle: fontStyle,
  letterSpacing: letterSpacing,
  display: display,
  maxWidth: maxWidth,
  minWidth: minWidth,
  height: height,
  maxHeight: maxHeight,
  minHeight: minHeight,
  sizeWidth: sizeWidth,
  sizeHeight: sizeHeight,
  size: size,
  ratioPadding: ratioPadding,
  ratio: ratio,
  verticalAlign: verticalAlign,
  alignItems: alignItems,
  alignContent: alignContent,
  justifyItems: justifyItems,
  justifyContent: justifyContent,
  flexWrap: flexWrap,
  flexBasis: flexBasis,
  flexDirection: flexDirection,
  flex: flex,
  justifySelf: justifySelf,
  alignSelf: alignSelf,
  order: order,
  gridGap: gridGap,
  gridColumnGap: gridColumnGap,
  gridRowGap: gridRowGap,
  gridColumn: gridColumn,
  gridRow: gridRow,
  gridAutoFlow: gridAutoFlow,
  gridAutoColumns: gridAutoColumns,
  gridAutoRows: gridAutoRows,
  gridTemplateColumns: gridTemplateColumns,
  gridTemplateRows: gridTemplateRows,
  gridTemplateAreas: gridTemplateAreas,
  gridArea: gridArea,
  // borders
  border: border,
  borderTop: borderTop,
  borderRight: borderRight,
  borderBottom: borderBottom,
  borderLeft: borderLeft,
  borders: borders,
  borderColor: borderColor,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
  opacity: opacity,
  overflow: overflow,
  background: background,
  backgroundImage: backgroundImage,
  backgroundPosition: backgroundPosition,
  backgroundRepeat: backgroundRepeat,
  backgroundSize: backgroundSize,
  position: position,
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  textStyle: textStyle,
  colorStyle: colorStyle,
  buttonStyle: buttonStyle // mixed

};

var omit = function omit(obj, blacklist) {
  var next = {};

  for (var key in obj) {
    if (blacklist.indexOf(key) > -1) continue;
    next[key] = obj[key];
  }

  return next;
};

var funcs = Object.keys(styles).map(function (key) {
  return styles[key];
}).filter(function (fn) {
  return typeof fn === 'function';
});
var blacklist = funcs.reduce(function (a, fn) {
  return a.concat(Object.keys(fn.propTypes || {}));
}, ['theme']);
var mixed = function mixed(props) {
  return funcs.map(function (fn) {
    return fn(props);
  }).reduce(merge, omit(props, blacklist));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = __webpack_require__(96);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _text2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalStyles = exports.theme = exports.styleUtils = exports.styleConfig = exports.Flyout = exports.RadioGroup = exports.Checkbox = exports.FormRow = exports.Textarea = exports.StyledText = exports.Selectv2 = exports.Select = exports.Inputv2 = exports.Input = exports.Icon = exports.Flex = exports.Box = exports.Buttonv2 = exports.StyledButton = exports.Accordion = undefined;

var _button = __webpack_require__(20);

var _button2 = _interopRequireDefault(_button);

var _buttonv = __webpack_require__(82);

var _buttonv2 = _interopRequireDefault(_buttonv);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _input = __webpack_require__(86);

var _input2 = _interopRequireDefault(_input);

var _inputv = __webpack_require__(87);

var _inputv2 = _interopRequireDefault(_inputv);

var _select = __webpack_require__(98);

var _select2 = _interopRequireDefault(_select);

var _selectv = __webpack_require__(99);

var _selectv2 = _interopRequireDefault(_selectv);

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(101);

var _textarea2 = _interopRequireDefault(_textarea);

var _checkbox = __webpack_require__(102);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radioGroup = __webpack_require__(103);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

var _accordion = __webpack_require__(104);

var _accordion2 = _interopRequireDefault(_accordion);

var _box = __webpack_require__(6);

var _box2 = _interopRequireDefault(_box);

var _flex = __webpack_require__(107);

var _flex2 = _interopRequireDefault(_flex);

var _styleConfig = __webpack_require__(7);

var styleConfig = _interopRequireWildcard(_styleConfig);

var _styleUtils = __webpack_require__(2);

var styleUtils = _interopRequireWildcard(_styleUtils);

var _theme = __webpack_require__(3);

var theme = _interopRequireWildcard(_theme);

var _globalStyles = __webpack_require__(109);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Accordion = _accordion2.default;
exports.StyledButton = _button2.default;
exports.Buttonv2 = _buttonv2.default;
exports.Box = _box2.default;
exports.Flex = _flex2.default;
exports.Icon = _icon2.default;
exports.Input = _input2.default;
exports.Inputv2 = _inputv2.default;
exports.Select = _select2.default;
exports.Selectv2 = _selectv2.default;
exports.StyledText = _text2.default;
exports.Textarea = _textarea2.default;
exports.FormRow = _formRow2.default;
exports.Checkbox = _checkbox2.default;
exports.RadioGroup = _radioGroup2.default;
exports.Flyout = _flyout2.default;
exports.styleConfig = styleConfig;
exports.styleUtils = styleUtils;
exports.theme = theme;
exports.globalStyles = _globalStyles2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(21);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _styleConfig = __webpack_require__(7);

var _styledButton = __webpack_require__(22);

var _styledButton2 = _interopRequireDefault(_styledButton);

var _styledIcon = __webpack_require__(23);

var _styledIcon2 = _interopRequireDefault(_styledIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Button(props) {
  return React.createElement(
    _styledButton2.default,
    {
      renderAs: props.renderAs,
      'data-test-id': props['data-test-id'],
      onClick: props.onClick,
      display: props.display,
      alignItems: props.alignItems,
      href: props.href,
      target: props.target,
      id: props.id,
      progress: props.progress,
      className: props.className,
      sizeValues: _styleConfig.buttonSizes[props.size],
      disabled: props.disabled,
      spinner: props.spinner,
      fullWidth: props.fullWidth,
      moveIconToLeft: props.moveIconToLeft,
      colors: (0, _styleConfig.getButtonColorSet)(props.color),
      title: props.title,
      htmlFor: props.htmlFor,
      type: props.type
    },
    props.icon && React.createElement(_styledIcon2.default, {
      moveIconToLeft: props.moveIconToLeft,
      size: _styleConfig.buttonSizes[props.size].iconSize,
      type: props.icon,
      marginRight: props.children ? '8px' : 0
    }),
    props.children
  );
}

Button.defaultProps = {
  color: 'default',
  size: 'default',
  display: 'inline-block',
  icon: false,
  disabled: false,
  spinner: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button',
  progress: 100
};

exports.default = Button;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCreateComponentFromTagProp = __webpack_require__(9);

var _reactCreateComponentFromTagProp2 = _interopRequireDefault(_reactCreateComponentFromTagProp);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentFromTagProp = (0, _reactCreateComponentFromTagProp2.default)({
  tag: 'button',
  prop: 'renderAs',
  propsToOmit: ['renderAs', 'progress', 'sizeValues', 'spinner', 'fullWidth', 'moveIconToLeft', 'colors', 'display', 'alignItems']
});


var disabled = function disabled(props) {
  if (props.disabled || props.progress && props.progress < 100) {
    return (0, _styledComponents.css)(['cursor:default;border-color:', ';background-color:', ';color:', ';fill:', ';&:focus,&:hover{color:', ';fill:', ';background-color:', ';border-color:', ';}&:active{background-color:', ';border-color:', ';}'], (0, _styleUtils.propsColorFromTheme)('colors.borderDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.bgDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.fontDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.fontDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.fontDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.fontDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.bgDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.borderDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.bgDisabled'), (0, _styleUtils.propsColorFromTheme)('colors.borderDisabled'));
  }
  return '';
};

var progress = function progress(props) {
  if (props.progress && props.progress < 100) {
    return (0, _styledComponents.css)(['background-image:linear-gradient( to right,', ' 0%,', ' ', '%,', ' ', '%,', ' 100% );'], (0, _styleUtils.propsColorFromTheme)('colors.bgRegular'), (0, _styleUtils.propsColorFromTheme)('colors.bgRegular'), (0, _styleUtils.fromProps)('progress'), (0, _styleUtils.propsColorFromTheme)('colors.bgDisabled'), (0, _styleUtils.fromProps)('progress'), (0, _styleUtils.propsColorFromTheme)('colors.bgDisabled'));
  }
  return '';
};

var spinner = function spinner(props) {
  if (props.spinner) {
    var spinnerImg = props.colors && props.colors.bgRegular && ['ghost', 'white', 'trans'].filter(function (item) {
      return props.colors.bgRegular.indexOf(item) !== -1;
    }).length > 0 ? 'spinner-32-black.png' : 'spinner-32-white.png';

    return '\n      overflow: hidden;\n      &:before {\n        display: inline-block;\n        margin-bottom: -2px;\n        margin-right: ' + (props.children ? '12px' : '0') + ';\n\n        width: 16px;\n        height: 16px;\n        background-image: url("/node-static/img/' + spinnerImg + '");\n        background-position: center;\n        background-size: 16px 16px;\n        background-repeat: no-repeat;\n        content: "";\n        animation: spin .7s linear infinite;\n      }\n    ';
  }
  return '';
};

var StyledButton = (0, _styledComponents2.default)(ComponentFromTagProp).withConfig({
  displayName: 'styledButton__StyledButton',
  componentId: 'sc-1bs4urv-0'
})(['position:relative;display:', ';max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:', ';font-size:', ';line-height:', ';padding:', ';max-height:', ';border:1px solid ', ';border-radius:', ';background-color:', ';color:', ';fill:', ';', ' vertical-align:top;text-decoration:none;text-shadow:none;cursor:pointer;transition:background-color 0.2s ease-in-out,border 0.2s ease-out,color 0.2s ease-out,fill 0.2s ease-out;pointer-events:all;&:focus,&:hover{color:', ';fill:', ';background-color:', ';border-color:', ';}&:active{background-color:', ';border-color:', ';}&:focus{outline:none;}', ' ', ' ', ' ', ' ', ';'], function (props) {
  return props.display;
}, (0, _styleUtils.fromPropsTernary)('fullWidth', '100%', 'auto'), (0, _styleUtils.fromProps)('sizeValues.fontSize'), (0, _styleUtils.fromProps)('sizeValues.lineHeight'), (0, _styleUtils.fromProps)('sizeValues.padding'), (0, _styleUtils.fromProps)('sizeValues.maxHeight'), (0, _styleUtils.propsColorFromTheme)('colors.borderRegular'), (0, _styleUtils.fromInternalTheme)('borderRadius'), (0, _styleUtils.propsColorFromTheme)('colors.bgRegular'), (0, _styleUtils.propsColorFromTheme)('colors.fontRegular'), (0, _styleUtils.propsColorFromTheme)('colors.fontRegular'), function (props) {
  return (0, _styleUtils.alignItems)(props.alignItems);
}, (0, _styleUtils.propsColorFromTheme)('colors.fontHover'), (0, _styleUtils.propsColorFromTheme)('colors.fontHover'), (0, _styleUtils.propsColorFromTheme)('colors.bgHover'), (0, _styleUtils.propsColorFromTheme)('colors.borderHover'), (0, _styleUtils.propsColorFromTheme)('colors.bgActive'), (0, _styleUtils.propsColorFromTheme)('colors.borderActive'), (0, _styleUtils.fromPropsTernary)('moveIconToLeft', 'padding-left: 32px;', ''), (0, _styleUtils.font)('regular'), spinner, disabled, progress);

exports.default = StyledButton;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconLeftStyles = function iconLeftStyles(props) {
  if (props.moveIconToLeft) {
    var halfHeight = props.size / 2;
    return '\n      position: absolute;\n      left: 12px;\n      top: calc(50% - ' + halfHeight + 'px);\n      margin-right: 0;\n      margin-bottom: 0;\n    ';
  }
  return '';
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default).withConfig({
  displayName: 'styledIcon__StyledIcon',
  componentId: 'uspoy8-0'
})(['margin-right:', ';margin-bottom:-2px;', ';'], (0, _styleUtils.fromProps)('marginRight'), iconLeftStyles);

exports.default = StyledIcon;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _star = __webpack_require__(25);

var _star2 = _interopRequireDefault(_star);

var _star3 = __webpack_require__(26);

var _star4 = _interopRequireDefault(_star3);

var _star5 = __webpack_require__(27);

var _star6 = _interopRequireDefault(_star5);

var _star3Plus = __webpack_require__(28);

var _star3Plus2 = _interopRequireDefault(_star3Plus);

var _star3Minus = __webpack_require__(29);

var _star3Minus2 = _interopRequireDefault(_star3Minus);

var _image = __webpack_require__(30);

var _image2 = _interopRequireDefault(_image);

var _mail = __webpack_require__(31);

var _mail2 = _interopRequireDefault(_mail);

var _phone = __webpack_require__(32);

var _phone2 = _interopRequireDefault(_phone);

var _close = __webpack_require__(33);

var _close2 = _interopRequireDefault(_close);

var _timing = __webpack_require__(34);

var _timing2 = _interopRequireDefault(_timing);

var _prize = __webpack_require__(35);

var _prize2 = _interopRequireDefault(_prize);

var _remove = __webpack_require__(36);

var _remove2 = _interopRequireDefault(_remove);

var _alert = __webpack_require__(37);

var _alert2 = _interopRequireDefault(_alert);

var _flag = __webpack_require__(38);

var _flag2 = _interopRequireDefault(_flag);

var _embed = __webpack_require__(39);

var _embed2 = _interopRequireDefault(_embed);

var _delete = __webpack_require__(40);

var _delete2 = _interopRequireDefault(_delete);

var _backToTop = __webpack_require__(41);

var _backToTop2 = _interopRequireDefault(_backToTop);

var _contactEyeEm = __webpack_require__(42);

var _contactEyeEm2 = _interopRequireDefault(_contactEyeEm);

var _contactFacebook = __webpack_require__(43);

var _contactFacebook2 = _interopRequireDefault(_contactFacebook);

var _contactTwitter = __webpack_require__(44);

var _contactTwitter2 = _interopRequireDefault(_contactTwitter);

var _contactTumblr = __webpack_require__(45);

var _contactTumblr2 = _interopRequireDefault(_contactTumblr);

var _download = __webpack_require__(46);

var _download2 = _interopRequireDefault(_download);

var _upload = __webpack_require__(47);

var _upload2 = _interopRequireDefault(_upload);

var _upgrade = __webpack_require__(48);

var _upgrade2 = _interopRequireDefault(_upgrade);

var _checkmark = __webpack_require__(49);

var _checkmark2 = _interopRequireDefault(_checkmark);

var _cart = __webpack_require__(50);

var _cart2 = _interopRequireDefault(_cart);

var _compDownload = __webpack_require__(51);

var _compDownload2 = _interopRequireDefault(_compDownload);

var _addToLightbox = __webpack_require__(52);

var _addToLightbox2 = _interopRequireDefault(_addToLightbox);

var _isInLightbox = __webpack_require__(53);

var _isInLightbox2 = _interopRequireDefault(_isInLightbox);

var _lightbox = __webpack_require__(54);

var _lightbox2 = _interopRequireDefault(_lightbox);

var _like = __webpack_require__(55);

var _like2 = _interopRequireDefault(_like);

var _comment = __webpack_require__(56);

var _comment2 = _interopRequireDefault(_comment);

var _dragndrop = __webpack_require__(57);

var _dragndrop2 = _interopRequireDefault(_dragndrop);

var _share = __webpack_require__(58);

var _share2 = _interopRequireDefault(_share);

var _edit = __webpack_require__(59);

var _edit2 = _interopRequireDefault(_edit);

var _facebook = __webpack_require__(60);

var _facebook2 = _interopRequireDefault(_facebook);

var _dropbox = __webpack_require__(61);

var _dropbox2 = _interopRequireDefault(_dropbox);

var _googledrive = __webpack_require__(62);

var _googledrive2 = _interopRequireDefault(_googledrive);

var _flickr = __webpack_require__(63);

var _flickr2 = _interopRequireDefault(_flickr);

var _picasa = __webpack_require__(64);

var _picasa2 = _interopRequireDefault(_picasa);

var _instagram = __webpack_require__(65);

var _instagram2 = _interopRequireDefault(_instagram);

var _paypal = __webpack_require__(66);

var _paypal2 = _interopRequireDefault(_paypal);

var _plus = __webpack_require__(67);

var _plus2 = _interopRequireDefault(_plus);

var _leftArrow = __webpack_require__(68);

var _leftArrow2 = _interopRequireDefault(_leftArrow);

var _leftArrow3 = __webpack_require__(69);

var _leftArrow4 = _interopRequireDefault(_leftArrow3);

var _rightArrow = __webpack_require__(70);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _rightArrow3 = __webpack_require__(71);

var _rightArrow4 = _interopRequireDefault(_rightArrow3);

var _terms = __webpack_require__(72);

var _terms2 = _interopRequireDefault(_terms);

var _market = __webpack_require__(73);

var _market2 = _interopRequireDefault(_market);

var _growth = __webpack_require__(74);

var _growth2 = _interopRequireDefault(_growth);

var _eyeEmVision = __webpack_require__(75);

var _eyeEmVision2 = _interopRequireDefault(_eyeEmVision);

var _trophy = __webpack_require__(76);

var _trophy2 = _interopRequireDefault(_trophy);

var _trophyPlus = __webpack_require__(77);

var _trophyPlus2 = _interopRequireDefault(_trophyPlus);

var _trophyMinus = __webpack_require__(78);

var _trophyMinus2 = _interopRequireDefault(_trophyMinus);

var _userFollow = __webpack_require__(79);

var _userFollow2 = _interopRequireDefault(_userFollow);

var _info = __webpack_require__(80);

var _info2 = _interopRequireDefault(_info);

var _more = __webpack_require__(81);

var _more2 = _interopRequireDefault(_more);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var icons = {
  star: _star2.default,
  star2: _star4.default,
  star3: _star6.default,
  star3Plus: _star3Plus2.default,
  star3Minus: _star3Minus2.default,
  image: _image2.default,
  mail: _mail2.default,
  phone: _phone2.default,
  close: _close2.default,
  timing: _timing2.default,
  prize: _prize2.default,
  remove: _remove2.default,
  alert: _alert2.default,
  flag: _flag2.default,
  embed: _embed2.default,
  delete: _delete2.default,
  backToTop: _backToTop2.default,
  contactEyeEm: _contactEyeEm2.default,
  contactFacebook: _contactFacebook2.default,
  contactTwitter: _contactTwitter2.default,
  contactTumblr: _contactTumblr2.default,

  cart: _cart2.default,
  checkmark: _checkmark2.default,
  compDownload: _compDownload2.default,
  download: _download2.default,
  upload: _upload2.default,
  upgrade: _upgrade2.default,
  edit: _edit2.default,
  dragndrop: _dragndrop2.default,
  addToLightbox: _addToLightbox2.default,
  isInLightbox: _isInLightbox2.default,
  lightboxIcon: _lightbox2.default,
  like: _like2.default,
  comment: _comment2.default,
  share: _share2.default,
  facebook: _facebook2.default,

  dropbox: _dropbox2.default,
  googledrive: _googledrive2.default,
  flickr: _flickr2.default,
  picasa: _picasa2.default,
  instagram: _instagram2.default,
  paypal: _paypal2.default,

  leftArrow: _leftArrow2.default,
  leftArrow2: _leftArrow4.default,
  rightArrow: _rightArrow2.default,
  rightArrow2: _rightArrow4.default,
  plus: _plus2.default,
  terms: _terms2.default,
  market: _market2.default,
  growth: _growth2.default,
  eyeEmVision: _eyeEmVision2.default,
  trophy: _trophy2.default,
  trophyPlus: _trophyPlus2.default,
  trophyMinus: _trophyMinus2.default,

  userFollow: _userFollow2.default,

  info: _info2.default,
  more: _more2.default
};

function Icon(props) {
  var Component = icons[props.type] || _star2.default;

  if (props.color) {
    Component = (0, _styledComponents2.default)(Component).withConfig({
      displayName: 'icon__Component',
      componentId: 'tldbqq-0'
    })(['fill:', ';'], (0, _styleUtils.fromInternalTheme)('colors.' + props.color));
  }

  return React.createElement(Component, {
    className: props.className,
    id: props.id,
    size: props.size,
    iconProps: props.iconProps
  });
}

Icon.defaultProps = {
  color: undefined,
  size: 16
};

exports.default = Icon;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function StarIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 14 14"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2997.000000, -452.000000)" },
        React.createElement(
          "g",
          { transform: "translate(2998.000000, 453.000000)" },
          React.createElement("polygon", { points: "6 8.7 2.47328849 10.854102 3.43214741 6.83434588 0.293660902 4.14589803 4.41297982 3.81565412 6 0 7.58702018 3.81565412 11.7063391 4.14589803 8.56785259 6.83434588 9.52671151 10.854102 " })
        ),
        React.createElement("g", { transform: "translate(2997.000000, 452.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


StarIcon.defaultProps = {
  size: 14
};

exports.default = StarIcon;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Star2Icon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 14 14" },
    React.createElement("path", { d: "M6.79 11.696l-2.362 1.24c-.49.258-1.094.07-1.35-.42-.103-.194-.138-.417-.1-.634l.45-2.628c.055-.325-.052-.656-.288-.885L1.23 6.505c-.395-.386-.403-1.02-.018-1.414.154-.158.355-.26.572-.292l2.64-.382c.326-.048.607-.252.753-.547l1.18-2.39c.245-.495.844-.7 1.34-.454.197.097.356.257.454.454l1.18 2.39c.148.296.43.5.755.548l2.64.383c.546.08.925.59.845 1.136-.033.217-.135.418-.292.572l-1.91 1.862c-.236.228-.344.56-.288.884l.45 2.628c.094.545-.27 1.062-.816 1.155-.216.037-.44.002-.634-.1l-2.36-1.24c-.292-.155-.64-.155-.93 0z" })
  );
}
/* eslint-disable max-len */


Star2Icon.defaultProps = {
  size: 14
};

exports.default = Star2Icon;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Star3Icon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M11.535 17.425l-3.41 1.793c-.488.257-1.093.07-1.35-.42-.102-.195-.138-.418-.1-.635l.65-3.796c.056-.324-.05-.655-.287-.885L4.28 10.794c-.395-.385-.403-1.02-.018-1.414.154-.158.355-.26.572-.292l3.812-.554c.325-.047.607-.25.753-.547l1.703-3.453c.245-.495.844-.7 1.34-.454.197.097.356.257.454.454L14.6 7.987c.147.296.428.5.754.547l3.81.554c.548.08.927.587.847 1.134-.03.217-.133.418-.29.572l-2.758 2.688c-.236.23-.343.56-.288.885l.65 3.796c.095.545-.27 1.062-.815 1.155-.218.037-.44.002-.636-.1l-3.41-1.793c-.29-.153-.638-.153-.93 0z" })
  );
}
/* eslint-disable max-len */


Star3Icon.defaultProps = {
  size: 24
};

exports.default = Star3Icon;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Star3Plus(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: 20,
      width: 31,
      viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M7.544 15.132L4.11 16.89a1 1 0 0 1-1.441-1.065l.642-3.647a1.005 1.005 0 0 0-.297-.9L.312 8.715A1.002 1.002 0 0 1 .86 6.998l3.784-.535a1 1 0 0 0 .752-.538l1.712-3.377a1 1 0 0 1 1.784 0l1.712 3.377c.148.292.43.492.752.538l3.784.535a1 1 0 0 1 .548 1.716l-2.703 2.565a.997.997 0 0 0-.297.898l.643 3.648a1 1 0 0 1-1.44 1.064l-3.434-1.758a1.004 1.004 0 0 0-.912 0zM26 6v8h2V6" }),
    React.createElement("path", { d: "M31 9h-8v2h8" })
  );
}
/* eslint-disable max-len */
exports.default = Star3Plus;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Star3Minus(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: 20,
      width: 31,
      viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M7.54 15.13l-3.43 1.76c-.49.25-1.09.06-1.35-.44a.972.972 0 0 1-.09-.63l.64-3.64a.982.982 0 0 0-.3-.9L.31 8.71A.996.996 0 0 1 .28 7.3.99.99 0 0 1 .86 7l3.78-.54c.33-.04.61-.24.76-.54l1.71-3.37a.99.99 0 0 1 1.34-.44c.19.09.35.25.44.44l1.71 3.37c.15.3.43.5.76.54l3.78.54a.995.995 0 0 1 .55 1.71l-2.7 2.57c-.25.23-.36.57-.3.9l.64 3.64c.1.55-.26 1.07-.81 1.16a.99.99 0 0 1-.63-.09l-3.43-1.76a.976.976 0 0 0-.91 0h-.01zm0 0M31 9h-8v2h8" }),
    ' '
  );
}
/* eslint-disable max-len */
exports.default = Star3Minus;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ImageIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 16"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-973.000000, -369.000000)" },
        React.createElement(
          "g",
          { transform: "translate(225.000000, 117.000000)" },
          React.createElement("path", { d: "M748,266.494759 C748,267.326081 748.66713,268 749.505241,268 L762.494759,268 C763.326081,268 764,267.33287 764,266.494759 L764,253.505241 C764,252.673919 763.33287,252 762.494759,252 L749.505241,252 C748.673919,252 748,252.66713 748,253.505241 L748,266.494759 Z M749,253 L763,253 L763,267 L749,267 L749,253 Z M758.5,259 C759.328427,259 760,258.328427 760,257.5 C760,256.671573 759.328427,256 758.5,256 C757.671573,256 757,256.671573 757,257.5 C757,258.328427 757.671573,259 758.5,259 Z M749,264.5 L749,267 L763,267 L763,265.5 L759.5,262 L757.5,264 L753.5,260 L749,264.5 Z" })
        ),
        React.createElement("g", { transform: "translate(225.000000, 115.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


ImageIcon.defaultProps = {
  size: 16
};

exports.default = ImageIcon;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function MailIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 16"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2655.000000, -369.000000)" },
        React.createElement(
          "g",
          { transform: "translate(2615.000000, 111.000000)" },
          React.createElement("path", { d: "M40.3737852,260.506536 C40.6485546,260.195921 41.051883,260 41.5052412,260 L54.4947588,260 C54.9437663,260 55.3468561,260.198241 55.6226444,260.509147 L48,266 L40.3737852,260.506536 L40.3737852,260.506536 Z M56,262.117931 L56,270.504455 C56,271.330422 55.3328702,272 54.4947588,272 L41.5052412,272 C40.6739194,272 40,271.320446 40,270.504455 L40,262.111072 L48.0156542,267.94604 L56,262.117931 L56,262.117931 Z" })
        ),
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


MailIcon.defaultProps = {
  size: 16
};

exports.default = MailIcon;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function PhoneIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 16"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-3739.000000, -369.000000)" },
        React.createElement(
          "g",
          { transform: "translate(3739.000000, 369.000000)" },
          React.createElement("path", { d: "M9.46650621,10.8704959 C9.66350621,10.9684959 9.91350621,11.1304959 10.1255062,11.1084959 C10.3005062,11.0914959 10.4395062,10.9144959 10.5865062,10.7674959 C10.9115062,10.4434959 11.7145062,9.1774959 11.7145062,9.1774959 C11.7145062,9.1774959 12.0315062,8.8224959 12.5005062,9.1154959 C12.9695062,9.4074959 14.0105062,10.1364959 15.8135062,11.2564959 C16.0995062,11.4934959 15.9725062,11.8724959 15.9725062,11.8724959 C15.9725062,11.8724959 14.7095062,13.8944959 12.7315062,14.8804959 C12.2865062,15.1574959 11.2535062,14.8644959 11.2535062,14.8644959 C11.2535062,14.8644959 2.94450621,13.0204959 0.0845062052,4.6204959 C-0.0944937948,4.2444959 0.0665062052,3.5674959 0.0665062052,3.5674959 C0.0665062052,3.5674959 0.315506205,2.0694959 2.60250621,0.142495902 C2.97250621,-0.168504098 3.36750621,0.126495902 3.36750621,0.126495902 C3.36750621,0.126495902 4.58650621,1.2924959 5.98250621,3.2074959 C6.05250621,3.3044959 6.06450621,3.4304959 6.04750621,3.5464959 C6.02650621,3.6864959 5.96150621,3.8114959 5.89750621,3.8514959 C4.92450621,4.6194959 4.35250621,5.4054959 4.24650621,5.5464959 C4.14150621,5.6874959 4.14150621,5.9364959 4.36250621,6.2104959 C4.58550621,6.4834959 6.35250621,9.2914959 9.46650621,10.8704959" })
        ),
        React.createElement("g", { transform: "translate(3739.000000, 369.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


PhoneIcon.defaultProps = {
  size: 16
};

exports.default = PhoneIcon;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CloseIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 18 18"
    },
    React.createElement("path", { d: "M10.414 9l4.95-4.95c.39-.39.39-1.023 0-1.414-.39-.39-1.024-.39-1.414 0L9 7.586l-4.95-4.95c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.414L7.586 9l-4.95 4.95c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L9 10.414l4.95 4.95c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414L10.414 9z" })
  );
}
/* eslint-disable max-len */


CloseIcon.defaultProps = {
  size: 16
};

exports.default = CloseIcon;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function TimingIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 13 13"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-4450.000000, -314.000000)" },
        React.createElement("path", { d: "M4457,315.022422 L4457,314 L4456,314 L4456,315.022422 C4453.19675,315.275036 4451,317.630979 4451,320.5 C4451,323.537566 4453.46243,326 4456.5,326 C4459.53757,326 4462,323.537566 4462,320.5 C4462,318.937579 4461.34851,317.527322 4460.30236,316.526067 L4461.12132,315.707107 L4460.41421,315 L4459.51496,315.899254 C4458.78023,315.416796 4457.92299,315.105597 4457,315.022422 Z M4456,317 L4457,317 L4457,321 L4456,321 L4456,317 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


TimingIcon.defaultProps = {
  size: 12
};

exports.default = TimingIcon;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function PrizeIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 13 13"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-4450.000000, -288.000000)" },
        React.createElement(
          "g",
          { transform: "translate(4430.000000, 284.000000)" },
          React.createElement("g", { transform: "translate(20.000000, 4.000000)" })
        ),
        React.createElement("path", { d: "M4453.01574,293.827525 C4453.16827,295.448564 4454.41226,296.738219 4456,296.964666 L4456,299 L4453,299 L4453,300 L4460,300 L4460,299 L4457,299 L4457,296.964682 C4458.59198,296.737671 4459.83164,295.442054 4459.98419,293.827491 C4460.2037,293.938029 4460.45098,294 4460.71655,294 L4461.00198,294 C4462.08624,294 4463,292.955692 4463,291.666667 L4463,289.333333 C4463,288.59819 4462.47954,288 4461.85828,288 L4461.00198,288 C4460.33592,288 4459.74864,288.394957 4459.37658,289 L4453.62342,289 C4453.25136,288.394957 4452.66408,288 4451.99802,288 L4451.14172,288 C4450.52046,288 4450,288.59819 4450,289.333333 L4450,291.666667 C4450,292.955692 4450.91376,294 4451.99802,294 L4452.28345,294 C4452.54899,294 4452.79625,293.938042 4453.01574,293.827525 Z M4460,289.8 L4460,292.2 C4459.97568,292.678576 4460.23742,293 4460.66667,293 L4461,293 C4461.52907,293 4461.99909,292.46254 4462,291.8 L4462,289 C4461.99909,289.000094 4461.99901,289 4462,289 L4461,289 C4460.54843,289 4460.18061,289.392077 4460,289.8 Z M4453,289.8 L4453,292.2 C4453.02432,292.678576 4452.76258,293 4452.33333,293 L4452,293 C4451.47093,293 4451.00091,292.46254 4451,291.8 L4451,289 C4451.00091,289.000094 4451.00099,289 4451,289 L4452,289 C4452.45157,289 4452.81939,289.392077 4453,289.8 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


PrizeIcon.defaultProps = {
  size: 12
};

exports.default = PrizeIcon;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function RemoveIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 16"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-1413.000000, -369.000000)" },
        React.createElement(
          "g",
          { transform: "translate(225.000000, 117.000000)" },
          React.createElement("path", { d: "M1195.79084,261.205052 L1192.72017,264.275723 C1192.32964,264.666247 1191.69648,264.666247 1191.30595,264.275723 C1190.91543,263.885199 1190.91543,263.252034 1191.30595,262.861509 L1194.37662,259.790838 L1191.29289,256.707107 C1190.90237,256.316582 1190.90237,255.683418 1191.29289,255.292893 C1191.68342,254.902369 1192.31658,254.902369 1192.70711,255.292893 L1195.79084,258.376625 L1198.87457,255.292893 C1199.26509,254.902369 1199.89826,254.902369 1200.28878,255.292893 C1200.67931,255.683418 1200.67931,256.316582 1200.28878,256.707107 L1197.20505,259.790838 L1200.27572,262.861509 C1200.66625,263.252034 1200.66625,263.885199 1200.27572,264.275723 C1199.8852,264.666247 1199.25203,264.666247 1198.86151,264.275723 L1195.79084,261.205052 L1195.79084,261.205052 Z" })
        ),
        React.createElement("g", { transform: "translate(225.000000, 115.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


RemoveIcon.defaultProps = {
  size: 16
};

exports.default = RemoveIcon;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AlertIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 20 20"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-4066.000000, -284.000000)" },
        React.createElement(
          "g",
          { transform: "translate(4067.000000, 285.000000)" },
          React.createElement("path", { d: "M9.00042345,16.9417992 C4.62225447,16.9417992 1.05862426,13.378046 1.05862426,9 C1.05862426,4.62149634 4.62186521,1.05862426 9.00042345,1.05862426 C13.3782577,1.05862426 16.9413757,4.6216193 16.9413757,9 C16.9413757,13.377923 13.3778685,16.9417992 9.00042345,16.9417992 L9.00042345,16.9417992 Z M9.00042345,18.0004234 C13.9625551,18.0004234 18,13.9625605 18,9 C18,4.03694909 13.9629116,0 9.00042345,0 C4.03722771,0 0,4.03680977 0,9 C0,13.9626999 4.03758426,18.0004234 9.00042345,18.0004234 L9.00042345,18.0004234 Z" }),
          React.createElement(
            "g",
            { transform: "translate(8.000000, 4.000000)" },
            React.createElement(
              "g",
              null,
              React.createElement("path", { d: "M-0.2572,9.2312 C-0.2572,9.8988 0.2772,10.4484 0.9744,10.4484 C1.6716,10.4484 2.2068,9.8988 2.2068,9.2312 C2.2068,8.5344 1.6428,7.9844 0.9744,7.9844 C0.3068,7.9844 -0.2572,8.5344 -0.2572,9.2312 Z" }),
              React.createElement("path", { d: "M1.7756,6.6 L2.1912,-0.2 L-0.242,-0.2 L0.1732,6.6 L1.7756,6.6 L1.7756,6.6 Z" })
            )
          )
        )
      )
    )
  );
}
/* eslint-disable max-len */


AlertIcon.defaultProps = {
  size: 20
};

exports.default = AlertIcon;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FlagIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      d: "M4 14V3h15l-4 5.5 4 5.5zm0 0v8",
      stroke: "#fff",
      strokeWidth: "2",
      fill: "none"
    })
  );
}
/* eslint-disable max-len */


FlagIcon.defaultProps = {
  size: 16
};

exports.default = FlagIcon;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function EmbedIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "#fff",
      d: "M3 12l-.705-.71-.714.71.714.71zm18 0l.705.71.714-.71-.714-.71zM8.738 16.29l-5.033-5-1.41 1.42 5.033 5zm-5.033-3.58l5.033-5-1.41-1.42-5.033 5zm12.967 5l5.033-5-1.41-1.42-5.033 5zm5.033-6.42l-5.033-5-1.41 1.42 5.033 5z"
    })
  );
}
/* eslint-disable max-len */


EmbedIcon.defaultProps = {
  size: 16
};

exports.default = EmbedIcon;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function DeleteIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M5 7v14h14V7M5 7H3V3h18v4h-2M5 7h14M9 1h6m-1 9v7.5M10 10v7.5",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


DeleteIcon.defaultProps = {
  size: 24
};

exports.default = DeleteIcon;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function BackToTopIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 40 40"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2615.000000, -111.000000)" },
        React.createElement(
          "g",
          { transform: "translate(2615.000000, 111.000000)" },
          React.createElement("path", { d: "M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z M27.2551834,23.6631707 C27.6203605,24.0765362 28.2509394,24.114478 28.6630108,23.7490389 C29.0760799,23.3835999 29.1149922,22.7525685 28.7488174,22.339203 L20.792747,14.3364872 C20.3946442,13.8861785 19.6912293,13.8881754 19.295122,14.3404811 L11.2472584,22.339203 C10.8840769,22.7545654 10.9259824,23.3855968 11.3400493,23.7480404 C11.7541162,24.1104841 12.3846951,24.0695469 12.7478767,23.6541845 L20.0005323,16.5181384 L27.2551834,23.6631707 Z" })
        ),
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" })
      )
    )
  );
}
/* eslint-disable max-len */


BackToTopIcon.defaultProps = {
  size: 40
};

exports.default = BackToTopIcon;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ContactEyeEmIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: 1, fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2618.000000, -199.000000)" },
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("path", { d: "M2634,210.004123 L2634,213.004123 L2628,213.004123 L2628,216.004123 L2634,216.004123 L2634,219.004123 L2625,219.004123 L2625,204.004123 L2634,204.004123 L2634,207.004123 L2628,207.004123 L2628,210.004123 L2634,210.004123 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


ContactEyeEmIcon.defaultProps = {
  size: 24
};

exports.default = ContactEyeEmIcon;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ContactFacebookIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: 1, fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2666.000000, -199.000000)" },
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("path", { d: "M2679,220.004123 L2679,212.004123 L2681.69527,212.004123 L2682.09254,209.008701 L2679,209.008701 L2679,207.381592 C2679.04172,206.489608 2679.28939,205.881694 2680.56855,205.881694 L2682,205.881006 L2682,203.125507 C2681.91777,203.088029 2680.94937,203.004123 2679.82273,203.004123 C2677.47062,203.004123 2676,204.446872 2676,207.074123 L2676,209.008701 L2673,209.008701 L2673,212.004123 L2676,212.004123 L2676,220.004123 L2679,220.004123 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


ContactFacebookIcon.defaultProps = {
  size: 24
};

exports.default = ContactFacebookIcon;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ContactTwitterIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: 1, fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2714.000000, -199.000000)" },
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("path", { d: "M2723.03172,218.00304 C2721.17793,218.00304 2719.45269,217.461373 2718,216.528082 C2718.25655,216.558957 2718.51807,216.574123 2718.7829,216.574123 C2720.32055,216.574123 2721.73628,216.04979 2722.85959,215.169582 C2721.4229,215.14304 2720.21076,214.19404 2719.7931,212.889707 C2719.99338,212.928165 2720.19917,212.948748 2720.41103,212.948748 C2720.71007,212.948748 2721.00028,212.908665 2721.27559,212.833373 C2719.77379,212.531665 2718.64276,211.208373 2718.64276,209.615873 L2718.64276,209.574707 C2719.08524,209.820623 2719.59172,209.967957 2720.12966,209.98529 C2719.2491,209.396498 2718.66924,208.392248 2718.66924,207.25529 C2718.66924,206.65404 2718.8309,206.090165 2719.11393,205.605373 C2720.73269,207.591123 2723.15145,208.897623 2725.87972,209.034665 C2725.82345,208.794707 2725.79476,208.543915 2725.79476,208.286623 C2725.79476,206.474207 2727.26455,205.004123 2729.07752,205.004123 C2730.02152,205.004123 2730.87503,205.40279 2731.47366,206.040873 C2732.22069,205.89354 2732.92359,205.62054 2733.55807,205.244623 C2733.31255,206.011082 2732.79172,206.65404 2732.11476,207.06029 C2732.77848,206.980123 2733.41186,206.804082 2734,206.542998 C2733.55972,207.201123 2733.00303,207.779082 2732.36193,208.242207 C2732.36855,208.38304 2732.37186,208.524415 2732.37186,208.666873 C2732.37186,213.005623 2729.06979,218.004123 2723.03172,218.004123" })
      )
    )
  );
}
/* eslint-disable max-len */


ContactTwitterIcon.defaultProps = {
  size: 24
};

exports.default = ContactTwitterIcon;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ContactTumblrIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: 1, fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-2762.000000, -199.000000)" },
        React.createElement("g", { transform: "translate(2615.000000, 111.000000)" }),
        React.createElement("path", { d: "M2776.47044,215.926157 C2775.22332,215.959715 2774.98139,215.050518 2775,214.004123 L2775,209.004123 L2778.01266,209.004123 L2778.01266,206.994994 L2775,206.994994 L2775,203.004123 C2774.98217,202.994846 2773,203.004123 2773,203.004123 C2773,203.004123 2770.88699,206.678097 2769,207.530324 L2769,209.004123 L2771,209.004123 L2771,215.004123 C2770.98971,216.403711 2772.27507,218.879225 2775.66837,218.820693 C2776.81325,218.801182 2778.08457,218.322 2778.36552,217.908374 L2777.72693,215.65769 C2777.43739,215.795825 2776.88329,215.916011 2776.47044,215.926157 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


ContactTumblrIcon.defaultProps = {
  size: 24
};

exports.default = ContactTumblrIcon;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function DownloadIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement(
      "g",
      { stroke: "#fff", strokeWidth: "2", fill: "none" },
      React.createElement("path", { d: "m3 21h18" }),
      React.createElement("path", { d: "m6 10 6 6 6-6" }),
      React.createElement("path", { d: "m12 2v14" })
    ),
    ' '
  );
}
/* eslint-disable max-len */


DownloadIcon.defaultProps = {
  size: 24
};

exports.default = DownloadIcon;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function UploadIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      d: "M6 8.125L12 2m0 0l6 6.125M12 2c.01 5.421 0 14 0 14m-9 5h18",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


UploadIcon.defaultProps = {
  size: 24
};

exports.default = UploadIcon;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function UpgradeIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement(
      "clipPath",
      { id: "a" },
      React.createElement("path", { d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "g",
      { clipPath: "url(#a)" },
      React.createElement("path", {
        fill: "none",
        d: "M15 12.5l7 3.5-10 5-10-5 7-3.5M7.5 8L12 3.5m0 0L16.5 8M12 3.5V16",
        stroke: "#fff",
        strokeWidth: "2"
      })
    )
  );
}
/* eslint-disable max-len */


UpgradeIcon.defaultProps = {
  size: 18
};

exports.default = UpgradeIcon;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CheckmarkIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M2.5 12l6.806 7L21.5 5",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


CheckmarkIcon.defaultProps = {
  size: 18
};

exports.default = CheckmarkIcon;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CartIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M0 2h3.5l1 12.5h15l3-9.5H3.821M9.5 20.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


CartIcon.defaultProps = {
  size: 16
};

exports.default = CartIcon;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CompDownloadIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "m15 12s-1.7966 1.7966-3 3m0 0c-1.1872-1.1872-3-3-3-3m3 3v-7m-6-4h-3v3m15-3h3v3m0 10v3h-3m-12 0h-3v-3m0-2v-2m0-2v-2m8 11h-3m8 0h-3m-5-16h3m2 0h3m5 5v2m0 2v2",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


CompDownloadIcon.defaultProps = {
  size: 18
};

exports.default = CompDownloadIcon;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AddToLightboxIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M6 10h8m-4-4v8m11-4v11H10M3 3v14h14V3z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


AddToLightboxIcon.defaultProps = {
  size: 18
};

exports.default = AddToLightboxIcon;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function IsInLightboxIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "m21 10v11h-11m-4-11h8m-11-7v14h14v-14z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


IsInLightboxIcon.defaultProps = {
  size: 18
};

exports.default = IsInLightboxIcon;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function LightboxIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 30 30" },
    React.createElement("path", {
      fill: "#FFFFFF",
      d: "M8 6c0-1 1-2 2-2h14c1 0 2 1 2 2v14c0 1-1 2-2 2H10c-1 0-2-1-2-2V6z"
    }),
    React.createElement("path", {
      fill: "#FFFFFF",
      d: "M6 10c0-.6-.4-1-1-1s-1 .5-1 1v14c0 1 1 2 2 2h14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1-.4-1-1V10z"
    })
  );
}
/* eslint-disable max-len */


LightboxIcon.defaultProps = {
  size: 16
};

exports.default = LightboxIcon;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function LikeIcon(props) {
  return React.createElement(
    "svg",
    {
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M2.556 10.31C3.081 15.03 12 20.802 12 20.802s8.919-5.246 9.444-10.492c.524-5.247-2.694-7.437-6.296-6.296C13.597 4.504 12 6.742 12 6.742s-1.597-2.237-3.148-2.728c-3.602-1.14-6.82 1.574-6.296 6.296z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


LikeIcon.defaultProps = {
  size: 18
};

exports.default = LikeIcon;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CommentIcon(props) {
  return React.createElement(
    "svg",
    {
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      clipRule: "evenodd",
      d: "M12 21a8.96 8.96 0 004.292-1.087L21 21l-1.002-4.87A9 9 0 1012 21z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


CommentIcon.defaultProps = {
  size: 16
};

exports.default = CommentIcon;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FlickrIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 32 32"
    },
    React.createElement("path", {
      d: "M28 18.744l-3-3.328V3c-.01.01-.01.01 0 0H7c.01.01.01.01 0 0v18c.01-.01.01-.01 0 0h10.5v3H7c-1.93 0-3-1.078-3-3V3c0-1.93 1.078-3 3-3h18c1.93 0 3 1.078 3 3v15.744zm2.58 7.017l-4.298-.45 2.08 5.31c.045.114.066.23.066.347 0 .424-.288.82-.75.972-.125.04-.254.06-.38.06-.465 0-.9-.263-1.065-.685l-2.092-5.34L21 28.75V15.133l9.58 10.63z",
      fillRule: "nonzero"
    })
  );
}
/* eslint-disable max-len */


FlickrIcon.defaultProps = {
  size: 32
};

exports.default = FlickrIcon;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ShareIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      d: "M9.989 12.882l-.873-.489-.977 1.745.872.489zm3.924 4.49l.872.49.977-1.746-.872-.489zm-4.844-7.72l-.848.53 1.06 1.696.847-.53zm5.862-1.304l.848-.53-1.06-1.696-.847.53zM7 16a4 4 0 004-4H9a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zM7 8a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4v-2a2 2 0 01-2-2zm14 10a4 4 0 004-4h-2a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zm-4-4a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4v-2a2 2 0 01-2-2zm4-8a4 4 0 004-4h-2a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zm-4-4a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4V8a2 2 0 01-2-2zm-3.989 8.627l4.902 2.745.977-1.744-4.901-2.746zm1.117-3.279l4.803-3-1.06-1.696-4.802 3z",
      fill: "inherit"
    })
  );
}
/* eslint-disable max-len */


ShareIcon.defaultProps = {
  size: 16
};

exports.default = ShareIcon;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function EditIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      clipRule: "evenodd",
      d: "M22 7.478L9.383 20.326 3 21l1.003-6.152L16.62 2 22 7.478z",
      stroke: "#fff",
      strokeWidth: "2",
      strokeLinecap: "round"
    })
  );
}
/* eslint-disable max-len */


EditIcon.defaultProps = {
  size: 16
};

exports.default = EditIcon;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FacebookIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 20 20"
    },
    React.createElement("path", {
      d: "M19 20H1.104C.494 20 0 19.506 0 18.896V1.104C0 .494.494 0 1.104 0h17.792C19.506 0 20 .494 20 1.104v17.792c0 .61-.494 1.104-1 1.104zm-5 0v-8h2.393l.404-2.98L14 9V7.248c0-.874.042-1.408 1.296-1.408h1.598v-2.7h-1.887C12.703 3.14 11 4.415 11 7.02v2H9V12h1.997v8H14z",
      fillRule: "evenodd"
    })
  );
}
/* eslint-disable max-len */


FacebookIcon.defaultProps = {
  size: 18
};

exports.default = FacebookIcon;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function DropboxIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 36 36"
    },
    React.createElement("path", {
      d: "M18.018 21.922l-6.193 5.156-2.65-1.736v1.946l8.843 5.322 8.844-5.322v-1.946l-2.65 1.736-6.194-5.156zM33 10.392L24.175 4.61 18 9.78l8.898 5.515L33 10.392zM18 20.808l6.175 5.173L33 20.2l-6.102-4.905L18 20.808zm-15-.61l8.825 5.783L18 20.81l-8.898-5.513L3 20.2zM11.825 4.61L3 10.392l6.102 4.903L18 9.78l-6.175-5.17z",
      fill: "#1081DE",
      fillRule: "evenodd"
    })
  );
}
/* eslint-disable max-len */


DropboxIcon.defaultProps = {
  size: 36
};

exports.default = DropboxIcon;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function GoogleDriveIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 36 36"
    },
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#2EB672", d: "M18 13.953L12.472 5 2.545 21.91l5.528 8.952" }),
      React.createElement("path", { fill: "#527ABD", d: "M34 22H14.153L9 31h19.847" }),
      React.createElement("path", { fill: "#FED14B", d: "M23.718 4H13l10.282 17H34" })
    )
  );
}
/* eslint-disable max-len */


GoogleDriveIcon.defaultProps = {
  size: 36
};

exports.default = GoogleDriveIcon;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FlickrIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 36 36"
    },
    React.createElement(
      "g",
      { transform: "translate(4 12)", fill: "none", fillRule: "evenodd" },
      React.createElement("circle", { fill: "#0262DD", cx: "6", cy: "6", r: "6" }),
      React.createElement("circle", { fill: "#FF0184", cx: "22", cy: "6", r: "6" })
    )
  );
}
/* eslint-disable max-len */


FlickrIcon.defaultProps = {
  size: 36
};

exports.default = FlickrIcon;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FlickrIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 36 36"
    },
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", {
        d: "M34.834 18.718c.068-.064.107-.153.107-.253 0-.196-.16-.356-.355-.356H17.832v8.91h8.91l8.092-8.302z",
        fill: "#4285F4"
      }),
      React.createElement("path", { fill: "#3367D6", d: "M17.832 18.11v8.91h8.91" }),
      React.createElement("path", {
        d: "M26.743 27.02l8.09-8.302c.07-.064.108-.153.108-.253 0-.032-.01-.06-.017-.09-.017.062-.042.122-.085.165l-8.095 8.302h-8.91v.178h8.91z",
        fillOpacity: ".2",
        fill: "#263238"
      }),
      React.createElement("path", {
        fillOpacity: ".1",
        fill: "#263238",
        d: "M17.832 18.11v.177l8.733 8.733h.178"
      }),
      React.createElement("path", {
        d: "M17.223 35.11c.064.07.153.108.253.108.196 0 .356-.16.356-.357V18.11h-8.91v8.91l8.3 8.09z",
        fill: "#8BC34A"
      }),
      React.createElement("path", { fill: "#0F9D58", d: "M8.92 18.11v8.91l8.912-8.91" }),
      React.createElement("path", {
        d: "M17.476 35.04c-.1 0-.19-.04-.253-.107L9.01 26.93l-.09.09 8.303 8.09c.064.07.153.108.253.108.196 0 .356-.16.356-.357v-.177c0 .196-.16.357-.356.357z",
        fillOpacity: ".1",
        fill: "#3E2723"
      }),
      React.createElement("path", {
        fillOpacity: ".05",
        fill: "#3E2723",
        d: "M17.832 18.287h-.178L8.92 27.02v.178"
      }),
      React.createElement("path", {
        d: "M.83 17.5c-.067.064-.107.153-.107.252 0 .197.16.357.357.357h16.752V9.197h-8.91l-8.092 8.3z",
        fill: "#FFBC00"
      }),
      React.createElement("path", { fill: "#FF9800", d: "M17.832 18.11V9.197h-8.91" }),
      React.createElement("path", {
        d: "M8.92 9.198l-8.09 8.3c-.067.066-.107.155-.107.254 0 .033.01.06.018.09.02-.06.044-.122.087-.164L8.92 9.376h8.912v-.178h-8.91z",
        fillOpacity: ".2",
        fill: "#FFF"
      }),
      React.createElement("path", {
        fillOpacity: ".1",
        fill: "#3E2723",
        d: "M17.832 18.11v-.18L9.1 9.2h-.18"
      }),
      React.createElement("path", {
        d: "M18.442 1.107C18.378 1.04 18.29 1 18.19 1c-.197 0-.358.16-.358.356V18.11h8.91V9.197l-8.3-8.09z",
        fill: "#DB4437"
      }),
      React.createElement("path", {
        d: "M18.442 1.107C18.378 1.04 18.29 1 18.19 1c-.197 0-.358.16-.358.356v.18c0-.197.16-.358.357-.358.1 0 .188.04.252.107l8.12 7.917.18-.004-8.3-8.09z",
        fillOpacity: ".2",
        fill: "#FFF"
      }),
      React.createElement("path", { fill: "#AD1457", d: "M26.743 18.11V9.197l-8.91 8.91" }),
      React.createElement("path", {
        fill: "#FFF",
        opacity: ".2",
        d: "M17.832 17.93h.178L26.743 9.2l-.182.004"
      }),
      React.createElement("path", {
        fillOpacity: ".1",
        fill: "#3E2723",
        d: "M17.832 17.93h8.91v.25h-8.91z"
      }),
      React.createElement("path", {
        fill: "#F1F1F1",
        d: "M16.763 17.04l1.07-2.495 1.07 2.495 2.494 1.07-2.495 1.068-1.07 2.495-1.07-2.495-2.494-1.07"
      })
    )
  );
}
/* eslint-disable max-len */


FlickrIcon.defaultProps = {
  size: 36
};

exports.default = FlickrIcon;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function InstagramIcon(props) {
  return React.createElement(
    'svg',
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      xmlSpace: 'preserve',
      style: {
        enableBackground: 'new 0 0 551.034 551.034'
      },
      viewBox: '-50 -50 670 670'
    },
    React.createElement(
      'g',
      null,
      React.createElement(
        'linearGradient',
        {
          id: 'XMLID_2_',
          gradientUnits: 'userSpaceOnUse',
          x1: '275.517',
          y1: '4.5714',
          x2: '275.517',
          y2: '549.7202',
          gradientTransform: 'matrix(1 0 0 -1 0 554)'
        },
        React.createElement('stop', { offset: '0', style: { stopColor: '#E09B3D' } }),
        React.createElement('stop', { offset: '0.3', style: { stopColor: '#C74C4D' } }),
        React.createElement('stop', { offset: '0.6', style: { stopColor: '#C21975' } }),
        React.createElement('stop', { offset: '1', style: { stopColor: '#7024C4' } })
      ),
      React.createElement('path', {
        style: {
          fill: 'url(#XMLID_2_)'
        },
        d: 'M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z'
      }),
      React.createElement(
        'linearGradient',
        {
          id: 'XMLID_3_',
          gradientUnits: 'userSpaceOnUse',
          x1: '275.517',
          y1: '4.5714',
          x2: '275.517',
          y2: '549.7202',
          gradientTransform: 'matrix(1 0 0 -1 0 554)'
        },
        React.createElement('stop', { offset: '0', style: { stopColor: '#E09B3D' } }),
        React.createElement('stop', { offset: '0.3', style: { stopColor: '#C74C4D' } }),
        React.createElement('stop', { offset: '0.6', style: { stopColor: '#C21975' } }),
        React.createElement('stop', { offset: '1', style: { stopColor: '#7024C4' } })
      ),
      React.createElement('path', {
        style: { fill: 'url(#XMLID_3_)' },
        d: 'M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z'
      }),
      React.createElement(
        'linearGradient',
        {
          id: 'XMLID_4_',
          gradientUnits: 'userSpaceOnUse',
          x1: '418.306',
          y1: '4.5714',
          x2: '418.306',
          y2: '549.7202',
          gradientTransform: 'matrix(1 0 0 -1 0 554)'
        },
        React.createElement('stop', { offset: '0', style: { stopColor: '#E09B3D' } }),
        React.createElement('stop', { offset: '0.3', style: { stopColor: '#C74C4D' } }),
        React.createElement('stop', { offset: '0.6', style: { stopColor: '#C21975' } }),
        React.createElement('stop', { offset: '1', style: { stopColor: '#7024C4' } })
      ),
      React.createElement('circle', {
        style: { fill: 'url(#XMLID_4_)' },
        cx: '418.306',
        cy: '134.072',
        r: '34.149'
      })
    )
  );
}
/* eslint-disable max-len */


InstagramIcon.defaultProps = {
  size: 36
};

exports.default = InstagramIcon;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function PaypalIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 15 18"
    },
    React.createElement(
      "g",
      { fillRule: "evenodd", opacity: ".5" },
      React.createElement("path", {
        d: "M13.5 4.6c.2-1.4 0-2.4-.8-3.2C12 .4 10.4 0 8.5 0H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4l-.4 1.5c0 .2.2.5.4.5h3c.2 0 .5-.3.6-.6v-.2l.5-3.4.3-.2c0-.4.3-.6.6-.6h.4c2.7 0 5-1.2 5.5-4.5.2-1.4 0-2.5-.7-3.3-.2-.3-.4-.5-.7-.6",
        fill: "#ABDFF5"
      }),
      React.createElement("path", {
        d: "M13.5 4.6c.2-1.4 0-2.4-.8-3.2C12 .4 10.4 0 8.5 0H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4l.7-5.5v.2c0-.4.4-.7.8-.7H7c3.2 0 5.7-1.3 6.4-5v-.4",
        fill: "#E6F5FB"
      }),
      React.createElement("path", { d: "M5.6 4.6c0-.2.2-.4.4-.5h6s.3 0 .4.3h.5c0 .2.2.3.4.4.2-1.4 0-2.4-.8-3.2-.6-1-2.2-1.5-4-1.5H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4L5.5 4.6" })
    )
  );
}


PaypalIcon.defaultProps = {
  size: 18
};

exports.default = PaypalIcon;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CommentIcon(props) {
  return React.createElement(
    "svg",
    {
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 16"
    },
    React.createElement("path", { d: "M7 12H5V7H0V5h5V0h2v5h5v2H7z" })
  );
}
/* eslint-disable max-len */


CommentIcon.defaultProps = {
  size: 16
};

exports.default = CommentIcon;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function LeftArrowIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 5 8"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-200.000000, -1093.000000)" },
        React.createElement("path", {
          d: "M203.593525,1097.00197 L200,1100.33058 L200.677418,1101.00393 L204.995756,1097.00393 L205,1097.00393 L204.997878,1097.00197 L205,1097 L204.995756,1097 L200.677418,1093 L200,1093.67335 L203.593525,1097.00197 Z",
          transform: "translate(202.500000, 1097.001966) scale(-1, 1) translate(-202.500000, -1097.001966)"
        })
      )
    )
  );
}
/* eslint-disable max-len */


LeftArrowIcon.defaultProps = {
  size: 18
};

exports.default = LeftArrowIcon;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function LeftArrow2Icon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement(
      "g",
      { fill: "none", stroke: "#fff", strokeWidth: "2" },
      React.createElement("path", { d: "m11 5-7 7.0001 7 6.9999" }),
      React.createElement("path", { d: "m20 12h-16" })
    )
  );
}
/* eslint-disable max-len */


LeftArrow2Icon.defaultProps = {
  size: 24
};

exports.default = LeftArrow2Icon;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function RightArrowIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 5 8"
    },
    React.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
      React.createElement(
        "g",
        { transform: "translate(-200.000000, -1093.000000)" },
        React.createElement("path", { d: "M203.593525,1097.00197 L200,1100.33058 L200.677418,1101.00393 L204.995756,1097.00393 L205,1097.00393 L204.997878,1097.00197 L205,1097 L204.995756,1097 L200.677418,1093 L200,1093.67335 L203.593525,1097.00197 Z" })
      )
    )
  );
}
/* eslint-disable max-len */


RightArrowIcon.defaultProps = {
  size: 18
};

exports.default = RightArrowIcon;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function RightArrow2Icon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement(
      "g",
      { fill: "none", stroke: "#fff", strokeWidth: "2" },
      React.createElement("path", { d: "M13 19l7-7-7-7M4 12h16" })
    )
  );
}


RightArrow2Icon.defaultProps = {
  size: 24
};

exports.default = RightArrow2Icon;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function TermsIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 22"
    },
    React.createElement("path", {
      d: "M4 0h17v22H4V0zm3 3h11v2H7V3zm0 4h11v2H7V7zm0 4h6v2H7v-2z",
      fillRule: "evenodd"
    })
  );
}
/* eslint-disable max-len */


TermsIcon.defaultProps = {
  size: 24
};

exports.default = TermsIcon;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function MarketIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 19"
    },
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M4.22 0c-.352 0-.67.186-.81.473L1.188 5.077S1 5.44 1 5.855c0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0-.476-.25-.78-.25-.78L19.732.393C19.577.15 19.286 0 18.97 0H4.22z" }),
      React.createElement("path", { d: "M5 9v10c-1.105 0-2-.895-2-2V9.355c.066.003.133.005.2.005.64 0 1.25-.13 1.8-.36zm16 .355V17c0 1.105-.895 2-2 2V9c.55.23 1.16.36 1.8.36.067 0 .134-.002.2-.005zM5 14h14v5H5v-5z" })
    )
  );
}
/* eslint-disable max-len */


MarketIcon.defaultProps = {
  size: 24
};

exports.default = MarketIcon;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function GrowthIcon(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 12 12"
    },
    React.createElement("path", {
      d: "M7 4.78V12H5V4.68L2.365 7.315 1 5.95 5.95 1l4.95 4.95-1.366 1.365L7 4.78z",
      fillRule: "evenodd"
    })
  );
}
/* eslint-disable max-len */


GrowthIcon.defaultProps = {
  size: 18
};

exports.default = GrowthIcon;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function EyeEmVision(props) {
  return React.createElement(
    "svg",
    {
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 16 14" },
    React.createElement("path", { d: "M8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5M0 6c0 .286 2.38 6 8 6 4.78 0 8-6 8-6s-3.02-6-8-6C2.314 0 0 5.714 0 6z" }),
    React.createElement("circle", { cx: "8", cy: "6", r: "3" })
  );
}
/* eslint-disable max-len */


EyeEmVision.defaultProps = {
  size: 16
};

exports.default = EyeEmVision;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Trophy(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 15 15" },
    React.createElement("path", { d: "M10.273 2c.437-.7 1.34-1 2.23-1h1.07C14.35 1 15 1.598 15 2.333v2.334C15 5.957 13.858 7 12.502 7h-.356c-.432 0-.825-.105-1.153-.285C10.89 8.382 9.63 9.732 8 9.965V13h3v1H4v-1h3V9.965c-1.624-.232-2.89-1.576-2.993-3.25-.328.18-.72.285-1.153.285h-.356C1.142 7 0 5.956 0 4.667V2.333C0 1.598.65 1 1.427 1h1.07c.89 0 1.793.3 2.23 1h5.546zM12.5 2c-.74 0-1.497.387-1.497 1.333v1.334c-.05.717.515 1.333 1.284 1.333h.214c.815 0 1.5-.696 1.5-1.556V2.89c0-.49-.39-.89-.856-.89H12.5zm-10 0h-.644C1.39 2 1 2.4 1 2.89v1.554C1 5.304 1.685 6 2.5 6h.213c.77 0 1.333-.616 1.284-1.333V3.333C3.997 2.387 3.24 2 2.5 2z" })
  );
}
/* eslint-disable max-len */


Trophy.defaultProps = {
  size: 15
};

exports.default = Trophy;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function TrophyPlus(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: 20,
      width: 31,
      viewBox: "0 1 31 24" },
    React.createElement("path", { d: "M28 6v8h2V6" }),
    React.createElement("path", { d: "M33 9h-8v2h8" }),
    React.createElement("path", { d: "M11 13.9v3.075H9V13.9A5.004 5.004 0 0 1 5.008 9V3H15v6c0 2.42-1.712 4.44-4 4.9zm-6 3.075h9.995v2H5v-2z" }),
    React.createElement("path", { d: "M16.5 3A1.5 1.5 0 0 0 15 4.5v2a1.5 1.5 0 0 0 3 0V3h-1.5zm0-2H18a2 2 0 0 1 2 2v3.5a3.5 3.5 0 1 1-7 0v-2A3.5 3.5 0 0 1 16.5 1zm-13 2A1.5 1.5 0 0 1 5 4.5v2a1.5 1.5 0 0 1-3 0V3h1.5zm0-2H2a2 2 0 0 0-2 2v3.5a3.5 3.5 0 1 0 7 0v-2A3.5 3.5 0 0 0 3.5 1z" })
  );
}
/* eslint-disable max-len */
exports.default = TrophyPlus;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function TrophyMinus(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: 20,
      width: 31,
      viewBox: "0 0 31 24" },
    React.createElement("path", { d: "M16.5 2c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5S18 6.33 18 5.5V2h-1.5zm0-2H18c1.11 0 2 .89 2 2v3.5C20 7.43 18.43 9 16.5 9S13 7.43 13 5.5v-2C13 1.57 14.57 0 16.5 0zm-13 2C4.33 2 5 2.67 5 3.5v2C5 6.33 4.33 7 3.5 7S2 6.33 2 5.5V2h1.5zm0-2H2a2 2 0 0 0-2 2v3.5C0 7.43 1.57 9 3.5 9S7 7.43 7 5.5v-2C7 1.57 5.43 0 3.5 0zm0 0" }),
    React.createElement("path", { d: "M33 8h-8v2h8V8zm-22 4.9v3.07H9V12.9A5 5 0 0 1 5.01 8V2H15v6a4.99 4.99 0 0 1-4 4.9zm-6 3.07h9.99v2H5v-2zm0 0" }),
    ' '
  );
}
/* eslint-disable max-len */
exports.default = TrophyMinus;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function UserFollow(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M14 11h8m-4-4v8m-9.189 6H3c0-2.797 1-7 6-7s6 4.205 6 7H8.811zM9 10a3 3 0 100-6 3 3 0 000 6z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


UserFollow.defaultProps = {
  size: 16
};

exports.default = UserFollow;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Info(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement("path", {
      fill: "none",
      d: "M12 11v6m0-10v2m0 13c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
      stroke: "#fff",
      strokeWidth: "2"
    })
  );
}
/* eslint-disable max-len */


Info.defaultProps = {
  size: 24
};

exports.default = Info;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function More(props) {
  return React.createElement(
    "svg",
    {
      id: props.id,
      className: props.className,
      height: props.size,
      width: props.size,
      viewBox: "0 0 24 24" },
    React.createElement(
      "g",
      { clipRule: "evenodd", fillRule: "evenodd" },
      React.createElement(
        "g",
        { fill: "#fff" },
        React.createElement("path", { d: "M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
      ),
      React.createElement(
        "g",
        { stroke: "#fff" },
        React.createElement("path", { d: "M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
      )
    )
  );
}
/* eslint-disable max-len */


More.defaultProps = {
  size: 24
};

exports.default = More;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buttonv = __webpack_require__(83);

var _buttonv2 = _interopRequireDefault(_buttonv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _buttonv2.default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _styleConfig = __webpack_require__(7);

var _styledButtonv = __webpack_require__(84);

var _styledButtonv2 = _interopRequireDefault(_styledButtonv);

var _styledIcon = __webpack_require__(85);

var _styledIcon2 = _interopRequireDefault(_styledIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Buttonv2(props) {
  return React.createElement(
    _styledButtonv2.default,
    {
      renderAs: props.renderAs,
      'data-test-id': props['data-test-id'],
      onClick: props.onClick,
      display: props.display,
      alignItems: props.alignItems,
      href: props.href,
      target: props.target,
      fill: props.fill,
      id: props.id,
      className: props.className,
      sizeValues: _styleConfig.buttonv2Sizes[props.size],
      disabled: props.disabled,
      fullWidth: props.fullWidth,
      moveIconToLeft: props.moveIconToLeft,
      title: props.title,
      htmlFor: props.htmlFor,
      type: props.type },
    props.icon && React.createElement(_styledIcon2.default, {
      moveIconToLeft: props.moveIconToLeft,
      size: _styleConfig.buttonv2Sizes[props.size].iconSize,
      type: props.icon,
      fill: props.fill,
      marginRight: props.children ? '8px' : 0,
      followTextColorIconStroke: props.followTextColorIconStroke,
      followTextColorIconFill: props.followTextColorIconFill
    }),
    props.children
  );
}

Buttonv2.defaultProps = {
  size: 'default',
  fill: 'solid',
  display: 'inline-block',
  icon: false,
  followTextColorIconStroke: false,
  followTextColorIconFill: false,
  disabled: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button'
};

exports.default = Buttonv2;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCreateComponentFromTagProp = __webpack_require__(9);

var _reactCreateComponentFromTagProp2 = _interopRequireDefault(_reactCreateComponentFromTagProp);

var _buttonColors = __webpack_require__(14);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentFromTagProp = (0, _reactCreateComponentFromTagProp2.default)({
  tag: 'button',
  prop: 'renderAs',
  propsToOmit: ['renderAs', 'progress', 'sizeValues', 'spinner', 'fullWidth', 'moveIconToLeft', 'fill', 'display', 'alignItems']
});

var StyledButtonv2 = (0, _styledComponents2.default)(ComponentFromTagProp).withConfig({
  displayName: 'styledButtonv2__StyledButtonv2',
  componentId: 'sc-7vn32i-0'
})(['position:relative;display:', ';max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:', ';font-size:', ';line-height:', ';padding:', ';max-height:', ';border-color:', ';border-width:1px;border-style:solid;background-color:', ';color:', ';fill:', ';', ' vertical-align:top;text-decoration:none;text-align:center;text-shadow:none;cursor:pointer;transition:background-color 0.2s ease-in-out,border 0.2s ease-out,color 0.2s ease-out,fill 0.2s ease-out;pointer-events:all;&:focus,&:hover{color:', ';fill:', ';background-color:', ';border-color:', ';}&:active{background-color:', ';border-color:', ';fill:', ';color:', ';}&:focus{outline:none;}&:disabled{background-color:', ';border-color:', ';fill:', ';color:', ';}', ' ', ';'], function (props) {
  return props.display;
}, (0, _styleUtils.fromPropsTernary)('fullWidth', '100%', 'auto'), (0, _styleUtils.fromProps)('sizeValues.fontSize'), (0, _styleUtils.fromProps)('sizeValues.lineHeight'), (0, _styleUtils.fromProps)('sizeValues.padding'), (0, _styleUtils.fromProps)('sizeValues.maxHeight'), _buttonColors.borderColorDefault, _buttonColors.backgroundColorDefault, _buttonColors.textColorDefault, _buttonColors.textColorDefault, function (props) {
  return (0, _styleUtils.alignItems)(props.alignItems);
}, _buttonColors.textColorHover, _buttonColors.textColorHover, _buttonColors.backgroundColorHover, _buttonColors.borderColorHover, _buttonColors.backgroundColorActive, _buttonColors.borderColorActive, _buttonColors.textColorActive, _buttonColors.textColorActive, _buttonColors.backgroundColorDisabled, _buttonColors.borderColorDisabled, _buttonColors.textColorDisabled, _buttonColors.textColorDisabled, (0, _styleUtils.fromPropsTernary)('moveIconToLeft', 'padding-left: 32px;', ''), (0, _styleUtils.font)('regular'));

exports.default = StyledButtonv2;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _buttonColors = __webpack_require__(14);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconLeftStyles = function iconLeftStyles(props) {
  if (props.moveIconToLeft) {
    var halfHeight = props.size / 2;
    return '\n      position: absolute;\n      left: 12px;\n      top: calc(50% - ' + halfHeight + 'px);\n      margin-right: 0;\n      margin-bottom: 0;\n    ';
  }
  return '';
};

var getCustomIconColors = function getCustomIconColors(props) {
  console.log('textColorDefault', props, (0, _buttonColors.textColorDefault)(props));
  var style = '';
  if (props.followTextColorIconStroke) {
    style += '\n      path {\n        stroke: ' + (0, _buttonColors.textColorDefault)(props) + ';\n      }\n    ';
  }
  if (props.followTextColorIconFill) {
    style += '\n      path {\n        fill: ' + (0, _buttonColors.textColorDefault)(props) + ';\n      }\n    ';
  }
  return style;
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default).withConfig({
  displayName: 'styledIcon__StyledIcon',
  componentId: 'vbbfmb-0'
})(['margin-right:', ';margin-bottom:-2px;', ';', ''], (0, _styleUtils.fromProps)('marginRight'), iconLeftStyles, getCustomIconColors);

exports.default = StyledIcon;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var background = function background(props) {
  if (props.error) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.solidColors.red'), (0, _styleUtils.fromInternalTheme)('colors.lightColors.lightRed'));
  }
  if (props.pending) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';background-image:url(\'/node-static/img/spinner-32-black.gif\');background-position:center right 8px;background-size:16px;background-repeat:no-repeat;'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), (0, _styleUtils.fromInternalTheme)('colors.whites.white'));
  }
  if (props.showCheckmark) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';padding-right:30px;background-image:url(\'/node-static/img/check-green.svg\');background-position:center right 8px;background-size:15px;background-repeat:no-repeat;'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), (0, _styleUtils.fromInternalTheme)('colors.whites.white'));
  }
  return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), function (prop) {
    return prop.disabled ? (0, _styleUtils.fromInternalTheme)('colors.lightColors.lightRed') : (0, _styleUtils.fromInternalTheme)('colors.whites.white');
  });
};

var StyledInput = _styledComponents2.default.input.withConfig({
  displayName: 'input__StyledInput',
  componentId: 'sc-1lw3uz7-0'
})(['', ';font-size:16px;line-height:20px;&::placeholder{color:', ';}padding:9px 12px 10px 12px;max-height:40px;width:100%;border-width:1px;border-style:solid;border-radius:', ';box-shadow:none;color:', ';', ' appearance:none;-webkit-appearance:none;&:focus{border-color:', ';&::placeholder{color:', ';}}'], (0, _styleUtils.font)('regular'), (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed10'), (0, _styleUtils.fromInternalTheme)('borderRadius'), (0, _styleUtils.fromInternalTheme)('colors.blacks.black1'), background, (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'), (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed16'));

var InnerHint = _styledComponents2.default.p.withConfig({
  displayName: 'input__InnerHint',
  componentId: 'sc-1lw3uz7-1'
})(['font-size:12px;position:absolute;top:2px;right:12px;cursor:pointer;color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey3'));

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showPassword: false }, _this.togglePassword = function () {
      return _this.setState(function (state) {
        return { showPassword: !state.showPassword };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var WrapperComponent = this.props.formRow ? _formRow2.default : 'div';

      return _react2.default.createElement(
        WrapperComponent,
        null,
        _react2.default.createElement(StyledInput, _extends({}, this.props.inputProps, {
          error: !!this.props.errorMessage,
          pending: this.props.pending,
          showCheckmark: this.props.showCheckmark,
          type: this.state.showPassword && 'text' || this.props.inputProps.type || 'text'
        })),
        this.props.inputProps.type === 'password' && _react2.default.createElement(
          InnerHint,
          { onClick: this.togglePassword },
          this.state.showPassword ? this.props.inputProps.hidePassword || 'hide' : this.props.inputProps.showPassword || 'show'
        ),
        this.props.errorMessage && _react2.default.createElement(
          _flyout2.default,
          { fontColor: 'whites.white', backgroundColor: 'solidColors.red' },
          this.props.errorMessage
        )
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.defaultProps = {
  errorMessage: undefined,
  pending: false,
  formRow: true,
  showCheckmark: false
};
exports.default = Input;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputv = __webpack_require__(88);

var _inputv2 = _interopRequireDefault(_inputv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inputv2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(3);

var _colors = __webpack_require__(10);

var _styledFields = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xIcon = (0, _styledComponents.css)(['&::before,&::after{content:\'\';position:absolute;height:16px;width:16px;right:20px;top:24px;border-width:2px;border-color:', ';z-index:1;}&::before{transform:translateX(8px) translateY(4px) rotate(45deg);border-left-style:solid;}&::after{border-bottom-style:solid;transform:translateX(8px) translateY(-6px) rotate(45deg);}'], _theme.colors.solidColors.redv2);

var checkmarkIcon = (0, _styledComponents.css)(['&::before,&::after{content:\'\';position:absolute;right:30px;top:32px;background-color:', ';z-index:1;}&::before{height:2px;width:8px;transform:rotate(45deg);}&::after{width:16px;height:2px;transform:rotate(135deg) translateX(-10px) translateY(-7px);}'], _theme.colors.solidColors.greenv2);

var InputWrapper = (0, _styledComponents2.default)(_styledFields.StyledWrapper).withConfig({
  displayName: 'inputv2__InputWrapper',
  componentId: 'dpie3m-0'
})(['', ' ', ''], function (props) {
  return !props.isPasswordInput && props.isInvalid && xIcon;
}, function (props) {
  return !props.isPasswordInput && props.isValidated && checkmarkIcon;
});

var StyledInput = _styledComponents2.default.input.withConfig({
  displayName: 'inputv2__StyledInput',
  componentId: 'dpie3m-1'
})(['width:100%;border:0;line-height:24px;font-size:16px;padding-top:5px;padding-bottom:9px;padding-right:36px;background-color:transparent !important;transition:transform 0.2s ease;color:', ';transform:', ';::placeholder{color:transparent;}:focus{outline:none;}'], _colors.textColor, function (props) {
  return props.isActive ? 'translateY(11px)' : 'translateY(0)';
});

var InnerHint = _styledComponents2.default.span.withConfig({
  displayName: 'inputv2__InnerHint',
  componentId: 'dpie3m-2'
})(['font-size:12px;background-image:', ' background-position:center center;background-repeat:no-repeat;height:24px;width:24px;position:absolute;top:calc(50% - 12px);right:16px;cursor:pointer;color:', ';'], function (props) {
  return props.showPassword ? 'url("data:image/svg+xml,%0A%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-eye-off\'%3E%3Cpath d=\'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22\'/%3E%3C/svg%3E");' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-eye\'%3E%3Cpath d=\'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'3\'/%3E%3C/svg%3E");';
}, _theme.colors.greys.grey3);

var Inputv2 = function (_React$Component) {
  _inherits(Inputv2, _React$Component);

  function Inputv2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Inputv2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Inputv2.__proto__ || Object.getPrototypeOf(Inputv2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      isHovered: false,
      showPassword: false
    }, _this.setFocus = function (val) {
      _this.setState({ isFocused: val });
    }, _this.setHover = function (val) {
      _this.setState({ isHovered: val });
    }, _this.togglePassword = function () {
      return _this.setState(function (state) {
        return { showPassword: !state.showPassword };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Inputv2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.inputProps.name) {
        // eslint-disable-next-line
        console.error('<Inputv2>: Missing this.props.inputProps.name, which is needed for accessibility markup.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.inputProps.value;

      var isActive = this.props.inputProps.type === 'date' || value && value.length || this.state.isFocused;

      return _react2.default.createElement(
        _styledFields.ElementWrapper,
        null,
        _react2.default.createElement(
          InputWrapper,
          {
            isFocused: this.state.isFocused,
            isHovered: this.state.isHovered,
            isInvalid: !!this.props.errorMessage,
            isValidated: this.props.isValidated,
            isDisabled: this.props.inputProps.disabled,
            isPasswordInput: this.props.inputProps.type === 'password' },
          _react2.default.createElement(
            _styledFields.StyledLabel,
            { htmlFor: this.props.inputProps.name, isActive: isActive },
            this.props.inputProps.placeholder
          ),
          _react2.default.createElement(StyledInput, _extends({}, this.props.inputProps, {
            id: this.props.inputProps.name,
            value: this.props.inputProps.value,
            onChange: this.props.inputProps.onChange,
            disabled: this.props.inputProps.disabled,
            onFocus: function onFocus(event) {
              if (_this2.props.inputProps.onFocus) {
                _this2.props.inputProps.onFocus(event);
              }

              _this2.setFocus(true);
            },
            onBlur: function onBlur(event) {
              if (_this2.props.inputProps.onBlur) {
                _this2.props.inputProps.onBlur(event);
              }

              return _this2.setFocus(false);
            },
            onMouseEnter: function onMouseEnter() {
              return _this2.setHover(true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setHover(false);
            },
            isActive: isActive,
            type: this.state.showPassword && 'text' || this.props.inputProps.type || 'text'
          })),
          this.props.inputProps.type === 'password' && _react2.default.createElement(InnerHint, {
            onClick: this.togglePassword,
            showPassword: this.state.showPassword
          })
        ),
        this.props.errorMessage && _react2.default.createElement(
          _styledFields.ErrorWrapper,
          { size: 'pMin', font: 'bold' },
          this.props.errorMessage
        )
      );
    }
  }]);

  return Inputv2;
}(_react2.default.Component);

exports.default = Inputv2;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents2.default.div.withConfig({
  displayName: 'box__Box',
  componentId: 'sc-14mdq3u-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], _styledSystem.display, _styledSystem.color, _styledSystem.bgColor, _styledSystem.space, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.width, _styledSystem.ratio, _styledSystem.flex);

Box.propTypes = _extends({}, _styledSystem.display.propTypes, _styledSystem.color.propTypes, _styledSystem.bgColor.propTypes, _styledSystem.space.propTypes, _styledSystem.borders.propTypes, _styledSystem.borderColor.propTypes, _styledSystem.width.propTypes, _styledSystem.ratio.propTypes, _styledSystem.flex.propTypes);

Box.displayName = 'Box';

exports.default = Box;

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(92)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(95)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(93);

var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(94);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(12);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _styleConfig = __webpack_require__(7);

var _styledText = __webpack_require__(97);

var _styledText2 = _interopRequireDefault(_styledText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Text(props) {
  return React.createElement(
    _styledText2.default,
    {
      to: props.to,
      font: props.font,
      fontStyle: props.fontStyle,
      renderAs: props.renderAs,
      'data-test-id': props['data-test-id'],
      id: props.id,
      onClick: props.onClick,
      className: props.className,
      href: props.href,
      target: props.target,
      sizeValues: _styleConfig.textSizes[props.size],
      colors: _extends({
        hover: _styleConfig.textColors[props.color] && _styleConfig.textColors[props.color].regular,
        active: _styleConfig.textColors[props.color] && _styleConfig.textColors[props.color].regular
      }, _styleConfig.textColors[props.color]),
      cursor: props.cursor || _styleConfig.textColors[props.color] && _styleConfig.textColors[props.color].hover ? 'pointer' : undefined,
      margin: props.margin,
      marginTop: _styleConfig.textTopMargins[props.topMargin || 'none'],
      textTransform: props.textTransform,
      display: props.display,
      alignItems: props.alignItems,
      ellipsis: props.ellipsis,
      noWrap: props.noWrap,
      underline: props.underline,
      align: props.align },
    props.children
  );
}

Text.defaultProps = {
  ellipsis: false,
  noWrap: false,
  underline: false,
  topMargin: 'none',
  color: 'default',
  font: 'regular',
  size: 'default',
  display: 'block',
  margin: undefined,
  align: 'left',
  renderAs: 'p',
  onClick: undefined,
  target: undefined,
  href: undefined,
  textTransform: 'none'
};

exports.default = Text;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', 'px;\n    line-height: ', 'px;\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n  '], ['\n    font-size: ', 'px;\n    line-height: ', 'px;\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n  ']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactCreateComponentFromTagProp = __webpack_require__(9);

var _reactCreateComponentFromTagProp2 = _interopRequireDefault(_reactCreateComponentFromTagProp);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ComponentFromTagProp = (0, _reactCreateComponentFromTagProp2.default)({
  tag: 'a',
  prop: 'renderAs',
  propsToOmit: ['renderAs', 'underline', 'colors', 'font', 'fontStyle', 'sizeValues', 'margin', 'marginTop', 'ellipsis', 'noWrap', 'cursor', 'align', 'display', 'alignItems', 'textTransform']
});

var fontSizeToLineHeight = function fontSizeToLineHeight(fontSize) {
  return fontSize + 8;
};
var fontSizeToMargin = function fontSizeToMargin(fontSize) {
  return (fontSize + 8) / 2;
};

var fontSize = function fontSize(size) {
  return (0, _styleUtils.fromProps)('sizeValues.font.' + size);
};
var lineHeight = function lineHeight(size) {
  return function (props) {
    return fontSizeToLineHeight(fontSize(size)(props));
  };
};
var marginBottom = function marginBottom(size) {
  return function (props) {
    if (_lodash2.default.isUndefined(props.margin)) {
      return fontSizeToMargin(fontSize(size)(props));
    }
    return props.margin;
  };
};

var noWrap = function noWrap(props) {
  return props.noWrap ? (0, _styledComponents.css)(['white-space:nowrap;']) : '';
};

var ellipsis = function ellipsis(props) {
  return props.ellipsis ? (0, _styledComponents.css)(['width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;']) : '';
};

var StyledText = (0, _styledComponents2.default)(ComponentFromTagProp).withConfig({
  displayName: 'styledText__StyledText',
  componentId: 'sc-1d7of2u-0'
})(['display:', ';letter-spacing:', 'px;text-align:', ';color:', ';fill:', ';font-style:', ';text-transform:', ';font-size:', 'px;line-height:', 'px;text-decoration:', ';margin:0;margin-bottom:', 'px;margin-top:', 'px;cursor:', ';transition:color 0.2s ease-out;', ' ', ' ', ';', ';&:focus,&:hover{color:', ';fill:', ';}&:active{color:', ';fill:', ';}&:focus{outline:none;}&:last-child{margin-bottom:0;}', ' ', ' ', ''], (0, _styleUtils.fromProps)('display'), (0, _styleUtils.fromProps)('sizeValues.letterSpacing'), (0, _styleUtils.fromProps)('align'), (0, _styleUtils.propsColorFromTheme)('colors.regular'), (0, _styleUtils.propsColorFromTheme)('colors.regular'), function (props) {
  return props.fontStyle;
}, function (props) {
  return props.textTransform;
}, fontSize('small'), lineHeight('small'), (0, _styleUtils.fromPropsTernary)('underline', 'underline', 'none'), marginBottom('small'), (0, _styleUtils.fromProps)('marginTop.small'), (0, _styleUtils.fromProps)('cursor'), function (props) {
  return (0, _styleUtils.alignItems)(props.alignItems);
}, function (props) {
  return (0, _styleUtils.font)(props.font);
}, ellipsis, noWrap, (0, _styleUtils.propsColorFromTheme)('colors.hover'), (0, _styleUtils.propsColorFromTheme)('colors.hover'), (0, _styleUtils.propsColorFromTheme)('colors.active'), (0, _styleUtils.propsColorFromTheme)('colors.active'), _styleUtils.media.medium(_templateObject, fontSize('medium'), lineHeight('medium'), marginBottom('medium'), (0, _styleUtils.fromProps)('marginTop.medium')), _styleUtils.media.large(_templateObject, fontSize('large'), lineHeight('large'), marginBottom('large'), (0, _styleUtils.fromProps)('marginTop.large')), _styleUtils.media.xlarge(_templateObject, fontSize('xlarge'), lineHeight('xlarge'), marginBottom('xlarge'), (0, _styleUtils.fromProps)('marginTop.xlarge')));

exports.default = StyledText;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var background = function background(props) {
  if (props.error) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.solidColors.red'), (0, _styleUtils.fromInternalTheme)('colors.lightColors.lightRed'));
  }
  return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), (0, _styleUtils.fromInternalTheme)('colors.whites.white'));
};

var StyledSelect = _styledComponents2.default.select.withConfig({
  displayName: 'select__StyledSelect',
  componentId: 'tknnlc-0'
})(['font-size:16px;line-height:20px;&::placeholder{color:', ';}', ';padding:9px 12px 10px 12px;max-height:40px;width:100%;box-shadow:none;color:', ';border-width:1px;border-style:solid;border-radius:', ';background-image:url("data:image/svg+xml,%3Csvg width=\'10\' height=\'5\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10L5.028 5 0 0z\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");background-position:center right 16px;background-size:10px;background-repeat:no-repeat;appearance:none;-webkit-appearance:none;', ' &:focus{border-color:', ';&::placeholder{color:', ';}}'], (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed10'), (0, _styleUtils.font)('regular'), (0, _styleUtils.fromInternalTheme)('colors.blacks.black1'), (0, _styleUtils.fromInternalTheme)('borderRadius'), background, (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'), (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed16'));

function Select(props) {
  var WrapperComponent = props.formRow ? _formRow2.default : 'div';

  var options = props.text ? [{
    key: '__selectTitle__',
    text: props.text
  }].concat(props.options) : props.options;

  return _react2.default.createElement(
    WrapperComponent,
    null,
    _react2.default.createElement(
      StyledSelect,
      _extends({}, props.inputProps, {
        error: !!props.errorMessage || props.error }),
      options.map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: option.value, value: option.value },
          option.text
        );
      })
    ),
    props.errorMessage && _react2.default.createElement(
      _flyout2.default,
      { fontColor: 'whites.white', backgroundColor: 'solidColors.red' },
      props.errorMessage
    )
  );
}

Select.defaultProps = {
  errorMessage: undefined,
  formRow: true
};

exports.default = Select;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectv = __webpack_require__(100);

var _selectv2 = _interopRequireDefault(_selectv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _selectv2.default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

var _colors = __webpack_require__(10);

var _styledFields = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledIcon = (0, _styledComponents2.default)(_icon2.default).withConfig({
  displayName: 'selectv2__StyledIcon',
  componentId: 'eq51at-0'
})(['transform:rotate(-90deg);position:absolute;right:16px;top:24px;opacity:', ';path{fill:', ';}'], function (props) {
  return props.isDisabled ? '0.4' : '1';
}, _colors.getBorderForState);

var StyledSelect = _styledComponents2.default.select.withConfig({
  displayName: 'selectv2__StyledSelect',
  componentId: 'eq51at-1'
})(['appearance:none;width:100%;border:0;line-height:24px;font-size:16px;margin-top:5px;margin-bottom:9px;margin-left:', ';padding-right:36px;background-color:transparent !important;transition:transform 0.2s ease;color:', ';transform:', ';&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:-moz-focusring option:disabled{text-shadow:none;}&::-ms-expand{display:none;}:focus{outline:none;}'], function (props) {
  return props.alignLeft ? '-4px' : '0px';
}, _colors.textColor, function (props) {
  return props.isActive ? 'translateY(11px)' : 'translateY(0)';
});

var Selectv2 = function (_React$Component) {
  _inherits(Selectv2, _React$Component);

  function Selectv2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Selectv2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Selectv2.__proto__ || Object.getPrototypeOf(Selectv2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      isHovered: false
    }, _this.getInitialSelectedIndex = function () {
      var index = _this.props.selectProps.options.findIndex(function (option) {
        return option.value === _this.props.selectProps.value;
      });
      if (index < 0) return 0;
      return index;
    }, _this.setFocus = function (isFocused) {
      _this.setState({ isFocused: isFocused });
    }, _this.setHover = function (isHovered) {
      _this.setState({ isHovered: isHovered });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Selectv2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.selectProps.name) {
        // eslint-disable-next-line
        console.error('<Selectv2>: Missing this.props.selectProps.name, which is needed for accessibility markup.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.selectProps.value;

      var isActive = value && value.length || this.state.isFocused;
      // In FF, the select element has a padding left that can't be changed
      // so we shift the whole element left to align the text
      var isFirefox = typeof window !== 'undefined' && window.navigator.userAgent.includes('Firefox');

      return _react2.default.createElement(
        _styledFields.ElementWrapper,
        null,
        _react2.default.createElement(
          _styledFields.StyledWrapper,
          {
            isFocused: this.state.isFocused,
            isHovered: this.state.isHovered,
            isInvalid: !!this.props.errorMessage,
            isValidated: this.props.isValidated,
            isDisabled: this.props.selectProps.disabled },
          _react2.default.createElement(
            _styledFields.StyledLabel,
            {
              htmlFor: this.props.selectProps.name,
              isActive: isActive },
            this.props.selectProps.label
          ),
          _react2.default.createElement(StyledIcon, {
            type: 'leftArrow',
            isDisabled: this.props.selectProps.disabled,
            isFocused: this.state.isFocused,
            isHovered: this.state.isHovered,
            isInvalid: !!this.props.errorMessage,
            isValidated: this.props.isValidated
          }),
          _react2.default.createElement(
            StyledSelect,
            _extends({}, this.props.selectProps, {
              alignLeft: isFirefox,
              id: this.props.selectProps.name,
              value: this.props.selectProps.value,
              onChange: this.props.selectProps.onChange,
              disabled: this.props.selectProps.disabled,
              onFocus: function onFocus(event) {
                if (_this2.props.selectProps.onFocus) {
                  _this2.props.selectProps.onFocus(event);
                }

                _this2.setFocus(true);
              },
              onBlur: function onBlur(event) {
                if (_this2.props.selectProps.onBlur) {
                  _this2.props.selectProps.onBlur(event);
                }

                return _this2.setFocus(false);
              },
              onMouseEnter: function onMouseEnter() {
                return _this2.setHover(true);
              },
              onMouseLeave: function onMouseLeave() {
                return _this2.setHover(false);
              },
              isActive: isActive }),
            this.props.selectProps.options.map(function (option) {
              return _react2.default.createElement(
                'option',
                _extends({ key: JSON.stringify(option.value) }, option),
                option.label || option.value
              );
            })
          )
        ),
        this.props.errorMessage && _react2.default.createElement(
          _styledFields.ErrorWrapper,
          { size: 'pMin', font: 'bold' },
          this.props.errorMessage
        )
      );
    }
  }]);

  return Selectv2;
}(_react2.default.Component);

exports.default = Selectv2;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _styleUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var background = function background(props) {
  if (props.error) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.solidColors.red'), (0, _styleUtils.fromInternalTheme)('colors.lightColors.lightRed'));
  }
  return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), (0, _styleUtils.fromInternalTheme)('colors.whites.white'));
};

var StyledTextarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'textarea__StyledTextarea',
  componentId: 'sc-9tdtlx-0'
})(['font-size:16px;line-height:20px;&::placeholder{color:', ';}', ';padding:9px 12px 10px 12px;max-width:100%;width:100%;border-width:1px;border-style:solid;border-radius:', ';box-shadow:none;color:', ';', ' appearance:none;-webkit-appearance:none;&:focus{border-color:', ';&::placeholder{color:', ';}}'], (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed10'), (0, _styleUtils.font)('regular'), (0, _styleUtils.fromInternalTheme)('borderRadius'), (0, _styleUtils.fromInternalTheme)('colors.blacks.black1'), background, (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'), (0, _styleUtils.fromInternalTheme)('colors.uncategorized.unnamed16'));

function Textarea(props) {
  var WrapperComponent = props.formRow ? _formRow2.default : 'div';

  return _react2.default.createElement(
    WrapperComponent,
    null,
    _react2.default.createElement(StyledTextarea, _extends({ error: !!props.errorMessage }, props.inputProps)),
    props.errorMessage && _react2.default.createElement(
      _flyout2.default,
      { fontColor: 'whites.white', backgroundColor: 'solidColors.red' },
      props.errorMessage
    )
  );
}

Textarea.defaultProps = {
  errorMessage: undefined,
  formRow: true
};

exports.default = Textarea;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledCheckbox = _styledComponents2.default.input.withConfig({
  displayName: 'checkbox__StyledCheckbox',
  componentId: 'sc-1l2ol5c-0'
})(['display:none;visibility:hidden;float:left;margin-right:16px;']);

var background = function background(props) {
  if (props.error) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.solidColors.red'), (0, _styleUtils.fromInternalTheme)('colors.lightColors.lightRed'));
  }
  if (props.checked) {
    return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'), (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'));
  }
  return (0, _styledComponents.css)(['border-color:', ';background-color:', ';'], (0, _styleUtils.fromInternalTheme)('colors.greys.grey4'), (0, _styleUtils.fromInternalTheme)('colors.whites.white'));
};

var StyledLabel = _styledComponents2.default.label.withConfig({
  displayName: 'checkbox__StyledLabel',
  componentId: 'sc-1l2ol5c-1'
})(['font-size:14px;display:block;margin:0 0 12px 12px;padding-left:16px;min-height:12px;text-align:left;line-height:22px;cursor:pointer;&:after{content:\' \';display:table;clear:both;}&:before{', ' content:\' \';display:table;position:absolute;top:3px;left:0;display:block;width:16px;height:16px;border-style:solid;border-width:1px;border-radius:3px;background-image:url("data:image/svg+xml,%3Csvg width=\'9\' height=\'7\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M2.685 6.772a.717.717 0 0 0 1.037 0l5.06-5.205A.733.733 0 0 0 8.76.522L8.43.213a.765.765 0 0 0-1.06.025L3.213 4.526 1.632 2.89a.763.763 0 0 0-1.063-.028l-.329.309a.73.73 0 0 0-.026 1.045l2.471 2.556z\' fill=\'%23FFF\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");background-position:center center;background-size:', ';background-repeat:no-repeat;content:\'\';transition:transform 0.15s ease-out,background 0.15s ease-out,border-color 0.15s ease-out;}'], background, (0, _styleUtils.fromPropsTernary)('checked', '9px 7px', '0'));

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'checkbox__Wrapper',
  componentId: 'sc-1l2ol5c-2'
})(['position:relative;']);

function Checkbox(props) {
  var WrapperComponent = props.formRow ? _formRow2.default : Wrapper;

  return _react2.default.createElement(
    WrapperComponent,
    null,
    _react2.default.createElement(StyledCheckbox, _extends({}, props.inputProps, {
      type: 'checkbox',
      id: props.inputProps.name
    })),
    _react2.default.createElement(
      StyledLabel,
      {
        htmlFor: props.inputProps.name,
        error: !!props.errorMessage,
        checked: props.inputProps.checked },
      props.label
    ),
    props.errorMessage && _react2.default.createElement(
      _flyout2.default,
      { fontColor: 'whites.white', backgroundColor: 'solidColors.red' },
      props.errorMessage
    )
  );
}

Checkbox.defaultProps = {
  errorMessage: undefined,
  inputProps: {
    name: 'missingName'
  },
  label: 'Missing label',
  formRow: true
};

exports.default = Checkbox;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = __webpack_require__(2);

var _formRow = __webpack_require__(4);

var _formRow2 = _interopRequireDefault(_formRow);

var _flyout = __webpack_require__(5);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledRadio = _styledComponents2.default.input.withConfig({
  displayName: 'radioGroup__StyledRadio',
  componentId: 'sc-1avoelm-0'
})(['display:none;visibility:hidden;float:left;margin-right:16px;']);

var RadioRow = _styledComponents2.default.div.withConfig({
  displayName: 'radioGroup__RadioRow',
  componentId: 'sc-1avoelm-1'
})(['', ';'], (0, _styleUtils.fromPropsTernary)('radioColumned', 'display: inline-block;margin-right: 32px;', 'display: block;\n      margin-bottom: 12px;\n      &:last-child {\n        margin-bottom: 0;\n      }'));

var getBorder = function getBorder(props) {
  var border = (0, _styledComponents.css)(['1px solid ', ''], (0, _styleUtils.fromInternalTheme)('colors.greys.grey3'));
  if (props.error) {
    border = (0, _styledComponents.css)(['1px solid ', ''], (0, _styleUtils.fromInternalTheme)('colors.solidColors.red'));
  } else if (props.checked) {
    border = (0, _styledComponents.css)(['5px solid ', ''], (0, _styleUtils.fromInternalTheme)('colors.solidColors.green'));
  }
  return border;
};

var StyledLabel = _styledComponents2.default.label.withConfig({
  displayName: 'radioGroup__StyledLabel',
  componentId: 'sc-1avoelm-2'
})(['position:relative;padding-left:24px;cursor:', ';display:block;font-size:14px;line-height:22px;&:before{position:absolute;top:2px;left:0;display:', ';width:16px;height:16px;border:', ';border-radius:12px;transition:border-color 0.15s ease-out;content:\'\';}'], function (props) {
  return props.hideCheckbox ? 'default' : 'pointer';
}, function (props) {
  return props.hideCheckbox ? 'none' : 'block';
}, getBorder);

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'radioGroup__Wrapper',
  componentId: 'sc-1avoelm-3'
})(['position:relative;']);

var compareAsString = function compareAsString(val1, val2) {
  return ('' + val1).toLowerCase() === ('' + val2).toLowerCase();
};

function RadioGroup(props) {
  var WrapperComponent = props.formRow ? _formRow2.default : Wrapper;

  return _react2.default.createElement(
    WrapperComponent,
    null,
    props.options.map(function (option) {
      return _react2.default.createElement(
        RadioRow,
        { key: option.value, radioColumned: props.radioColumned },
        _react2.default.createElement(StyledRadio, _extends({}, props.inputProps, {
          value: option.value,
          checked: compareAsString(option.value, props.inputProps.value),
          type: 'radio',
          id: props.inputProps.name + '_' + option.value
        })),
        _react2.default.createElement(
          StyledLabel,
          {
            hideCheckbox: props.hideCheckbox,
            error: !!props.errorMessage,
            checked: compareAsString(option.value, props.inputProps.value),
            htmlFor: props.inputProps.name + '_' + option.value },
          option.text
        )
      );
    }),
    props.errorMessage && _react2.default.createElement(
      _flyout2.default,
      { fontColor: 'whites.white', backgroundColor: 'solidColors.red' },
      props.errorMessage
    )
  );
}

RadioGroup.defaultProps = {
  errorMessage: undefined,
  inputProps: {
    name: 'missingName'
  },
  formRow: true
};

exports.default = RadioGroup;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accordion = __webpack_require__(105);

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _accordion2.default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledAccordion = __webpack_require__(106);

var _box = __webpack_require__(6);

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordion = function Accordion(props) {
  if (!props.items || !props.items.length) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { role: 'tablist' },
    props.items.map(function (item, index) {
      return _react2.default.createElement(
        _styledAccordion.StyledAccordionItem,
        {
          p: { sm: 3, md: 4 },
          mb: 3
          // eslint-disable-next-line
          , key: 'acc-item-' + index
        },
        _react2.default.createElement(
          _box2.default,
          { p: { sm: 2, md: 1 } },
          _react2.default.createElement(
            'div',
            {
              role: 'tab',
              id: 'accordion__title-' + index,
              'aria-controls': 'accordion__body-' + index,
              tabIndex: 0,
              'aria-selected': props.activeIndex === index },
            item.title,
            props.activeIndex !== index && item.titleSupplement && _react2.default.createElement(
              _box2.default,
              { py: 3 },
              item.titleSupplement
            )
          ),
          _react2.default.createElement(
            _styledAccordion.StyledAccordionItemBody,
            {
              pt: 4,
              pb: 3,
              role: 'tabpanel',
              id: 'accordion__body-' + index,
              labelledby: 'accordion__title-' + index,
              'aria-hidden': props.activeIndex === index,
              isShown: props.activeIndex === index },
            item.body
          )
        )
      );
    })
  );
};
exports.default = Accordion;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAccordionItem = exports.StyledAccordionItemBody = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    border-left: 1px solid ', ';\n    border-right: 1px solid ', ';\n  '], ['\n    border-left: 1px solid ', ';\n    border-right: 1px solid ', ';\n  ']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(3);

var _styleUtils = __webpack_require__(2);

var _box = __webpack_require__(6);

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

var StyledAccordionItemBody = exports.StyledAccordionItemBody = (0, _styledComponents2.default)(_box2.default).withConfig({
  displayName: 'styledAccordion__StyledAccordionItemBody',
  componentId: 'sjqmfp-0'
})(['display:', ';opacity:0;animation:', ' ease 400ms;animation-fill-mode:forwards;'], function (props) {
  return props.isShown ? 'block' : 'none';
}, fadeIn);

var StyledAccordionItem = exports.StyledAccordionItem = (0, _styledComponents2.default)(_box2.default).withConfig({
  displayName: 'styledAccordion__StyledAccordionItem',
  componentId: 'sjqmfp-1'
})(['border-top:1px solid ', ';border-bottom:1px solid ', ';', ''], _theme.colors.greys.grey4, _theme.colors.greys.grey4, _styleUtils.media.medium(_templateObject, _theme.colors.greys.grey4, _theme.colors.greys.grey4));

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flex = __webpack_require__(108);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flex2.default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(17);

var _box = __webpack_require__(6);

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_box2.default).withConfig({
  displayName: 'flex__Flex',
  componentId: 'sc-1r0f8c5-0'
})(['display:flex;', ' ', ' ', ' ', ' ', ''], _styledSystem.flexWrap, _styledSystem.flexDirection, _styledSystem.alignItems, _styledSystem.justifyContent, _styledSystem.alignSelf);

Flex.propTypes = _extends({}, _styledSystem.flexWrap.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.alignSelf.propTypes);

Flex.displayName = 'Flex';

exports.default = Flex;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledNormalize = __webpack_require__(110);

var _styledNormalize2 = _interopRequireDefault(_styledNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BASE_URL = 'https://dtpuu5koy2g08.cloudfront.net/fonts/sailec';

var getBaseUrl = function getBaseUrl(theme) {
  if (theme.fontBase) {
    return theme.fontBase;
  }

  return DEFAULT_BASE_URL;
};

exports.default = function (_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme;
  return (0, _styledComponents.css)(['', ';@font-face{font-family:\'Sailec Regular\';src:url(\'', '/SailecRegular.eot?#iefix\');src:url(\'', '/SailecRegular.eot?#iefix\') format(\'eot\'),url(\'', '/SailecRegular.woff\') format(\'woff\'),url(\'', '/SailecRegular.ttf\') format(\'truetype\'),url(\'', '/SailecRegular.svg#48d599a6-92b5-4d43-a4ac-8959f6971853\') format(\'svg\');}@font-face{font-family:\'Sailec Bold\';src:url(\'', '/SailecBold.eot?#iefix\');src:url(\'', '/SailecBold.eot?#iefix\') format(\'eot\'),url(\'', '/SailecBold.woff\') format(\'woff\'),url(\'', '/SailecBold.ttf\') format(\'truetype\'),url(\'', '/SailecBold.svg#25e09910-ffc3-4fc4-b0d1-db9a95dface8\') format(\'svg\');}@font-face{font-family:\'Sailec Light\';src:url(\'', '/sailec-light.eot?#iefix\');src:url(\'', '/sailec-light.eot?#iefix\') format(\'eot\'),url(\'', '/sailec-light.woff\') format(\'woff\'),url(\'', '/sailec-light.ttf\') format(\'truetype\'),url(\'', '/sailec-light.svg#48d599a6-92b5-4d43-a4ac-8959f6971853\') format(\'svg\');}body{font-family:\'Sailec Regular\',sans-serif;}*,*:before,*:after{box-sizing:border-box;text-decoration:none;}'], _styledNormalize2.default, getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme), getBaseUrl(theme));
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Normalize = exports.normalize = exports.version = void 0;

var _styledComponents = __webpack_require__(1);

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @deprecated
 */
var version = '8.0.2';
exports.version = version;
var normalize = (0, _styledComponents.css)(["html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"]);
exports.normalize = normalize;
var Normalize = _styledComponents.createGlobalStyle ? (0, _styledComponents.createGlobalStyle)(_templateObject(), normalize) : function () {
  return null;
};
exports.Normalize = Normalize;
var _default = normalize;
exports.default = _default;

/***/ })
/******/ ]);
});