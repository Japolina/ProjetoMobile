import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const FotoLogin = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }} />
        </View>
    )
}
const Informa = () => {
    const [text, setText] = useState('');
    return (

        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Digite aqui!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>
    )
}

const Resultado = () => {
    return (
        <View>
            <Text> Teste </Text>
            <FotoLogin/>
            <Informa/>
        </View>
    );
};

export default Resultado;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
        backgroundColor: '#E0F0FF',
        marginTop: 10,
    },
    imagem: {
        width: 200,
        height: 200
    }
});