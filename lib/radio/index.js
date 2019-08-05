"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.RadioButton = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ripple = _interopRequireDefault(require("../ripple"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _RadioButton = require("./RadioButton");

var _RadioGroup = require("./RadioGroup");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedRadio = (0, _Radio.default)((0, _ripple.default)({
  centered: true,
  spread: 2.6
}));
var ThemedRadioButton = (0, _reactCssThemr.themr)(_identifiers.RADIO, _theme.default)((0, _RadioButton.radioButtonFactory)(ThemedRadio));
exports.RadioButton = ThemedRadioButton;
var ThemedRadioGroup = (0, _reactCssThemr.themr)(_identifiers.RADIO, _theme.default)((0, _RadioGroup.radioGroupFactory)(ThemedRadioButton));
exports.RadioGroup = ThemedRadioGroup;
var _default = ThemedRadioButton;
exports.default = _default;