import { boardLoaded, BOARD_DIMENSION } from './app/actions/board';
import { gamesLoaded } from './app/actions/games';
import { songsLoaded } from './app/actions/songs';

function dispatchDummyEvents(store) {
  store.dispatch(gamesLoaded([
    {
      id: 1,
      key: 1,
      artist: 'Umphreys Mcgee',
      venue: {
        name: 'Beacon Theater',
        city: 'New York City'
      },
      isActive: true,
      hasJoined: false,
      startTime: Date.now() - (60000 * 90),
      completed: false
    },
    {
      id: 2,
      key: 2,
      artist: 'Tauk',
      venue: {
        name: 'Okama Gamestheater',
        city: 'New York City'
      },
      isActive: true,
      hasJoined: false,
      startTime: Date.now() + (60000 * 9000),
      completed: false
    }
  ]));

  store.dispatch(boardLoaded(createBoard(1)));
  store.dispatch(boardLoaded(createBoard(2)));

  store.dispatch(songsLoaded([
    {
      id: 1,
      key: this.id,
      name: 'Jajunk',
      artist: 'Umphreys Mcgee'
    },
    {
      id: 2,
      key: this.id,
      name: 'The Triple Wide',
      artist: 'Umphreys Mcgee'
    },
    {
      id: 3,
      name: '2x2',
      key: this.id,
      artist: 'Umphreys Mcgee'
    },
    {
      id: 4,
      name: 'Prowler',
      key: this.id,
      artist: 'Umphreys Mcgee'
    },
    {
      id: 5,
      name: 'Free Bird',
      key: this.id,
      artist: 'Not Umphreys Mcgee'
    }
  ]));
}

function createBoard(gameId) {
  const checkers = [];

  for (let row = 0; row < BOARD_DIMENSION; row++) {
    for (let col = 0; col < BOARD_DIMENSION; col++) {
      const freeIndex = Math.floor(BOARD_DIMENSION / 2);

      checkers.push({
        row,
        col,
        key: `(${row}, ${col})`,
        songId: Math.floor(Math.random() * 3) + 1,
        isFree: (col === freeIndex && row === freeIndex),
        isChecked: (Math.random() <= .5)
        // isChecked: false
      });
    }
  }

  return { gameId, checkers };
}

export default dispatchDummyEvents;
