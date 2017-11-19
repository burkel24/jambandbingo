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
      const freeIndex = Math.floor(BOARD_DIMENSION / 2);

      checkers.push({
        row,
        col,
        key: `(${row}, ${col})`,
        songId: Math.floor(Math.random() * 3) + 1,
        isFree: (col === freeIndex && row === freeIndex),
        isChecked: (Math.random() <= .5)
      });
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
