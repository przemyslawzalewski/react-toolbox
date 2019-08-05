"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

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
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var _utils = require("../utils/utils");

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var POSITION = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical'
};
var defaults = {
  className: '',
  delay: 0,
  hideOnClick: true,
  passthrough: true,
  showOnClick: false,
  position: POSITION.VERTICAL,
  theme: {}
};

var tooltipFactory = function tooltipFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _objectSpread({}, defaults, {}, options),
      defaultClassName = _defaults$options.className,
      defaultDelay = _defaults$options.delay,
      defaultHideOnClick = _defaults$options.hideOnClick,
      defaultShowOnClick = _defaults$options.showOnClick,
      defaultPassthrough = _defaults$options.passthrough,
      defaultPosition = _defaults$options.position,
      defaultTheme = _defaults$options.theme;

  return function (ComposedComponent) {
    var TooltippedComponent =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(TooltippedComponent, _PureComponent);

      function TooltippedComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, TooltippedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TooltippedComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          active: false,
          position: _this.props.tooltipPosition,
          visible: false
        });

        _defineProperty(_assertThisInitialized(_this), "onTransformEnd", function (e) {
          if (e.propertyName === 'transform') {
            _events.default.removeEventListenerOnTransitionEnded(_this.tooltipNode, _this.onTransformEnd);

            _this.setState({
              visible: false
            });
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (event) {
          _this.activate(_this.calculatePosition(event.currentTarget));

          if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
        });

        _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
          _this.deactivate();

          if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
        });

        _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
          if (_this.props.tooltipHideOnClick && _this.state.active) {
            _this.deactivate();
          }

          if (_this.props.tooltipShowOnClick && !_this.state.active) {
            _this.activate(_this.calculatePosition(event.currentTarget));
          }

          if (_this.props.onClick) _this.props.onClick(event);
        });

        return _this;
      }

      _createClass(TooltippedComponent, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.tooltipNode) {
            _events.default.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          }

          if (this.timeout) clearTimeout(this.timeout);
        }
      }, {
        key: "getPosition",
        value: function getPosition(element) {
          var tooltipPosition = this.props.tooltipPosition;

          if (tooltipPosition === POSITION.HORIZONTAL) {
            var origin = element.getBoundingClientRect();

            var _getViewport = (0, _utils.getViewport)(),
                ww = _getViewport.width;

            var toRight = origin.left < ww / 2 - origin.width / 2;
            return toRight ? POSITION.RIGHT : POSITION.LEFT;
          } else if (tooltipPosition === POSITION.VERTICAL) {
            var _origin = element.getBoundingClientRect();

            var _getViewport2 = (0, _utils.getViewport)(),
                wh = _getViewport2.height;

            var toBottom = _origin.top < wh / 2 - _origin.height / 2;
            return toBottom ? POSITION.BOTTOM : POSITION.TOP;
          }

          return tooltipPosition;
        }
      }, {
        key: "activate",
        value: function activate(_ref) {
          var _this2 = this;

          var top = _ref.top,
              left = _ref.left,
              position = _ref.position;
          if (this.timeout) clearTimeout(this.timeout);
          this.setState({
            visible: true,
            position: position
          });
          this.timeout = setTimeout(function () {
            _this2.setState({
              active: true,
              top: top,
              left: left
            });
          }, this.props.tooltipDelay);
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          if (this.timeout) clearTimeout(this.timeout);

          if (this.state.active) {
            _events.default.addEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);

            this.setState({
              active: false
            });
          } else if (this.state.visible) {
            this.setState({
              visible: false
            });
          }
        }
      }, {
        key: "calculatePosition",
        value: function calculatePosition(element) {
          var position = this.getPosition(element);

          var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              left = _element$getBoundingC.left,
              height = _element$getBoundingC.height,
              width = _element$getBoundingC.width;

          var xOffset = window.scrollX || window.pageXOffset;
          var yOffset = window.scrollY || window.pageYOffset;

          if (position === POSITION.BOTTOM) {
            return {
              top: top + height + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.TOP) {
            return {
              top: top + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.LEFT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + xOffset,
              position: position
            };
          } else if (position === POSITION.RIGHT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + width + xOffset,
              position: position
            };
          }

          return undefined;
        }
      }, {
        key: "render",
        value: function render() {
          var _classnames,
              _this3 = this;

          var _this$state = this.state,
              active = _this$state.active,
              left = _this$state.left,
              top = _this$state.top,
              position = _this$state.position,
              visible = _this$state.visible;
          var positionClass = "tooltip".concat(position.charAt(0).toUpperCase() + position.slice(1));

          var _this$props = this.props,
              children = _this$props.children,
              className = _this$props.className,
              theme = _this$props.theme,
              onClick = _this$props.onClick,
              onMouseEnter = _this$props.onMouseEnter,
              onMouseLeave = _this$props.onMouseLeave,
              tooltip = _this$props.tooltip,
              tooltipDelay = _this$props.tooltipDelay,
              tooltipHideOnClick = _this$props.tooltipHideOnClick,
              tooltipPosition = _this$props.tooltipPosition,
              tooltipShowOnClick = _this$props.tooltipShowOnClick,
              other = _objectWithoutProperties(_this$props, ["children", "className", "theme", "onClick", "onMouseEnter", "onMouseLeave", "tooltip", "tooltipDelay", "tooltipHideOnClick", "tooltipPosition", "tooltipShowOnClick"]);

          var _className = (0, _classnames2.default)(theme.tooltip, (_classnames = {}, _defineProperty(_classnames, theme.tooltipActive, active), _defineProperty(_classnames, theme[positionClass], theme[positionClass]), _classnames));

          var childProps = _objectSpread({}, other, {
            className: className,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          });

          var shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough;
          var finalProps = shouldPass ? _objectSpread({}, childProps, {
            theme: theme
          }) : childProps;
          return _react.default.createElement(ComposedComponent, finalProps, children, visible && _react.default.createElement(_Portal.default, null, _react.default.createElement("span", {
            ref: function ref(node) {
              _this3.tooltipNode = node;
            },
            className: _className,
            "data-react-toolbox": "tooltip",
            style: _objectSpread({
              top: top,
              left: left
            }, top === undefined || left === undefined ? {
              display: 'none'
            } : {})
          }, _react.default.createElement("span", {
            className: theme.tooltipInner
          }, tooltip))));
        }
      }]);

      return TooltippedComponent;
    }(_react.PureComponent);

    _defineProperty(TooltippedComponent, "propTypes", {
      children: _propTypes.default.node,
      className: _propTypes.default.string,
      onClick: _propTypes.default.func,
      onMouseEnter: _propTypes.default.func,
      onMouseLeave: _propTypes.default.func,
      theme: _propTypes.default.shape({
        tooltip: _propTypes.default.string,
        tooltipActive: _propTypes.default.string,
        tooltipWrapper: _propTypes.default.string
      }),
      tooltip: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      tooltipDelay: _propTypes.default.number,
      tooltipHideOnClick: _propTypes.default.bool,
      tooltipPosition: _propTypes.default.oneOf(Object.keys(POSITION).map(function (key) {
        return POSITION[key];
      })),
      tooltipShowOnClick: _propTypes.default.bool
    });

    _defineProperty(TooltippedComponent, "defaultProps", {
      className: defaultClassName,
      tooltipDelay: defaultDelay,
      tooltipHideOnClick: defaultHideOnClick,
      tooltipPosition: defaultPosition,
      tooltipShowOnClick: defaultShowOnClick
    });

    return (0, _reactCssThemr.themr)(_identifiers.TOOLTIP, defaultTheme)(TooltippedComponent);
  };
};

var _default = tooltipFactory;
exports.default = _default;