const store = require('./App/store')
const cakeActions = require('./Features/Cake/cakeSlice').cakeActions
const IceCreamActions = require('./Features/IceCream/IceCreamSlice').IceCreamActions
const fetchUsers = require('./User/userSlice').fetchUsers

console.log('Initial state', store.getState())

const unSubscribe = store.subscribe(() => {
  console.log('Updated state' , store.getState())
})

store.dispatch(fetchUsers())
