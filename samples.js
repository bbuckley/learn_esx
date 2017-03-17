
import { v4 } from 'uuid'
import faker from 'faker'

const calc_types = ['UI1','Modeling','Final','TermAB','EP1']

export const format = (d) => {
  const dd = d.getDate();
  const m = d.getMonth() + 1;  //months are zero based
  const y = d.getFullYear();
  return (m < 10 ? "0" + m : m) + "/" + (dd < 10 ? "0" + dd : dd) + "/" + y
}

const options = { min: 0, max: 9 }
const d  = () => faker.random.number(options)
const ssn = () => '' + d() + d() + d() + '-' + d() + d() + '-' + d() + d() + d() + d()

const pbc = () => {
  const pbc_a = ['David','Brian','Brian','Karl','Ralph','Jim', '', '']
  const n = faker.random.number(pbc_a.length-1)
  return pbc_a[n]
}

const calc_type = () => {
  const a = ['UI1','TermAB','Final','Modeling','ModelingAB']
  const n = faker.random.number(a.length-1)
  return a[n]
}

export const sample = () =>  {
  const dob = faker.date.between('1/1/1935','1/1/1999')
  const crd = faker.date.past(2)
  // const doe = null
  // const dot = null
  // A, T, L, D, X, ' ' - status as crd calc'd based on crd - dob, doe, dot
  //dotm (for modeling of A and L only)
  //bcdf - param for final only and after dot - 'bcd' is other wise calculated

  return {
    id: v4(),
    ssn: ssn(),
    text: faker.name.findName(),
    completed: faker.random.boolean(),
    crd: format(crd),
    tc: '',
    pbc: pbc(),
    calc_type: calc_type(),
    doe: format(faker.date.between('1/1/2017','1/5/2017')),
    dob: format(dob)
  }
}

export const samples = (n=1) => {
  const arr = []
  for(var i=0; i < n; i++){
    arr.push(sample())
  }
  return arr
}

//console.log(samples);
//console.log(samples(10))

//const a = samples(10).map(x => x.pbc)
//console.log(a);
//console.log([...new Set(a)].sort())
//console.log([...new Set(samples(5).map(x => x.pbc))].sort())
