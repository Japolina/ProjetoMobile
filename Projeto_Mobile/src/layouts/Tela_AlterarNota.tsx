import React, { useEffect, useState } from "react";
import { AlterarNotaProps } from "../types";
import { INotas } from "../models/INotas";
import firestore from "@react-native-firebase/firestore";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Carregamento from "./Tela_Carregamento";



export default ({ navigation, route }: AlterarNotaProps) => {
    const [id,] = useState(route.params.id);
    const [palavra,] = useState(route.params.palavra);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    async function carregar() {
        setIsLogin(true);
        const resultado = await firestore()
            .collection('notas')
            .doc(id)
            .get();

        const nota = {
            id: resultado.id,
            ...resultado.data()
        } as INotas;

        setTitulo(nota.titulo);
        setDescricao(nota.descricao);
        setIsLogin(false);
    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsLogin(true);

        firestore()
            .collection('notas')
            .doc(id)
            .update({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Alterada com sucesso")
                navigation.goBack();
            })
    }

    return (
        <View>
            <Carregamento isLogin={isLogin} />

            <Text> Titulo {palavra}</Text>
            <TextInput
                style={styles.caixa_texto}
                value={titulo}
                onChangeText={(text) => { setTitulo(text) }} />

            <Text> Descricao </Text>
            <TextInput
                multiline
                numberOfLines={4}
                maxLength={100}
                style={styles.caixa_texto}
                value={descricao}
                onChangeText={(text) => { setDescricao(text) }} />

            <Pressable
                style={styles.botao}
                onPress={() => alterar()}
                disabled={isLogin}>
            <Text style={styles.desc_botao}> Alterar</Text>
        </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    desc_botao: {
        fontSize: 20,
    },
    text_area: {
        borderWidth: 1,
        borderColor: 'Purple',
    },
})
