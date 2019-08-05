"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var factory = function factory(ripple) {
  var Radio = function Radio(_ref) {
    var checked = _ref.checked,
        onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        other = _objectWithoutProperties(_ref, ["checked", "onMouseDown", "theme"]);

    return _react.default.createElement("div", _extends({
      "data-react-toolbox": "radio",
      className: theme[checked ? 'radioChecked' : 'radio'],
      onMouseDown: onMouseDown
    }, other));
  };

  Radio.propTypes = {
    checked: _propTypes.default.bool,
    children: _propTypes.default.node,
    onMouseDown: _propTypes.default.func,
    theme: _propTypes.default.shape({
      radio: _propTypes.default.string,
      radioChecked: _propTypes.default.string,
      ripple: _propTypes.default.string
    })
  };
  return ripple(Radio);
};

var _default = factory;
exports.default = _default;