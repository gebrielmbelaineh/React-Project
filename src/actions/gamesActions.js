import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../Api';

// Action Creator

const loadGames = () => (dispatch) => {
  axios.all([
    axios.get(popularGamesURL()),
    axios.get(upcomingGamesURL()),
    axios.get(newGamesURL()),
  ]).then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: firstResponse.data.results,
        upcoming: secondResponse.data.results,
        newGames: thirdResponse.data.results,
      },
    });
  }))
    .catch((error) => {
      dispatch({ type: 'ERROR_SET', error });
    });
};

export default loadGames;
