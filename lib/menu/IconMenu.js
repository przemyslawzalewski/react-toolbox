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
exports.IconMenu = exports.iconMenuFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _IconButton = _interopRequireDefault(require("../button/IconButton"));

var _Menu = _interopRequireDefault(require("./Menu"));

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

var factory = function factory(IconButton, Menu) {
  var IconMenu =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(IconMenu, _PureComponent);

    function IconMenu() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, IconMenu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        active: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (event) {
        _this.setState({
          active: !_this.state.active
        });

        if (_this.props.onClick) _this.props.onClick(event);
      });

      _defineProperty(_assertThisInitialized(_this), "handleMenuHide", function () {
        _this.setState({
          active: false
        });

        if (_this.props.onHide) _this.props.onHide();
      });

      return _this;
    }

    _createClass(IconMenu, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            icon = _this$props.icon,
            iconRipple = _this$props.iconRipple,
            inverse = _this$props.inverse,
            menuRipple = _this$props.menuRipple,
            onHide = _this$props.onHide,
            onSelect = _this$props.onSelect,
            onShow = _this$props.onShow,
            position = _this$props.position,
            selectable = _this$props.selectable,
            selected = _this$props.selected,
            theme = _this$props.theme,
            other = _objectWithoutProperties(_this$props, ["children", "className", "icon", "iconRipple", "inverse", "menuRipple", "onHide", "onSelect", "onShow", "position", "selectable", "selected", "theme"]);

        return _react.default.createElement("div", _extends({}, other, {
          className: (0, _classnames.default)(theme.iconMenu, className)
        }), _react.default.createElement(IconButton, {
          className: theme.icon,
          icon: icon,
          inverse: inverse,
          onClick: this.handleButtonClick,
          ripple: iconRipple
        }), _react.default.createElement(Menu, {
          active: this.state.active,
          onHide: this.handleMenuHide,
          onSelect: onSelect,
          onShow: onShow,
          position: position,
          ripple: menuRipple,
          selectable: selectable,
          selected: selected,
          theme: theme
        }, children));
      }
    }]);

    return IconMenu;
  }(_react.PureComponent);

  _defineProperty(IconMenu, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    iconRipple: _propTypes.default.bool,
    inverse: _propTypes.default.bool,
    menuRipple: _propTypes.default.bool,
    onClick: _propTypes.default.func,
    onHide: _propTypes.default.func,
    onSelect: _propTypes.default.func,
    onShow: _propTypes.default.func,
    position: _propTypes.default.string,
    selectable: _propTypes.default.bool,
    selected: _propTypes.default.node,
    theme: _propTypes.default.shape({
      icon: _propTypes.default.string,
      iconMenu: _propTypes.default.string
    })
  });

  _defineProperty(IconMenu, "defaultProps", {
    className: '',
    icon: 'more_vert',
    iconRipple: true,
    menuRipple: true,
    position: 'auto',
    selectable: false
  });

  return IconMenu;
};

exports.iconMenuFactory = factory;
var IconMenu = factory(_IconButton.default, _Menu.default);
exports.IconMenu = IconMenu;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(IconMenu);

exports.default = _default;