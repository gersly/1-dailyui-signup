import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

//Redux imports
import { Provider } from 'react-redux'
import store from './store'
import Main from './Main/Main';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StatusBar style="light" />
   <Main />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
