import { combineReducers } from 'redux';

import games from './games'
import songs from './songs';
import songsById from './songsById';

const rootReducer = combineReducers({
  games,
  songs,
  songsById
});

export default rootReducer;
