import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/App.js';


/* 
 *  * Running app:
 *    1. Install all libraries needed to run the project (they are wrote below).
 *    2. FIRST TERMINAL:   npm start                                            (starting rect project)
 *    3. SECOND TERMINAL:  json-server --port 3005 --watch .\src\data\db.json   (starting database)
 *    4. Then open in browser: localhost:3000/
 * 
 *  * Installing packages:
 *      npm install axios
 *      npm install react-router-dom --save
 *      npm install react-redus 
 *      npm install @types/react-redux 
 *      npm install redux-thunk
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
