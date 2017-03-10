import Rebase from 're-base'

import { v4 } from 'node-uuid'

import { samples } from './samples'


const base = Rebase.createClass({

  apiKey: "AIzaSyB63Tv78BGvNIsdccQHkPZv9T6n5ZPq__8",
  authDomain: "testerbkb.firebaseapp.com",
  databaseURL: "https://testerbkb.firebaseio.com",
  storageBucket: "testerbkb.appspot.com",
  messagingSenderId: "464556173301"

})

export default base

//firebase.initializeApp(base);
const db = base.database()

//console.log(base)
//console.log(db)

// console.log(db.ref('foofoo').set(
// { fname: "Brian",
//   lname: "Buckley!",
//   tcs: {
//     123: {dob: '12/11/1958'},
//     456: {dob: '1/1/2000', dot: '1/1/2014'},
//   }
// }))

// console.log(db.ref('foofoo').set({ tcs: {
//   123: {dob: '12/11/1958'},
//   456: {dob: '1/1/2000', dot: '1/1/2014'},
// }}))

//console.log(db.ref('foofoo/tcs/123/dot').set('12/11/1969'))

//console.log(db.ref('foofoo/tcs/123/dot').remove())


//console.log(db.ref('foofoo/tcs/' + v4()).set({ dob: '1/1/1058'}))

const tcs = db.ref('foofoo/tcs')
//console.log(tcs);

let snapshot
const yyy = base.database().ref('foofoo/tcs').on('value', function(snapshot) {
  const xx = snapshot.val()
//  console.log(xx);
//  console.log(Object.keys(xx));
  const a = Object.keys(xx)

  //console.log(a.map(a=> xx[a] ))
  //console.log(a.map(a=> Object.assign({ id: a }, xx[a]) ));
});

// console.log(tcs);
//console.log('yyy='+yyy);
//console.log('xx=' + xx);
//console.log(snapshot);


const aa = [ { id: '123111111111', dob: '12/10/1959', calc_type: 'UI1' },
  { id: '456888888889', dob: '1/1/2000', dot: '1/1/2014' },
  { id: '1234556', dob: '1/1/2000 ', doe: '1/1/2000' },
  { id: 'c43205c4-1e7b-44a3-abb2-b305ebdf452d',
    dob: '1/1/1968',
    doe: '1/1/1992',
    ric: 'ADA' },
  { id: 'cbebb2d5-1755-4598-9782-17a0ca23e62f', dob: '1/1/1058' } ]
  //db.ref('foofoo/tcsa').set(aa)
  //db.ref('foofoo/tcsa').push({ id: 11111111111})

// console.log(db.ref('foofoo/tcsa'))

const aaa = v4()
// console.log(aaa);


const ref = base.database().ref('tcs')
//ref.push(aa[0])

//ref.push(samples()[0])

//works
samples(5).forEach(s =>
   ref.push(s)
)

//works
base.database().ref('tcs/-KdqwM8ZBkf52vkntshr/').update({ calc_type: 'Final!!'})
base.database().ref('tcs/-KdqwM8ZBkf52vkntshr/').update({ ssn: '012-34-5678'})


const k = 'key22'; ref.child(k).remove() //works

let xxx = ref.on('value', snapshot => {
  const x = snapshot.val()
  //console.log(x);
  //console.log('keys: ' + JSON.stringify(Object.keys(x)))
  const a = Object.keys(x)
  console.log(a.length);
});
