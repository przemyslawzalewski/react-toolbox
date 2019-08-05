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
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var ActivableRendererFactory = function ActivableRendererFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    delay: 500
  };
  return function (ActivableComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(ActivableRenderer, _PureComponent);

      function ActivableRenderer() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, ActivableRenderer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivableRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          active: _this.props.active,
          rendered: _this.props.active
        });

        return _this;
      }

      _createClass(ActivableRenderer, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.active && !this.props.active) this.renderAndActivate();
          if (!nextProps.active && this.props.active) this.deactivateAndUnrender();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this.activateTimeout);
          clearTimeout(this.unrenderTimeout);
        }
      }, {
        key: "renderAndActivate",
        value: function renderAndActivate() {
          var _this2 = this;

          if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
          this.setState({
            rendered: true,
            active: false
          }, function () {
            _this2.activateTimeout = setTimeout(function () {
              return _this2.setState({
                active: true
              });
            }, 20);
          });
        }
      }, {
        key: "deactivateAndUnrender",
        value: function deactivateAndUnrender() {
          var _this3 = this;

          this.setState({
            rendered: true,
            active: false
          }, function () {
            _this3.unrenderTimeout = setTimeout(function () {
              _this3.setState({
                rendered: false
              });

              _this3.unrenderTimeout = null;
            }, _this3.props.delay);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              delay = _this$props.delay,
              others = _objectWithoutProperties(_this$props, ["delay"]); // eslint-disable-line no-unused-vars


          var _this$state = this.state,
              active = _this$state.active,
              rendered = _this$state.rendered;
          return rendered ? _react.default.createElement(ActivableComponent, _extends({}, others, {
            active: active
          })) : null;
        }
      }]);

      return ActivableRenderer;
    }(_react.PureComponent), _defineProperty(_class, "propTypes", {
      active: _propTypes.default.bool.isRequired,
      children: _propTypes.default.node,
      delay: _propTypes.default.number
    }), _defineProperty(_class, "defaultProps", {
      delay: options.delay
    }), _temp;
  };
};

var _default = ActivableRendererFactory;
exports.default = _default;