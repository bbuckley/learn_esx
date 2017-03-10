// es6
const a = {
  foo: 1,
  bar: "bar",
  baz: 34,
  completed: true
}

console.log({...a});  // eslint-disable-line semi
console.log({...a, foo: 2});
console.log({...a, baz: 35}); // eslint-disable-line semi
console.log({...a, completed: !a.completed});
console.log({...a, completed: !a['completed'], baz: 35, fuzz: 0 });


const { foo, baz } = a
// console.log(a, foo, baz)

const combineReducers = (reducers) => {
  return (state = {}, action) => {
     return Object.keys(reducers).reduce(
       (nextState, key) => {
          newState[key] = reducers[key](
            state[key],
            action
          );
          return nextState;
       },
       {}
     );
  };
};

const f = (state = 0, action) => state + 1;
const g = (state = 0, action) => state + 10;
const h = (state = [], action) => [...state, action]

// console.log(f(100,12));
// console.log(g(100,12));
// console.log(h([2,3],200));

const xxx = combineReducers({f,g,h})
// console.log(xxx);

// function visibilityFilter(state = "SHOW_ALL", action) {
//   switch (action.type) {
//     case "SET_VISIBILITY_FILTER":
//       return action.filter
//     default:
//       return state
//   }
// }
// console.log("--");
// console.log(visibilityFilter("ho, ho, ho", { type: "SHOW", text: "blah, blah"}));
// console.log(visibilityFilter("SHOW_ALL", { type: "SET_VISIBILITY_FILTER", filter: "blah, blah"}));


import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions.js'
import VisibilityFilters from './actions.js'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './actions.js'


console.log(SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE);


let nextTodoId = 0
const addTodo = (text) => {
  return { type: ADD_TODO, text: text, id: nextTodoId++ }
}

const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// console.log(addTodo("foo"));

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

console.log("...");
// console.log(visibilityFilter("ho, ho, ho", { type: SHOW_ALL, text: "blah, blah"}));
// console.log(visibilityFilter(SHOW_ALL, { type: SET_VISIBILITY_FILTER, filter: "blah, blah"}));

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: nextTodoId++
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          // return Object.assign({}, todo, {
          //   completed: !todo.completed
          // })
          return {...state, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

//console.log(todos([], { type: ADD_TODO, text: "pick rasberries"}));
///console.log(todos([], { type: TOGGLE_TODO, completed: true}));

//console.log(toggleTodo(1));

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

function todoAppx(state = {}, action) {
  return {
    visibilityFilter,
    todos
  }
}


let x = todoApp({},addTodo("read a book"));
x = todoApp(x,addTodo("read a second book"))
x = todoApp(x,addTodo("read another book"));

x = todoApp(x,toggleTodo(1))


console.log(x);
