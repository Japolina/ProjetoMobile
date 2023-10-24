import React from 'react';
import { View} from 'react-native';
import Exer1 from '../layouts/Exer1';
import { Exer1Props } from '../types2';


const Exer1Screen = ({ navigation, route }: Exer1Props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Exer1 navigation={navigation} route={route} />
      </View>
    );
  };

  export default Exer1Screen;