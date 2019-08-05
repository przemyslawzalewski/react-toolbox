"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Navigation = require("./Navigation");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedNavigation = (0, _reactCssThemr.themr)(_identifiers.NAVIGATION, _theme.default)((0, _Navigation.navigationFactory)());
exports.Navigation = ThemedNavigation;
var _default = ThemedNavigation;
exports.default = _default;