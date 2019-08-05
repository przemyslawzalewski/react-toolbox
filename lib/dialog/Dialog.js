"use strict";

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogFactory = exports.Dialog = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var _ActivableRenderer = _interopRequireDefault(require("../hoc/ActivableRenderer"));

var _Button = _interopRequireDefault(require("../button/Button"));

var _Overlay = _interopRequireDefault(require("../overlay/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(Overlay, Button) {
  var Dialog = function Dialog(props) {
    var actions = props.actions.map(function (action, idx) {
      var className = (0, _classnames3.default)(props.theme.button, _defineProperty({}, action.className, action.className));
      return _react.default.createElement(Button, _extends({
        key: idx
      }, action, {
        className: className
      })); // eslint-disable-line
    });
    var className = (0, _classnames3.default)([props.theme.dialog, props.theme[props.type]], _defineProperty({}, props.theme.active, props.active), props.className);
    var _props$portalProps = props.portalProps,
        portalProps = _props$portalProps === void 0 ? {} : _props$portalProps;
    return _react.default.createElement(_Portal.default, _extends({
      className: props.theme.wrapper
    }, portalProps), _react.default.createElement(Overlay, {
      active: props.active,
      className: props.theme.overlay,
      lockScroll: props.lockScroll,
      onClick: props.onOverlayClick,
      onEscKeyDown: props.onEscKeyDown,
      onMouseDown: props.onOverlayMouseDown,
      onMouseMove: props.onOverlayMouseMove,
      onMouseUp: props.onOverlayMouseUp,
      theme: props.theme,
      themeNamespace: "overlay"
    }), _react.default.createElement("div", {
      "data-react-toolbox": "dialog",
      className: className
    }, _react.default.createElement("section", {
      role: "body",
      className: props.theme.body
    }, props.children), actions.length ? _react.default.createElement("nav", {
      className: props.theme.navigation
    }, actions) : null));
  };

  Dialog.propTypes = {
    actions: _propTypes.default.arrayOf(_propTypes.default.shape({
      className: _propTypes.default.string,
      label: _propTypes.default.string,
      children: _propTypes.default.node
    })),
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    lockScroll: _propTypes.default.bool,
    onEscKeyDown: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    onOverlayMouseDown: _propTypes.default.func,
    onOverlayMouseMove: _propTypes.default.func,
    onOverlayMouseUp: _propTypes.default.func,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      body: _propTypes.default.string,
      button: _propTypes.default.string,
      dialog: _propTypes.default.string,
      navigation: _propTypes.default.string,
      overflow: _propTypes.default.string,
      overlay: _propTypes.default.string,
      wrapper: _propTypes.default.string
    }),
    type: _propTypes.default.string
  };
  Dialog.defaultProps = {
    actions: [],
    active: false,
    type: 'normal'
  };
  return (0, _ActivableRenderer.default)()(Dialog);
};

exports.dialogFactory = factory;
var Dialog = factory(_Overlay.default, _Button.default);
exports.Dialog = Dialog;

var _default = (0, _reactCssThemr.themr)(_identifiers.DIALOG)(Dialog);

exports.default = _default;