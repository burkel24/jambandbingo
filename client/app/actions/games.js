export const FETCH_GAMES = 'FETCH_GAMES';
export function fetchGames() {
  return {
    type: FETCH_GAMES
  };
}

export const GAMES_LOADED = 'GAMES_LOADED';
export function gamesLoaded(games) {
  return {
    type: GAMES_LOADED,
    games
  };
}
