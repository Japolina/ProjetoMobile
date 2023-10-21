import React, { useState } from 'react';
import { NotasProps } from '../types';
import { INotas } from '../models/INotas';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default ({ navigation, route }: NotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLogin, setIsLogin] = useState(false);

    useFocusEffect(() => {
        setIsLogin(true);

        const subscribe = firestore()
        .collection('notas')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

                return {
                    id: doc.id,
                    ...doc.data()
                }

            }) as INotas[];

            setNotas(data);
            setIsLogin(false);
        });

        return () => subscribe();
    }, []); 
    
    return(
        <View>
            <Text style={{fontSize: 30}}>Listagem de Notas</Text>
            <FlatList
            data={notas}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text>{info.index}</Text>
                        <Text>{info.item.titulo}</Text>
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