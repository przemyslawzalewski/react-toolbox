"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _dissoc = _interopRequireDefault(require("ramda/src/dissoc"));

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

var _prefixer = _interopRequireDefault(require("../utils/prefixer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaults = {
  centered: false,
  className: '',
  multiple: true,
  passthrough: true,
  spread: 2,
  theme: {}
};

var rippleFactory = function rippleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _objectSpread({}, defaults, {}, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultMultiple = _defaults$options.multiple,
      defaultPassthrough = _defaults$options.passthrough,
      defaultSpread = _defaults$options.spread,
      defaultTheme = _defaults$options.theme,
      props = _objectWithoutProperties(_defaults$options, ["centered", "className", "multiple", "passthrough", "spread", "theme"]);

  return function (ComposedComponent) {
    var RippledComponent =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(RippledComponent, _PureComponent);

      function RippledComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, RippledComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RippledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          ripples: {}
        });

        _defineProperty(_assertThisInitialized(_this), "rippleNodes", {});

        _defineProperty(_assertThisInitialized(_this), "doRipple", function () {
          return !_this.props.disabled && _this.props.ripple;
        });

        _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);

          if (_this.doRipple()) {
            var _events$getMousePosit = _events.default.getMousePosition(event),
                x = _events$getMousePosit.x,
                y = _events$getMousePosit.y;

            _this.animateRipple(x, y, false);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (event) {
          if (_this.props.onTouchStart) _this.props.onTouchStart(event);

          if (_this.doRipple()) {
            var _events$getTouchPosit = _events.default.getTouchPosition(event),
                x = _events$getTouchPosit.x,
                y = _events$getTouchPosit.y;

            _this.animateRipple(x, y, true);
          }
        });

        return _this;
      }

      _createClass(RippledComponent, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          // If a new ripple was just added, add a remove event listener to its animation
          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
            this.addRippleRemoveEventListener(this.getLastKey());
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this2 = this;

          // Remove document event listeners for ripple if they still exists
          Object.keys(this.state.ripples).forEach(function (key) {
            _this2.state.ripples[key].endRipple();
          });
        }
        /**
         * Find out a descriptor object for the ripple element being created depending on
         * the position where the it was triggered and the component's dimensions.
         *
         * @param {Number} x Coordinate x in the viewport where ripple was triggered
         * @param {Number} y Coordinate y in the viewport where ripple was triggered
         * @return {Object} Descriptor element including position and size of the element
         */

      }, {
        key: "getDescriptor",
        value: function getDescriptor(x, y) {
          var _ReactDOM$findDOMNode = _reactDom.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _this$props = this.props,
              centered = _this$props.rippleCentered,
              spread = _this$props.rippleSpread;
          return {
            left: centered ? 0 : x - left - width / 2,
            top: centered ? 0 : y - top - height / 2,
            width: width * spread
          };
        }
        /**
         * Increments and internal counter and returns the next value as a string. It
         * is used to assign key references to new ripple elements.
         *
         * @return {String} Key to be assigned to a ripple.
         */

      }, {
        key: "getNextKey",
        value: function getNextKey() {
          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
          return "ripple".concat(this.currentCount);
        }
        /**
         * Return the last generated key for a ripple element. When there is only one ripple
         * and to get the reference when a ripple was just created.
         *
         * @return {String} The last generated ripple key.
         */

      }, {
        key: "getLastKey",
        value: function getLastKey() {
          return "ripple".concat(this.currentCount);
        }
        /**
         * Variable to store the ripple references
         */

      }, {
        key: "rippleShouldTrigger",

        /**
         * Determine if a ripple should start depending if its a touch event. For mobile both
         * touchStart and mouseDown are launched so in case is touch we should always trigger
         * but if its not we should check if a touch was already triggered to decide.
         *
         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
         */
        value: function rippleShouldTrigger(isTouch) {
          var shouldStart = isTouch ? true : !this.touchCache;
          this.touchCache = isTouch;
          return shouldStart;
        }
        /**
         * Start a ripple animation on an specific point with touch or mouse events. First
         * decides if the animation should trigger. If the ripple is multiple or there is no
         * ripple present, it creates a new key. If it's a simple ripple and already exists,
         * it just restarts the current ripple. The animation happens in two state changes
         * to allow triggering via css.
         *
         * @param {Number} x Coordinate X on the screen where animation should start
         * @param {Number} y Coordinate Y on the screen where animation should start
         * @param {Boolean} isTouch Use events from touch or mouse.
         */

      }, {
        key: "animateRipple",
        value: function animateRipple(x, y, isTouch) {
          var _this3 = this;

          if (this.rippleShouldTrigger(isTouch)) {
            var _this$getDescriptor = this.getDescriptor(x, y),
                top = _this$getDescriptor.top,
                left = _this$getDescriptor.left,
                width = _this$getDescriptor.width;

            var noRipplesActive = Object.keys(this.state.ripples).length === 0;
            var key = this.props.rippleMultiple || noRipplesActive ? this.getNextKey() : this.getLastKey();
            var endRipple = this.addRippleDeactivateEventListener(isTouch, key);
            var initialState = {
              active: false,
              restarting: true,
              top: top,
              left: left,
              width: width,
              endRipple: endRipple
            };
            var runningState = {
              active: true,
              restarting: false
            };

            var ripples = _objectSpread({}, this.state.ripples, _defineProperty({}, key, initialState));

            this.setState({
              ripples: ripples
            }, function () {
              if (_this3.rippleNodes[key]) _this3.rippleNodes[key].offsetWidth; // eslint-disable-line

              _this3.setState({
                ripples: _objectSpread({}, _this3.state.ripples, _defineProperty({}, key, Object.assign({}, _this3.state.ripples[key], runningState)))
              });
            });
          }
        }
        /**
         * Add an event listener to the reference with given key so when the animation transition
         * ends we can be sure that it finished and it can be safely removed from the state.
         * This function is called whenever a new ripple is added to the component.
         *
         * @param {String} rippleKey Is the key of the ripple to add the event.
         */

      }, {
        key: "addRippleRemoveEventListener",
        value: function addRippleRemoveEventListener(rippleKey) {
          var self = this;
          var rippleNode = this.rippleNodes[rippleKey];

          _events.default.addEventListenerOnTransitionEnded(rippleNode, function onOpacityEnd(e) {
            if (e.propertyName === 'opacity') {
              if (self.props.onRippleEnded) self.props.onRippleEnded(e);

              _events.default.removeEventListenerOnTransitionEnded(self.rippleNodes[rippleKey], onOpacityEnd); // self.rippleNodes = dissoc(rippleKey, self.rippleNodes);


              delete self.rippleNodes[rippleKey];
              self.setState({
                ripples: (0, _dissoc.default)(rippleKey, self.state.ripples)
              });
            }
          });
        }
        /**
         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
         * ending function is created from a factory function and returned.
         *
         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: "addRippleDeactivateEventListener",
        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
          var eventType = isTouch ? 'touchend' : 'mouseup';
          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
          document.addEventListener(eventType, endRipple);
          return endRipple;
        }
        /**
         * Generates a function that can be called to deactivate a ripple and remove its finishing
         * event listener. If is generated because we need to store it to be called on unmount in case
         * the ripple is still running.
         *
         * @param {String} eventType Is the event type that can be touchend or mouseup
         * @param {String} rippleKey Is the key representing the ripple
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: "createRippleDeactivateCallback",
        value: function createRippleDeactivateCallback(eventType, rippleKey) {
          var self = this;
          return function endRipple() {
            document.removeEventListener(eventType, endRipple);
            self.setState({
              ripples: _objectSpread({}, self.state.ripples, _defineProperty({}, rippleKey, Object.assign({}, self.state.ripples[rippleKey], {
                active: false
              })))
            });
          };
        }
      }, {
        key: "renderRipple",
        value: function renderRipple(key, className, _ref) {
          var _classnames,
              _this4 = this;

          var active = _ref.active,
              left = _ref.left,
              restarting = _ref.restarting,
              top = _ref.top,
              width = _ref.width;
          var scale = restarting ? 0 : 1;
          var transform = "translate3d(".concat(-width / 2 + left, "px, ").concat(-width / 2 + top, "px, 0) scale(").concat(scale, ")");

          var _className = (0, _classnames2.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);

          return _react.default.createElement("span", _extends({
            key: key,
            "data-react-toolbox": "ripple",
            className: this.props.theme.rippleWrapper
          }, props), _react.default.createElement("span", {
            className: _className,
            ref: function ref(node) {
              if (node) _this4.rippleNodes[key] = node;
            },
            style: (0, _prefixer.default)({
              transform: transform
            }, {
              width: width,
              height: width
            })
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;

          var _this$props2 = this.props,
              children = _this$props2.children,
              disabled = _this$props2.disabled,
              ripple = _this$props2.ripple,
              onRippleEnded = _this$props2.onRippleEnded,
              rippleCentered = _this$props2.rippleCentered,
              rippleClassName = _this$props2.rippleClassName,
              rippleMultiple = _this$props2.rippleMultiple,
              rippleSpread = _this$props2.rippleSpread,
              theme = _this$props2.theme,
              other = _objectWithoutProperties(_this$props2, ["children", "disabled", "ripple", "onRippleEnded", "rippleCentered", "rippleClassName", "rippleMultiple", "rippleSpread", "theme"]);

          var ripples = this.state.ripples;
          var childRipples = Object.keys(ripples).map(function (key) {
            return _this5.renderRipple(key, rippleClassName, ripples[key]);
          });

          var childProps = _objectSpread({
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          }, other);

          var finalProps = defaultPassthrough ? _objectSpread({}, childProps, {
            theme: theme,
            disabled: disabled
          }) : childProps;
          return !ripple ? _react.default.createElement(ComposedComponent, finalProps, children) : _react.default.createElement(ComposedComponent, finalProps, [children, childRipples]);
        }
      }]);

      return RippledComponent;
    }(_react.PureComponent);

    _defineProperty(RippledComponent, "propTypes", {
      children: _propTypes.default.node,
      disabled: _propTypes.default.bool,
      onMouseDown: _propTypes.default.func,
      onRippleEnded: _propTypes.default.func,
      onTouchStart: _propTypes.default.func,
      ripple: _propTypes.default.bool,
      rippleCentered: _propTypes.default.bool,
      rippleClassName: _propTypes.default.string,
      rippleMultiple: _propTypes.default.bool,
      rippleSpread: _propTypes.default.number,
      theme: _propTypes.default.shape({
        ripple: _propTypes.default.string,
        rippleActive: _propTypes.default.string,
        rippleRestarting: _propTypes.default.string,
        rippleWrapper: _propTypes.default.string
      })
    });

    _defineProperty(RippledComponent, "defaultProps", {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleMultiple: defaultMultiple,
      rippleSpread: defaultSpread
    });

    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
  };
};

var _default = rippleFactory;
exports.default = _default;