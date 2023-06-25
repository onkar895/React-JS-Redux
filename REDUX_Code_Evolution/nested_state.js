const redux = require('redux')

const createStore = redux.createStore

const produce = require('immer').produce

const initialstate = {
  name: 'Onkar',
  Address: {
    street: '123 kulswamini Bungalow',
    city: 'karad',
    state: 'MH'
  }
}

const CITY_UPDATED = 'CITY_UPDATED'

const updateCity = (city) => {
  return {
    type: CITY_UPDATED,
    payload: city
  }
}

const Reducer = (state = initialstate , action) => {
  switch (action.type) {
    case CITY_UPDATED:
      // return {
      //     ...state,
      //     Address: {
      //         ...state.Address,
      //     city : action.payload
      //     }
      // }
      return produce(state, (draft) => { // Produce (Current state , function which recives the draft copy of the state)
        draft.Address.city = action.payload // What immer is used to do is that it updates the draft state as if state is mutable
      })
    default: {
      return state
    }
  }
}

const store = createStore(Reducer)
console.log('Updated state', store.getState())

const unSubscribe = store.subscribe(() => {
  console.log('Updated state' , store.getState())
})

store.dispatch(updateCity('Malkapur'))
unSubscribe()
