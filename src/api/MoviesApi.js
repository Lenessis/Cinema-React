/*
 * This file require the definition of functions which are working with database
 * - in our case db.json from json-server.
 * MovieApi could get all data from db.json as a JS object (array).
 * It uses axios to catch data from json-server (on specific port) and then
 * it consider some promises (.then and .catch mechanism).
 * Solutions:
 *  - Axios and CRUD: https://www.youtube.com/watch?v=59z1_3-vTOk
 *  - fetch(), .then, .catch (Polish tutorial): https://www.youtube.com/watch?v=re9VtLMkO6s
 *  - fetch() and how to install json database: https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD
 */
import axios from 'axios';

/*const renderMovies = async () =>
{
   let uri = 'http://localhost:3005/movies';

   const res = await fetch(uri); //fetch resources from link 'http://localhost:3000/movies'. It is an object, not a data
   const movies = await res.json(); //take objects from json and paste it in a javascript objects from json. In other words.. translate json objects to JS objects
   console.log(movies);
  }


window.addEventListener('DOMContentLoaded', () => renderMovies());*/

export default axios.create({
    baseURL:"http://localhost:3005"
});
