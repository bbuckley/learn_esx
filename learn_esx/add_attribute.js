const a = {
  foo: 1,
  bar: 2,
};

const b = { ...a, baz: a.foo + a.bar, baxf: () => a.foo + a.bar };

const as = [
  {
    foo: 1,
    bar: 2,
  },
  {
    foo: 11,
    bar: 22,
  },
  { foo: '1/1/1958', bar: '1/1/2011' },
  { foo: '0', bar: 'a' },
  {},
];

console.log({ a, b });

console.log(
  as.map(a => {
    let b = new Date(a.foo).getFullYear()
    let e = new Date(a.bar).getFullYear()
    let age = e - b;
    if (Number.isNaN(age)) age = '';
    return { ...a, age };
  }),
);
