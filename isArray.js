
const a = {}

a.b = [1,2,3,4,5]

const d = 0

console.log(typeof a.c === 'undefined')
console.log(typeof a.b !== 'undefined')
console.log(typeof(a.b) !== 'undefined')
console.log((typeof d === 'undefined') === false)
console.log(Array.isArray(a.b) === true)
console.log(Array.isArray(a.c) === false)
