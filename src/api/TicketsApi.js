const axios = require('axios');

export const getAllTickets = async () => {
  return await axios.get('http://localhost:3005/tickets')
  .then((response) => {return response.data})
  .catch((error) => console.log(error))
}

export const addTicket = async (idShow, firstname, lastname, email, price, seats) => {
    return await axios.post("http://localhost:3005/tickets",
    {
        idShowing: idShow,
        firstname: firstname,
        lastname: lastname,
        email: email,
        price: price,
        seats: seats
    })
    .then((response) => {return response.data})
    .catch((error) => console.log(error))
  }