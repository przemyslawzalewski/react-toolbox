'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.navigationFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
  var Navigation = function Navigation(_ref) {
    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        type = _ref.type;

    var _className = (0, _classnames2.default)(theme[type], className);

    return _react2.default.createElement(
      'nav',
      { 'data-react-toolbox': 'navigation', className: _className },
      children
    );
  };

  Navigation.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    theme: _propTypes2.default.shape({
      button: _propTypes2.default.string,
      horizontal: _propTypes2.default.string,
      link: _propTypes2.default.string,
      vertical: _propTypes2.default.string
    }),
    type: _propTypes2.default.oneOf(['vertical', 'horizontal'])
  };

  Navigation.defaultProps = {
    className: '',
    type: 'horizontal'
  };

  return Navigation;
};

var Navigation = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.NAVIGATION)(Navigation);
exports.navigationFactory = factory;
exports.Navigation = Navigation;