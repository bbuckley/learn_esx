import Superset from 'superset';

const a = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', ''];

const b = ['bbb', 'xxx', '', 'bbb'];

//const aa = new Superset(a);
//const bb = new Superset(b);
//const c = Array.from(aa.subtract(bb));

const c = Array.from(new Superset(a).subtract(new Superset(b)));
const d = Array.from(new Superset(a).union(new Superset(b)));
const e = Array.from(new Superset(a).union(b));
const f = new Superset(a).union(b);

const g = new Superset().union(a, b, ['ggg', 'ggg', []]);

console.log({ a, b, c, d, e, f, g });

console.log(a);

const h = ['a', 'b', 'c', 'd'];
const i = ['a', 'c', 'e'];
const j = Array.from(new Superset(h).subtract(new Superset(i)));
const k = h.filter(x => x !== 'c');
console.log({ j, k });

const l = { a: 111, b: 222, c: 333 };
const del = (obj, prop) => {
  let { [prop]: omit, ...res } = obj;
  return res;
};
const m = del(l, 'b');
console.log({ l, m });

const p = [{ tags: 'nrd, svc' }, {}, { tag: 'svc, 777' }, { tags: '7' }];
let p1 = [
  { tags: ['nrd', 'svc'] },
  { tags: [] },
  {},
  { tags: ['svc', '777'] },
  { tags: ['7'] },
];

const p2 = p1.map(tc => {return {...tc, tags: tc.tags || []}})
console.log({p1,p2, xx: JSON.stringify(p2)});

const q = p1.reduce((a, b) => {
  return a.union(b['tags'] || []);
}, new Superset());

console.log({ q , r: Array.from(q)});

console.log(new Superset(['a', 'b']).union(['b', 'c']).union(['e', 'f', 'a']));


console.log(new Superset('a','b').isSubsetOf(new Superset(['a'])));

const all = [1,2,3]
console.log([5, 6, 7].some(x => all.includes(x)));


const s = ['111','222','444']
console.log({s, t: [...s,'333'], u: s.filter(x => x!=='222'), v: s.includes('1111')});
