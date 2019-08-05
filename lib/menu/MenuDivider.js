"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDivider = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuDivider = function MenuDivider(_ref) {
  var theme = _ref.theme;
  return _react.default.createElement("hr", {
    "data-react-toolbox": "menu-divider",
    className: theme.menuDivider
  });
};

exports.MenuDivider = MenuDivider;
MenuDivider.propTypes = {
  theme: _propTypes.default.shape({
    menuDivider: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(MenuDivider);

exports.default = _default;