
const a = {
  foo: ['a','b'],
  bar: [],
}

const b = {
  xxx: ['a','b'],
  yyy: 1,
  zzz: ['a', '111'],
}
console.log({...a});
console.log({...a, foo: 888});

console.log(a.foo);

console.log(a.baz);

console.log(Array.isArray(a.baz) === false);
console.log(Array.isArray(a.bar) === false);

// console.log({...a, foo: a.foo.filter(e => e !== '[blank]')});

// console.log({...a, bar: a.baz.filter(e => e !== '[blank]')});
