import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadClienteProps } from '../typesApp';

export default ({ navigation }: CadClienteProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [value, setValue] = useState ('');

    function cadastrar() {

        firestore()
            .collection('cliente')
            .add({
                nome,
                cpf,
                endereco,
                dataNasc,
                created_at: FirebaseFirestoreTypes.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('TelaInicial')//////////////////////////////////////
            })
            .catch((error) => console.log(error));
    }
    function NumeralInput (props){
        const handleInputChange = (e) => {
            const inputValue = e.target.value.replace(/\D/g, '');
        }
        
    }

    return (
        <>
            <View>
                <Text style={{ color: 'black' }}>Nome Completo</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={{ color: 'black' }}>CPF</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(int) => { setCpf(int) }} />

                <Text style={{ color: 'black' }}>Endereço</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEndereco(text) }} />

                <Text style={{ color: 'black' }}>Data Nascimento</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(int) => { setDataNasc(int) }} />


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

