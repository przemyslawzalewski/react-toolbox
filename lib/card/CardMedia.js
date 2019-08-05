"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardMedia = function CardMedia(_ref) {
  var aspectRatio = _ref.aspectRatio,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      contentOverlay = _ref.contentOverlay,
      image = _ref.image,
      theme = _ref.theme,
      other = _objectWithoutProperties(_ref, ["aspectRatio", "children", "className", "color", "contentOverlay", "image", "theme"]);

  var classes = (0, _classnames3.default)(theme.cardMedia, _defineProperty({}, theme[aspectRatio], aspectRatio), className);
  var innerClasses = (0, _classnames3.default)(theme.content, _defineProperty({}, theme.contentOverlay, contentOverlay));
  var bgStyle = {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? "url('".concat(image, "')") : undefined
  };
  return _react.default.createElement("div", _extends({
    style: bgStyle,
    className: classes
  }, other), _react.default.createElement("div", {
    className: innerClasses
  }, children));
};

exports.CardMedia = CardMedia;
CardMedia.propTypes = {
  aspectRatio: _propTypes.default.oneOf(['wide', 'square']),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  contentOverlay: _propTypes.default.bool,
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  theme: _propTypes.default.shape({
    cardMedia: _propTypes.default.string,
    content: _propTypes.default.string,
    contentOverlay: _propTypes.default.string,
    square: _propTypes.default.string,
    wide: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardMedia);

exports.default = _default;