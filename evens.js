const evens = [2, 4, 6, 8, 10, 12, 14];
const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
const pairs = evens.map(v => ({ even: v, odd: v + 1 }));

const fives = [];
const threes = [];
odds.forEach(v => {
  if (v % 5 === 0) fives.push(v);
  if (v % 3 === 0) threes.push(v);
});

console.log({ evens, odds, nums, pairs, fives, threes });
