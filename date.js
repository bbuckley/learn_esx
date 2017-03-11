

import dateFns from 'date-fns'
import { format } from './random'


if (require.main === module) {
  console.log(dateFns.isToday(new Date()))
  console.log(dateFns.getDayOfYear(new Date()));
  console.log(dateFns.getDayOfYear(new Date('12/31/2016')));
  console.log(dateFns.getDayOfYear(new Date('2/29/2016')));
  console.log(dateFns.getDayOfYear(new Date('12/31/2015')));
}


const fomf = (d) => {
  return new Date(d.getFullYear(), d.getMonth() + 1, 1)
}

const cwonf = (d) => {
  return d.day === 1 ? d : fomf(d)
}

if (require.main === module) {
console.log(format(fomf(new Date('12/11/1958'))))
console.log(format(cwonf(new Date('12/11/1958'))))
console.log(format(cwonf(new Date('11/11/1958'))))
console.log(format( fomf(new Date('11/1/1958')))==='12/1/1958')
console.log(format(cwonf(new Date('11/1/1958')))==='12/1/1958')
}
