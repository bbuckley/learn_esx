

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
