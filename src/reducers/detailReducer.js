import { ActionTypes } from '../actions/gamesActions';

const initState = {
  game: { platforms: [] },
  screenshot: { results: [] },

};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DETAIL:
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
