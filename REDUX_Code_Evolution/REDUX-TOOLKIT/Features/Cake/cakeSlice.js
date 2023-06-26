// Using require function to import the createSlice function from the @reduxjs/toolkit package.
const createSlice = require('@reduxjs/toolkit').createSlice
// 1. The createSlice function is a utility provided by Redux Toolkit, which is a library that simplifies the process of managing state in Redux applications.
// 2. With createSlice, you can define a slice of your Redux state that includes the reducer function, action creators, and the initial state.
// 3. It automatically generates the corresponding action types and action creators based on the names of the reducer functions you define.

const initialState = {
  numOfCakes: 100
}

//  createSlice accepts the object as an argument
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

// This line exports the reducer from the cakeSlice module.
module.exports = cakeSlice.reducer
// This line exports the actions object from the cakeSlice module
module.exports.cakeActions = cakeSlice.actions

// By exporting both the reducer and actions, other modules can import and use them to manage the state related to cakes in an application.
