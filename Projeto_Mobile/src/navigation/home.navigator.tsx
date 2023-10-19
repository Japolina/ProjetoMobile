import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
  );
};

export default HomeNavigator;