
const f = () => 1

const g = function(){
  let b = true;
  return function(){
    b = !b
    return b
  }
}
const h = g();

console.log(h());
console.log(h());
console.log(h());


const ii = (function(){
  let b = 0;
  return function(){
    b++
    return b
  }
})()

const i = (() => {
  let b = 0;
  return () => { b++; return b }
})()

const _times = x => f => {
  if (x > 0) {
    f()
    _times (x - 1) (f)
  }
}


import { times, xxx, random_uuid } from './helpers.js'

times(5, () => console.log('ii=' + ii()))
times(3, () => console.log('i=' + i()))
times(3, () => console.log(Math.random()))

xxx(3, () => console.log(Math.random()))

times(3, () => console.log('test'))

console.log([...Array(4)].map(() => Math.random()));
const q = [...Array(3)].map(() => Math.random())
console.log(q);


console.log(random_uuid(3));
