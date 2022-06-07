import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { reducers }  from './reducers/index';  // import the reducers to pass in to configureStore

// configureStore and createStore are alternativs of each other,
// we need them to create a store by passing reducer which we already have defined in reducer file

// the required argument is the reducer
// configureStore is more easy to use cuz we don't have to pass in extension we want to use as an argument here , they already inside redux/toolkit

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )



export default store

     
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()