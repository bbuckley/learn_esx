"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _console;

var _g = require("./g");

var _g2 = _interopRequireDefault(_g);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_g2.default, new _g2.default(), { b: _g.b });

console.log(_g.b, (0, _g.b)().getState());

var a = [22, 33, 55];
var f = function f() {
  return 2;
};
var g = function g(e) {
  return 3 * e;
};

console.log(a);
console.log(f(), g(4));
console.log(a.map(g));
console.log(a.map(function (e) {
  return 10 * e;
}));

(_console = console).log.apply(_console, a.concat([1000, 2000]));

var bb = [].concat(a, [11111, 22222]);
console.log(bb);

var c = [11111].concat(a, [22222]);
console.log(c);

console.log([].concat(a, [0, 0], a));

console.log([].reduce(function (a, b) {
  return a + b;
}, 0));

var foo = {
  bar: 1,
  baz: "bar"
};

console.log(foo);

// const xxx = { ...foo, user: 2};

var initialState = {};

function todoApp() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return _extends({}, state, { visibilityFilter: action.filter });
    default:
      return state;
  }
}