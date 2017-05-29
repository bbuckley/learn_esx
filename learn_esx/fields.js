

const xxx = (a,b) => {}
const yyy = (a,b) => {}
function zzz() {
  return xxx
}

export const Fields = {
  tc: { placeholder: 'enter tc number', src: 'shared', editable: true, type: 'text', sort: 'text' },
  doe: { placeholder: 'mm/dd/yyyy', src: 'shared', editable: true, type: 'text', sort: 'text' },
  dot: { placeholder: 'mm/dd/yyyy', src: 'shared', editable: true, type: 'date', sort: 'text' },
  tags: { src: 'shared', editable: true, type: 'tag', sort: 'text' },
  ptags: { src: 'personal', editable: true, type: 'tag', sort: '' },
  pnotes: { src: 'personal', editable: true, sort: null },
  bcd: { src: 'personal', editable: true, sort: null },
  age_crd: { src: 'calc', editable: false, type: 'number', sort: 'text' },
};

const dis = property => {
  return Object.keys(Fields).reduce((a, b) => {
    const p = Fields[b][property];
    p in a ? a[p]++ : (a[p] = 1);
    return a;
  }, {});
};

// console.log({ src: dis('src') });
// console.log({ type: dis('type') });
// console.log(dis('editable'));

const all = Object.keys(Fields).reduce((a, b) => {
  Object.keys(Fields[b]).forEach(fld => {
    if (!a.includes(fld)) {a.push(fld);}
  });
  return a;
}, []).sort().reduce((a, b) => {
  a[b] = dis(b);
  return a;
}, {});

console.log(all);
