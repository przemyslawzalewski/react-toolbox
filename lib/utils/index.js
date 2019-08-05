"use strict";

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  events: true,
  prefixer: true,
  time: true
};
Object.defineProperty(exports, "events", {
  enumerable: true,
  get: function get() {
    return _events.default;
  }
});
Object.defineProperty(exports, "prefixer", {
  enumerable: true,
  get: function get() {
    return _prefixer.default;
  }
});
Object.defineProperty(exports, "time", {
  enumerable: true,
  get: function get() {
    return _time.default;
  }
});
exports.default = void 0;

var _events = _interopRequireDefault(require("./events"));

var _prefixer = _interopRequireDefault(require("./prefixer"));

var _time = _interopRequireDefault(require("./time"));

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  events: _events.default,
  prefixer: _prefixer.default,
  time: _time.default
};
exports.default = _default;