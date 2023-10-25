import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IAtendimento } from '../models/IAtendimento';
import { ListAtendProps } from '../typesApp';

export default ({ navigation, route }: ListAtendProps) => {
    const [atendimento, setAtendimento] = useState([] as IAtendimento[]);
    const [isLogin, setIsLogin] = useState(false);

    useFocusEffect(() => {
        setIsLogin(true);

        const subscribe = firestore()
        .collection('cliente')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

                return {
                    nome: doc.id,
                    ...doc.data()
                };

            }) as unknown as IAtendimento[];

            setAtendimento(data);
            setIsLogin(false);
        });

        return () => subscribe();
    },); 
    
    return(
        <View>
            <Text style={{fontSize: 30}}>Agenda de Atendimentos</Text>
            <FlatList
            data={atendimento}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text>{info.index}</Text>
                        <Text>{info.item.cliente}</Text>
                        <Text>{info.item.dataHora}</Text>
                        <Text>{info.item.descricao}</Text>
                    </View>
                );
            }}>
                
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

    },
});