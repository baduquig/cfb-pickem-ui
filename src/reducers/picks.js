export default (picks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            return picks.map((pick) => (pick._id === action.payload._id ? action.payload : post));
        default:
            return picks;
    }
}