
const aa = [
  { dob: '12/1/23', aa: 1 },
  { aa: 2 },
  { aa: 3 },
  { foo: 32, aa: 3 },
  { aa: 3 },{ aa: 44},{ aa: 44},
  {},{ foo: 32, aa: 3 },{}
]


//const x = a.reduce((a,b) => a = a + 1, 10 )

const field = 'aa'
const x = aa.reduce(
  (a,b) => {
    if(!a.hasOwnProperty(a[b[field]])){ a[b[field]] = 0 }
    a[b[field]] += 1
    return a
  }, {})

console.log('x=', x);

const pbc_map = aa.reduce(
  (a,b) => {
    if(!a.hasOwnProperty(a[b[field]])){ a[b[field]] = 0 }
    a[b[field]] = a[b[field]] + 1
    return a
  }, {})
console.log(pbc_map);



const h = { pbc: 77}
console.log(h.hasOwnProperty('pbc'));
