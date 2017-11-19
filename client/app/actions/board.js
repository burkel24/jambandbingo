export const BOARD_DIMENSION = 5;

export const FETCH_BOARD = 'FETCH_BOARD';
export function fetchBoard(gameId) {
  return {
    type: FETCH_BOARD,
    gameId
  };
}

export const BOARD_LOADED = 'BOARD_LOADED';
export function boardLoaded(board) {
  return {
    type: BOARD_LOADED,
    board
  };
}
