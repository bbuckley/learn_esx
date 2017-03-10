
import { v4 } from 'node-uuid'
// const a  = {
//   tcs: {
//     12332: {
//       dob: '12/11/1958',
//     },
//     222222: {
//       dob: '1/1/2000',
//       doe: '12/1/2017'
//     }
//   }
// }
//
//
// const b = JSON.stringify(a)

const times = x=> f=> {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

const randomCrd = (n=100, pdf='udd') => {

  return  '01/04/' + 2015
}

let i = 0
const a = {}
const f = () => {
  a[v4()] = {
    crd: randomCrd({}),
    ssn: '',
    clid: '',
    dob: '1/1/2000',
    doe: '1/1/2003',
    calc_type: 'Modeling',
  }
}
times(10)(f)

console.log(a)


var fs = require('fs');

fs.writeFile("./myJson", JSON.stringify(a,null,2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

fs.readFile('./myJson', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

//const c = JSON.parse(JSON.stringify(a))
//console.log(c);
