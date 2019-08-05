"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemAction = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItemAction = function ListItemAction(_ref) {
  var action = _ref.action,
      theme = _ref.theme;
  var _action$props = action.props,
      onClick = _action$props.onClick,
      onMouseDown = _action$props.onMouseDown;
  var stopRipple = onClick && !onMouseDown;

  var stop = function stop(e) {
    return e.stopPropagation();
  };

  return _react.default.createElement("span", {
    className: theme.itemAction,
    onMouseDown: stopRipple && stop,
    onClick: onClick && stop
  }, action);
};

exports.ListItemAction = ListItemAction;
ListItemAction.propTypes = {
  action: _propTypes.default.node,
  theme: _propTypes.default.shape({
    itemAction: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemAction);

exports.default = _default;