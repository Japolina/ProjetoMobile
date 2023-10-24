import React from 'react';

import {Text, View } from 'react-native';
import { Exer1Props } from '../types2';


export default ({ navigation, route }: Exer1Props) => {

    return(
        <>
        <View>
            <Text style={{flex: 1, color: 'black'}}>
                Exercicio 1
            </Text> 
        </View>
        </>
    )
}