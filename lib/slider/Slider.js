"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.to-fixed");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.sliderFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _reactCssThemr = require("react-css-themr");

var _utils = require("../utils/utils");

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

var _ProgressBar = _interopRequireDefault(require("../progress_bar/ProgressBar"));

var _Input = _interopRequireDefault(require("../input/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ProgressBar, Input) {
  var Slider =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Slider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        inputFocused: false,
        inputValue: null,
        sliderLength: 0,
        sliderStart: 0
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function () {
        _this.setState({
          inputFocused: true,
          inputValue: _this.valueForInput(_this.props.value)
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (value) {
        _this.setState({
          inputValue: value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (event) {
        var value = _this.state.inputValue || 0;

        _this.setState({
          inputFocused: false,
          inputValue: null
        }, function () {
          _this.props.onChange(_this.trimValue(value), event);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
        if ([13, 27].indexOf(event.keyCode) !== -1) _this.getInput().blur();
        if (event.keyCode === 38) _this.addToValue(_this.props.step);
        if (event.keyCode === 40) _this.addToValue(-_this.props.step);
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
        if (_this.state.inputFocused) _this.getInput().blur();

        _events.default.addEventsToDocument(_this.getMouseEventMap());

        _this.start(_events.default.getMousePosition(event));

        _events.default.pauseEvent(event);
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (event) {
        _events.default.pauseEvent(event);

        _this.move(_events.default.getMousePosition(event));
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
        _this.end(_this.getMouseEventMap());
      });

      _defineProperty(_assertThisInitialized(_this), "handleResize", function (event, callback) {
        var _ReactDOM$findDOMNode = _reactDom.default.findDOMNode(_this.progressbarNode).getBoundingClientRect(),
            left = _ReactDOM$findDOMNode.left,
            right = _ReactDOM$findDOMNode.right;

        var cb = callback || function () {};

        _this.setState({
          sliderStart: left,
          sliderLength: right - left
        }, cb);
      });

      _defineProperty(_assertThisInitialized(_this), "handleSliderBlur", function () {
        _events.default.removeEventsFromDocument(_this.getKeyboardEvents());
      });

      _defineProperty(_assertThisInitialized(_this), "handleSliderFocus", function () {
        _events.default.addEventsToDocument(_this.getKeyboardEvents());
      });

      _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function () {
        _this.end(_this.getTouchEventMap());
      });

      _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (event) {
        _this.move(_events.default.getTouchPosition(event));
      });

      _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (event) {
        if (_this.state.inputFocused) _this.getInput().blur();

        _this.start(_events.default.getTouchPosition(event));

        _events.default.addEventsToDocument(_this.getTouchEventMap());

        _events.default.pauseEvent(event);
      });

      return _this;
    }

    _createClass(Slider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.state.inputFocused && this.props.value !== nextProps.value) {
          this.setState({
            inputValue: this.valueForInput(nextProps.value)
          });
        }
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return this.state.inputFocused || !nextState.inputFocused;
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (nextState.pressed !== this.state.pressed) {
          if (nextState.pressed) {
            this.props.onDragStart();
          } else {
            this.props.onDragStop();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);

        _events.default.removeEventsFromDocument(this.getMouseEventMap());

        _events.default.removeEventsFromDocument(this.getTouchEventMap());

        _events.default.removeEventsFromDocument(this.getKeyboardEvents());
      }
    }, {
      key: "getInput",
      value: function getInput() {
        return this.inputNode && this.inputNode.getWrappedInstance ? this.inputNode.getWrappedInstance() : this.inputNode;
      }
    }, {
      key: "getKeyboardEvents",
      value: function getKeyboardEvents() {
        return {
          keydown: this.handleKeyDown
        };
      }
    }, {
      key: "getMouseEventMap",
      value: function getMouseEventMap() {
        return {
          mousemove: this.handleMouseMove,
          mouseup: this.handleMouseUp
        };
      }
    }, {
      key: "getTouchEventMap",
      value: function getTouchEventMap() {
        return {
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        };
      }
    }, {
      key: "addToValue",
      value: function addToValue(increment) {
        var value = this.state.inputFocused ? parseFloat(this.state.inputValue) : this.props.value;
        value = this.trimValue(value + increment);
        if (value !== this.props.value) this.props.onChange(value);
      }
    }, {
      key: "end",
      value: function end(revents) {
        _events.default.removeEventsFromDocument(revents);

        this.setState({
          pressed: false
        });
      }
    }, {
      key: "knobOffset",
      value: function knobOffset() {
        var _this$props = this.props,
            max = _this$props.max,
            min = _this$props.min,
            value = _this$props.value;
        return 100 * ((value - min) / (max - min));
      }
    }, {
      key: "move",
      value: function move(position) {
        var newValue = this.positionToValue(position);
        if (newValue !== this.props.value) this.props.onChange(newValue);
      }
    }, {
      key: "positionToValue",
      value: function positionToValue(position) {
        var _this$state = this.state,
            start = _this$state.sliderStart,
            length = _this$state.sliderLength;
        var _this$props2 = this.props,
            max = _this$props2.max,
            min = _this$props2.min,
            step = _this$props2.step;
        var pos = (position.x - start) / length * (max - min);
        return this.trimValue(Math.round(pos / step) * step + min);
      }
    }, {
      key: "start",
      value: function start(position) {
        var _this2 = this;

        this.handleResize(null, function () {
          _this2.setState({
            pressed: true
          });

          _this2.props.onChange(_this2.positionToValue(position));
        });
      }
    }, {
      key: "stepDecimals",
      value: function stepDecimals() {
        return (this.props.step.toString().split('.')[1] || []).length;
      }
    }, {
      key: "trimValue",
      value: function trimValue(value) {
        if (value < this.props.min) return this.props.min;
        if (value > this.props.max) return this.props.max;
        return (0, _utils.round)(value, this.stepDecimals());
      }
    }, {
      key: "valueForInput",
      value: function valueForInput(value) {
        var decimals = this.stepDecimals();
        return decimals > 0 ? value.toFixed(decimals) : value.toString();
      }
    }, {
      key: "renderSnaps",
      value: function renderSnaps() {
        var _this3 = this;

        if (!this.props.snaps) return undefined;
        return _react.default.createElement("div", {
          className: this.props.theme.snaps
        }, (0, _utils.range)(0, (this.props.max - this.props.min) / this.props.step).map(function (i) {
          return _react.default.createElement("div", {
            key: "span-".concat(i),
            className: _this3.props.theme.snap
          });
        }));
      }
    }, {
      key: "renderInput",
      value: function renderInput() {
        var _this4 = this;

        if (!this.props.editable) return undefined;
        return _react.default.createElement(Input, {
          ref: function ref(node) {
            _this4.inputNode = node;
          },
          className: this.props.theme.input,
          disabled: this.props.disabled,
          onFocus: this.handleInputFocus,
          onChange: this.handleInputChange,
          onBlur: this.handleInputBlur,
          value: this.state.inputFocused ? this.state.inputValue : this.valueForInput(this.props.value)
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames,
            _this5 = this;

        var theme = this.props.theme;
        var knobStyles = {
          left: "".concat(this.knobOffset(), "%")
        };
        var className = (0, _classnames2.default)(theme.slider, (_classnames = {}, _defineProperty(_classnames, theme.editable, this.props.editable), _defineProperty(_classnames, theme.disabled, this.props.disabled), _defineProperty(_classnames, theme.pinned, this.props.pinned), _defineProperty(_classnames, theme.pressed, this.state.pressed), _classnames), this.props.className);
        return _react.default.createElement("div", {
          className: className,
          disabled: this.props.disabled,
          "data-react-toolbox": "slider",
          onBlur: this.handleSliderBlur,
          onFocus: this.handleSliderFocus,
          style: this.props.style,
          tabIndex: "0"
        }, _react.default.createElement("div", {
          ref: function ref(node) {
            _this5.sliderNode = node;
          },
          className: theme.container,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart
        }, _react.default.createElement("div", {
          ref: function ref(node) {
            _this5.knobNode = node;
          },
          className: theme.knob,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          style: knobStyles
        }, _react.default.createElement("div", {
          className: theme.innerknob,
          "data-value": parseInt(this.props.value, 10)
        })), _react.default.createElement("div", {
          className: theme.progress
        }, _react.default.createElement(ProgressBar, {
          disabled: this.props.disabled,
          ref: function ref(node) {
            _this5.progressbarNode = node;
          },
          className: theme.innerprogress,
          max: this.props.max,
          min: this.props.min,
          mode: "determinate",
          value: this.props.value,
          buffer: this.props.buffer
        }), this.renderSnaps())), this.renderInput());
      }
    }]);

    return Slider;
  }(_react.Component);

  _defineProperty(Slider, "propTypes", {
    buffer: _propTypes.default.number,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    editable: _propTypes.default.bool,
    max: _propTypes.default.number,
    min: _propTypes.default.number,
    onChange: _propTypes.default.func,
    onDragStart: _propTypes.default.func,
    onDragStop: _propTypes.default.func,
    pinned: _propTypes.default.bool,
    snaps: _propTypes.default.bool,
    step: _propTypes.default.number,
    style: _reactStyleProptype.default,
    theme: _propTypes.default.shape({
      container: _propTypes.default.string,
      editable: _propTypes.default.string,
      innerknob: _propTypes.default.string,
      innerprogress: _propTypes.default.string,
      input: _propTypes.default.string,
      knob: _propTypes.default.string,
      pinned: _propTypes.default.string,
      pressed: _propTypes.default.string,
      progress: _propTypes.default.string,
      slider: _propTypes.default.string,
      snap: _propTypes.default.string,
      snaps: _propTypes.default.string
    }),
    value: _propTypes.default.number
  });

  _defineProperty(Slider, "defaultProps", {
    buffer: 0,
    className: '',
    editable: false,
    max: 100,
    min: 0,
    onDragStart: function onDragStart() {},
    onDragStop: function onDragStop() {},
    pinned: false,
    snaps: false,
    step: 0.01,
    value: 0
  });

  return Slider;
};

exports.sliderFactory = factory;
var Slider = factory(_ProgressBar.default, _Input.default);
exports.Slider = Slider;

var _default = (0, _reactCssThemr.themr)(_identifiers.SLIDER)(Slider);

exports.default = _default;