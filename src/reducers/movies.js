export const movies = (state = [], action) => {
    
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return [...action.movies];
      case 'UPDATED_MOVIE':
        let anotherState = state
        let index = anotherState.findIndex(movie => movie.id === action.movie.id)
        anotherState[index] = action.movie
        return [...anotherState];
      case 'CREATE_MOVIE':
        let newState = [...state, action.newMovie];
        return [...newState];
      case 'DELETE_MOVIE':
        let stateWithoutDelete = state.filter(movie => movie.id !== action.movieId);
        return [...stateWithoutDelete];
      default:
        return state;
    }
  };