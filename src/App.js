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

const App = () => {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
export default App;
