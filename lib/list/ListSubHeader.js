"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSubHeader = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSubHeader = function ListSubHeader(_ref) {
  var caption = _ref.caption,
      className = _ref.className,
      theme = _ref.theme;
  return _react.default.createElement("h5", {
    className: (0, _classnames.default)(theme.subheader, className)
  }, caption);
};

exports.ListSubHeader = ListSubHeader;
ListSubHeader.propTypes = {
  caption: _propTypes.default.string,
  className: _propTypes.default.string,
  theme: _propTypes.default.object // eslint-disable-line

};
ListSubHeader.defaultProps = {
  className: ''
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListSubHeader);

exports.default = _default;