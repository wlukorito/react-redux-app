import backend from '../api/backend';

//intentionally not formated to shorter version for clarity
export const fetchLeagues = () => {
    return async dispatch => {
        const response = await backend.get('/leagues');
        dispatch({ type: 'FETCH_LEAGUES', payload: response.data });
    };
};

//formatted to shorter version
export const fetchTeams = leagueId => async dispatch => {
    const response = await backend.get(`/teams?lId=${leagueId}`);
    dispatch({ type: 'FETCH_TEAMS', payload: response.data });
};

export const selectLeague = leagueId => {
    return { type: 'SELECT_LEAGUE', payload: leagueId };
};
