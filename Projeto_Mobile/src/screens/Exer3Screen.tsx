import React from 'react';
import { View} from 'react-native';
import Exer3 from '../layouts/Exer3';
import { Exer3Props } from '../types2';


const Exer3Screen = ({ navigation, route }: Exer3Props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Exer3 navigation={navigation} route={route} />
      </View>
    );
  };

  export default Exer3Screen;