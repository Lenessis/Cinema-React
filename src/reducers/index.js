import { combineReducers } from 'redux';
import { movies } from './movies';
import {showings} from './showings';
import { halls} from './halls';
import { tickets } from './tickets';

export default combineReducers({
    movies, showings, halls, tickets
  });
  
  export const allReducers = combineReducers({movies, showings, halls, tickets})