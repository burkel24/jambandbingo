import { combineReducers } from 'redux';

import boardsByGameId from './boardsByGameId';
import games from './games';
import songs from './songs';
import songsById from './songsById';

const rootReducer = combineReducers({
  boardsByGameId,
  games,
  songs,
  songsById
});

export default rootReducer;
