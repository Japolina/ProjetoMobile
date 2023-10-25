import React from 'react';
import { View} from 'react-native';
import { CadClienteProps } from '../typesApp';
import CadCliente from '../layouts/CadCliente';


const CadClienteScreen = ({ navigation, route }: CadClienteProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CadCliente navigation={navigation} route={route} />
      </View>
    );
  };

  export default CadClienteScreen;