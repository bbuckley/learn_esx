const a = {
  foo: 1,
  bar: "bar",
  baz: 3
};

console.log(a, a.baz, Object.keys(a));

const { foo, bar, baz } = a;

console.log({ foo: 3, bar, baz });
console.log({ foo, bar, baz });
