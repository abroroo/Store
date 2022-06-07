import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

// The combineReducers helper function that turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

// this 'reducers' variable then passed to configureStore in store.js 
export const reducers = combineReducers({
  listOfAllProducts: productReducer, 
  product: selectedProductReducer,
  mensProducts: productReducer,
  womensProducts: productReducer,
  accessoryProducts: productReducer});


//example 

// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// This would produce the following state object
// {
  // potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  // },
  // tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  // }
// }