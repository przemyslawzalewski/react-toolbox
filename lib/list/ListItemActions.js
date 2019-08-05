"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemActions = exports.listItemActionsFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemAction = _interopRequireDefault(require("./ListItemAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory(ListItemAction) {
  var ListItemActions = function ListItemActions(_ref) {
    var type = _ref.type,
        children = _ref.children,
        theme = _ref.theme;

    var validChildren = _react.default.Children.toArray(children).filter(function (c) {
      return _react.default.isValidElement(c);
    });

    return _react.default.createElement("span", {
      className: theme[type]
    }, validChildren.map(function (action, i) {
      return _react.default.createElement(ListItemAction, {
        key: i,
        theme: theme,
        action: action
      }) // eslint-disable-line
      ;
    }));
  };

  ListItemActions.propTypes = {
    children: _propTypes.default.node,
    theme: _propTypes.default.shape({
      left: _propTypes.default.string,
      right: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(['left', 'right'])
  };
  return ListItemActions;
};

exports.listItemActionsFactory = factory;
var ListItemActions = factory(_ListItemAction.default);
exports.ListItemActions = ListItemActions;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemActions);

exports.default = _default;