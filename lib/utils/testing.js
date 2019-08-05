"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  renderComponent: function renderComponent(Component) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var component = _reactAddonsTestUtils.default.renderIntoDocument(_react.default.createElement(Component, props));

    if (state !== {}) {
      component.setState(state);
    }

    return component;
  },
  shallowRenderComponent: function shallowRenderComponent(component, props) {
    var shallowRenderer = _reactAddonsTestUtils.default.createRenderer();

    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    shallowRenderer.render(_react.default.createElement(component, props, children.length > 1 ? children : children[0]));
    return shallowRenderer.getRenderOutput();
  }
};
exports.default = _default;