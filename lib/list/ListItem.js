"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

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
exports.ListItem = exports.listItemFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

var _ListItemLayout = _interopRequireDefault(require("./ListItemLayout"));

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var factory = function factory(ripple, ListItemLayout, ListItemContent) {
  var ListItem =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(ListItem, _PureComponent);

    function ListItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ListItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event);
        }
      });

      return _this;
    }

    _createClass(ListItem, [{
      key: "groupChildren",
      value: function groupChildren() {
        var children = {
          leftActions: [],
          rightActions: [],
          ignored: []
        };

        _react.default.Children.forEach(this.props.children, function (child, i) {
          if (!_react.default.isValidElement(child)) {
            return undefined;
          }

          var _child$props = child.props,
              listItemIgnore = _child$props.listItemIgnore,
              rest = _objectWithoutProperties(_child$props, ["listItemIgnore"]);

          var strippedChild = _objectSpread({}, child, {}, {
            props: rest
          });

          if (listItemIgnore) {
            children.ignored.push(strippedChild);
            return undefined;
          }

          if (child.type === ListItemContent) {
            children.itemContent = strippedChild;
            return undefined;
          }

          var bucket = children.itemContent ? 'rightActions' : 'leftActions';
          children[bucket].push(_objectSpread({}, strippedChild, {
            key: i
          }));
          return undefined;
        });

        return children;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            hasRipple = _this$props.ripple,
            onClick = _this$props.onClick,
            onMouseDown = _this$props.onMouseDown,
            onTouchStart = _this$props.onTouchStart,
            theme = _this$props.theme,
            to = _this$props.to,
            other = _objectWithoutProperties(_this$props, ["className", "ripple", "onClick", "onMouseDown", "onTouchStart", "theme", "to"]);

        var children = this.groupChildren();

        var content = _react.default.createElement(ListItemLayout, _extends({
          theme: theme
        }, children, other));

        return _react.default.createElement("li", {
          className: "".concat(theme.listItem, " ").concat(className),
          onClick: this.handleClick,
          onMouseDown: onMouseDown,
          onTouchStart: onTouchStart
        }, to ? _react.default.createElement("a", {
          href: this.props.to
        }, content) : content, children.ignored);
      }
    }]);

    return ListItem;
  }(_react.PureComponent);

  _defineProperty(ListItem, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    hasRipple: _propTypes.default.bool,
    onClick: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    onTouchStart: _propTypes.default.func,
    ripple: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      listItem: _propTypes.default.string
    }),
    to: _propTypes.default.string
  });

  _defineProperty(ListItem, "defaultProps", {
    className: '',
    disabled: false,
    ripple: false
  });

  return ripple(ListItem);
};

exports.listItemFactory = factory;
var ripple = (0, _Ripple.default)({
  centered: false,
  listItemIgnore: true
});
var ListItem = factory(ripple, _ListItemLayout.default, _ListItemContent.default);
exports.ListItem = ListItem;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItem);

exports.default = _default;