import React from 'react';
import { View} from 'react-native';
import { ProdutosProps } from '../types2';
import ExerTela from '../layouts/ExerTela';


const ExerProdutosScreen = ({ navigation, route }: ProdutosProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ExerTela navigation={navigation} route={route} />
      </View>
    );
  };

  export default ExerProdutosScreen;