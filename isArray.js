
const a = {}

a.b = [1,2,3,4,5]

//console.log(a.b)
//console.log(a.c)
console.log(typeof a.c === 'undefined')
console.log(typeof a.b !== 'undefined')
console.log(Array.isArray(a.b) === true)
console.log(Array.isArray(a.c) === false)
