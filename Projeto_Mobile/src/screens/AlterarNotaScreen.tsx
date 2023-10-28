import React from 'react';
import { View } from 'react-native';
import { AlterarNotaProps} from '../types';
import Tela_AlterarNota from '../layouts/Tela_AlterarNota';


const AlterarNotaScreen = ({ navigation, route }: AlterarNotaProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_AlterarNota navigation={navigation} route={route} />
      </View>
    );
  };

  export default AlterarNotaScreen;