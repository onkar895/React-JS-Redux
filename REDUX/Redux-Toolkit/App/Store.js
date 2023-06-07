// Contain code related to redux store

const configureStore = require('@reduxjs/toolkit').configureStore
const wingsReducer = require('../Features/Wings/wingsSlice')

const store = configureStore({
  reducer: {
    wings: wingsReducer
  }
})

module.exports = store
