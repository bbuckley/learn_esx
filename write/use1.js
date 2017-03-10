

import { store, createStore } from './use'
import { writeObject } from './write_on_run'

let unsubscribe = store.subscribe(() => {
  writeObject(store.getState().tcs, './write/junk')
  console.log(store.getState().tcs)
})

store.dispatch({type: 'ADD_TC_ARRAY', payload: { ssn: '123-45-6789', id: 333, lname: "Jones" }})
store.dispatch({type: 'ADD_TC_ARRAY', payload: {
  id: 444, lname: "Jones", crd: '1/1/2017', dob: '1/1/1970', ssn: '000-00-0001', certed: true
}})
store.dispatch({type: 'DELETE_TC', id: '333'})

unsubscribe()
store.dispatch({type: 'ADD_TC_ARRAY', payload: { id: 555, lname: "Jones" }}) //works,not saved


//console.log(store.getState().tc.map(({id})=> id ));
