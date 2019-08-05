"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _overlay = require("../overlay");

var _Drawer = require("./Drawer");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = (0, _Drawer.drawerFactory)(_overlay.Overlay);
var ThemedDrawer = (0, _reactCssThemr.themr)(_identifiers.DRAWER, _theme.default)(Drawer);
exports.Drawer = ThemedDrawer;
var _default = ThemedDrawer;
exports.default = _default;