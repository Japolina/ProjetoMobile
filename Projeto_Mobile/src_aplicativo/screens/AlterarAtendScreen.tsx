import React from 'react';
import { View} from 'react-native';
import { AlterarAtendProps } from '../typesApp';
import AlterarAtend from '../layouts/AlterarAtend';


const AlterarAtendScreen = ({ navigation, route }: AlterarAtendProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AlterarAtend navigation={navigation} route={route} />
      </View>
    );
  };

  export default AlterarAtendScreen;