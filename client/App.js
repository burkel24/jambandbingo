import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { fetchGames } from './app/actions/games';
import { songsLoaded } from './app/actions/songs';
import rootReducer from './app/reducers/reducers';
import RootNavigator from './app/rootNavigator';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

store.dispatch(fetchGames());
store.dispatch(songsLoaded([
  {
    id: 1,
    name: 'Jajunk',
    artist: 'Umphreys Mcgee'
  },
  {
    id: 2,
    name: 'The Triple Wide',
    artist: 'Umphreys Mcgee'
  },
  {
    id: 3,
    name: '2x2',
    artist: 'Umphreys Mcgee'
  },
  {
    id: 4,
    name: 'Prowler',
    artist: 'Umphreys Mcgee'
  },
  {
    id: 5,
    name: 'Free Bird',
    artist: 'Not Umphreys Mcgee'
  }
]));

export default App
