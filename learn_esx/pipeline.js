const pipe = functions =>
  data => {
    return functions.reduce((value, func) => func(value), data)
  }

const pipeline = pipe([
  x => x * 2,
  x => x / 3,
  x => x > 5,
  x => x > 7,
  b => !b,
])

console.log(pipeline(3))
