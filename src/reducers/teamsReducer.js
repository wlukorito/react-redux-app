export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TEAMS':
            return { ...state, teams: action.payload };
        default:
            return state;
    }
};
