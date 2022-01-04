import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/App.js';


/* 
 * First Run  db.json file with 'json-server --port 3005 --watch .\src\data\db.json' 
 * Then Run in another terminal React server with 'npm start' on localhost/3001
 * data are fetched anyway by functions
 * 
 * npm install redux-thunk
 */

/*
fragment kodu, który miał odpowiadać za czytanie z bazy
const renderMovies = async () =>
{
   let uri = 'http://localhost:3005/movies';

   const res = await fetch(uri); //fetch resources from link 'http://localhost:3000/movies'. It is an object, not a data
   const movies = await res.json(); //take objects from json and paste it in a javascript objects from json. In other words.. translate json objects to JS objects
   console.log(movies);
  }


window.addEventListener('DOMContentLoaded', () => renderMovies());
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
