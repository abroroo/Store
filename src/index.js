import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider }  from 'react-redux';
import store from './redux/store';


// index.js is the things gets send to index.html

// here we put app inside <Provider /> to be able to access state in any child component of app.js
// we should specify what provide, it is usually redux store imported from store.js file we have created

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

