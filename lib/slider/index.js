"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _progress_bar = require("../progress_bar");

var _input = require("../input");

var _Slider = require("./Slider");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedSlider = (0, _reactCssThemr.themr)(_identifiers.SLIDER, _theme.default)((0, _Slider.sliderFactory)(_progress_bar.ProgressBar, _input.Input));
exports.Slider = ThemedSlider;
var _default = ThemedSlider;
exports.default = _default;