"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItemText = function ListItemText(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      children = _ref.children,
      theme = _ref.theme,
      other = _objectWithoutProperties(_ref, ["className", "primary", "children", "theme"]);

  var _className = (0, _classnames2.default)(theme.itemText, _defineProperty({}, theme.primary, primary), className);

  return _react.default.createElement("span", _extends({
    "data-react-toolbox": "list-item-text",
    className: _className
  }, other), children);
};

exports.ListItemText = ListItemText;
ListItemText.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  primary: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    itemText: _propTypes.default.string,
    primary: _propTypes.default.string
  })
};
ListItemText.defaultProps = {
  primary: false
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemText);

exports.default = _default;