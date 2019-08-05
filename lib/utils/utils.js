"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.string.starts-with");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationModule = exports.removeNamespace = exports.transformKeys = exports.prepareValueForInput = exports.inputTypeForPrototype = exports.cloneObject = exports.getViewport = exports.round = exports.range = exports.angle360FromPositions = exports.angleFromPositions = void 0;

var _assoc = _interopRequireDefault(require("ramda/src/assoc"));

var _compose = _interopRequireDefault(require("ramda/src/compose"));

var _keys = _interopRequireDefault(require("ramda/src/keys"));

var _reduce = _interopRequireDefault(require("ramda/src/reduce"));

var _pickBy = _interopRequireDefault(require("ramda/src/pickBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angleFromPositions = function angleFromPositions(cx, cy, ex, ey) {
  var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
  return theta * 180 / Math.PI;
};

exports.angleFromPositions = angleFromPositions;

var angle360FromPositions = function angle360FromPositions(cx, cy, ex, ey) {
  var angle = angleFromPositions(cx, cy, ex, ey);
  return angle < 0 ? 360 + angle : angle;
};

exports.angle360FromPositions = angle360FromPositions;

var range = function range() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var _start = 0,
      _stop = start;

  if (stop !== null) {
    _start = start;
    _stop = stop;
  }

  var length = Math.max(Math.ceil((_stop - _start) / step), 0);

  var _range = Array(length);

  for (var idx = 0; idx < length; idx += 1, _start += step) {
    _range[idx] = _start;
  }

  return _range;
};

exports.range = range;

var round = function round(number, decimals) {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    var decimalPower = Math.pow(10, decimals);
    return Math.round(parseFloat(number) * decimalPower) / decimalPower;
  }

  return NaN;
};

exports.round = round;

var getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  };
};

exports.getViewport = getViewport;

var cloneObject = function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
};

exports.cloneObject = cloneObject;

var inputTypeForPrototype = function inputTypeForPrototype(prototype) {
  if (prototype === Date) return 'date';
  if (prototype === Number) return 'number';
  if (prototype === Boolean) return 'checkbox';
  return 'text';
};

exports.inputTypeForPrototype = inputTypeForPrototype;

var prepareValueForInput = function prepareValueForInput(value, type) {
  if (type === 'date') return new Date(value).toISOString().slice(0, 10);

  if (type === 'checkbox') {
    return value ? 'on' : '';
  }

  return value;
};

exports.prepareValueForInput = prepareValueForInput;

var transformKeys = function transformKeys(fn) {
  return function (obj) {
    var addTransformedKey = function addTransformedKey(result, key) {
      return (0, _assoc.default)(fn(key), obj[key], result);
    };

    return (0, _reduce.default)(addTransformedKey, {}, (0, _keys.default)(obj));
  };
};

exports.transformKeys = transformKeys;

var removeNamespace = function removeNamespace(namespace) {
  return function (key) {
    var capitalized = key.substr(namespace.length);
    return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
  };
};

exports.removeNamespace = removeNamespace;

var getAnimationModule = function getAnimationModule(animation, theme) {
  return (0, _compose.default)(transformKeys(removeNamespace(animation)), (0, _pickBy.default)(function (v, k) {
    return k.startsWith(animation);
  }))(theme);
};

exports.getAnimationModule = getAnimationModule;