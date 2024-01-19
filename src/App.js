/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-devsettings";
import { Provider } from "react-redux";
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
