import React, { useState } from 'react';
import FirebaseFirestoreTypes from '@react-native-firebase/firestore';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import { CadAtendProps } from '../typesApp';

export default ({ navigation }: CadAtendProps) => {
    const [dataHora, setDataHora] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idCliente, setIdCliente] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    function cadastrar() {

        firestore()
            .collection('atendimento')
            .add({
                idCliente,
                nome,
                cpf,
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
                <Text style={{ color: 'black' }}>Id  do Cliente</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setIdCliente(text) }} />

                <Text style={{ color: 'black' }}>Nome do Cliente</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={{ color: 'black' }}>CPF do Cliente</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text style={{ color: 'black' }}>Data e Hora</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(int) => { setDataHora(int) }} />

                <Text style={{ color: 'black' }}>Descrição do Atendimento</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDescricao(text) }} />
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

