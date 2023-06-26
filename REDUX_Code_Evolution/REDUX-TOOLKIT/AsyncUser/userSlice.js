const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
// createAsyncThunk :  It accepts an action type string and a function that returns a promise, and generates a thunk
//                               that dispatches 'pending / fulfilled / rejected' action types based on that promise.
const axios = require('axios')
// 1.  createSlice and createAsyncThunk are functions provided by Redux Toolkit, and axios is an HTTP client library for making API requests.

const initialState = {
  loadiing: false,
  users: [],
  errors: ' '
}
// 2. This defines the initial state of the Redux slice. It includes properties for loading, users, and errors.

// Generates pending , fulfilled and rejected action types - using promise
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map((user) => user.id))
})
// 3. This line defines an asynchronous thunk function named fetchUsers. Thunks are used in Redux to handle asynchronous actions. The thunk is created using the createAsyncThunk function from Redux Toolkit. The thunk makes an HTTP GET request to the specified URL and maps the received data to an array of user IDs. There is a return statement, which means the thunk return a promise.

const userSlice = createSlice({
  name: user,
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ' '
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})
// 4. This block of code creates a Redux slice using the createSlice function. The slice is named user. It defines the initialState and provides a set of extra reducers to handle the actions dispatched by the fetchUsers thunk. 
// The builder object provided by Redux Toolkit's extraReducers allows you to chain multiple addCase methods to define different cases and their corresponding reducers.
// There are three cases handled by the reducers: fetchUsers.pending, fetchUsers.fulfilled, and fetchUsers.rejected.These cases update the corresponding state properties(loading, users, and error) based on the status of the asynchronous operation.

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers
