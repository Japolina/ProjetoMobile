import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
};


// HomeScreen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// LoginScreen

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type {HomeProps, LoginProps, RootStackParamList};

