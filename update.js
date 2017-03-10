

const state = [
  { id: '333', name: "Goran" },
  { id: '44444', name: "Peter" },
  { id: '123', name: "David", foo: 333 },
  { id: '1234', name: "Brian", bar: 777 },
]

let xxx = state.findIndex(({name}) => name === "Peter");
console.log('xxx='+ xxx);
console.log(`xxx=${xxx}`);
xxx = state.findIndex(({id}) => id === 333);
console.log(`xxx=${xxx}`);



// you can use es6 Array.prototype.findIndex to find index of the object
// let index = state.findIndex(({name}) => name === "Peter");
const index = 1;
var field = 'name';
var value = 'Zika';

var newState = [
  ...state.slice(0, index),
  {
    ...state[index],
    [field]: value
  },
  ...state.slice(index + 1)
];

console.log(newState);
/*
  [
    {name: "Goran"},
    {name: "Zika"}
  ]
*/

//const x = [...state.items.slice(0, action.payload.value), ...state.items.slice(action.payload.value + 1 )]

const idx = newState.findIndex(({id}) => id === '333');
console.log(idx);
const x = [...newState.slice(0, idx), ...newState.slice(idx + 1 )]
console.log(x);

const xx = { a: 22, b: 6 }
console.log(Object.keys({ a: 22, b: 6 }).length, Object.keys({}).length);

console.log(Object.keys({ id: 4 }).includes('id'), Object.keys({}).includes('id'))
console.log(Object.keys({ did: 4, id: 33 }).includes('id'))


console.log(state);
// wnat to update 123 with David => David B. and bar: 999
xxx = state.findIndex(({id}) => id === "123");
const newOne = { id: '123', name: 'David B.', foo: 333, bar: 999}
console.log(xxx); //if xxx != -1 then...
const state2 = [
  ...state.slice(0, xxx),
  newOne,
  ...state.slice(xxx + 1)
];

//const state2 = state
console.log(state2);
