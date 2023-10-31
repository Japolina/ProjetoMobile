import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadClienteProps } from '../typesApp';

export default ({ navigation }: CadClienteProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [endereco, setEndereco] = useState('');

    const [value, setValue] = useState('');

    function cadastrar() {

        firestore()
            .collection('cliente')
            .add({
                nome,
                cpf,
                dataNasc, 
                cidade,
                bairro,
                endereco,
                created_at: FirebaseFirestoreTypes.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('TelaInicial')//////////////////////////////////////
            })
            .catch((error) => console.log(error));
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

                <Text style={{ color: 'black' }}>Data Nascimento</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(int) => { setDataNasc(int) }} />

                <Text style={{ color: 'black' }}>Cidade</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCidade(text) }} />

                <Text style={{ color: 'black' }}>Bairro</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setBairro(text) }} />

                <Text style={{ color: 'black' }}>Endereço</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEndereco(text) }} />


                <View style={styles.container_botoes}>
                    <Pressable
                        style={styles.botao}
                        onPress={() => cadastrar()}>
                        <Text style={styles.desc_botao}> Registrar </Text>
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
        fontSize: 20
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
    },
});

