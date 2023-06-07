// import store
const store = require('./App/Store.js')
console.log('Initial state', store.getState())

// import actions
const wingsActions = require('./Features/Wings/wingsSlice.js').wingsActions

// subscribe to update in store
const unsubscribe = store.subscribe(() => {
  console.log('Updated sate', store.getState())
})

store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.ordered())
store.dispatch(wingsActions.restocked(5))

unsubscribe()
