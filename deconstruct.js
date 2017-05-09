const x = {
  bar: 'this is bar',
  foo: 'this is foo',
  buzz: 'this is buzz',
};

const f = ({ bar, foo }, buzz) => {
  console.log(bar);
  console.log(foo);
  console.log(buzz);
  return 'test';
};

console.log(f(333, 444));
console.log();
console.log(f(x));
console.log();
console.log(f({ bar: 999, foo: 9999 }, 99999));

const g = ({ bar: barr, foo }, buzz) => {
  console.log(barr);
  console.log(foo);
  console.log(buzz);
  return 'test';
};
console.log();
console.log(g({ bar: 7, foo: 77 }, 777));

const a = [3, 5, 7, 9, 11];
let [first, , , , , , , , , , second, ...rest] = a;
console.log({ a, first, second, rest });
const b = [];
 [first, ...rest] = b;
console.log(b, first, rest);
