import { FETCH_BOARD } from '../actions/board';

export const BOARD_DIMENSION = 5;

const initialState = {
  gameId: '',
  checkers: []
};

function createBoard(gameId) {
  const checkers = [];

  for (let row = 0; row < BOARD_DIMENSION; row++) {
    for (let col = 0; col < BOARD_DIMENSION; col++) {
      checkers.push({ row, col });
    }
  }

  return { gameId, checkers };
}

function boardsByGameId(state = {}, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return Object.assign({}, state, {
        [action.gameId]: createBoard(action.gameId, state[action.gameId])
      });
    default:
      return state;
  }
}

export default boardsByGameId;
