import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { LoginUsuProps } from '../typesApp';


export default ({ navigation, route }: LoginUsuProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isCadastrar, setIsCadastrar] = useState(false);
    const [isRedefinir, setIsRedefinir] = useState(false);
    
    function logar() {
        setIsLogin(true);

        try {
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('TelaInicial') })
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
                navigation.navigate('LoginUsuario')
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
        <View style={styles.container}>
        <View style={styles.container_login}>
            <Text  style={{color: 'black'}}>Login</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setEmail(text) }} />
            

            <Text style={{color: 'black'}}>Senha</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setSenha(text) }} />
            

            <Pressable
                style={styles.botao}
                onPress={() => logar()}
                disabled={isLogin}>
                <Text style={styles.desc_botao}>Entrar</Text>
            </Pressable>
        </View>
        <View style={styles.container_botoes}>
            <Pressable
                style={styles.botao}
                onPress={() => { navigation.navigate('CadastroUsuario')}}>
                <Text style={styles.desc_botao}>Cadastrar-se</Text>
            </Pressable>

            <Pressable
                style={styles.botao}
                onPress={redefinirSenha}>
                <Text style={styles.desc_botao}>Esqueci minha senha</Text>
            </Pressable>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF'
    },
    container_login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    },
    desc_botao: {
        fontSize: 20
    }
});