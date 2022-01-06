import { combineReducers } from 'redux';
import { movies } from './movies';

/* npm install react-redus 
   npm install @types/react-redux
*/

export default combineReducers({
    movies
  });
  
  export const allReducers = combineReducers({movies})