
const del = (a, aid) => {
  const i = a.findIndex(({id}) => id === aid)
  if(i === -1) {
    return a //id not found
  } else {
    return [...a.slice(0, i), ...a.slice(i + 1)]
  }
}

const state = {
  name: 'Brian',
  editing: 22,
  todos: [
    {id: 1, foo: 33},
    {id: 22, foo: 23},
    {id: 333, foo: 'foo'}
  ],
  foo: 3
}

console.log(state);

const state_a = {...state , editing: 'none', todos: del(state.todos, 229) }




console.log(state_a);
