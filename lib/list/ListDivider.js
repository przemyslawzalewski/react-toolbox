"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDivider = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListDivider = function ListDivider(_ref) {
  var inset = _ref.inset,
      theme = _ref.theme;
  return _react.default.createElement("hr", {
    className: inset ? "".concat(theme.divider, " ").concat(theme.inset) : theme.divider
  });
};

exports.ListDivider = ListDivider;
ListDivider.propTypes = {
  inset: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    divider: _propTypes.default.string,
    inset: _propTypes.default.string
  })
};
ListDivider.defaultProps = {
  inset: false
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListDivider);

exports.default = _default;