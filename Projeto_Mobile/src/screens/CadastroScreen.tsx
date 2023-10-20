import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { CadastroProps } from '../types';
import Tela_Cadastro from '../layouts/Tela_Cadastro';


const CadastroScreen = ({ navigation, route }: CadastroProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_Cadastro navigation={navigation} route={route} />
      </View>
    );
  };

  export default CadastroScreen;