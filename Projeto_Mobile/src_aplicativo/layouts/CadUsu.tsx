import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { CadUsuProps } from '../typesApp';

export default ({ navigation, route }: CadUsuProps) => {
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
                navigation.navigate('LoginUsuario')
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
           <View >
            <Text style={{color: 'black'}}>Email</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setEmail(text) }} />
            <Text style={{color: 'black'}}>Senha</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setSenha(text) }} />
            </View>    
            <View style={styles.container_botoes} >
                <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
            </View>
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
        maxWidth: '100%',
        height: 'auto',
        color: 'black',
        borderWidth: 1,
        borderRadius: 15,
        
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    desc_botao: {
        fontSize: 20,
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
    },
});