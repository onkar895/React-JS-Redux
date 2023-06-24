// 1.  If we use redux in react application then use import redux as 'redux'
// 2. If we use redux in node JS application then use const redux = require('redux')

// import redux as 'redux'
const redux = require('redux')
const reduxLogger = require('redux-logger')

// For creating the store we use createStore method
const createStore = redux.createStore

// Handling multiple reducers at a time
const combineReducers = redux.combineReducers


// Middleware :
// It is used to add how you extend redux with additional functionality.
// 1. Provides the 3rd party extention point between dispatching the action and the moment it reaches the reducer.
// 2. Use middleware for Logging , error reporting, performing asynchronous tasks etc.
// Middleware redux-logger
// npm i redux-logger

// Including Middleware from redux which is used to apply middleware 
const applyMiddleware = redux.applyMiddleware

const Logger = reduxLogger.createLogger()


// CAKE SHOP APPLICATION :

// 1.  defining string constant
const BUY_CAKE = 'BUY_CAKE'

const BUY_ICECREAME = 'BUY_ICECREAME'

const RESTOCK_CAKE = 'RESTOCK_CAKE'

const RESTOCK_ICECREAME = 'RESTOCK_ICECREAME'

// 2. ACTIONS:
//     1. Actions are the only way your appliaction can interact with the store.
//     2. It carries some information from the app to the redux store.
//     3. It must have a 'type property', that describes something that indicates the type of action being performed.

// 2.  defining the action creator which is a simple function that returns the particular action.
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}

const buyIceCreame = () => {
  return {
    type: BUY_ICECREAME,
    info: 'Second redux action'
  }

}

const reStockCake = (info = 1) => {
  return {
    type: RESTOCK_CAKE,
    info: info
  }
}

const reStockIceCreame = (info = 1) => {
  return {
    type: RESTOCK_ICECREAME,
    info: info
  }
}


// 3. Reducers :
// 1. Specify how the app's state changes in response to actions sent to the store.
// 2. Reducers are pure functions that accepts the current state and action as an argument, and returns a new state with the action performed.
// (previousState, action) => newState

// State is stored in single object
const initialState1 = {
  numberOfCakes: 50,
}

const initialState2 = {
  numberOfIceCreames: 100,
}



// Defining Reducer function
const Reducer1 = (state = initialState1 , action) => {
  switch (action.type) {
    // The reducer function uses a switch statement to handle different action types.
    case BUY_CAKE:
      return {
        // To make the copy of the state object we use spread operator ...  
        // It tells the reducer that 1st make the copy of this state object and then update the numberOfCakes
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    case RESTOCK_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.info
      }
    default:
      return state
  }
}

const Reducer2 = (state = initialState2 , action) => {
  switch (action.type) {
    // The reducer function uses a switch statement to handle different action types.
    case BUY_ICECREAME:
      return {
        // To make the copy of the state object we use spread operator ...  
        // It tells the reducer that 1st make the copy of this state object and then update the numberOfCakes
        ...state,
        numberOfIceCreames: state.numberOfIceCreames - 1
      }
    case RESTOCK_ICECREAME:
      return {
        ...state,
        numberOfIceCreames: state.numberOfIceCreames + action.info
      }
    default:
      return state
  }
}


// FOR COMBINING MULTIPLE REDUCERS WE USE COMBINEREDUCERS METHOD :
const Combine = combineReducers({
  cakes: Reducer1,
  iceCreames : Reducer2,
})

// REDUX STORE:
// For our entire application we have only one store
// Responsibilities :
// 1. Holds the application state.
// 2. Allows access to state using getstate()
// 3. Allows state to be updates via dispatch(action)
// 4. Register listenerns via subscribe(listener)
// 5. Handles unregistering of listeners vai the function returned by subscribe(listener)

// createStore method accepts the parameter which is a Reducer function and the middleware
// Middleware is the third argument to the createStore function.
// 1. Holds the application state.
const store = createStore(Combine, applyMiddleware(Logger))
// 2. Allows access to state using getstate()
console.log('Initial state', store.getState())
// 4. Register listenerns via subscribe(listener)
// The subscribe method allows you to listen for changes to the store's state and execute a callback function whenever the state is updated
const unSubscribe = store.subscribe(() => { })
// 3. Allows state to be updates via dispatch(action)
// As soon a s action is dispatched , the state will gets immediately updated.
store.dispatch(buyCake())
store.dispatch(buyIceCreame())
store.dispatch(buyCake())
store.dispatch(buyIceCreame())
store.dispatch(buyCake())
store.dispatch(buyIceCreame())

store.dispatch(reStockCake(3))

store.dispatch(reStockIceCreame(3))
// 5. Finally, the unsubscribe() function is called to stop listening for further state updates.
unSubscribe()
