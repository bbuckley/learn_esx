
function matcher(regex, input) {
  return () => {
    const match = regex.exec(input)
    const lastIndex = regex.lastIndex
    return { lastIndex, match }
  }
}
// const input = 'haha haha haha'
// const nextGlobal = matcher(/ha/g, input)
// console.log(nextGlobal()) // <- { lastIndex: 2, match: ['ha'] }
// console.log(nextGlobal()) // <- { lastIndex: 4, match: ['ha'] }
// console.log(nextGlobal()) // <- { lastIndex: 7, match: ['ha'] }
// const nextSticky = matcher(/ha/y, input)
// console.log(nextSticky()) // <- { lastIndex: 2, match: ['ha'] }
// console.log(nextSticky()) // <- { lastIndex: 4, match: ['ha'] }
// console.log(nextSticky()) // <- { lastIndex: 0, match: null }

console.log();
const test = matcher(/abc/y, 'abcabcxaxabc')
console.log(test())
console.log(test())
console.log(test())


function remove_one_f(a){
  let n = 0;
  return () => {
    n++;
    a = a.reverse();
    return { a, n }
  }
}

const r = remove_one_f([11,44,66,88])
console.log(r());
console.log(r());
console.log(r());
console.log([r(), r(), r()]);
const a = [r, r, r];
