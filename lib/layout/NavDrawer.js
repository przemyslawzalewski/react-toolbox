"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavDrawer = exports.navDrawerFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _Drawer = _interopRequireDefault(require("../drawer/Drawer"));

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var factory = function factory(Drawer) {
  var NavDrawer = function NavDrawer(_ref) {
    var _classnames;

    var active = _ref.active,
        className = _ref.className,
        clipped = _ref.clipped,
        permanentAt = _ref.permanentAt,
        pinned = _ref.pinned,
        theme = _ref.theme,
        rest = _objectWithoutProperties(_ref, ["active", "className", "clipped", "permanentAt", "pinned", "theme"]);

    var _className = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, theme.pinned, pinned), _defineProperty(_classnames, theme.clipped, clipped), _classnames), className);

    return _react.default.createElement(Drawer, _extends({}, rest, {
      active: active || pinned,
      className: _className,
      insideTree: true,
      theme: theme,
      themeNamespace: "navDrawer",
      withOverlay: !pinned
    }));
  };

  NavDrawer.propTypes = {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    clipped: _propTypes.default.bool,
    permanentAt: _propTypes.default.oneOf(['sm', 'smTablet', 'md', 'lg', 'lgTablet', 'xl', 'xxl', 'xxxl']),
    pinned: _propTypes.default.bool,
    right: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      clipped: _propTypes.default.string,
      pinned: _propTypes.default.string
    })
  };
  NavDrawer.defaultProps = {
    className: '',
    pinned: false
  };
  return NavDrawer;
};

exports.navDrawerFactory = factory;
var NavDrawer = factory(_Drawer.default);
exports.NavDrawer = NavDrawer;

var _default = (0, _reactCssThemr.themr)(_identifiers.LAYOUT)(NavDrawer);

exports.default = _default;