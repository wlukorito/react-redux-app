import { combineReducers } from 'redux';
import leaguesReducer from './leaguesReducer';
import teamsReducer from './teamsReducer';
import selectedLeagueReducer from './selectLeagueReducer';

export default combineReducers({
    leagues: leaguesReducer,
    teams: teamsReducer,
    selectedLeague: selectedLeagueReducer
});
