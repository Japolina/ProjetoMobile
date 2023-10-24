import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadProdutoProps } from '../types2';

export default ({ navigation }: CadProdutoProps) => {
    const [codigo, setCodigo] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [preco, setPreco] = useState('');

    function cadastrar(){

        firestore()
        .collection('produtos')
        .add({
            codigo,
            nomeProduto,
            preco,
            created_at: FirebaseFirestoreTypes.FieldValue.serverTimestamp()
        })
        .then(() => {
            Alert.alert("Produto", "Cadastrada com sucesso")
            navigation.navigate('HomeExer')//////////////////////////////////////
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
        <View>
            <Text style={{color: 'black'}}>Código de Barras</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(int) => { setCodigo(int) }} />

            <Text style={{color: 'black'}}>Nome do Produto</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setNomeProduto(text) }} />

            <Text style={{color: 'black'}}>Valor</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(int) => { setPreco(int) }} />
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}>
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

