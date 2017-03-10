
import { v4 } from 'node-uuid'

// const writeFile = (jsonObject = {}, fileName = './myFile')  => {
//   const fs = require('fs');
//   fs.writeFile(fileName, JSON.stringify(jsonObject, null, 2), function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
//   });
// }

// const logFile = (fileName = './myFile') => {
//   const fs = require('fs');
//   fs.readFile(fileName, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
// }


const fs = require('fs');

export const writeObject = (jsonObject = {}, fileName = './write/myFile')  => {
  fs.writeFileSync(fileName, JSON.stringify(jsonObject, null, 1), 'utf8')
  console.log("The file was saved, sync!, " + fileName);
  return jsonObject
}

export const readObject = (fileName = './write/myFile') => {
  return JSON.parse(fs.readFileSync(fileName, 'utf8'))
}

const a = { a: 10, b: 22, c: [22, 44], d: { a: 3, b: [1, 3, 5]} }
//const a = readFileSync()
//writeFileSync(a)


// const b = {...a, aa: 1, b: 2222, c: [...a.c, 1],  }
// b[v4()] = { dob: '12/11/1958'}
// writeFileSync(b)

//console.log(JSON.stringify(readFileSync(), null, 2));

export const sampleObject = a


//console.log(JSON.stringify(fs));
