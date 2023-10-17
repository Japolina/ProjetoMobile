

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import ListaFlat from './ListaFlat';
import ListaSection from '../../ListaSection';
import ListaNome from '../../ListaNome';
import { Props } from './App';

const lista = [
    { key: 1, descricao: 'teste' },
    { key: 2, descricao: 'teste2' },
    { key: 3, descricao: 'teste3' },
    { key: 4, descricao: 'teste4' }
];
const listaSection = [
    { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
    { title: 'B', data: [{ key: 1, descricao: 'Bryan' }] },
];

const listaNome = [
    { nome: 'Érica' },
    { nome: 'Yasmin' }
]


// const Principal = () => {
//     return (
//         <>
//         <ListaFlat array={lista}/>
//         <ListaSection array={listaSection}/>
//         <ListaNome array={listaNome}/>
//         </>
//     );
// }
const Principal = ({ navigation, route }: Props) => {
    return (
        <>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detalhes')} />
            <Ex1 titulo="Teste" />
            <Ex2 />
            <Ex3 />
            <ListaFlat array={lista} />
            <ListaSection array={listaSection} />
        </>
    );
}

export default Principal;

