import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamListUsu } from '../typesApp';
import LoginUsuScreen from '../screens/LoginUsuScreen';
import CadUsuScreen from '../screens/CadUsuScreen';
import CadClienteScreen from '../screens/CadClienteScreen';
import CadAtendScreen from '../screens/CadAtendScreen';
import TelaInicialScreen from '../screens/TelaInicialScreen';
import ListAtendScreen from '../screens/ListaAtendScreen';
import ListClientesScreen from '../screens/TelaClientesScreen';
import AlterarClienteScreen from '../screens/AlterarClienteScreen';
import AlterarAtendScreen from '../screens/AlterarAtendScreen';


const Stack = createNativeStackNavigator<RootStackParamListUsu>();

const HomeNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicialScreen} />
        <Stack.Screen name="LoginUsuario" component={LoginUsuScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadUsuScreen} />
        <Stack.Screen name="CadastroCliente" component={CadClienteScreen} />
        <Stack.Screen name="CadastroAtend" component={CadAtendScreen} />
        <Stack.Screen name="ListaAtend" component={ListAtendScreen} />
        <Stack.Screen name="ListaClientes" component={ListClientesScreen} />
        <Stack.Screen name="AlterarCliente" component={AlterarClienteScreen} />
        <Stack.Screen name="AlterarAtend" component={AlterarAtendScreen} />
        
      </Stack.Navigator>
  );
};

export default HomeNavigator;