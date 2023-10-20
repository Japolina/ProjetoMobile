import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginProps } from '../types';

import auth from '@react-native-firebase/auth';


export default ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isCadastrar, setIsCadastrar] = useState(false);

    function logar() {
        setIsLogin(true);

        try {
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('Home') })
                .catch((error) => console.log(error))
                .finally(() => setIsLogin(false))
        } catch (error) {
            console.log(error);
            setIsLogin(false)
        }
    }

    function cadastrar() {
        setIsLogin(true);

        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Conta",
                    "Cadastrado com sucesso")
                navigation.navigate('Login')
            });
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
                <View style={styles.containerEmail}>
                    <Text style={styles.texto}>Email</Text>
                    <TextInput
                        style={{ height: 50, color: 'black', backgroundColor: '#DCDCDC', borderRadius: 20 }}
                        placeholder="Digite aqui!"
                        onChangeText={(Text) => setEmail(Text)}
                    />
                </View>
                {/* SENHA */}
                <View style={styles.containerSenha}>
                    <Text style={styles.texto2}>Senha</Text>
                    <TextInput
                        style={styles.botao}
                        placeholder="Digite aqui!"
                        onChangeText={(Senha) => setSenha(Senha)}
                    />
                </View>



                <Pressable
                    style={{ height: 1 }}
                    onPress={() => logar()}
                    disabled= {isLogin}>
                <Text>Entrar</Text>
                </Pressable>

                <Pressable
                    style={{ height: }}
                    onPress={() => cadastrar()}
                    disabled= {isCadastrar}>
                <Text style={{color: 'black', backgroundColor: 'black'}}>Cadastrar</Text>
                </Pressable>


            </View>



        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        backgroundColor: '#E0F0FF',
    },
    containerSenha: {
        marginTop: -50,
    },
    containerEmail: {
        marginTop: -50,
    },

    container_Login: {
    },
    imagem: {
        width: 200,
        height: 200,
        alignItems: 'center',
        left: 40,
        marginBottom: 0,
    },
    texto: {
        padding: 100,
        color: 'black',
        marginBottom: -80,
        right: 100,

    },
    texto2: {
        padding: 100,
        color: 'black',
        right: 100,
        marginBottom: -100
    },
    botao: {
        height: 50,
        color: 'black',
        backgroundColor: '#DCDCDC',
        borderRadius: 20,
    }
});