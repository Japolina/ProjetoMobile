import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { AlterarClienteProps } from "../typesApp";
import { IClientes } from "../models/IClientes";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Carregamento from "../../src/layouts/Tela_Carregamento";



export default ({ navigation, route }: AlterarClienteProps) => {
    const [id,] = useState(route.params.id);
    const [nome, setNome] = useState(route.params.nome);
    const [cpf, setCpf] = useState(route.params.cpf);
    const [cidade, setCidade] = useState(route.params.cidade);
    const [bairro, setBairro] = useState(route.params.bairro);
    const [endereco, setEndereco] = useState(route.params.endereco);
    const [dataNasc, setDataNasc] = useState(route.params.dataNasc);
    const [isLogin, setIsLogin] = useState(false);

    async function carregar() {
        setIsLogin(true);

        const resultado = await firestore()
            .collection('cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as IClientes;

        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setDataNasc(cliente.dataNasc);
        setCidade(cliente.cidade);
        setBairro(cliente.bairro);
        setEndereco(cliente.endereco)
        
        setIsLogin(false);
    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsLogin(true);

        firestore()
            .collection('cliente')
            .doc(id)
            .update({
                nome,
                cpf,
                dataNasc,
                cidade,
                bairro,
                endereco,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Alterado com sucesso")
                navigation.navigate('ListaAtend');
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'black', fontSize: 25 }}> Alterar Cliente </Text>

                <Text style={{ color: 'black' }}> Nome</Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={nome}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={{ color: 'black' }}> CPF </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={cpf} />
                <Text style={{ color: 'black' }}> Data Nascimento:  </Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    style={styles.caixa_texto}
                    value={dataNasc}
                    onChangeText={(int) => { setDataNasc(int) }} />

                <Text style={{ color: 'black' }}>Cidade</Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={cidade} />

                <Text style={{ color: 'black' }}>Bairro</Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={bairro} />

                <Text style={{ color: 'black' }}>Endereço</Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={endereco}
                    onChangeText={(text) => { setEndereco(text) }} />


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
        alignItems: 'center',

    },
})
