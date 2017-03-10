'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Just playing around
(function (con) {
  ['yes', 'no', 'maybe'].forEach(function (item) {
    con.log(item);
  });
})(console);

var x = 1;
var y = 5;
//y = 6;

var Foo = function Foo() {
  _classCallCheck(this, Foo);
};

var Bar = function Bar() {
  _classCallCheck(this, Bar);
};

console.log(new Bar());

var bb = { aaa: 111, bbb: 222, ccc: 333, ddd: 444 };
var bbb = bb.bbb;

console.log(bbb);

var a = ["Hydrogen", "Helium", "Lithium", "Beryl­lium"];

var a2 = a.map(function (s) {
  return s.length;
});
var a3 = a.map(function (s) {
  return s.length;
});

var f1 = function f1(s) {
  return s.length;
};
var f2 = function f2(a, b) {
  return a + b;
};
// console.log(a2, a3, a.map( f1 ).reduce(f2), a.map( s => s.length ).reduce((a, b) => a + b));

var obj = {
  i: 10,
  b: function b() {
    return "this is a test";
  }
};
//console.log(obj.i, obj.b, obj.b());