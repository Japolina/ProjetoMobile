import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
                    nome: doc.id,
                    ...doc.data()
                };

            }) as unknown as IClientes[];

            setCliente(data);
            setIsLogin(false);
        });

        return () => subscribe();
    },); 
    
    return(
        <View>
            <Text style={{fontSize: 30}}>Listagem de Clientes</Text>
            <FlatList
            data={cliente}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text>{info.index}</Text>
                        <Text>{info.item.nome}</Text>
                        <Text>{info.item.cpf}</Text>
                        <Text>{info.item.endereco}</Text>
                        <Text>{info.item.dataNasc}</Text>
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