import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';


type RootStackParamList = {
    Home: undefined;
    Detalhes: undefined;
  };
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
  
  type HomeScreenNavigationProps = HomeProps['navigation'];
  
  type HomeScreenRouteProps = HomeProps['route'];

