import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../types';
import CadastroScreen from '../screens/CadastroScreen';
import CadNotaScreen from '../screens/CadNotaScreen';
import NotasScreen from '../screens/NotasScreen';
import HomeExerScreen from '../screens/HomeExerScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="CadNota" component={CadNotaScreen} />
        <Stack.Screen name="Notas" component={NotasScreen} />
      </Stack.Navigator>
  );
};

export default HomeNavigator;