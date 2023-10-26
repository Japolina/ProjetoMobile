import React, { useState } from 'react';
import { NotasProps } from '../types';
import { INotas } from '../models/INotas';
import { useFocusEffect } from '@react-navigation/native';

import firestore from "@react-native-firebase/firestore";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import AlterarNotaScreen from '../screens/AlterarNotaScreen';

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
            <Text style={{ fontSize: 30, color: 'black', alignItems: 'center', justifyContent: 'center', left: 50 }}>Listagem de Notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text style={{color: 'black'}}>{info.index}</Text>
                            <Text style={{fontSize: 35, color: 'black'}}>{info.item.titulo}</Text>
                            <Text style={styles.descricao}>{info.item.descricao}</Text>
                            <Pressable
                                onPress={() => deletarNota(info.item.id)}>
                                <Text style={styles.botao}>
                                    X
                                    </Text>
                            </Pressable>
                            
                            <Pressable
                                style={styles.botao}
                                onPress={() => { navigation.navigate('AlterarNota')}}>
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
    botao: {
        width: 100,
        backgroundColor: '#FFFACD',
        color: 'red',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
    },
    descricao: {
        color: 'black',
        height: 'auto',
        alignItems: 'flex-end'
    }
});