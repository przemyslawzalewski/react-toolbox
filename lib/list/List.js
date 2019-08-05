"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.listFactory = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItem = _interopRequireDefault(require("./ListItem"));

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

var mergeProp = function mergeProp(propName, child, parent) {
  return child[propName] !== undefined ? child[propName] : parent[propName];
};

var factory = function factory(ListItem) {
  var List =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(List, _PureComponent);

    function List() {
      _classCallCheck(this, List);

      return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
    }

    _createClass(List, [{
      key: "renderItems",
      value: function renderItems() {
        var _this = this;

        return _react.default.Children.map(this.props.children, function (item) {
          if (item === null || item === undefined) {
            return item;
          } else if (item.type === ListItem) {
            var selectable = mergeProp('selectable', item.props, _this.props);
            var ripple = mergeProp('ripple', item.props, _this.props);
            return _react.default.cloneElement(item, {
              selectable: selectable,
              ripple: ripple
            });
          }

          return _react.default.cloneElement(item);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement("ul", {
          "data-react-toolbox": "list",
          className: (0, _classnames.default)(this.props.theme.list, this.props.className)
        }, this.renderItems());
      }
    }]);

    return List;
  }(_react.PureComponent);

  _defineProperty(List, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    theme: _propTypes.default.shape({
      list: _propTypes.default.string
    })
  });

  _defineProperty(List, "defaultProps", {
    className: '',
    ripple: false,
    selectable: false
  });

  return List;
};

exports.listFactory = factory;
var List = factory(_ListItem.default);
exports.List = List;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(List);

exports.default = _default;