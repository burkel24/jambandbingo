import { combineReducers } from 'redux';

import boardsByGameId from './boardsByGameId';
import games from './games';
import { songs, songsById } from './songs';

const rootReducer = combineReducers({
  boardsByGameId,
  games,
  songs,
  songsById
});

export default rootReducer;
