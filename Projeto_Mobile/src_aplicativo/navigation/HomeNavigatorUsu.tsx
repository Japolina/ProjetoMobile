import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamListUsu } from '../typesApp';
import LoginUsuScreen from '../screens/LoginUsuScreen';
import CadUsuScreen from '../screens/CadUsuScreen';
import CadClienteScreen from '../screens/CadClienteScreen';
import CadAtendScreen from '../screens/CadAtendScreen';


const Stack = createNativeStackNavigator<RootStackParamListUsu>();

const HomeNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="LoginUsuario">
        <Stack.Screen name="LoginUsuario" component={LoginUsuScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadUsuScreen} />
        <Stack.Screen name="CadastroCliente" component={CadClienteScreen} />
        <Stack.Screen name="CadastroAtend" component={CadAtendScreen} />
        
      </Stack.Navigator>
  );
};

export default HomeNavigator;