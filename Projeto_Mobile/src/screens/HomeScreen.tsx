import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Principal from '../layouts/Principal';
import { HomeProps } from '../App';


const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Principal navigation={navigation} route={route} />
      </View>
    );
  };

  export default HomeScreen;