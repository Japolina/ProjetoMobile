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
                            <Text style={styles.caixa_texto}>Data Nascimento: {info.item.dataNasc}</Text>
                            <Text style={styles.caixa_texto}>Cidade: {info.item.cidade}</Text>
                            <Text style={styles.caixa_texto}>Bairro: {info.item.bairro}</Text>
                            <Text style={styles.caixa_texto}>Endereço: {info.item.endereco}</Text>
                            

                            <View style={styles.container_botoes}>
                                <Pressable
                                style={styles.botao_excluir}
                                onPress={() => deletarCliente(info.item.id)}>
                                <Text >
                                    X
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.botao_alterar}
                                onPress={() => {
                                    navigation.navigate('AlterarCliente', {
                                        id: info.item.id, nome: info.item.nome,
                                        cpf: info.item.cpf, cidade: info.item.cidade, 
                                        bairro: info.item.bairro, endereco: info.item.endereco, 
                                        dataNasc: info.item.dataNasc
                                    })
                                }}>
                                <Text >
                                    ✏️
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.botao_atend}
                                onPress={() => {
                                    navigation.navigate('CadastroAtend')
                                }}>
                                <Text >
                                    Atendimento
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
        left: 40,
        borderRadius: 15,
    },
    botao_atend: {
        width: 100,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        left: 70,
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