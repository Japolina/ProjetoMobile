import React from 'react';
import { View} from 'react-native';
import Exer2 from '../layouts/Exer2';
import { Exer2Props } from '../types2';


const Exer2Screen = ({ navigation, route }: Exer2Props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Exer2 navigation={navigation} route={route} />
      </View>
    );
  };

  export default Exer2Screen;