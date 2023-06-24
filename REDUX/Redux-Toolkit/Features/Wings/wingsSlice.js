// slice is a redux toolkit convention

// Using require function to import the createSlice function from the @reduxjs/toolkit package. 
const createSlice = require('@reduxjs/toolkit').createSlice

// 1. The createSlice function is a utility provided by Redux Toolkit, which is a library that simplifies the process of managing state in Redux applications.
// 2. With createSlice, you can define a slice of your Redux state that includes the reducer function, action creators, and the initial state. 
// 3. It automatically generates the corresponding action types and action creators based on the names of the reducer functions you define.

const initialState = {
  numberOfWings: 50
}

// createSlice will automatically create action creator with the same name as the reducer function
const wingsSlice = createSlice({
  name: 'wings',
  initialState,
  reducers: {
    // key : state and action as argument
    // order state transition
    ordered: (state) => {
      state.numberOfWings--
    },
    // restock state transition
    restocked: (state, action) => {
      state.numberOfWings += action.payload
    }
  }
})

// Exporting reducer:
// Exports the reducer from a wingsSlice object and also exports the actions from the same object using module.exports.
module.exports = wingsSlice.reducer
module.exports.wingsActions = wingsSlice.actions
