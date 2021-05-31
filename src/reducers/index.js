import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import detailReducer from './detailReducer';

const rootReducers = combineReducers({
  games: gameReducer,
  detail: detailReducer,
});

export default rootReducers;
