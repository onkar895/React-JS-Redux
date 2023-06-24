// Async Actions:
// Async API calls to fetch data from an end point and use that data in your application.

// 1. Action dispatched -> state is updated

// 2. State :

// stateobj : state = {
// loading : true,        // data is fetched or not  // loading spinner in your components
// data : [ ],              // List of users
// error : ' ',              // Display the error
// }

// 3. Actions :

// 1 . FETCH_USER_REQUEST : Fetch the list of users
// 2 . FETCH_USER_SUCCESS : Fetched successfully
// 3 . FETCH_USER_ERROR    : Error fetching the data

// 4. Reducers :

// 1. case FETCH_USER_REQUEST :
// loading : true

// 2. case FETCH_USER_SUCCESS :
//  loading : false
// users : data { from API }

// 3. case FETCH_USER_ERROR :
//  loading : false
// error : { from API }

// TODO : Fetch a list of users from an API end point and store it in the redux store.
// 1. How to use action creator with the network request.
// 2. How to make API call using redux.
// 3.  We need two packages for making API call:
//      1. AXIOS : It request to an API end points
//      2. redux thunk : Standard way to define async action creators
// npm i axios redux-thunk
// How to use these middleware:
// const applyMiddleware = redux.applyMiddleware
// pass to store

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
  loading: false,
  user: [],
  error: ' '
}

// Defining string constants
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST '
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

// Action Creators : 
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

// Store list of user : 
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}

// Reducer function :

const reducer = (store = initialState , action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        users: [],
        error: ' '
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ' '
      }
    case FETCH_USER_ERROR:
      return {
        loading: false,
        users: [],
      error: action, payload}
  }
}

// async action creator:
// returns action
// By using thunk middleware we can return a function instead of the action object

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users') // JSON placeholder API
      .then(response => {
        // response.data is the user
        const users = response.data.map((user) => user.id)
        dispatch(fetchUserSuccess(users))
      }).catch((error) => {
      // console.log(error)
      // error message is the error
      dispatch(fetchUserFailure(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
