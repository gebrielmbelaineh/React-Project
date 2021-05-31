import axios from 'axios';
import {
  popularGamesURL, upcomingGamesURL, newGamesURL, gameDetailsURL, gameScreenshotURL,
} from '../Api';

export const ActionTypes = {
  FETCH_GAMES: 'FETCH_GAMES',
  GET_DETAIL: 'GET_DETAIL',
  LOADING_DETAIL: 'LOADING_DETAIL',
  ERROR_SET: 'ERROR_SET',
};

// Action Creator

export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  const newGames = await axios.get(newGamesURL());

  console.log('loadTest');

  dispatch(
    {
      type: ActionTypes.FETCH_GAMES,
      payload: {
        popular: popularGames.data.results,
        upcoming: upcomingGames.data.results,
        newGames: newGames.data.results,
      },
    },
  );
};

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  console.log('loadDetailTest');
  dispatch({
    type: ActionTypes.GET_DETAIL,
    payload: {
      game: detailData.data,
      screenshot: screenShotData.data,
    },
  });
};
