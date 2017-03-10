

function isBigEnough(e) {
  return e >= 15;
}

const isBig = e => e >= 15

console.log([12, 5, 8, 130, 44].find(isBigEnough)) // 130
console.log([12, 5, 8, 130, 44].find(isBig)) // 130

console.log([12, 5, 8, 130, 44].find(e => e >= 15)) // 130
console.log([12, 5, 8, 130, 44].find(e => e >= 150)) // undefined
