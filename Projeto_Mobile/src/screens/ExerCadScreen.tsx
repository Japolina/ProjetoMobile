import React from 'react';
import { View} from 'react-native';
import ExerCadastro from '../layouts/ExerCadastro';
import { CadProdutoProps } from '../types2';



const ExerCadScreen = ({ navigation, route }: CadProdutoProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ExerCadastro navigation={navigation} route={route} />
      </View>
    );
  };

  export default ExerCadScreen;