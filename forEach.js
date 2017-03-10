

const a = { test: 222, "fff": 222}
const b = [222, "fff"]

b.forEach(f => { return console.log(f)})

Object.keys(a).forEach(f => console.log(f))

Object.keys(a).forEach(f => console.log(f, a[f]))
