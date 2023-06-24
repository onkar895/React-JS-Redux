// Async Actions:
// Async API calls to fetch data from an end point and use that data in your application.
// 1. Fetches a list of users from an API end point and stores it in the redux store.

// 1. State :
//  We go with 3 properties  :
// 1. Loading flag which indicated whether the data is currently being fetched or not.
//     Loading is display loading spinner in your component
// 2. data - list of users
// 3. Error message : display error to the user

// Example :
// state = {
// loading : true,        // data is fetched or not  // loading spinner in your components
// data : [ ],              // List of users
// error : ' ',              // Display the error
// }

// 2. Actions :
// 1 . FETCH_USER_REQUEST : Fetch the list of users
// 2 . FETCH_USER_SUCCESS : Fetched successfully
// 3 . FETCH_USER_ERROR    : Error fetching the data

// 3. Reducers :
// 1. case FETCH_USER_REQUEST :
// loading : true

// 2. case FETCH_USER_SUCCESS :
//  loading : false
// users : data  { from API }

// 3. case FETCH_USER_ERROR :
//  loading : false
// error : { from API }

const redux = require('redux')
const axios = require('axios')
// Axios is a popular JavaScript library used for making HTTP requests, and it provides an easy-to-use API for handling HTTP communication.

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const initialState = {
  loading: true,
  users: [],
  error: ' '
}

// Defining string constants
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST '
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

// Action Creators : 
// For data
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

// For error :
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}

//  Reducer function :

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

// TODO : Fetch a list of users from an API end point and store it in the redux store.
// 1. How to use action creator with the network request.
// 2. How to make API call using redux.
// 3.  We need two packages for making API call:
//      1. AXIOS : It request to an API end points
//      2. redux-thunk : Standard way to define async action creators.
// redux-thunk library is basically a middleware that we will be applying to redux store.

// npm i axios redux-thunk
// How to use these middleware:
// const applyMiddleware = redux.applyMiddleware
// pass to store

const fetchUsers = () => {
  return function (dispatch) { // returning function instead of object and recieves the dispatch method as an argument
    dispatch(fetchUserRequest()) // This will actually set the loading as true
    axios.get('https://jsonplaceholder.typicode.com/users') // axios.get is used to make HTTP GET requests to retrieve data from JSON placeholder API.
      .then(response => { // If the request was successful then go to the response
        const users = response.data.map((user) => user.id) // response.data is the array of user
        dispatch(fetchUserSuccess(users)) // This will show all the user with user.id
      }).catch((error) => {
      // console.log(error)
      // error message is the error
      dispatch(fetchUserFailure(error.message)) // This will show the error message
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
