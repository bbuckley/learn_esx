const a = [{ foo: 1, bar: 2}]

//console.log(a[0]);
//console.log({...a[0], id: 3});
const b = { id1: {foo: 1, bar: 2}, id2: {foo: 12, bar: 22} }
const k = Object.keys(b);
// console.log(k);
// console.log(k.map(k => Object.assign({ id: k }, b[k])  ));
// console.log(k.map(k => ({...b[k], id: k}) ));

import { v4 } from 'uuid'
console.log(b)
const id = v4()
b[id] = { id: id }
console.log(b);


const x = { brr: 1, ...b, rr: 44}
console.log();
console.log(x);

const props = { aaa: 1, bbb: 2, ccc: 4 }
const { aaa , ccc, ddd } = props
console.log(aaa, ccc, ddd)

console.log(props.ccc);

const ar1 = [1,2,3]
const ar2 = [222,223,445]
const ar3 = [...ar1, ...ar2]
const ar4 = [...ar1]
console.log(ar3);
console.log(ar4);
