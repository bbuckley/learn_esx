import Superset from 'superset';

const tcs = [
  { id: 1, name: 'david', age: 58, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 2, name: 'zbri', age: 57, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 33, name: 'mom', age: 84, dob: '9/7/1932', doe: '1/3/1970' },
  { id: 4, name: 'karl', age: 55, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 7, name: 'www' },
  { id: 8, nm: '' },
  { id: 9, name: '' },
  { id: 5, name: 'ralph', age: 53, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 6, name: 'jim', age: 52, dob: '12/31/1958', doe: '1/1/2999' },
];

const keys = Array.from(
  tcs.reduce((a, b) => a.union(Object.keys(b)), new Superset()),
).sort();

const a = tcs.reduce((a,b) => {
  Object.keys(b).forEach(x => {
    b[x] ? console.log('x') : console.log('y');
    console.log(b[x]);
  })
  return a
}, {})


// const stats = tcs => {
//   return tcs.reduce((a, b) => {
//     Object.keys(b).forEach(k =>
//       console.log(k)
//     )
//     return a
//   }, {})
///}

console.log({ keys, a });
