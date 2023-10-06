

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const App2 = () => {
    return (
        <>
            <Text>♥♥♥♥♥♥♥♥♥► Eu te amo! ◄♥♥♥♥♥♥♥</Text>
            <Text>.........██▄██▄╔╗ ℓσνє ♥
                █████▀║║╔═╦╦╦═╗▄██▄██▄
                ─▀█▀──║╚╣╬║║║╩╣▀█████▀
                ──────╚═╩═╩═╩═╝──▀█▀</Text>
            <View style={styles.container}>
                <Text>♣♣♣♣♣♣♣♣♣♣ Amor ♣♣♣♣♣♣♣♣♣</Text>
            </View>
            <Text>─▀██▀─▄███▄─▀██─██▀██▀▀▀█
──██─███─███─██─██─██▄█**
──██─▀██▄██▀─▀█▄█▀─██▀........​....✫♥¸.•°*”˜˜”*°•✫♥
─▄██▄▄█▀▀▀─────▀──▄██▄▄▄█✫♥¸.•​°*”˜˜”*°•. ✫♥</Text>
        </>
    );
}

export default App2;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alightItems: 'center',
        backgroundColor: 'red'
    },
});