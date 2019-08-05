"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.unscopables.flat");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var factory = function factory(ripple) {
  var Button =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "getLevel", function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      });

      _defineProperty(_assertThisInitialized(_this), "getShape", function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (event) {
        _this.buttonNode.blur();

        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
        _this.buttonNode.blur();

        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      });

      return _this;
    }

    _createClass(Button, [{
      key: "render",
      value: function render() {
        var _classnames,
            _this2 = this;

        var _this$props = this.props,
            accent = _this$props.accent,
            children = _this$props.children,
            className = _this$props.className,
            flat = _this$props.flat,
            floating = _this$props.floating,
            href = _this$props.href,
            icon = _this$props.icon,
            inverse = _this$props.inverse,
            label = _this$props.label,
            mini = _this$props.mini,
            neutral = _this$props.neutral,
            primary = _this$props.primary,
            raised = _this$props.raised,
            _this$props$tagName = _this$props.tagName,
            tagName = _this$props$tagName === void 0 ? 'button' : _this$props$tagName,
            theme = _this$props.theme,
            buttonType = _this$props.type,
            others = _objectWithoutProperties(_this$props, ["accent", "children", "className", "flat", "floating", "href", "icon", "inverse", "label", "mini", "neutral", "primary", "raised", "tagName", "theme", "type"]);

        var element = href ? 'a' : tagName;
        var level = this.getLevel();
        var shape = this.getShape();
        var mouseEvents = {
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave
        };
        var classes = (0, _classnames2.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
        var type = href ? undefined : buttonType;

        var props = _objectSpread({}, others, {}, mouseEvents, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          type: type,
          'data-react-toolbox': 'button'
        });

        var buttonElement = _react.default.createElement(element, props, icon, label, children);

        return others.onMouseEnter && this.props.disabled ? _react.default.createElement("span", mouseEvents, buttonElement) : buttonElement;
      }
    }]);

    return Button;
  }(_react.PureComponent);

  _defineProperty(Button, "propTypes", {
    accent: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    flat: _propTypes.default.bool,
    floating: _propTypes.default.bool,
    href: _propTypes.default.string,
    icon: _propTypes.default.element,
    inverse: _propTypes.default.bool,
    label: _propTypes.default.string,
    mini: _propTypes.default.bool,
    neutral: _propTypes.default.bool,
    onMouseLeave: _propTypes.default.func,
    onMouseUp: _propTypes.default.func,
    primary: _propTypes.default.bool,
    raised: _propTypes.default.bool,
    tagName: _propTypes.default.any,
    theme: _propTypes.default.shape({
      accent: _propTypes.default.string,
      button: _propTypes.default.string,
      flat: _propTypes.default.string,
      floating: _propTypes.default.string,
      icon: _propTypes.default.string,
      inverse: _propTypes.default.string,
      mini: _propTypes.default.string,
      neutral: _propTypes.default.string,
      primary: _propTypes.default.string,
      raised: _propTypes.default.string,
      rippleWrapper: _propTypes.default.string,
      toggle: _propTypes.default.string
    }),
    type: _propTypes.default.string
  });

  _defineProperty(Button, "defaultProps", {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false,
    type: 'button'
  });

  return ripple(Button);
};

exports.buttonFactory = factory;
var Button = factory((0, _Ripple.default)({
  centered: false
}));
exports.Button = Button;

var _default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);

exports.default = _default;