import { combineReducers } from 'redux';
import songsById from './songsById';

const rootReducer = combineReducers({
  songsById
});

export default rootReducer;
