"use strict";

var b = {
  foo: "testser",

  bar: 2,

  baz: function baz(a) {
    return a * a;
  },

  fizz: function fizz(a) {
    return a * a * a;
  },

  buzz: function buzz(a, b) {
    var aa = 3;
    var bb = 33;
    return 8888 + a + b + aa + bb;
  }
};

console.log(b);
console.log(b.baz(), b.baz(9), b.fizz(2), b.buzz(22, 33));

// module.export =  b