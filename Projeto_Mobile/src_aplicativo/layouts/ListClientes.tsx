import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ListClientesProps } from '../typesApp';
import { IClientes } from '../models/IClientes';

export default ({ navigation, route }: ListClientesProps) => {
    const [cliente, setCliente] = useState([] as IClientes[]);
    const [isLogin, setIsLogin] = useState(false);

    useFocusEffect(() => {
        setIsLogin(true);

        const subscribe = firestore()
            .collection('cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    };

                }) as IClientes[];

                setCliente(data);
                setIsLogin(false);
            });

        return () => subscribe();
    },);

    function deletarCliente(id: string) {
        setIsLogin(true);

        firestore()
            .collection('cliente')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com sucesso")
                navigation.navigate('TelaInicial')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLogin(false))
    }
    function dadosCliente(
        id: String,
        nome: string,
        cpf: string,
        endereco: string,
        dataNasc: string,
        created_at: Date,) {

        setIsLogin(true);
    }

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Listagem de Clientes</Text>
            <FlatList
                data={cliente}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text style={{ color: 'black' }}>{info.index}</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{info.item.nome}</Text>
                            <Text style={styles.caixa_texto}>CPF: {info.item.cpf}</Text>
                            <Text style={styles.caixa_texto}>Endereço: {info.item.endereco}</Text>
                            <Text style={styles.caixa_texto}>Data Nascimento: {info.item.dataNasc}</Text>
                            <Pressable
                                onPress={() => deletarCliente(info.item.id)}>
                                <Text style={styles.botao_excluir}>
                                    X
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.botao_alterar}
                                onPress={() => { navigation.navigate('AlterarCliente',{id: info.item.id, nome: info.item.nome,
                                cpf:info.item.cpf, endereco: info.item.endereco, dataNasc: info.item.dataNasc }) }}>
                                <Text >
                                    ✏️
                                </Text>
                            </Pressable>
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
        width: 150,
        height: 100,
        backgroundColor: '#FFFACD',
        color: 'red',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        left: 200,

    },
    botao_alterar: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        left: 200,
    },
    caixa_texto: {
        color: 'black',
        height: 'auto',
        alignItems: 'flex-end'
    }
});