import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import rootReducer from './app/reducers/reducers';
import RootNavigator from './app/rootNavigator';
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
