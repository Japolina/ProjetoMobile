import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { IAtendimento } from '../models/IAtendimento';
import { ListAtendProps } from '../typesApp';
import { IClientes } from '../models/IClientes';

export default ({ navigation, route }: ListAtendProps) => {
    const [atendimento, setAtendimento] = useState([] as IAtendimento[]);
    const [isLogin, setIsLogin] = useState(false);
    const [cliente, setCliente] = useState([] as IClientes[]);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [endereco, setEndereco] = useState('');
    const [id,] = useState('');
    

    useFocusEffect(() => {
        setIsLogin(true);

        const subscribe = firestore()
            .collection('atendimento')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        idAtend: doc.id,
                        ...doc.data()
                    };

                }) as IAtendimento[];

                setAtendimento(data);
                setIsLogin(false);
            });

        return () => subscribe();
    },);

    async function carregarCliente() {
        setIsLogin(true);

        const resultado = await firestore()
            .collection('cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as IClientes;

        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setDataNasc(cliente.dataNasc);
        setCidade(cliente.cidade);
        setBairro(cliente.bairro);
        setEndereco(cliente.endereco)
        
        setIsLogin(false);
    };

    function deletarAtend(id: string) {
        setIsLogin(true);

        firestore()
            .collection('atendimento')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Atendimento", "Removido com sucesso")
                navigation.navigate('TelaInicial')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLogin(false))
    }

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Agenda de Atendimentos</Text>
            <FlatList
                data={atendimento}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text style={{ color: 'black' }}>{info.index}</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{info.item.cliente}</Text>
                            <Text style={styles.caixa_texto}>{info.item.dataHora}</Text>
                            <Text style={styles.caixa_texto}>{info.item.descricao}</Text>

                            <View style={styles.container_botoes}>
                                <Pressable
                                    style={styles.botao_excluir}
                                    onPress={() => deletarAtend(info.item.idAtend)}>
                                    <Text >
                                        X
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={styles.botao_alterar}
                                    onPress={() => { navigation.navigate('AlterarAtend', { 
                                        idAtend: info.item.idAtend,
                                        dataHora: info.item.dataHora,
                                        descricao: info.item.descricao }) }}>
                                    <Text >
                                        ✏️
                                    </Text>
                                </Pressable>
                            </View>

                        </View>
                    );
                }}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 350,
        height: 'auto',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        margin: 10,
    },
    botao_excluir: {
        width: 80,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    botao_alterar: {
        width: 100,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        left: 50,
        borderRadius: 15,
    },
    caixa_texto: {
        color: 'black',
    },
    container_botoes: {
        marginTop: 30,
        flexDirection: 'row',

    },
});