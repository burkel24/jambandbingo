import { FETCH_GAMES } from '../actions/games';

function games(state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      return [
        {
          name: 'Dummy Game',
          id: 1,
          key: 1
        }
      ];

    default:
      return state;
  }
}


export default games;
