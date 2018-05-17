'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTitleFactory = exports.CardTitle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var factory = function factory() {
  var CardTitle = function CardTitle(_ref) {
    var _classnames;

    var children = _ref.children,
        className = _ref.className,
        subtitle = _ref.subtitle,
        theme = _ref.theme,
        title = _ref.title,
        other = _objectWithoutProperties(_ref, ['children', 'className', 'subtitle', 'theme', 'title']);

    var classes = (0, _classnames3.default)(theme.cardTitle, (_classnames = {}, _defineProperty(_classnames, theme.small, false), _defineProperty(_classnames, theme.large, true), _classnames), className);

    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, other),
      _react2.default.createElement(
        'div',
        null,
        title && _react2.default.createElement(
          'h5',
          { className: theme.title },
          title
        ),
        children && typeof children === 'string' && _react2.default.createElement(
          'h5',
          { className: theme.title },
          children
        ),
        subtitle && _react2.default.createElement(
          'p',
          { className: theme.subtitle },
          subtitle
        ),
        children && typeof children !== 'string' && children
      )
    );
  };

  CardTitle.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
    className: _propTypes2.default.string,
    subtitle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    theme: _propTypes2.default.shape({
      large: _propTypes2.default.string,
      title: _propTypes2.default.string,
      small: _propTypes2.default.string,
      subtitle: _propTypes2.default.string
    }),
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };

  return CardTitle;
};

var CardTitle = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardTitle);
exports.CardTitle = CardTitle;
exports.cardTitleFactory = factory;