import Foo, {b} from './g'

console.log(Foo, new Foo(), {b});
console.log(b, b().getState());

const a = [22,33,55]
const f = () => 2
const g = (e) => 3 * e

console.log(a)
console.log(f(), g(4))
console.log(a.map(g))
console.log(a.map(e => 10*e))

console.log(...a,1000,2000)

const bb = [...a,11111,22222]
console.log(bb)

const c = [11111,...a,22222]
console.log(c)

console.log([...a, 0, 0, ...a, ...a])

console.log([].reduce((a,b)=> a + b, 0))


const foo = {
  bar: 1,
  baz: "bar"
}

console.log(foo);

const xxx = { ...foo, user: 2};
console.log(xxx);
console.log({ ...foo, user: 2, bar: 9, baz: 3});

const initialState = {
   foo: 3,
   xxx: 888,
   order: 'DOT'
}

const initialAction = {
  type: "init"
}

function todoApp(state = initialState, action = initialAction) {
  switch (action.type) {
    case "Foo":
      return { ...state, bar: 888 }
    case "TEST":
      return { ...state, filter: action.filter }
    case "ORDER":
      return { ...state, order: action.order, ooo: 9999}
    default:
      return state
  }
}
console.log("--");
let a1 = null;
a1 = todoApp(); console.log(a1);
a1 = todoApp(a1, { type: "TEST" , filter: "t"}); console.log(a1);
a1 = todoApp(a1, { type: "Foo" }); console.log(a1);
a1 = todoApp(a1, { type: "TEST" }); console.log(a1);
a1 = todoApp(a1, { type: "ORDER", order: 88 }); console.log(a1);
a1 = todoApp(a1, { type: "TEST" }); console.log(a1);


const aa = [22,33,44,55]
//console.log(aa);
console.log([...aa.slice(0,2),...aa.slice(3)])
const b2 = [...aa.slice(0,2),...aa.slice(3)]
console.log(b2);


const a3 = [{ type: "TEST"},{ type: "ORDER", order: 88 },{type: "FILTER", filter: 't'}]

console.log('---');
a3.forEach(
  e => {
    let xx
    xx = todoApp(xx, e); console.log(xx);
  }
)

const bbb = {
  1: "one",
  2: "two",
  3: "three",
}
console.log(Object.keys(bbb).length);


console.log(bbb);
const bbbb = {...bbb}
delete bbbb[2]
console.log(bbbb);
console.log(Object.keys(bbbb).length);


const ccc = {
  state: {
    tcs: {}
  }
}
console.log(ccc);
const tc1 = { id: 1, dob: '12/11/1958'}
const tc2 = { id: 2, dob: '12/11/1972'}
const tcs = {}
tcs[1] = tc1
tcs[2] = tc2
ccc.state.tcs = tcs
console.log(ccc);

import { v4 } from 'node-uuid'
const u1 = v4()
const u2 = v4()

const cccc = {
  state: {
    tcs: {
      'd129190f-bb9e-444b-a561-e28859d86595': { id: u1, dob: '12/11/1958'},
      2: { id: u2, dob: '12/11/1972'},
    }
  }
}
console.log(cccc);
console.log(cccc.state.tcs[2].dob);
console.log(cccc.state.tcs['d129190f-bb9e-444b-a561-e28859d86595'].dob);


const dddd = {
  id: 1213,
  bar: 12222
}

console.log(dddd);

const prop = {
  store: 333
}
const ss = ({store}) => {
  console.log('store is '+ store);
}
ss(prop)
