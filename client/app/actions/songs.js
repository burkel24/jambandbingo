export const SONGS_LOADED = 'SONGS_LOADED';

export function songsLoaded(songs) {
  return {
    type: SONGS_LOADED,
    songs: songs
  };
}
