"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ProgressBar = require("./ProgressBar");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedProgressBar = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR, _theme.default)(_ProgressBar.ProgressBar);
exports.ProgressBar = ThemedProgressBar;
var _default = ThemedProgressBar;
exports.default = _default;