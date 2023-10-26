import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { CadastroProps } from '../types';

export default ({ navigation, route }: CadastroProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogin, setIsLogin] = useState(false);

   
    async function cadastrar() {
        setIsLogin(true);
        
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
        <View style={styles.container}>
            <Text style={{color: 'black'}}>Email</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setEmail(text) }} />
            <Text style={{color: 'black'}}>Senha</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setSenha(text) }} />
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isLogin}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
        </View>
        
        </>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 15,
        margin: 3,
        marginBottom: 20
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        alignItems: 'center'
    },
    desc_botao: {
        fontSize: 20,
    }
});