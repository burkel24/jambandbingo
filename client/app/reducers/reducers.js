import { combineReducers } from 'redux';

import boardsById from './boardsById';
import games from './games';
import songs from './songs';
import songsById from './songsById';

const rootReducer = combineReducers({
  boardsById,
  games,
  songs,
  songsById
});

export default rootReducer;
