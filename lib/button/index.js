"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.IconButton = exports.Button = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Button = require("./Button");

var _BrowseButton = require("./BrowseButton");

var _IconButton = require("./IconButton");

var _ripple = _interopRequireDefault(require("../ripple"));

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _Button.buttonFactory)((0, _ripple.default)({
  centered: false
}));
var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple.default)({
  centered: true
}));
var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple.default)({
  centered: false
}));
var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme.default)(Button);
exports.Button = ThemedButton;
var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme.default)(IconButton);
exports.IconButton = ThemedIconButton;
var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme.default)(BrowseButton);
exports.BrowseButton = ThemedBrowseButton;
var _default = ThemedButton;
exports.default = _default;