export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_LEAGUE':
            return { ...state, selectedLeague: action.payload };
        default:
            return state;
    }
};
