const a = [
  {id: 1, foo: 33},
  {id: 22, foo: 23},
  {id: 333, foo: 'foo'}
]

console.log(a);
//console.log(a.findIndex((x) => x.id === 222)); // -1
//console.log(a.findIndex((x) => x.id === 22)); // 1
//console.log(a.findIndex(({id}) => id === 22)); // 1

// if(a.filter(({id}) => id === 22).length !== 0){
//   console.log('found' + JSON.stringify(a.filter(({id}) => id === 22)))
// }
// else {
//   console.log('not found'+ JSON.stringify(a.filter(({id}) => id === 22)))
// }
//
// if(a.findIndex((x) => x.id === 22) === -1){
//   console.log('notfound');
// }
// else {
//   console.log('found');
// }

// if(a.findIndex((x) => x.id === 22) === -1){
//   console.log('notfound');
// }
// else {
//   console.log('found');
// }

// const i = -1
// const b =  [...a.slice(0, i), ...a.slice(i + 1)]
// console.log(b);

const del = (a, aid) => {
  const i = a.findIndex(({id}) => id === aid)
  if(i === -1) {
    return a //id not found
  } else {
    return [...a.slice(0, i), ...a.slice(i + 1)]
  }
}


console.log(del(a, 222))
console.log(del(a, 3338))
