import React from 'react';
import { View} from 'react-native';
import TelaInicial from '../layouts/TelaInicial';
import { TelaInicialProps } from '../typesApp';


const TelaInicialScreen = ({ navigation, route }: TelaInicialProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TelaInicial navigation={navigation} route={route} />
      </View>
    );
  };

  export default TelaInicialScreen;