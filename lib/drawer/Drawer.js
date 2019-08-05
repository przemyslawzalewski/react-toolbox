"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = exports.drawerFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var _identifiers = require("../identifiers");

var _ActivableRenderer = _interopRequireDefault(require("../hoc/ActivableRenderer"));

var _Overlay = _interopRequireDefault(require("../overlay/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(Overlay) {
  var Drawer = function Drawer(_ref) {
    var active = _ref.active,
        children = _ref.children,
        className = _ref.className,
        insideTree = _ref.insideTree,
        onOverlayClick = _ref.onOverlayClick,
        onEscKeyDown = _ref.onEscKeyDown,
        theme = _ref.theme,
        type = _ref.type,
        withOverlay = _ref.withOverlay;

    var _className = (0, _classnames2.default)([theme.drawer, theme[type]], _defineProperty({}, theme.active, active), className);

    var content = _react.default.createElement("aside", {
      "data-react-toolbox": "drawer",
      className: _className
    }, children);

    return _react.default.createElement(insideTree ? 'div' : _Portal.default, {
      className: theme.wrapper
    }, withOverlay && _react.default.createElement(Overlay, {
      active: active,
      onClick: onOverlayClick,
      onEscKeyDown: onEscKeyDown,
      theme: theme,
      themeNamespace: "overlay"
    }), content);
  };

  Drawer.propTypes = {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    insideTree: _propTypes.default.bool,
    onEscKeyDown: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      drawer: _propTypes.default.string,
      left: _propTypes.default.string,
      right: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(['left', 'right']),
    withOverlay: _propTypes.default.bool
  };
  Drawer.defaultProps = {
    active: false,
    className: '',
    insideTree: false,
    type: 'left',
    withOverlay: true
  };
  return (0, _ActivableRenderer.default)()(Drawer);
};

exports.drawerFactory = factory;
var Drawer = factory(_Overlay.default);
exports.Drawer = Drawer;

var _default = (0, _reactCssThemr.themr)(_identifiers.DRAWER)(Drawer);

exports.default = _default;