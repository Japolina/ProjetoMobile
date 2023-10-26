import React from 'react';
import { View} from 'react-native';
import { LoginUsuProps } from '../typesApp';
import LoginUsu from '../layouts/LoginUsu';


const LoginUsuScreen = ({ navigation, route }: LoginUsuProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginUsu navigation={navigation} route={route} />
      </View>
    );
  };

  export default LoginUsuScreen;