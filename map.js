

console.log([1 , 5, 3].map(x => 2 * x));

let y = [10, 3, 88]
console.log([4,5,6].map(x => 2 * x  * y[0], y));

const a = 1
const b = "tet"
b.length

console.log([0,1,2,3].map((f, i, a) => 2 * f * i * a[3]));

let c = { a: 0, b: 2}

const x = () => {
  const y = 2
  return 8 * y
}
const xx = () => x + x
console.log(x(), x, xx(), xx);
