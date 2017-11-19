import { BOARD_LOADED, FETCH_BOARD } from '../actions/board';

function boardsByGameId(state = {}, action) {
  switch (action.type) {
    case BOARD_LOADED:
      return Object.assign({}, state, {
        [action.board.gameId]: action.board
      });
    case FETCH_BOARD:
    default:
      return state;
  }
}

export default boardsByGameId;
