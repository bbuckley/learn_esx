//curry

function addIt(base){
  return function(numberToAdd){
     return base + numberToAdd
  }
}

console.log(addIt(3)(4));

const z = (x) => {
  return (y) => {
    return x + y
  }
}
const w = z(2)
console.log(w(3));


const zz = x => (y => (x + y))

const ww = z(12)
console.log(ww(13));

const zzz = (x => (y => (x + y)))(100)
console.log(zzz(100));


const d = d => (1 / (1 + d))
const a = (i = 0.05, n = 10, boy) => (1 - Math.pow(1.0/(1+i), n)) /  (i/(1.0+i))
console.log(d(0.08));
console.log(a());


const aa = ({ i=0.08, n=10, boy=true, m=12 }) => (1 - Math.pow(1/(1.0+i), n)) /  (boy ? (i/(1.0+i)) : i)

const ann = ({ i=0.08, n=10, boy=true, m=1, round=true} = {}) => {
  if(i === 0){ return n }

  const ip = Math.pow(1.0 + i, 1.0 / m) - 1;
  const vp = 1 / (1.0 + ip)
  const dp = ip * vp
  const x =  1.0 / m * (1 - Math.pow(vp, m * n)) / (boy ? dp : ip)





  if(round===false){ return x }

  const rad = 10000000000000
  return Math.round(x * rad, 0) / rad
}

const a1 = ({ i=0.08, n=10, boy=true}) => {
  if(i === 0){ return n }

  const v = 1 / (1 + i)
  return (1 - Math.pow(v,n)) / (boy ? i * v : i)
}

console.log(aa({i: 0.08, n: 10, boy: true}));
console.log(aa({i: 0.08, n: 10, boy: false, m: 12}));
console.log(aa({n: 5}));
console.log(aa({i: 0.07}));
console.log(aa({}));
console.log(ann({ m: 12 }));
console.log(ann({ m: 4 }));
console.log(ann({ m: 1 }));

console.log(ann({ i: 0.00000000000001, n: 1, m: 1 }));
console.log(ann({ }));
console.log(ann());
console.log();
console.log(ann({ i: 1.08/1.03 - 1, n: 3 }));
console.log(a1({ i: 0.05, n: 2, m: 1 }));

console.log(a1({ n: 1, m: 1, i: 0 }));

// console.log(a1({ n: 10 }));
const test = ({ i=0.08, n=10, boy=true, m=1, round=true, pv=true, meta={ round: 10, show_params: false }}) => {
  console.log();
  console.log('i=' + i);
  console.log('n=' + n);
  console.log('boy=' + boy);
  console.log('meta.round=' + meta.round);
  console.log('meta.show_params=' + meta.show_params);
}
test({});
test({ i: 0.05});
test({ i: 0.05, meta: { round: 8 }});
test({ i: 0.05, meta: { show_params: true }});

const foobar = ({a, b, c}) => {
  a(4)
  b(4)
  c(4)
}
foobar({ a: x => console.log('a'), b: x => console.log(x), c: () => console.log('c') })
