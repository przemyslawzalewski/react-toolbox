"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemContent = exports.listItemContentFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemText = _interopRequireDefault(require("./ListItemText"));

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

var types = ['auto', 'normal', 'large'];

var factory = function factory(ListItemText) {
  var ListItemContent =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(ListItemContent, _PureComponent);

    function ListItemContent() {
      _classCallCheck(this, ListItemContent);

      return _possibleConstructorReturn(this, _getPrototypeOf(ListItemContent).apply(this, arguments));
    }

    _createClass(ListItemContent, [{
      key: "getType",
      value: function getType() {
        var _this$props = this.props,
            type = _this$props.type,
            children = _this$props.children,
            caption = _this$props.caption,
            legend = _this$props.legend;

        var count = _react.default.Children.count(children);

        [caption, legend].forEach(function (s) {
          count += s ? 1 : 0;
        });
        var typeIndex = Math.min(count, types.length);
        return type || types[typeIndex];
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            caption = _this$props2.caption,
            legend = _this$props2.legend,
            theme = _this$props2.theme;
        var contentType = this.getType();
        var className = (0, _classnames2.default)(theme.itemContentRoot, _defineProperty({}, theme[contentType], theme[contentType]));
        return _react.default.createElement("span", {
          className: className
        }, caption && _react.default.createElement(ListItemText, {
          theme: theme,
          primary: true
        }, caption), legend && _react.default.createElement(ListItemText, {
          theme: theme
        }, legend), children);
      }
    }]);

    return ListItemContent;
  }(_react.PureComponent);

  _defineProperty(ListItemContent, "propTypes", {
    caption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    children: _propTypes.default.node,
    legend: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    theme: _propTypes.default.shape({
      auto: _propTypes.default.string,
      itemContentRoot: _propTypes.default.string,
      large: _propTypes.default.string,
      normal: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(types)
  });

  return ListItemContent;
};

exports.listItemContentFactory = factory;
var ListItemContent = factory(_ListItemText.default);
exports.ListItemContent = ListItemContent;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemContent);

exports.default = _default;