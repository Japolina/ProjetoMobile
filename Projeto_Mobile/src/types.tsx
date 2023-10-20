import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';


type RootStackParamList = {
  Cadastro: undefined;
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
};


// HomeScreen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// LoginScreen

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

// CadastroScreen

type CadastroProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export type {HomeProps, LoginProps, CadastroProps, RootStackParamList};

