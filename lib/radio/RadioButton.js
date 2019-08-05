"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = exports.radioButtonFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(Radio) {
  var RadioButton =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(RadioButton, _PureComponent);

    function RadioButton() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RadioButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
        var _this$props = _this.props,
            checked = _this$props.checked,
            disabled = _this$props.disabled,
            onChange = _this$props.onChange;
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();
        if (!disabled && !checked && onChange) onChange(event, _assertThisInitialized(_this));
      });

      return _this;
    }

    _createClass(RadioButton, [{
      key: "blur",
      value: function blur() {
        if (this.inputNode) {
          this.inputNode.blur();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        if (this.inputNode) {
          this.inputNode.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            checked = _this$props2.checked,
            children = _this$props2.children,
            className = _this$props2.className,
            disabled = _this$props2.disabled,
            label = _this$props2.label,
            name = _this$props2.name,
            onChange = _this$props2.onChange,
            onMouseEnter = _this$props2.onMouseEnter,
            onMouseLeave = _this$props2.onMouseLeave,
            theme = _this$props2.theme,
            others = _objectWithoutProperties(_this$props2, ["checked", "children", "className", "disabled", "label", "name", "onChange", "onMouseEnter", "onMouseLeave", "theme"]);

        var _className = (0, _classnames.default)(theme[this.props.disabled ? 'disabled' : 'field'], className);

        return _react.default.createElement("label", {
          "data-react-toolbox": "radio-button",
          className: _className,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, _react.default.createElement("input", _extends({}, others, {
          checked: checked,
          className: theme.input,
          disabled: disabled,
          name: name,
          onChange: function onChange() {},
          onClick: this.handleClick,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          type: "radio"
        })), _react.default.createElement(Radio, {
          checked: checked,
          disabled: disabled,
          theme: theme
        }), label ? _react.default.createElement("span", {
          className: theme.text
        }, label) : null, children);
      }
    }]);

    return RadioButton;
  }(_react.PureComponent);

  _defineProperty(RadioButton, "propTypes", {
    checked: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    name: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    onMouseEnter: _propTypes.default.func,
    onMouseLeave: _propTypes.default.func,
    theme: _propTypes.default.shape({
      disabled: _propTypes.default.string,
      field: _propTypes.default.string,
      input: _propTypes.default.string,
      text: _propTypes.default.string
    }),
    value: _propTypes.default.any
  });

  _defineProperty(RadioButton, "defaultProps", {
    checked: false,
    className: '',
    disabled: false
  });

  return RadioButton;
};

exports.radioButtonFactory = factory;
var Radio = (0, _Radio.default)((0, _Ripple.default)({
  centered: true,
  spread: 2.6
}));
var RadioButton = factory(Radio);
exports.RadioButton = RadioButton;

var _default = (0, _reactCssThemr.themr)(_identifiers.RADIO)(RadioButton);

exports.default = _default;