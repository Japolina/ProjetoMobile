import React from 'react';
import { View} from 'react-native';
import CadUsu from '../layouts/CadUsu';
import { CadUsuProps } from '../typesApp';


const CadUsuScreen = ({ navigation, route }: CadUsuProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CadUsu navigation={navigation} route={route} />
      </View>
    );
  };

  export default CadUsuScreen;