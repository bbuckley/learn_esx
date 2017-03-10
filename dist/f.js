'use strict';

// let a = [1,2,66]
//
// let b = [...a, 4, 5]
//
// console.log(b);
// console.log(...b);


function sum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // return args.reduce(function(a,b){ return a + b }, 0)
  // return args.reduce((a,b) => a + b, 0)
  return args.reduce(function (a, b) {
    var x = 100;
    return a + b;
  }, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 22));

var foo = {
  bar: 10,
  baz: 'test',
  x: 10
};

console.log(foo);

var bar = foo.bar;
var baz = foo.baz;
var x = foo.x;


console.log(bar, baz, x);

function foobar(a) {
  var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  console.log(a, b);
}

foobar();

var zfoobar = function zfoobar() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 33 : arguments[0];
  var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  console.log(a, b);
};
zfoobar();