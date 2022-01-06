import { combineReducers } from 'redux';
import { movies } from './movies';
import {showings} from './showings';
import { halls} from './halls';

/* npm install react-redus 
   npm install @types/react-redux
*/

export default combineReducers({
    movies, showings, halls
  });
  
  export const allReducers = combineReducers({movies, showings, halls})