import React from 'react';
import { Button, StyleSheet, View } from "react-native";
import { TelaInicialProps } from '../typesApp';




const TelaInicial= ({ navigation, route }: TelaInicialProps) => {
    return (
        <>
            <View style={styles.botao} />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate('TelaInicial')} />
            <Button
                title="Cadastro de Clientes"
                onPress={() => navigation.navigate('CadastroClientes')} />
            <Button
                title="Lista de Clientes"
                onPress={() => navigation.navigate('TelaClientes')} />
            <Button
                title="Agendar Atendimento"
                onPress={() => navigation.navigate('CadastroAten')} />
            <Button
                title="Lista de Agendamento"
                onPress={() => navigation.navigate('TelaAtend')} />
        </>
    );
}

export default TelaInicial;

const styles = StyleSheet.create({
    botao: {
        marginTop: -600,
    },
});