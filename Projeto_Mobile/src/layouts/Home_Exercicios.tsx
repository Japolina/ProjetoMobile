import React from 'react';
import { Button, StyleSheet, View } from "react-native";
import { HomeExerProps } from '../types2';




const Home_Exercicios= ({ navigation, route }: HomeExerProps) => {
    return (
        <>
            <View style={styles.botao} />
            <Button
                title="Exercicío 1"
                onPress={() => navigation.navigate('Exer1')} />
            <Button
                title="Exercicío 2"
                onPress={() => navigation.navigate('Exer2')} />
            <Button
                title="Exercicío 3"
                onPress={() => navigation.navigate('Exer3')} />

            <Button
                title="Cadastro de Produtos"
                onPress={() => navigation.navigate('CadProduto')} />
            <Button
                title="Produtos"
                onPress={() => navigation.navigate('Produtos')} />
        </>
    );
}

export default Home_Exercicios;

const styles = StyleSheet.create({
    botao: {
        marginTop: -600,
    },
});