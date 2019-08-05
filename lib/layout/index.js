"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.NavDrawer = exports.Sidebar = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Sidebar = require("./Sidebar");

var _NavDrawer = require("./NavDrawer");

var _Panel = require("./Panel");

var _drawer = require("../drawer");

var _theme = _interopRequireDefault(require("./theme.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injectTheme = function injectTheme(component) {
  return (0, _reactCssThemr.themr)(_identifiers.LAYOUT, _theme.default)(component);
};

var ThemedNavDrawer = injectTheme((0, _NavDrawer.navDrawerFactory)(_drawer.Drawer));
exports.NavDrawer = ThemedNavDrawer;
var ThemedSidebar = injectTheme((0, _Sidebar.sidebarFactory)(_drawer.Drawer));
exports.Sidebar = ThemedSidebar;
var ThemedPanel = injectTheme(_Panel.Panel);
exports.Panel = ThemedPanel;