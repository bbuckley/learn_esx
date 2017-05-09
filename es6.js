const g = x => 2 * x;
const h = x => 15 * x;
const j = x => x + 100;
const i = x => h(g(j(x)));

//console.log([11,1 , 3, 5 ,10].map(x => i(x)));

const a = {
  b: 7777,
  c: 8888,
  d: 9999,
  e: 333,
};

const { b } = a;
const [aa, bb, { cc }] = [555, 777, { cc: 888 }];
console.log(b, aa, cc);
