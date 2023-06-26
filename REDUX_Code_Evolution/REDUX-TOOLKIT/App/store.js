// REDUX-TOOLKIT SYNC :

// In redux-store we use configureStore to define our store.
// It wraps 'createStore' function to provide simplified configuration options and good defaults.
//  It provides automatic support for Redux-thunk, Redux DevTools Extension, and also passes the default middleware.

// const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit')
// const cakeReducer = require('../Features/Cake/cakeSlice')
// const IceCreamReducer = require('../Features/IceCream/IceCreamSlice')
// const reduxLogger = require('redux-logger')

// Creating a logger instance using the createLogger() function from the Redux Logger library.
// const logger = reduxLogger.createLogger()

// Here in Redux-Toolkit configurestore handles to combine-reducers
// const store = configureStore({
//   reducer: {
//     cake: cakeReducer,
//     icecream: IceCreamReducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// })

// module.exports = store

// REDUX-TOOLKIT ASYNC :

// In redux-store we use configureStore to define our store.
// It wraps 'createStore' function to provide simplified configuration options and good defaults.
//  It provides automatic support for Redux-thunk, Redux DevTools Extension, and also passes the default middleware.

const { configureStore } = require('@reduxjs/toolkit')
const cakeReducer = require('./Features/Cake/cakeSlice')
const IceCreamReducer = require('./Features/IceCream/IceCreamSlice')
const userReducer = require('./User/userSlice')

// Here in Redux-Toolkit configurestore handles to combine-reducers
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: IceCreamReducer,
    user: userReducer
  }
})

module.exports = store
