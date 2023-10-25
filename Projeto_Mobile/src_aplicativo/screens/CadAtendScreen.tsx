import React from 'react';
import { View} from 'react-native';
import CadAtendimento from '../layouts/CadAtendimento';
import { CadAtendProps } from '../typesApp';


const CadAtendScreen = ({ navigation, route }: CadAtendProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CadAtendimento navigation={navigation} route={route} />
      </View>
    );
  };

  export default CadAtendScreen;