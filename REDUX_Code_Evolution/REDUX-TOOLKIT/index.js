const store = require('./App/store')
const cakeActions = require('./Features/Cake/cakeSlice').cakeActions
const IceCreamActions = require('./Features/IceCream/IceCreamSlice').IceCreamActions

console.log('Initial state', store.getState())

const unSubscribe = store.subscribe(() => {
  // console.log('Updated state' , store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.restocked(3))

unSubscribe()
