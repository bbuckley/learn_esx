const tcs = [
  { id: 'brian', dob: '12/11/1958', crd: '1/1/2017' },
  { dob: '6/30/1964', crd: '1/1/2017', doe: '1/1/1987' },
  { dob: '6/30/1964', doe: '1/1/1987' },
  { doe: '1/1/1987' },
  { dob: '12/11/1958', doe: '6/30/1992', dot: '1/3/1995', bcd: '1/1/2020' },
  { dob: '12/11/ddd', doe: '6/30/1992', crd: '1/3/1995', bcd: '1/1/2020' },
];

class Tc {
  constructor(data) {
    this.data = data;
  }
  dob() {
    return this.data['dob'];
  }
  doe() {
    return this.data['doe'];
  }
  crd() {
    return this.data['crd'];
  }
  dot() {
    return this.data['dot'];
  }
  bcd() {
    return this.data['bcd'];
  }

  age(b, e) {
    if (!b || !e) return;
    const x = new Date(e).getFullYear() - new Date(b).getFullYear();
    return x
  }

  age_crd() {
    return this.age(this.dob(), this.crd());
  }
  age_dot() {
    return this.age(this.dob(), this.dot());
  }
  age_bcd() {
    return this.age(this.dob(), this.bcd());
  }
  svc_dot() {
    return this.age(this.doe(), this.dot());
  }
}

const tcss = tcs.map(x => new Tc(x));

console.log({ tcss: tcss, tc: tcss[0], age: tcss[0].age() });

tcss.forEach(x => {
  console.log({ dob: x.dob(), age_crd: x.age_crd() });
});
