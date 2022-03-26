import 'react-native-gesture-handler';
import React from 'react'
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import AppRoot from './AppRoot';

export default function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  )
}