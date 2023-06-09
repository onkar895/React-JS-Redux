// import store
const store = require('./App/Store.js')

// import actions
const wingsActions = require('./Features/Wings/wingsSlice.js').wingsActions

console.log('Initial state', store.getState())

// Subscribe to update in store : 
// The subscribe method allows you to listen for changes to the store's state and execute a callback function whenever the state is updated.
const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState())
})

store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.restocked(5))

// 1. It assumes that the wingsActions object contains an action creator named ordered generated by Redux Toolkit's createSlice function.
// 2. Dispatching an action triggers the corresponding reducer logic associated with that action type. 
// 3. The reducer then updates the state based on the dispatched action.

unsubscribe()
