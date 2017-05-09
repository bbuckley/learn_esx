const a = ['b', 'a', 'e'];
console.log(a);

a.forEach(e => console.log('e'));

console.log(a.filter(a => a !== 'a'));
console.log(a.filter(a => false));
console.log(a.filter(a => true));
console.log('--');
console.log(a.reduce((a, b) => a, a));
