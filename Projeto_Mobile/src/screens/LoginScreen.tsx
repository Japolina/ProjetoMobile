import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Principal from '../layouts/Principal';
import { LoginProps } from '../types';
import Tela_Login from '../layouts/Tela_Login';


const LoginScreen = ({ navigation, route }: LoginProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tela_Login navigation={navigation} route={route} />
      </View>
    );
  };

  export default LoginScreen;