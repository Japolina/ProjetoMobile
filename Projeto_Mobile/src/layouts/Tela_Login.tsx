import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginProps } from '../types';

import auth from '@react-native-firebase/auth';


export default ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    function logar() {
        setIsLogin(true);

        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => { navigation.navigate('Home') })
            .catch((error) => console.log(error))
            .finally(() => setIsLogin(false))
    }

    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha",
                "Enviamos um email para você"))
            .catch((error) => console.log(error))
    }
    function setText(newText: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            
            <View style={styles.container}>

                {/* FOTO */}
                <View>
                <Image style={styles.imagem} source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }} />
                </View>

                {/* EMAIL OU LOGIN */}
                <View style={styles.container_Login}>
                    <Text style={styles.texto}>Teste</Text>
                    <TextInput
                        style={{ height: 110 }}
                        placeholder="Digite aqui!"
                        onChangeText={newText => setText(newText)}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#E0F0FF',
        marginTop: 50,
        width: 200,
        maxHeight: 150,
    },
    container_Login: {
        flex: 1,
        backgroundColor: 'blue'
    },
    imagem: {
        flex: 1,
        width: 200,
        height: 160,
        justifyContent: 'center',
        alignContent: 'center'
    },
    texto: {
        padding: 100,
        color: 'black',
        marginTop: -50,
    }
});