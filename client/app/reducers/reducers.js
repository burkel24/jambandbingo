import { combineReducers } from 'redux';
import songs from './songs';
import songsById from './songsById';

const rootReducer = combineReducers({
  songs,
  songsById
});

export default rootReducer;
