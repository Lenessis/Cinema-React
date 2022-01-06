export const showings = (state = [], action) => {
    switch(action.type)
    {
        case 'FETCH_SHOWINGS_SUCCESS':
            return [...action.showings];
            default:
                return state;
    }
}