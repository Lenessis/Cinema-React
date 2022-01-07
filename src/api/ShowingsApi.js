const axios = require('axios');

export const getAllShowings = async () => {
    return await axios.get('http://localhost:3005/showings?_sort=sDate,sTime&order=desc')
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }

  export const getMovieShowing = async (id) =>
  {
    return await axios.get(`http://localhost:3005/showings?idMovie=${id}&_sort=sDate,sTime&order=desc`)
     .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }