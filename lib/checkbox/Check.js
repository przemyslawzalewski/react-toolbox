"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ripple) {
  var Check = function Check(_ref) {
    var checked = _ref.checked,
        children = _ref.children,
        onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        style = _ref.style;
    return _react.default.createElement("div", {
      "data-react-toolbox": "check",
      className: (0, _classnames2.default)(theme.check, _defineProperty({}, theme.checked, checked)),
      onMouseDown: onMouseDown,
      style: style
    }, children);
  };

  Check.propTypes = {
    checked: _propTypes.default.bool,
    children: _propTypes.default.node,
    onMouseDown: _propTypes.default.func,
    style: _reactStyleProptype.default,
    theme: _propTypes.default.shape({
      check: _propTypes.default.string,
      checked: _propTypes.default.string
    })
  };
  return ripple(Check);
};

var _default = factory;
exports.default = _default;