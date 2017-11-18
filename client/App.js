import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import rootReducer from './app/reducers/reducers.js';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Text>Hey</Text>
    </Provider>
  )
}

export default App
