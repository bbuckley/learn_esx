

import faker from 'faker'

export const format = (d) => {
  const dd = d.getDate();
  const m = d.getMonth() + 1;  //months are zero based
  const y = d.getFullYear();
  return m + "/" + dd + "/" + y
}

if (require.main === module) {
  console.log(faker.name.findName());
  console.log(faker.name.firstName());
  console.log(faker.name.lastName());

console.log(format(new Date('1/10/2015')))
console.log(format(new Date('02/29/2015')))

console.log();

console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());
console.log(format(faker.date.past(10)));


const times_map = x=> f=> {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

console.log(format(faker.date.past(4)))

console.log(Array(8).fill().map((_, i) => i * i))

const xxx = Array(5).fill()
  .map(x=> format(faker.date.past(1)))
console.log(xxx);

const xxxx = xxx
  .sort((a,b) => new Date(a) > new Date(b))
console.log(xxxx)

console.log(Array(5).fill().map(x => format(faker.date.past(1))))
console.log(Array(4).fill().map(x => format(faker.date.future(10))))

var options = { min: 0, max: 9 }
console.log(faker.random.number(options));

const options = { min: 0, max: 9 }
const ssn = () => '' + faker.random.number(options) + faker.random.number(options) + faker.random.number(options) +'-'+
  faker.random.number(options) + faker.random.number(options) +'-'+
  faker.random.number(options)+ faker.random.number(options) + faker.random.number(options) + faker.random.number(options)
console.log(ssn(), ssn(), ssn());

// const pbc_a = ['David','Brian','Karl','Ralph','Jim']
// const n = faker.random.number(pbc_a.length-1)
//const pbc = () => pbc_a[n]

const pbc = () => {
  const pbc_a = ['David','Brian','Karl','Ralph','Jim']
  const n = faker.random.number(pbc_a.length-1)
  return pbc_a[n]
}

console.log(pbc(), pbc(), pbc(), pbc(), pbc(), pbc(), pbc());


const aa = [1,5,9]
const bb = [11,22]
const cc = [333, 444]
console.log([...aa, ...bb, 66, ...aa]);
console.log(cc);
console.log([...Array(5).keys()]);
console.log([...Array(7||0)].map((v,i)=>i));
console.log([...Array(7)].map((v,i)=>3));
console.log([...Array(7)].map(()=>3));
console.log([
  1,
  2,
  ...[...Array(7)].map(()=>3),
  4,
  ...[...Array(3)].map(()=>1),
]);
console.log([...Array(7)].map(()=>3));

}
