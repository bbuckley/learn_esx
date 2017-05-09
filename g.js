export default class Foo {}

// console.log(Foo);
// console.log(new Foo());

let a = {
  foo: 1,
  bar: 2,
  fizz: 3
};

// console.log(a)

export const b = reducer => {
  const getState = () => [1, 2, 3];
  const dispatch = () => [11, 22, 33];
  const subscribe = () => [111, 222, 333];

  return {
    getState,
    dispatch,
    subscribe
  };
};

// console.log(b, b(), b().getState(), b().subscribe(), b().dispatch())

// console.log(Foo);
