import React, { useState } from 'react';
import { NotasProps } from '../types';
import { INotas } from '../models/INotas';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

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
    },);

    function deletarNota(id: string) {
        setIsLogin(true);

        firestore()
            .collection('notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLogin(false))
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de Notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text>{info.index}</Text>
                            <Text style={{fontSize: 35}}>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>
                            <Pressable
                                onPress={() => deletarNota(info.item.id)}>
                                <Text style={{fontWeight: "bold", fontSize: 50}}>
                                    X
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

    },
});