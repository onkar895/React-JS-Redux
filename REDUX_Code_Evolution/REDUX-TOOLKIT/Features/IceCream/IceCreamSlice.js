const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  numOfIceCreams: 50
}

const IceCreamSlice = createSlice({
  name: 'ice-creame',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    }
  }
})

module.exports = IceCreamSlice.reducer
module.exports.IceCreamActions = IceCreamSlice.actions
