import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ProdutosProps } from '../types2';
import { IProdutos } from '../models/IProdutos';

export default ({ navigation, route }: ProdutosProps) => {
    const [produtos, setProdutos] = useState([] as IProdutos[]);

    useFocusEffect(() => {

        const subscribe = firestore()
        .collection('produtos')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

                return {
                    codigo: doc.id,
                    ...doc.data()
                }

            }) as IProdutos[];

            setProdutos(data);
        });

        return () => subscribe();
    },); 
    
    return(
        <View>
            <Text style={{fontSize: 30, color: 'black'}}>Listagem de Produtos</Text>
            <FlatList
            data={produtos}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.texto}>{info.index}</Text>
                        <Text style={styles.texto}>{info.item.codigo}</Text>
                        <Text style={styles.texto}>{info.item.nomeProduto}</Text>
                        <Text style={styles.texto}>{info.item.preco}</Text>
                    </View>
                );
            }}>
                
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex:1, 
    },
    texto: {
        color: 'black'
    },
});