"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ripple = _interopRequireDefault(require("../ripple"));

var _Checkbox = require("./Checkbox");

var _Check = _interopRequireDefault(require("./Check"));

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedCheck = (0, _Check.default)((0, _ripple.default)({
  centered: true,
  spread: 2.6
}));
var ThemedCheckbox = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX, _theme.default)((0, _Checkbox.checkboxFactory)(ThemedCheck));
exports.Checkbox = ThemedCheckbox;
var _default = ThemedCheckbox;
exports.default = _default;