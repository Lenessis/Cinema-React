export const halls = (state = [], action) => {
    switch(action.type)
    {
        case 'FETCH_HALLS_SUCCESS':
            return [...action.halls];
            default:
                return state;
    }
}