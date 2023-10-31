import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { AlterarClienteProps } from "../typesApp";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Carregamento from "../../src/layouts/Tela_Carregamento";
import { IAtendimento } from "../models/IAtendimento";

export default ({ navigation, route }: AlterarClienteProps) => {
    const [id,] = useState(route.params.id);
    const [cliente, setCliente] = useState(''); //
    const [dataHora, setDataHora] = useState('');
    const [desc, setDesc] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    async function carregar() {
        setIsLogin(true);

        const resultado = await firestore()
            .collection('atendimento')
            .doc(id)
            .get();

        const atend = {
            idAtend: resultado.id,
            ...resultado.data()
        } as IAtendimento;

        setCliente(atend.cliente);
        setDataHora(atend.dataHora);
        setDesc(atend.descricao);
        setIsLogin(false);
    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsLogin(true);

        firestore()
            .collection('atendimento')
            .doc(id)
            .update({
                cliente,
                dataHora,
                descricao: desc, //
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Atendimento", "Alterado com sucesso")
                navigation.goBack();
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'black', fontSize: 25, marginBottom: 30}}> Alterar Atendimento</Text>

                <Text style={{ color: 'black' }}> Data e Hora </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={dataHora}
                    onChangeText={(int) => { setDataHora(int) }} />

                <Text style={{ color: 'black' }}>Descricao</Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={desc}
                    onChangeText={(text) => { setDesc(text) }} />
            </View>

            <View style={styles.container_botoes}>
            <Pressable
                style={styles.botao}
                onPress={() => alterar()}
                disabled={isLogin}>
                <Text style={styles.desc_botao}> Alterar</Text>
                
            </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    caixa_texto: {
        maxWidth: '100%',
        height: 'auto',
        color: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    desc_botao: {
        fontSize: 20,
    },
    text_area: {
        borderWidth: 1,
        borderColor: 'Purple',
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
    },
    container_login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
