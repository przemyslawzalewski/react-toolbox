"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

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
exports.Overlay = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

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

var Overlay =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleEscKey", function (e) {
      if (_this.props.active && _this.props.onEscKeyDown && e.which === 27) {
        _this.props.onEscKeyDown(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          active = _this$props.active,
          lockScroll = _this$props.lockScroll,
          onEscKeyDown = _this$props.onEscKeyDown;
      if (onEscKeyDown) document.body.addEventListener('keydown', this.handleEscKey);
      if (active && lockScroll) document.body.style.overflow = 'hidden';
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (this.props.lockScroll) {
        var becomingActive = nextProps.active && !this.props.active;
        var becomingUnactive = !nextProps.active && this.props.active;

        if (becomingActive) {
          document.body.style.overflow = 'hidden';
        }

        if (becomingUnactive && !document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
          document.body.style.overflow = '';
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.onEscKeyDown) {
        if (this.props.active && !prevProps.active) {
          document.body.addEventListener('keydown', this.handleEscKey);
        } else if (!this.props.active && prevProps.active) {
          document.body.removeEventListener('keydown', this.handleEscKey);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.active && this.props.lockScroll) {
        if (!document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
          document.body.style.overflow = '';
        }
      }

      if (this.props.onEscKeyDown) {
        document.body.removeEventListener('keydown', this.handleEscKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          className = _this$props2.className,
          lockScroll = _this$props2.lockScroll,
          theme = _this$props2.theme,
          onEscKeyDown = _this$props2.onEscKeyDown,
          other = _objectWithoutProperties(_this$props2, ["active", "className", "lockScroll", "theme", "onEscKeyDown"]); // eslint-disable-line


      return _react.default.createElement("div", _extends({}, other, {
        onClick: this.handleClick,
        className: (0, _classnames2.default)(theme.overlay, _defineProperty({}, theme.active, active), className)
      }));
    }
  }]);

  return Overlay;
}(_react.PureComponent);

exports.Overlay = Overlay;

_defineProperty(Overlay, "propTypes", {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  lockScroll: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onEscKeyDown: _propTypes.default.func,
  theme: _propTypes.default.shape({
    active: _propTypes.default.string,
    backdrop: _propTypes.default.string,
    overlay: _propTypes.default.string
  })
});

_defineProperty(Overlay, "defaultProps", {
  lockScroll: true
});

var _default = (0, _reactCssThemr.themr)(_identifiers.OVERLAY)(Overlay);

exports.default = _default;