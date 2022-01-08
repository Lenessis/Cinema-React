export const tickets = (state = [], action) => {
    
    switch (action.type) {
      case 'FETCH_TICKETS_SUCCESS':
        return [...action.tickets];
      case 'CREATE_TICKET':
        let newState = [...state, action.newTicket];
        return [...newState];
      default:
        return state;
    }
  };