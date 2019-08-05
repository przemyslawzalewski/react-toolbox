"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Dialog = require("./Dialog");

var _overlay = require("../overlay");

var _button = require("../button");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = (0, _Dialog.dialogFactory)(_overlay.Overlay, _button.Button);
var ThemedDialog = (0, _reactCssThemr.themr)(_identifiers.DIALOG, _theme.default)(Dialog);
exports.Dialog = ThemedDialog;
var _default = ThemedDialog;
exports.default = _default;