import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Movies from './components/Movies';
import Hall from './components/Hall';
import Ticket from './components/Ticket';
import EditMovie from './components/EditMovie';

ReactDOM.render(
  <React.StrictMode>
    <Movies />
    {/*<Hall /> 
    <Ticket /> */}
    <EditMovie />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
