import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadAtendProps } from '../typesApp';

export default ({ navigation }: CadAtendProps) => {
    const [cliente, setCliente] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [descricao, setDescricao] = useState('');

    function cadastrar(){

        firestore()
        .collection('atendimento')
        .add({
            cliente,
            dataHora,
            descricao,
            created_at: FirebaseFirestoreTypes.FieldValue.serverTimestamp()
        })
        .then(() => {
            Alert.alert("Atendimento", "Registrado com sucesso")
            navigation.navigate('TelaInicial')//////////////////////////////////////
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
        <View>
            <Text style={{color: 'black'}}>Dados do Cliente</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setCliente(text) }} />

            <Text style={{color: 'black'}}>Data e Hora</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(int) => { setDataHora(int) }} />

            <Text style={{color: 'black'}}>Descrição do Atendimento</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => { setDescricao(text) }} />
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

