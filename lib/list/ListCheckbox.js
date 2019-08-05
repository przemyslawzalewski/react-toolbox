"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCheckbox = exports.listCheckboxFactory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Checkbox = _interopRequireDefault(require("../checkbox/Checkbox"));

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(Checkbox, ListItemContent) {
  var ListCheckbox = function ListCheckbox(_ref) {
    var caption = _ref.caption,
        checked = _ref.checked,
        className = _ref.className,
        disabled = _ref.disabled,
        legend = _ref.legend,
        name = _ref.name,
        onBlur = _ref.onBlur,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        theme = _ref.theme;

    var _className = (0, _classnames2.default)(theme.item, theme.checkboxItem, _defineProperty({}, theme.disabled, disabled), className);

    return _react.default.createElement("li", {
      className: _className
    }, _react.default.createElement(Checkbox, {
      checked: checked,
      className: theme.checkbox,
      disabled: disabled,
      label: _react.default.createElement(ListItemContent, {
        caption: caption,
        legend: legend
      }),
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus
    }));
  };

  ListCheckbox.propTypes = {
    caption: _propTypes.default.string,
    checked: _propTypes.default.bool,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    legend: _propTypes.default.string,
    name: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    theme: _propTypes.default.shape({
      checkbox: _propTypes.default.string,
      checkboxItem: _propTypes.default.string,
      disabled: _propTypes.default.string,
      item: _propTypes.default.string
    })
  };
  ListCheckbox.defaultProps = {
    checked: false,
    disabled: false
  };
  return ListCheckbox;
};

exports.listCheckboxFactory = factory;
var ListCheckbox = factory(_Checkbox.default, _ListItemContent.default);
exports.ListCheckbox = ListCheckbox;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListCheckbox);

exports.default = _default;