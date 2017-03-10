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
