"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.fixed");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.inputFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var factory = function factory() {
  var Input =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Input, _React$PureComponent);

    function Input() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Input);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            multiline = _this$props.multiline,
            maxLength = _this$props.maxLength;
        var valueFromEvent = event.target.value; // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.

        var haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        var value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent; // propagate to to store and therefore to the input

        if (onChange) onChange(value, event);
      });

      _defineProperty(_assertThisInitialized(_this), "handleAutoresize", function () {
        var element = _this.inputNode;
        var rows = _this.props.rows;

        if (typeof rows === 'number' && !isNaN(rows)) {
          element.style.height = null;
        } else {
          // compute the height difference between inner height and outer height
          var style = getComputedStyle(element, null);
          var heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth); // resize the input to its content size

          element.style.height = 'auto';
          element.style.height = "".concat(element.scrollHeight + heightOffset, "px");
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        var _this$props2 = _this.props,
            multiline = _this$props2.multiline,
            maxLength = _this$props2.maxLength,
            onKeyPress = _this$props2.onKeyPress;

        if (multiline && maxLength) {
          // check if smt is selected, in which case the newly added charcter would
          // replace the selected characters, so the length of value doesn't actually
          // increase.
          var isReplacing = event.target.selectionEnd - event.target.selectionStart;
          var value = event.target.value;

          if (!isReplacing && value.length === maxLength) {
            event.preventDefault();
            event.stopPropagation();
            return undefined;
          }
        }

        if (onKeyPress) onKeyPress(event);
        return undefined;
      });

      _defineProperty(_assertThisInitialized(_this), "valuePresent", function (value) {
        return value !== null && value !== undefined && value !== '' && !(typeof value === 'number' && isNaN(value));
      });

      return _this;
    }

    _createClass(Input, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
          this.handleAutoresize();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiline && nextProps.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
        } else if (this.props.multiline && !nextProps.multiline) {
          window.removeEventListener('resize', this.handleAutoresize);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        // resize the textarea, if nessesary
        if (this.props.multiline) this.handleAutoresize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.multiline) window.removeEventListener('resize', this.handleAutoresize);
      }
    }, {
      key: "blur",
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: "focus",
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames2,
            _this2 = this;

        var _this$props3 = this.props,
            children = _this$props3.children,
            defaultValue = _this$props3.defaultValue,
            disabled = _this$props3.disabled,
            error = _this$props3.error,
            floating = _this$props3.floating,
            hint = _this$props3.hint,
            icon = _this$props3.icon,
            name = _this$props3.name,
            labelText = _this$props3.label,
            maxLength = _this$props3.maxLength,
            multiline = _this$props3.multiline,
            required = _this$props3.required,
            role = _this$props3.role,
            theme = _this$props3.theme,
            type = _this$props3.type,
            value = _this$props3.value,
            onKeyPress = _this$props3.onKeyPress,
            _this$props3$rows = _this$props3.rows,
            rows = _this$props3$rows === void 0 ? 1 : _this$props3$rows,
            others = _objectWithoutProperties(_this$props3, ["children", "defaultValue", "disabled", "error", "floating", "hint", "icon", "name", "label", "maxLength", "multiline", "required", "role", "theme", "type", "value", "onKeyPress", "rows"]);

        var length = maxLength && value ? value.length : 0;
        var labelClassName = (0, _classnames4.default)(theme.label, _defineProperty({}, theme.fixed, !floating));
        var className = (0, _classnames4.default)(theme.input, (_classnames2 = {}, _defineProperty(_classnames2, theme.disabled, disabled), _defineProperty(_classnames2, theme.errored, error), _defineProperty(_classnames2, theme.hidden, type === 'hidden'), _defineProperty(_classnames2, theme.withIcon, icon), _classnames2), this.props.className);
        var valuePresent = this.valuePresent(value) || this.valuePresent(defaultValue);

        var inputElementProps = _objectSpread({}, others, {
          className: (0, _classnames4.default)(theme.inputElement, _defineProperty({}, theme.filled, valuePresent)),
          onChange: this.handleChange,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          role: role,
          name: name,
          defaultValue: defaultValue,
          disabled: disabled,
          required: required,
          type: type,
          value: value
        });

        if (!multiline) {
          inputElementProps.maxLength = maxLength;
          inputElementProps.onKeyPress = onKeyPress;
        } else {
          inputElementProps.rows = rows;
          inputElementProps.onKeyPress = this.handleKeyPress;
        }

        return _react.default.createElement("div", {
          "data-react-toolbox": "input",
          className: className
        }, _react.default.createElement(multiline ? 'textarea' : 'input', inputElementProps), _react.default.createElement("span", {
          className: theme.bar
        }), labelText ? _react.default.createElement("label", {
          className: labelClassName
        }, labelText, required ? _react.default.createElement("span", {
          className: theme.required
        }, " * ") : null) : null, hint ? _react.default.createElement("span", {
          hidden: labelText,
          className: theme.hint
        }, hint) : null, error ? _react.default.createElement("span", {
          className: theme.error
        }, error) : null, maxLength ? _react.default.createElement("span", {
          className: theme.counter
        }, length, "/", maxLength) : null, children);
      }
    }]);

    return Input;
  }(_react.default.PureComponent);

  _defineProperty(Input, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    defaultValue: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    floating: _propTypes.default.bool,
    hint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    maxLength: _propTypes.default.number,
    multiline: _propTypes.default.bool,
    name: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    onKeyPress: _propTypes.default.func,
    required: _propTypes.default.bool,
    role: _propTypes.default.string,
    rows: _propTypes.default.number,
    theme: _propTypes.default.shape({
      bar: _propTypes.default.string,
      counter: _propTypes.default.string,
      disabled: _propTypes.default.string,
      error: _propTypes.default.string,
      errored: _propTypes.default.string,
      hidden: _propTypes.default.string,
      hint: _propTypes.default.string,
      icon: _propTypes.default.string,
      input: _propTypes.default.string,
      inputElement: _propTypes.default.string,
      required: _propTypes.default.string,
      withIcon: _propTypes.default.string
    }),
    type: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object, _propTypes.default.string])
  });

  _defineProperty(Input, "defaultProps", {
    className: '',
    hint: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    type: 'text'
  });

  return Input;
};

exports.inputFactory = factory;
var Input = factory();
exports.Input = Input;

var _default = (0, _reactCssThemr.themr)(_identifiers.INPUT)(Input);

exports.default = _default;