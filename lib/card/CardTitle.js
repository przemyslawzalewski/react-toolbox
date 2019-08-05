"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.string.small");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTitleFactory = exports.CardTitle = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var factory = function factory() {
  var CardTitle = function CardTitle(_ref) {
    var _classnames;

    var children = _ref.children,
        className = _ref.className,
        subtitle = _ref.subtitle,
        theme = _ref.theme,
        title = _ref.title,
        other = _objectWithoutProperties(_ref, ["children", "className", "subtitle", "theme", "title"]);

    var classes = (0, _classnames2.default)(theme.cardTitle, (_classnames = {}, _defineProperty(_classnames, theme.small, false), _defineProperty(_classnames, theme.large, true), _classnames), className);
    return _react.default.createElement("div", _extends({
      className: classes
    }, other), _react.default.createElement("div", null, title && _react.default.createElement("h5", {
      className: theme.title
    }, title), children && typeof children === 'string' && _react.default.createElement("h5", {
      className: theme.title
    }, children), subtitle && _react.default.createElement("p", {
      className: theme.subtitle
    }, subtitle), children && typeof children !== 'string' && children));
  };

  CardTitle.propTypes = {
    children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]),
    className: _propTypes.default.string,
    subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    theme: _propTypes.default.shape({
      large: _propTypes.default.string,
      title: _propTypes.default.string,
      small: _propTypes.default.string,
      subtitle: _propTypes.default.string
    }),
    title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
  };
  return CardTitle;
};

exports.cardTitleFactory = factory;
var CardTitle = factory();
exports.CardTitle = CardTitle;

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardTitle);

exports.default = _default;