const f = "this is a test";

console.log(f.match(/est/) !== null);

let r = new RegExp("zo");
let target = "zoo";

console.log(target.match(r) !== null);

target = "f";
console.log(target.match(r) !== null);
