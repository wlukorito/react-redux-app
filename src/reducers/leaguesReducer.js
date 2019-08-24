export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LEAGUES':
            return { ...state, leagues: action.payload };
        default:
            return state;
    }
};
