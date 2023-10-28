import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { IAtendimento } from '../models/IAtendimento';
import { ListAtendProps } from '../typesApp';

export default ({ navigation, route }: ListAtendProps) => {
    const [atendimento, setAtendimento] = useState([] as IAtendimento[]);
    const [isLogin, setIsLogin] = useState(false);

    useFocusEffect(() => {
        setIsLogin(true);

        const subscribe = firestore()
        .collection('atendimento')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

                return {
                    id: doc.id,
                    ...doc.data()
                };

            }) as IAtendimento[];

            setAtendimento(data);
            setIsLogin(false);
        });

        return () => subscribe();
    },); 
    function deletarCliente(id: string) {
        setIsLogin(true);

        firestore()
            .collection('atendimento')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com sucesso")
                navigation.navigate('TelaInicial')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLogin(false))
    }
    
    return(
        <View>
            <Text style={{fontSize: 30, color: 'black'}}>Agenda de Atendimentos</Text>
            <FlatList
            data={atendimento}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text style={{color: 'black'}}>{info.index}</Text>
                        <Text style={{fontSize: 20, color: 'black'}}>{info.item.cliente}</Text>
                        <Text style={styles.caixa_texto}>{info.item.dataHora}</Text>
                        <Text style={styles.caixa_texto}>{info.item.descricao}</Text>
                        <Pressable
                                onPress={() => deletarCliente(info.item.id)}>
                                <Text style={styles.botao_excluir}>
                                    X
                                    </Text>
                            </Pressable>
                            
                            <Pressable
                                style={styles.botao_alterar}
                                onPress={() => { navigation.navigate('AlterarAtend', {id: info.item.cliente})}}>
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
    },
});