"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.navigationFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
  var Navigation = function Navigation(_ref) {
    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        type = _ref.type;

    var _className = (0, _classnames.default)(theme[type], className);

    return _react.default.createElement("nav", {
      "data-react-toolbox": "navigation",
      className: _className
    }, children);
  };

  Navigation.propTypes = {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    theme: _propTypes.default.shape({
      button: _propTypes.default.string,
      horizontal: _propTypes.default.string,
      link: _propTypes.default.string,
      vertical: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(['vertical', 'horizontal'])
  };
  Navigation.defaultProps = {
    className: '',
    type: 'horizontal'
  };
  return Navigation;
};

exports.navigationFactory = factory;
var Navigation = factory();
exports.Navigation = Navigation;

var _default = (0, _reactCssThemr.themr)(_identifiers.NAVIGATION)(Navigation);

exports.default = _default;