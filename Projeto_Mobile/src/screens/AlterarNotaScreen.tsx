import React from 'react';
import { View } from 'react-native';
import { AlterarNotaProps, CadastroProps } from '../types';
import Tela_Cadastro from '../layouts/Tela_Cadastro';


const AlterarNotaScreen = ({ navigation, route }: AlterarNotaProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_Cadastro navigation={navigation} route={route} />
      </View>
    );
  };

  export default AlterarNotaScreen;