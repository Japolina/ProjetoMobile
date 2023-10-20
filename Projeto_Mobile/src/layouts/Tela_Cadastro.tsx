import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { CadastroProps } from '../types';

export default ({ navigation, route }: CadastroProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
   
    async function cadastrar() {
        setIsLoading(true);
        
        if (email && senha){

            auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Conta",
                "Cadastrado com sucesso")
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Erro",
                String(error))
            })
        }
    }

    return (
        <>
        <View><Text> Teste </Text></View>
        
        </>



    )

}

