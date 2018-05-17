'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.NavDrawer = exports.Sidebar = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _Sidebar = require('./Sidebar');

var _NavDrawer = require('./NavDrawer');

var _Panel = require('./Panel');

var _drawer = require('../drawer');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injectTheme = function injectTheme(component) {
  return (0, _reactCssThemr.themr)(_identifiers.LAYOUT, _theme2.default)(component);
};
var ThemedNavDrawer = injectTheme((0, _NavDrawer.navDrawerFactory)(_drawer.Drawer));
var ThemedSidebar = injectTheme((0, _Sidebar.sidebarFactory)(_drawer.Drawer));
var ThemedPanel = injectTheme(_Panel.Panel);

exports.Sidebar = ThemedSidebar;
exports.NavDrawer = ThemedNavDrawer;
exports.Panel = ThemedPanel;