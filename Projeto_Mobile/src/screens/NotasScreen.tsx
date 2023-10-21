import React, { useState } from 'react';
import { View } from 'react-native';
import { NotasProps } from '../types';
import Tela_Notas from '../layouts/Tela_Notas';



const NotasScreen = ({ navigation, route }: NotasProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_Notas navigation={navigation} route={route} />
      </View>
    );
  };

  export default NotasScreen;