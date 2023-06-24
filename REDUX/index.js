// KFC Store :

// Real Scenario:
// 1. Wings are available in the kitchen
// 2. Delivery manager 1 handles the WINGS_ORDERS from the customers and delivers
// 3. Coke is stored in the freezer
// 4. Delivery manager 2 handles the COKE_ORDER from the customer


// import redux from 'redux'
const redux = require('redux');

const reduxLogger = require('redux-logger')

// helper function : bindActionCreators
const bindActionCreators = redux.bindActionCreators
// 1. It is used to automatically bind action creators with the dispatch function from the Redux store.
// 2. The purpose of bindActionCreators is to simplify the process of dispatching actions by reducing the need for manually calling dispatch for each action.

const createStore = redux.createStore;

// Handling multiple reducers at a time
const combineReducers = redux.combineReducers


// Middleware :
// 1. Provide 3rd party extention point between dispatching the action and the moment it reaches the reducer.
// 2. Logging , error reporting, performing asynchronous tasks
// Middleware redux-logger
// npm i redux-logger

const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



// 1. ACTIONS:

//     1. Actions are the only way your appliaction can interact with the store.
//     2. It carries some information from the app to the redux store.
//     3. It must have a 'type property', that describes something that indicates the type of action being performed.

console.log("This is KFC example");

// So in this KFC expample let's say our order is : WINGS_ORDERD
const WINGS_ORDERED = 'WINGS_ORDERED';

// New scenario : WINGS_RESTOCKED
const WINGS_RESTOCKED = "WINGS_RESTOCKED"

// New scenario : COKE_ORDER
const COKE_ORDERED = "COKE_ORDERED"

// New scenario : COKE_RESTOCKED
const COKE_RESTOCKED = " COKE_RESTOCKED"

// 1. Action Creator : function that returns ACTION
const orderWings = () => {
  return {
    type: WINGS_ORDERED,
    quantity: 1
  };
};

// The above code defines an action creator function orderWings that creates an action object representing an order for wings.
// The action object has a type of 'WINGS_ORDERED' and a quantity of 1 indicating that one order of wings is being placed.

// 2. Action Creator:
const orderCoke = () => {
  return {
    type: COKE_ORDERED,
    quantity: 1
  }
}

// 3. Action Creator:
const restockWings = (qnty=1) => {
  return {
    type: WINGS_RESTOCKED,
    quantity: qnty
  }
}

const restockCoke = (qnty=1) => {
  return {
    type: COKE_RESTOCKED,
    quantity: qnty
  }
}


// 2. REDUCERS:

//     1. Specify how the app's state changes in response to the action sent to the store.
//     2. Reducers are functions that accepts a state and action as a arguments and returns the next state to the app.
//         (previousState, action) => newState

const initialWingsState = {
  numberOfWings: 50,
};

const initialCokeState = {
  numberOfCokes: 80,
}

// The above code declares an initial state object with a property numberOfWings set to 50 & nuberof Cokes set to 80. This represents the initial number of wings available.


const wingsReducer = (state = initialWingsState, action) => {
  switch (action.type) {

    case WINGS_ORDERED:     // case 1
      return {
        ...state,     // copy of state obj
        numberOfWings : state.numberOfWings - 1    // subtract the quantity from numberOfWings
      };
    
    case WINGS_RESTOCKED:    // case 2
      return {
        ...state,
        numberOfWings: state.numberOfWings + action.quantity
      }
    
    default:
      return state;
  }
};

const cokeReducer = (state = initialCokeState, action) => {
  switch (action.type) {

    case COKE_ORDERED:     // case 3
      return {
        ...state,     // copy of state obj
        numberOfCokes: state.numberOfCokes - 1    // subtract the quantity from numberOfWings
      };
    
    case COKE_RESTOCKED:    // case 4
      return {
        ...state,
        numberOfCokes: state.numberOfCokes + action.quantity
      }
    
    default:
      return state;
  }
}

// The above code defines the reducer functions.
// It takes in two parameters: state(representing the previous state) and action(representing the dispatched action).
// The reducer function uses a switch statement to handle different action types.
// The reducer returns a new state object using the spread operator syntax (...state) to copy the existing state.
// It then updates the numberOfWings property by subtracting 1 from the previous value. This represents the reduction of available wings by one after an order is placed.
// If the action.type doesn't match any of the cases, the reducer returns the current state without any modifications.

// In summary, this code defines a reducer function that handles the 'WINGS_ORDERED' action type.
// When this action is dispatched, it decreases the numberOfWings property in the state by 1.
// For any other action type, the reducer returns the current state unchanged.


// 3. REDUX STORE:

//     1. For entite app there will be have only one STORE.
//     2. Responsibilities:
//         1. Holds the application state
//         2. Allow access to the current state via getstate()
//         3. Registers listeners vai subscribe(listener)
//         4. Allows state to be updated via dispatch(action). It is the only way to update the application state.
//         5. Unsubscribe from the store - when you no longer want to call your listener method when the state changes.


// Combine the stores using combineReducer
const rootReducer = combineReducers({
  wings: wingsReducer,
  coke : cokeReducer
})

// 1. Holding the application state right here. Here, the createStore function is used to create a Redux store.
// Middleware is the third argument to the createStore function.
const store = createStore(rootReducer, applyMiddleware(logger));        
// applyMiddleware(logger) logs all the actions to the console

console.log("Initial State", store.getState());    // 2.  The getState() method returns the current state held in the store.

const unsubscribe = store.subscribe(() => { }
  // console.log("Updated state", store.getState())     // 3. The subscribe() function is used to register a callback that will be called whenever the state in the store changes.
);

// store.dispatch(orderWings());        // 4. Allows state to be updated via dispatch(action)
// store.dispatch(orderWings());
// store.dispatch(orderWings());
// store.dispatch(orderWings());
// store.dispatch(restockWings(4));


// Using bindActionCreators :  which is used to automatically bind action creators with the dispatch function from the Redux store.
const actions = bindActionCreators({ orderWings, restockWings, orderCoke, restockCoke }, store.dispatch)
actions.orderWings()
actions.orderCoke()

actions.orderWings()
actions.orderCoke()
actions.orderCoke()

actions.orderWings()
actions.orderWings()
actions.orderCoke()
actions.restockWings(4)

actions.orderCoke()
actions.restockCoke(5)

unsubscribe();              // 5. Finally, the unsubscribe() function is called to stop listening for further state updates.

// Overall, this above code demonstrates the typical flow of using Redux, including creating a store, dispatching actions,
// updating the state, and subscribing / unsubscribing to state changes.




