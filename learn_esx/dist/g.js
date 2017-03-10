"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo() {
  _classCallCheck(this, Foo);
};

// console.log(Foo);
// console.log(new Foo());


exports.default = Foo;
var a = {
  foo: 1,
  bar: 2,
  fizz: 3
};

// console.log(a)


var b = exports.b = function b(reducer) {

  var getState = function getState() {
    return [1, 2, 3];
  };
  var dispatch = function dispatch() {
    return [11, 22, 33];
  };
  var subscribe = function subscribe() {
    return [111, 222, 333];
  };

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
};

// console.log(b, b(), b().getState(), b().subscribe(), b().dispatch())


// console.log(Foo);