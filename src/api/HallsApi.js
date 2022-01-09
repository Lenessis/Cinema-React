/* 
* Getting all information about halls from database
*/
const axios = require('axios');

export const getAllHalls = async () => {
    return await axios.get('http://localhost:3005/halls')
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }