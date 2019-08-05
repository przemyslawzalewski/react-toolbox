"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Input = require("./Input");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _Input.inputFactory)();
var ThemedInput = (0, _reactCssThemr.themr)(_identifiers.INPUT, _theme.default, {
  withRef: true
})(Input);
exports.Input = ThemedInput;
var _default = ThemedInput;
exports.default = _default;