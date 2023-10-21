import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';


type RootStackParamList = {
  Notas: undefined;
  CadNota: undefined;
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

// CadadastroNotas

type CadNotaProps = NativeStackScreenProps<RootStackParamList, 'CadNota'>;

// Notas

type NotasProps  = NativeStackScreenProps<RootStackParamList, 'Notas'>;

export type {HomeProps, LoginProps, CadastroProps, CadNotaProps, NotasProps, RootStackParamList};

