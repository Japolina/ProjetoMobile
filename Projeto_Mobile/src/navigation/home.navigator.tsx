import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

type HomeNavigator = {
    Home: undefined;
    Detalhes: undefined;
  };
  
const Stack = createNativeStackNavigator<HomeNavigator>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;