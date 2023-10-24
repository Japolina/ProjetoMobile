import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Principal from './layouts/Principal';
import HomeNavigator from './navigation/home.navigator';
import HomeNavigator2 from './navigation/home.navigatoer2';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator2/>
    </NavigationContainer>
  );
}

export default App;