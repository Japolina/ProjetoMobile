import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Tela_Cadastro from '../layouts/Tela_Cadastro';
import { CadNotaProps} from '../types';
import Tela_CadNota from '../layouts/Tela_CadNota';


const CadNotaScreen = ({ navigation, route }: CadNotaProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_CadNota navigation={navigation} route={route} />
      </View>
    );
  };

  export default CadNotaScreen;