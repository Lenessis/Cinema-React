export const showings = (state = [], action) => {
    switch(action.type)
    {
        case 'FETCH_SHOWINGS_SUCCESS':
            return [...action.showings];
        case 'FETCH_SHOWING_MOVIE_SUCCESS':
            
            return [...action.showingsM];
            default:
                return state;
    }
}