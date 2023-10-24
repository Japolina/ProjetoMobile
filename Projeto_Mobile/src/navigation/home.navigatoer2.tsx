
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeExerScreen from '../screens/HomeExerScreen';
import { RootStackParamList2 } from '../types2';
import Exer1Screen from '../screens/Exer1Screen';
import Exer2Screen from '../screens/Exer2Screen';
import Exer3Screen from '../screens/Exer3Screen';
import ExerCadScreen from '../screens/ExerCadScreen';
import ExerProdutosScreen from '../screens/ExerProdutosScreen';


const Stack = createNativeStackNavigator<RootStackParamList2>();

const HomeNavigator2 = () => {
  return (
    
      <Stack.Navigator initialRouteName="HomeExer">
        <Stack.Screen name="HomeExer" component={HomeExerScreen} />
        <Stack.Screen name="Exer1" component={Exer1Screen} />
        <Stack.Screen name="Exer2" component={Exer2Screen} />
        <Stack.Screen name="Exer3" component={Exer3Screen} />
        <Stack.Screen name="CadProduto" component={ExerCadScreen} />
        <Stack.Screen name="Produtos" component={ExerProdutosScreen} />
      </Stack.Navigator>
  );
};

export default HomeNavigator2;