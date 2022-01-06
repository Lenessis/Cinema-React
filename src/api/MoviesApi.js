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
//import axios from 'axios';

/* --- PREVIOUS !!!
export default axios.create({
    baseURL:"http://localhost:3005"
});
*/

 const axios = require('axios');

export const getAllMovies = async () => {
  return await axios.get('http://localhost:3005/movies')
  .then((response) => {return response.data})
  .catch((error) => console.log(error))
}

export const getMovieByID = async (id) => {
    return await axios.get(`http://localhost:3005/movies/${id}`)
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }
  
  export const updateMovie = async (id, title, img, year, time, descriprion) => {
    return await axios.put(`http://localhost:3005/movies/${id}`, {
      title: title,
      img: img,
      productionYear: year,
      time: time,
      description: descriprion
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }
  
  export const deleteMovie = async (id) => {
    return await axios.delete(`http://localhost:3005/movies/${id}`)
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }
  
  export const addMovie = async (title, img, year, time, descriprion) => {
    return await axios.post("http://localhost:3005/movies",
    {
        title: title,
        img: img,
        productionYear: year,
        time: time,
        description: descriprion
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }

  export const addMovieWithoutImgAndDesc = async (title, year, time) => {
    return await axios.post("http://localhost:3005/movies",
    {
        title: title,
        productionYear: year,
        time: time
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }

  export const addMovieWithoutImg = async (title, year, time, descriprion) => {
    return await axios.post("http://localhost:3005/movies",
    {
        title: title,
        productionYear: year,
        time: time,
        description: descriprion
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }

  export const addMovieWithoutDesc = async (title, img, year, time) => {
    return await axios.post("http://localhost:3005/movies",
    {
        title: title,
        img: img,
        productionYear: year,
        time: time
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }