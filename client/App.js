import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { fetchGames } from './app/actions/games';
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

export default App
