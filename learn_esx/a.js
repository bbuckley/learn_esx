// Just playing around
((con) => {
  ['yes', 'no', 'maybe'].forEach((item) => {
    con.log(item);
  })
})(console);


let x = 1;
const y = 5;
//y = 6;

class Foo{
}
class Bar{
}
console.log(new Bar());

let bb = {aaa: 111, bbb: 222, ccc: 333, ddd: 444};
let {bbb} = bb;
console.log(bbb);

const a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

const a2 = a.map(function(s){ return s.length });
const a3 = a.map( s => s.length );

let f1 = s => s.length;
let f2 = (a, b) => a + b
// console.log(a2, a3, a.map( f1 ).reduce(f2), a.map( s => s.length ).reduce((a, b) => a + b));

var obj = {
  i: 10,
  b: () => "this is a test"
}
//console.log(obj.i, obj.b, obj.b());
