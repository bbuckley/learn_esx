

import { combineReducers, createStore } from 'redux'
import { readObject, writeObject, sampleObject } from './write_on_run'
import { v4 } from 'node-uuid'

const a = readObject()
//console.log(JSON.stringify(a, null, 2));
//const b = writeObject(a)
//console.log(JSON.stringify(b, null, 2));

const sample = sampleObject

//console.log(JSON.stringify(sample, null, 2));

// writeObject({ foo: 23, bar: 33555}, './write/foo')
//writeObject({}, './write/blankHash')
// writeObject([], './write/blankArray')

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT_COUNTER':
    return state + 1;
  case 'DECREMENT_COUNTER':
    return state - 1;
  default:
    return state;
  }
}

function user(state = "UNK", action) {
  switch (action.type) {
  case 'SET_USER':
    return action.name;
  default:
    return state;
  }
}

const tc_array = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TC_ARRAY':  //a whole new tc

    if(!Object.keys(action.payload).includes('id')){
      return [...state, {...action.payload, id: v4()}];
    }
    return [...state, action.payload];

  case 'DELETE_TC':
    const idx = state.findIndex(({id}) => id == action.id) //== handles either string infex or integer index
    if(idx === -1){ return state }
    return [...state.slice(0, idx), ...state.slice(idx + 1 )] //delete the index

  case 'EDIT_BULK':  //a bulk edit on a single tc, lots of fields (everything in payloadO)
    const idx1 = state.findIndex(({id}) => id === action.id)
    if(idx1 === -1){ return state }
    return [
      ...state.slice(0, idx1),
      {
        ...state[idx1], ...action.payload
      },
      ...state.slice(idx1 + 1)
    ]

  case 'EDIT_ELEMENT':  //edit just a single field
    const index = state.findIndex(({id}) => id === action.id);
    if(index === -1){ return state }
    const field = action.field
    const value = action.value
    if(field==='id' || field===''){ return state } //can't edit id - this is flexible

    return [
      ...state.slice(0, index),
      {
        ...state[index],
        [field]: value
      },
      ...state.slice(index + 1)
    ];
  default:
    return state;
  }
}

const tc_hash = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TC_HASH':
   const x = {...state}
   x[v4()] = action.payload
   return x
  default:
    return state;
  }
}

const filter = (state = 'NONE', action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.payload
  default:
    return state;
  }
}

const sort = (state = 'NONE', action) => {
  switch (action.type) {
  case 'SET_SORT':
    return action.payload
  default:
    return state;
  }
}


const rootReducer = combineReducers({
  //counter, // you might be used to: counter: counter,
  user,
  filter,
  sort,
  tcs: tc_array,
  //tc_hash,
});


export const store = createStore(rootReducer)
store.dispatch({type: 'SET_USER', name: 'Joe'})
store.dispatch({type: 'INCREMENT_COUNTER'})
store.dispatch({type: 'INCREMENT_COUNTER'})
store.dispatch({type: 'INCREMENT_COUNTER'})
store.dispatch({type: 'JUNK'})
store.dispatch({type: 'SET_USER', name: 'Buck'})
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: "f0bd1980-3c4d-43b1-b85a-e439c9316285", calc_type: 'Modeling', dob: '12/11/1959', doe: '6/30/1992', ssn: '000-00-0000'}})
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: '110', calc_type: 'Modeling', dob: '12/11/1967', doe: '6/30/1993'}})
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: '111', calc_type: 'Modeling', dob: '12/11/1967', doe: '6/30/1993'}})
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: '112', calc_type: 'Modeling', dob: '12/11/1967', doe: '6/30/1993'}})
store.dispatch({type: 'ADD_TC_HASH', payload: { calc_type: 'TermAB', dob: '12/11/1959', doe: '7/1/1992', ssn: '000-00-0000'}})
store.dispatch({type: 'ADD_TC_HASH', payload: { calc_type: 'Modeling', dob: '12/11/1959', doe: '7/1/1992', ssn: '000-00-0001'}})
store.dispatch({type: 'SET_SORT', payload: 'dob'})
store.dispatch({type: 'SET_SORT', payload: 'doe'})
store.dispatch({type: 'EDIT_ELEMENT', id: "112", field: 'calc_type', value: 'UI1' })
store.dispatch({type: 'EDIT_ELEMENT', id: "112", field: 'dob', value: '1/1/2000' })
store.dispatch({type: 'DELETE_TC', id: "110" })
store.dispatch({type: 'EDIT_ELEMENT', id: "112", field: 'foo', value: '1/1/2000' })
store.dispatch({type: 'EDIT_ELEMENT', id: "112", field: '', value: '1/1/2000' })
store.dispatch({type: 'EDIT_ELEMENT', id: "112", field: 'id', value: '1/1/2000' }) // editing id is a noop
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: '11111' }})
store.dispatch({type: 'EDIT_ELEMENT', id: '11111', field: 'dob', value: '1/1/1970' })
store.dispatch({type: 'EDIT_ELEMENT', id: '11111', field: 'doe', value: '1/1/1970' })
store.dispatch({type: 'EDIT_BULK', id: '11111', payload: { doe: '12/1/1970', dob: '8/8/1988', calc_type: 'TermAB'}} ) // note no id
store.dispatch({type: 'ADD_TC_ARRAY', payload: {} })
store.dispatch({type: 'EDIT_BULK', id: 'dsdsds', payload: { doe: '12/1/1970', dob: '8/8/1988', calc_type: 'TermAB'}} ) // note no id
store.dispatch({type: 'ADD_TC_ARRAY', payload: {}})
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: 222 }})

console.log();
console.log(JSON.stringify(store.getState(), null, 1));



const s = store.getState().tcs
console.log(s.map(({id})=> id ));
