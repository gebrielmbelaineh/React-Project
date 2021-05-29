import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const rootReducers = combineReducers({
  games: gameReducer,
});

export default rootReducers;
