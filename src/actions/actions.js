import { getAllMovies, updateMovie,addMovie, deleteMovie, getMovieByID} from "../api/MoviesApi";
import { getAllShowings,getMovieShowing } from "../api/ShowingsApi";
import { getAllHalls } from "../api/HallsApi";
import { getAllTickets, addTicket } from "../api/TicketsApi";

/*
* This file include all methods connected with database operations.
* It communicate with specific, imported Api and sending data.
* Methods with type and variable are comunicating with reducers files.
*/

// --- MOVIES
export const fetchMoviesFromApi = () => (dispatch) => {
    return getAllMovies().then(data => {
      dispatch(moviesFetched(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const moviesFetched = (movies) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    movies,
  });
 
export const fetchMovieByIdAction =(id) => (dispatch) =>
{
  return getMovieByID(id).then( data => {
    dispatch(movieFetched(data));
  }).catch(error => {
    throw(error);
  });
}

export const movieFetched = (movie) => ({
  type: 'FETCH_MOVIE_BY_ID_SUCCESS',
  movie,
});

  export const updateMovieAction = (id, newTitle, newImg, newYear, newTime, newDescription) => (dispatch) => {
    return updateMovie(id, newTitle, newImg, newYear, newTime, newDescription).then(data => {
      dispatch(movieUpdated(data));
    }).catch(error => {
      throw(error);
    });
  }
  export const movieUpdated = (movie) => ({
    type: 'UPDATED_MOVIE',
    movie
  })
  
  export const deleteMovieAction = (id) => (dispatch) => {
    return deleteMovie(id).then(data => {
      dispatch(movieDeleted(id));
    }).catch(error => {
      throw(error);
    });
  }
  export const movieDeleted = (movieId) => ({
    type: 'DELETE_MOVIE',
    movieId
  })
  
  export const createMovieAction = (newTitle, newImg, newYear, newTime, newDescription) => (dispatch) => {
    return addMovie(newTitle, newImg, newYear, newTime, newDescription).then(data => {
      dispatch(movieCreated(data));
    }).catch(error => {
      throw(error);
    });
  }

  
  export const movieCreated = (newMovie) => ({
    type: 'CREATE_MOVIE',
    newMovie
  })


  // --- SHOWINGS

  export const fetchShowingsFromApi = () => (dispatch) => {
    return getAllShowings().then(data => {
      dispatch(showingsFetched(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const showingsFetched = (showings) => ({
    type: 'FETCH_SHOWINGS_SUCCESS',
    showings,
  });

  export const showingsSpecificMovie = (idMovie) => (dispatch) => {
    return getMovieShowing(idMovie).then(data =>{
      dispatch(showingsSpecificMovieFetched(data));
    }).catch(error =>{
      throw(error);
    });
  }

  export const showingsSpecificMovieFetched = (showingsM) =>
  ({
    type: 'FETCH_SHOWING_MOVIE_SUCCESS',
    showingsM
  });

  // --- HALLS

  export const fetchHallsFromApi = () => (dispatch) => {
    return getAllHalls().then(data => {
      dispatch(hallsFetched(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const hallsFetched = (halls) => ({
    type: 'FETCH_HALLS_SUCCESS',
    halls,
  });

  // --- TICKETS

  export const fetchTicketsFromApi = () => (dispatch) => {
    return getAllTickets().then(data => {
      dispatch(ticketsFetched(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const ticketsFetched = (tickets) => ({
    type: 'FETCH_TICKETS_SUCCESS',
    tickets,
  });

  export const createTicketAction = (idShow, firstname, lastname, email, price, seats) => (dispatch) => {
    return addTicket(idShow, firstname, lastname, email, price, seats).then(data => {
      dispatch(ticketCreated(data));
    }).catch(error => {
      throw(error);
    });
  }

  export const ticketCreated = (newTicket) => ({
    type: 'CREATE_TICKET',
    newTicket
  })