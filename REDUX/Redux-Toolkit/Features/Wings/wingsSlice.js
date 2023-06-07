// slice is a redux toolkit convention

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numberOfWings: 50
}

// create slice will aytomatically create action creator with the same name as the reducer function
const wingsSlice = createSlice({
  name: 'wings',
  initialState,
  reducer: {
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

// exporting reducer

module.exports = wingsSlice.reducer
module.exports.wingsActions = wingsSlice.actions
