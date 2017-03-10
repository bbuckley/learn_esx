var {foo, bar: baz} = {foo: 0, bar: 1} //gets you foo: 0 and baz: 1
//console.log(foo, baz);

//import { v4 } from 'node-uuid'
import { Matrix, Tc, Person } from './person'

//const id = v4()
//console.log([id, v4(), '12/11/1958']);

const p = new Person('4/1/2016','1/1/1958','1/1/2007','1/1/2030')

console.log(p, p.id(), p.dob(), p.doe(), p.dot(), p.ageAt(), p.ha(), p.ta())
console.log(Matrix);
// console.log(Matrix.calcTypes)
// console.log(Matrix.calcCategories);

console.log(new Tc('001-11-1111'));

console.log([...Array(10)].map(x=>12))
console.log([...Array(10)].map(x => { const y = 6; return y * 13 }))

function deleteProperty(state, id) {
    let  {[id]: deleted, ...newState} = state;
    return newState;
}

let tcs = {
  key1: {},
  key2: {},
  key33: {},
}

const state = {}
state.tcs = tcs
console.log(state);

console.log(deleteProperty(tcs,'key2'));

const t = {
  key1: { calc_type: "TermAB", dob: "12/11/1958"},
  key2: { calc_type: "UI1", dob: "1/1/1970"},
  key33:  { calc_type: "TermAB", dob: "1/1/1990"},
}
console.log(t);

console.log(Object.keys(t).map(k => t[k]));
console.log(Object.keys(t).filter(k => t[k].calc_type !== 'TermAB'));
