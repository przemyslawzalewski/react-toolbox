"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.menuFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _utils = require("../utils");

var _utils2 = require("../utils/utils");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

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

var POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
};

var factory = function factory(MenuItem) {
  var Menu =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Menu, _PureComponent);

    function Menu() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Menu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        active: _this.props.active,
        rippled: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
        if (_this.state.active && !_utils.events.targetIsDescendant(event, _reactDom.default.findDOMNode(_assertThisInitialized(_this)))) {
          _this.setState({
            active: false,
            rippled: false
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item, event) {
        var _item$props = item.props,
            value = _item$props.value,
            onClick = _item$props.onClick;
        if (onClick) event.persist();

        _this.setState({
          active: false,
          rippled: _this.props.ripple
        }, function () {
          if (onClick) onClick(event);
          if (_this.props.onSelect) _this.props.onSelect(value);
        });
      });

      return _this;
    }

    _createClass(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.positionTimeoutHandle = setTimeout(function () {
          var _this2$menuNode$getBo = _this2.menuNode.getBoundingClientRect(),
              width = _this2$menuNode$getBo.width,
              height = _this2$menuNode$getBo.height;

          var position = _this2.props.position === POSITION.AUTO ? _this2.calculatePosition() : _this2.props.position;

          _this2.setState({
            position: position,
            width: width,
            height: height
          });
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        if (this.props.position !== nextProps.position) {
          var position = nextProps.position === POSITION.AUTO ? this.calculatePosition() : nextProps.position;
          this.setState({
            position: position
          });
        }
        /**
         * If the menu is going to be activated via props and its not active, verify
         * the position is appropriated and then show it recalculating position if its
         * wrong. It should be shown in two consecutive setState.
         */


        if (!this.props.active && nextProps.active && !this.state.active) {
          if (nextProps.position === POSITION.AUTO) {
            var _position = this.calculatePosition();

            if (this.state.position !== _position) {
              this.setState({
                position: _position,
                active: false
              }, function () {
                _this3.activateTimeoutHandle = setTimeout(function () {
                  _this3.show();
                }, 20);
              });
            } else {
              this.show();
            }
          } else {
            this.show();
          }
        }
        /**
         * If the menu is being deactivated via props and the current state is
         * active, it should be hid.
         */


        if (this.props.active && !nextProps.active && this.state.active) {
          this.hide();
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _utils.events.addEventsToDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          if (this.props.onHide) this.props.onHide();

          _utils.events.removeEventsFromDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        } else if (!prevState.active && this.state.active && this.props.onShow) {
          this.props.onShow();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.active) {
          _utils.events.removeEventsFromDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        }

        clearTimeout(this.positionTimeoutHandle);
        clearTimeout(this.activateTimeoutHandle);
      }
    }, {
      key: "getMenuStyle",
      value: function getMenuStyle() {
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height,
            position = _this$state.position;

        if (position !== POSITION.STATIC) {
          if (this.state.active) {
            return {
              clip: "rect(0 ".concat(width, "px ").concat(height, "px 0)")
            };
          } else if (position === POSITION.TOP_RIGHT) {
            return {
              clip: "rect(0 ".concat(width, "px 0 ").concat(width, "px)")
            };
          } else if (position === POSITION.BOTTOM_RIGHT) {
            return {
              clip: "rect(".concat(height, "px ").concat(width, "px ").concat(height, "px ").concat(width, "px)")
            };
          } else if (position === POSITION.BOTTOM_LEFT) {
            return {
              clip: "rect(".concat(height, "px 0 ").concat(height, "px 0)")
            };
          } else if (position === POSITION.TOP_LEFT) {
            return {
              clip: 'rect(0 0 0 0)'
            };
          }
        }

        return undefined;
      }
    }, {
      key: "getRootStyle",
      value: function getRootStyle() {
        return this.state.position !== POSITION.STATIC ? {
          width: this.state.width,
          height: this.state.height
        } : undefined;
      }
    }, {
      key: "calculatePosition",
      value: function calculatePosition() {
        var parentNode = _reactDom.default.findDOMNode(this).parentNode;

        if (!parentNode) return undefined;

        var _parentNode$getBoundi = parentNode.getBoundingClientRect(),
            top = _parentNode$getBoundi.top,
            left = _parentNode$getBoundi.left,
            height = _parentNode$getBoundi.height,
            width = _parentNode$getBoundi.width;

        var _getViewport = (0, _utils2.getViewport)(),
            wh = _getViewport.height,
            ww = _getViewport.width;

        var toTop = top < wh / 2 - height / 2;
        var toLeft = left < ww / 2 - width / 2;
        return "".concat(toTop ? 'top' : 'bottom').concat(toLeft ? 'Left' : 'Right');
      }
    }, {
      key: "show",
      value: function show() {
        var _this$menuNode$getBou = this.menuNode.getBoundingClientRect(),
            width = _this$menuNode$getBou.width,
            height = _this$menuNode$getBou.height;

        this.setState({
          active: true,
          width: width,
          height: height
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        this.setState({
          active: false
        });
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this4 = this;

        return _react.default.Children.map(this.props.children, function (item) {
          if (!item) return item;
          return _react.default.cloneElement(item, {
            ripple: item.props.ripple || _this4.props.ripple,
            selected: typeof item.props.value !== 'undefined' && _this4.props.selectable && item.props.value === _this4.props.selected,
            onClick: _this4.handleSelect.bind(_this4, item)
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames,
            _this5 = this;

        var theme = this.props.theme;
        var outlineStyle = {
          width: this.state.width,
          height: this.state.height
        };
        var className = (0, _classnames2.default)([theme.menu, theme[this.state.position]], (_classnames = {}, _defineProperty(_classnames, theme.active, this.state.active), _defineProperty(_classnames, theme.rippled, this.state.rippled), _classnames), this.props.className);
        return _react.default.createElement("div", {
          "data-react-toolbox": "menu",
          className: className,
          style: this.getRootStyle()
        }, this.props.outline ? _react.default.createElement("div", {
          className: theme.outline,
          style: outlineStyle
        }) : null, _react.default.createElement("ul", {
          ref: function ref(node) {
            _this5.menuNode = node;
          },
          className: theme.menuInner,
          style: this.getMenuStyle()
        }, this.renderItems()));
      }
    }]);

    return Menu;
  }(_react.PureComponent);

  _defineProperty(Menu, "propTypes", {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    onHide: _propTypes.default.func,
    onSelect: _propTypes.default.func,
    onShow: _propTypes.default.func,
    outline: _propTypes.default.bool,
    position: _propTypes.default.oneOf(Object.keys(POSITION).map(function (key) {
      return POSITION[key];
    })),
    ripple: _propTypes.default.bool,
    selectable: _propTypes.default.bool,
    selected: _propTypes.default.node,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      bottomLeft: _propTypes.default.string,
      bottomRight: _propTypes.default.string,
      menu: _propTypes.default.string,
      menuInner: _propTypes.default.string,
      outline: _propTypes.default.string,
      rippled: _propTypes.default.string,
      static: _propTypes.default.string,
      topLeft: _propTypes.default.string,
      topRight: _propTypes.default.string
    })
  });

  _defineProperty(Menu, "defaultProps", {
    active: false,
    outline: true,
    position: POSITION.STATIC,
    ripple: true,
    selectable: true
  });

  return Menu;
};

exports.menuFactory = factory;
var Menu = factory(_MenuItem.default);
exports.Menu = Menu;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(Menu);

exports.default = _default;