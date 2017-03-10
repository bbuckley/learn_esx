

const foo = 1

const bar = foo + 1

console.log(bar);

const x = [1,1,2];

console.log(x);


import {v4} from 'node-uuid'

const sampleTc = {
  key1: {
    ssn: '000-01-0001',
    crd: '1/1/2000',
    calc_type: 'UI1',
    description: 'This is a UI1'
  },
  key2: {
    ssn: '222-33-2222',
    crd: '1/1/2001',
    calc_type: 'TermAB',
    description: 'This is a TermAB'
  },
  key22: {
    ssn: '023-43-1111',
    crd: '1/2/2001',
    calc_type: 'TermAB',
    description: 'This is a TermAB'
  },
}

const uuid = v4()

 sampleTc[uuid] = {
   ssn: '9999-99-1111',
   crd: '12/2/2001',
 }


const fs = require('fs');

let filename;
let xx = fs.readFile('./jsonfile.json', 'utf8', (err, data) => {
  if (err) throw err;
  filename = data;
  console.log('data is ' + data);
  return data;
})
console.log('xx is: ' + xx);
console.log('filename is: ' + filename);


function saveJSON(){
    console.log(fs);
    fs.writeFile('./' + uuid + '.json', JSON.stringify(sampleTc, null, 2), function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
    });
    fs.writeFile('jsonfile.json', JSON.stringify(uuid, null, 2), function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file name saved!");
    });
}
//saveJSON();
