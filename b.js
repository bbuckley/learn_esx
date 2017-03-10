

let b = {
  foo: "testser",

  bar: 2,

  baz: (a) => a * a,

  fizz:
     (a) =>  a * a * a,

  buzz: (a,b) => {
    let aa = 3
    let bb = 33
    return 8888  + a + b + aa + bb
  }
}

console.log(b)
console.log(b.baz(),b.baz(9), b.fizz(2), b.buzz(22,33));


// module.export =  b



const x  = {}
x['id'] = 23
x.detail = { dob: '12/11/1958', doe: '6/30/1992'}
x['id'] = 23
x.detail = { dob: '12/11/1968', doe: '6/30/1995'}
//console.log(x);

const Tcs = {
  key1: {
    crd: '1/1/2000',
    calc_type: 'UI1',
    description: 'This is a UI1'
  },
  key2: {
    crd: '1/1/2001',
    calc_type: 'TermAB',
    description: 'This is a TermAB'
  },
  key3: {
    crd: '1/1/2001',
    calc_type: 'TermAB',
    description: 'This is a Final'
  },
}
console.log('');
console.log(Tcs.key1);
console.log(Tcs['key1'], Tcs['key2']);


console.log(Object.keys(Tcs));
