
//import { test, expect } from 'jest'
var jest = require('jest')
console.log(jest);

// import { expect } from 'expect'
// import { expect, test } from 'jest';
// import
// import { deepFreeze } from 'deep-freeze'

var deepFreeze = require('deep-freeze');
//
//
//
const addCounter = (list) => {
  list.push(0);
  return list;
};

const testAddCounter  = () => {
  const listBefore = []
  const listAfter = [0]

  it('blah',() => {
      expect(
        deepFreeze(listBefore)
        addCounter(listBefore)
      ).toEqual(listAfter,'should be equal')
  })

}
//   // ideepFreeze(listBefore)
// // test('blah, blah, blah...', () => {
// //   expect(
// //     addCounter(listBefore)
// //   ).to.toEqual(listAfter,'should be equal')
// // });
//
testAddCounter()
console.log("All tests pass");
