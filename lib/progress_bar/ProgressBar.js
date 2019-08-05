"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _prefixer = _interopRequireDefault(require("../utils/prefixer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "calculateRatio",
    value: function calculateRatio(value) {
      if (value < this.props.min) return 0;
      if (value > this.props.max) return 1;
      return (value - this.props.min) / (this.props.max - this.props.min);
    }
  }, {
    key: "circularStyle",
    value: function circularStyle() {
      return this.props.mode !== 'indeterminate' ? {
        strokeDasharray: "".concat(2 * Math.PI * 25 * this.calculateRatio(this.props.value), ", 400")
      } : undefined;
    }
  }, {
    key: "linearStyle",
    value: function linearStyle() {
      if (this.props.mode !== 'indeterminate') {
        return {
          buffer: (0, _prefixer.default)({
            transform: "scaleX(".concat(this.calculateRatio(this.props.buffer), ")")
          }),
          value: (0, _prefixer.default)({
            transform: "scaleX(".concat(this.calculateRatio(this.props.value), ")")
          })
        };
      }

      return {};
    }
  }, {
    key: "renderCircular",
    value: function renderCircular() {
      return _react.default.createElement("svg", {
        className: this.props.theme.circle,
        viewBox: "0 0 60 60"
      }, _react.default.createElement("circle", {
        className: this.props.theme.path,
        style: this.circularStyle(),
        cx: "30",
        cy: "30",
        r: "25"
      }));
    }
  }, {
    key: "renderLinear",
    value: function renderLinear() {
      var _this$linearStyle = this.linearStyle(),
          buffer = _this$linearStyle.buffer,
          value = _this$linearStyle.value;

      return _react.default.createElement("div", null, _react.default.createElement("span", {
        "data-ref": "buffer",
        className: this.props.theme.buffer,
        style: buffer
      }), _react.default.createElement("span", {
        "data-ref": "value",
        className: this.props.theme.value,
        style: value
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          max = _this$props.max,
          min = _this$props.min,
          mode = _this$props.mode,
          multicolor = _this$props.multicolor,
          type = _this$props.type,
          theme = _this$props.theme,
          value = _this$props.value;

      var _className = (0, _classnames2.default)(theme[type], (_classnames = {}, _defineProperty(_classnames, theme.indeterminate, mode === 'indeterminate'), _defineProperty(_classnames, theme.multicolor, multicolor), _classnames), className);

      return _react.default.createElement("div", {
        disabled: disabled,
        "data-react-toolbox": "progress-bar",
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        className: _className
      }, type === 'circular' ? this.renderCircular() : this.renderLinear());
    }
  }]);

  return ProgressBar;
}(_react.PureComponent);

exports.ProgressBar = ProgressBar;

_defineProperty(ProgressBar, "propTypes", {
  buffer: _propTypes.default.number,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  mode: _propTypes.default.oneOf(['determinate', 'indeterminate']),
  multicolor: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    buffer: _propTypes.default.string,
    circle: _propTypes.default.string,
    circular: _propTypes.default.string,
    indeterminate: _propTypes.default.string,
    linear: _propTypes.default.string,
    multicolor: _propTypes.default.string,
    path: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  type: _propTypes.default.oneOf(['linear', 'circular']),
  value: _propTypes.default.number
});

_defineProperty(ProgressBar, "defaultProps", {
  buffer: 0,
  className: '',
  max: 100,
  min: 0,
  mode: 'indeterminate',
  multicolor: false,
  type: 'linear',
  value: 0
});

var _default = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR)(ProgressBar);

exports.default = _default;