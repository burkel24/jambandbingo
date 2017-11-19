import { SONGS_LOADED } from '../actions/songs';

export function songsById(state = {}, action) {
  switch (action.type) {
    case SONGS_LOADED:
      const data = {};
      action.songs.forEach(aSong => data[aSong.id] = aSong);
      return Object.assign({}, state, data);

    default:
      return state;
  }
}

export function songs(state = [], action) {
  switch (action.type) {
    case SONGS_LOADED:
      return action.songs.map(aSong => aSong.id);

    default:
      return state;
  }
}

