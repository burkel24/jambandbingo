import { GAMES_LOADED, FETCH_GAMES } from '../actions/games';

function games(state = [], action) {
  switch (action.type) {
    case GAMES_LOADED:
      return action.games;

    case FETCH_GAMES:
    default:
      return state;
  }
}

export default games;
