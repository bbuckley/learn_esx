const e = [
  { id: 1, name: 'david', age: 58, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 2, name: 'zbri', age: 57, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 33, name: 'mom', age: 84, dob: '9/7/1932', doe: '1/3/1970' },
  { id: 4, name: 'karl', age: 55, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 7, name: 'www' },
  { id: 8 },
  { id: 9, name: "" },
  { id: 5, name: 'ralph', age: 53, dob: '12/31/1958', doe: '1/1/2999' },
  { id: 6, name: 'jim', age: 52, dob: '12/31/1958', doe: '1/1/2999' },
]








// console.log(a.sort( (a, b) => a < b ? -1 : 1) );
// console.log(a.sort( (a, b) => a < b ? 1 : -1) );
// console.log(a.map(e => e.name));
// console.log(a.sort(e => e.age));
// console.log(a.sort( (a, b) => a.age - b.age) );
// console.log(a.sort( (a, b) => a.name.length - b.name.length) );
// console.log(a.sort( (a, b) => b.name.length - a.name.length) );
// console.log(a.sort( (a, b) => b.age - a.age) );

const sort = (a,b) => {
  const x = 'name'
  let a1 = a[x]
  let b1 = b[x]
  if(a1 === undefined) a1 = 'zzzzzz'
  if(b1 === undefined) b1 = 'zzzzzz'

  if (a1 < b1) return -1
  if (a1 > b1) return 1
  return 0
}

const sort_old = (a,b) => {
  const x = 'name'
  console.log(a[x], b[x]);
  if (a[x] < b[x]) return -1
  if (a[x] > b[x]) return 1
  return 0
}

const id = (a, b) =>  a.id - a.id
const age = (a, b) => b.age - a.age
const name = (a, b) => b.name - a.name
const dob = (a, b) =>  new Date(a.dob) - new Date(b.dob)

console.log(e.sort(sort))

const date_filter = (field, op, date1) => {

  return (t) => {
      if(t[field] === undefined){ return false }

      return true
  }
}

// const date_filter = (t) => {
//   if(t.dob === undefined) { return false }
//
//   return true
// }
console.log(e.filter(date_filter('dob')).length)



const u = [13,11,11,1,5,5,6,9]
console.log(u);
console.log([...new Set(u)])
console.log([...new Set(u)].sort())
console.log(e.map(x => x.dob))
console.log( [... new Set(e.map(x => x.dob))] )

const arr = [{ id:787878, dob:'112020'}, { id:787, dob:'1/1/2014'}, {}, { id:788, dob:'12/31/1999'}, {}];
for (const [index, elem] of arr.entries()) {
  console.log(`index = ${index}, elem = ${elem}, dob = ${elem.dob}`);
}
