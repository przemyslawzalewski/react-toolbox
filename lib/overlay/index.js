"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Overlay = require("./Overlay");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedOverlay = (0, _reactCssThemr.themr)(_identifiers.OVERLAY, _theme.default)(_Overlay.Overlay);
exports.Overlay = ThemedOverlay;
var _default = ThemedOverlay;
exports.default = _default;