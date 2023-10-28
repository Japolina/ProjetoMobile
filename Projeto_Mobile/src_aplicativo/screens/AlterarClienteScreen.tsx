import React from 'react';
import { View} from 'react-native';
import { AlterarClienteProps } from '../typesApp';
import AlterarCliente from '../layouts/AlterarCliente';


const AlterarClienteScreen = ({ navigation, route }: AlterarClienteProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AlterarCliente navigation={navigation} route={route} />
      </View>
    );
  };

  export default AlterarClienteScreen;