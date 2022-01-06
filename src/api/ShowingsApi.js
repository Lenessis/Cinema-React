const axios = require('axios');

export const getAllShowings = async () => {
    return await axios.get('http://localhost:3005/showings')
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }