//import { getAllMovies, updateMovie,addMovie, deleteMovie} from "../api/MoviesApi";
import { getAllMovies}  from "../api/MoviesApi";

export const fetchMoviesFromApi = () => (dispatch) => {
    return getAllMovies().then(data => {
      dispatch(moviesFetched(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const moviesFetched = (movies) => ({
    type: 'FETCH_MOVIE_SUCCESS',
    movies,
  });
 /* 
  export const updateMovieAction = (id,newTitle,newRuntime,img) => (dispatch) => {
    return updateMovie(id, newTitle, newRuntime, img).then(data => {
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
  
  export const createMovieAction = (newTitle,newRuntime,img) => (dispatch) => {
    return addMovie(newTitle, newRuntime, img).then(data => {
      dispatch(movieCreated(data));
    }).catch(error => {
      throw(error);
    });
  }
  
  export const movieCreated = (newMovie) => ({
    type: 'CREATE_MOVIE',
    newMovie
  })*/