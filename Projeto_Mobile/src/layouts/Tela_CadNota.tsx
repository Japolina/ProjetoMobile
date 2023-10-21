import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadNotaProps } from '../types';

export default ({ navigation, route }: CadNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    function cadastrar(){
        setIsLogin(true);

        firestore()
        .collection('notas')
        .add({
            titulo,
            descricao,
            created_at: FirebaseFirestoreTypes.FieldValue.serverTimestamp()
        })
        .then(() => {
            Alert.alert("Nota", "Cadastrada com sucesso")
            navigation.navigate('Home')//////////////////////////////////////
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLogin(false));
    }

    return (
        <>
        <View>
            <Text style={{color: 'black'}}>Titulo</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text style={{color: 'black'}}>Descrição</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setDescricao(text) }} />
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isLogin}>
                <Text style={styles.desc_botao}>Registra</Text>
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
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    desc_botao: {
        fontSize: 20
    }
});

