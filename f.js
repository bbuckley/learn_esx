// let a = [1,2,66]
//
// let b = [...a, 4, 5]
//
// console.log(b);
// console.log(...b);


function sum (...args){
  // return args.reduce(function(a,b){ return a + b }, 0)
  // return args.reduce((a,b) => a + b, 0)
  return args.reduce((a,b) => {
    let x = 100
    return a + b
  }, 0)
}

console.log(sum(1,2,3));
console.log(sum(1,2,22));

const foo = {
  bar: 10,
  baz: 'test',
  x: 10
}

console.log(foo)

let { bar, baz, x } = foo

console.log(bar, baz, x);


function foobar(a,b=2){
  console.log(a,b)
}

foobar();

const zfoobar = function (a=33,b=2){
  console.log(a,b)
}
zfoobar();
