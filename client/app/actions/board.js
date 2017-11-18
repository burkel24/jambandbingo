export const FETCH_BOARD = 'FETCH_BOARD';

export function fetchBoard(gameId) {
  return {
    type: FETCH_BOARD,
    gameId
  };
}
