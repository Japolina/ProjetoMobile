

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
import ListaFlat from './ListaFlat';

const lista = [
    {key: 1, descricao: 'teste'},
    {key: 2, descricao: 'teste2'},
    {key: 3, descricao: 'teste3'},
    {key: 4, descricao: 'teste4'}
];


const App2 = () => {
    return (
        <>
        <ListaFlat array={lista}/>
        {/* <ListaSection array={listaSection}/> */}
        </>
    );
}

export default App2;

