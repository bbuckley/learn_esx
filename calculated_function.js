

const a = [{
  doe: '12/11/1958',
  crd: '1/1/2017',
  c() { return new Date(a.crd).getFullYear() - new Date(a.doe).getFullYear() },
  aa: 1,
  bb: 22,
  cc() { return 66 },
  sum() { return 66 },
  sum2: () => 67 ,
  ['xx' + 'sum3']: () => { return 68 + a.aa + a.bb } ,
  sum3() { return 68 + this['bb'] } ,
  ['sum' + '4']() { return 68 + this['bb'] + 1} ,
  ['sum' + '5']() { return 68 + this.bb + 20} ,
  dd: 33,
}][0]

console.log(a);

console.log(a.sum, a.sum(), a.sum2, a.sum2(),
a.xxsum3, a.xxsum3(), a.sum3, a.sum3(), a.sum4(), a.sum5());


console.log(a.sum3(), a.cc());
console.log(a.c());
