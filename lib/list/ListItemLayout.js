"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemLayout = exports.listItemLayoutFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

var _ListItemActions = _interopRequireDefault(require("./ListItemActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ListItemContent, ListItemActions) {
  var ListItemLayout = function ListItemLayout(props) {
    var _classnames;

    var className = (0, _classnames2.default)(props.theme.item, (_classnames = {}, _defineProperty(_classnames, props.theme.disabled, props.disabled), _defineProperty(_classnames, props.theme.selectable, props.selectable), _classnames), props.className);

    var leftActions = _toConsumableArray(props.leftActions);

    var rightActions = _toConsumableArray(props.rightActions);

    var emptyActions = function emptyActions(item) {
      return !item[0] && !item[1] && !item[2];
    };

    var content = props.itemContent || _react.default.createElement(ListItemContent, {
      theme: props.theme,
      caption: props.caption,
      legend: props.legend
    });

    return _react.default.createElement("span", {
      className: className
    }, !emptyActions(leftActions) > 0 && _react.default.createElement(ListItemActions, {
      type: "left",
      theme: props.theme
    }, leftActions), content, !emptyActions(rightActions) > 0 && _react.default.createElement(ListItemActions, {
      type: "right",
      theme: props.theme
    }, rightActions));
  };

  ListItemLayout.propTypes = {
    caption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    itemContent: _propTypes.default.element,
    leftActions: _propTypes.default.arrayOf(_propTypes.default.node),
    legend: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    rightActions: _propTypes.default.arrayOf(_propTypes.default.node),
    selectable: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      disabled: _propTypes.default.string,
      item: _propTypes.default.string,
      selectable: _propTypes.default.string
    })
  };
  ListItemLayout.defaultProps = {
    disabled: false,
    selectable: false
  };
  return ListItemLayout;
};

exports.listItemLayoutFactory = factory;
var ListItemLayout = factory(_ListItemContent.default, _ListItemActions.default);
exports.ListItemLayout = ListItemLayout;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemLayout);

exports.default = _default;