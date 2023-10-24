import React from 'react';

import { Text, View } from 'react-native';
import { Exer2Props } from '../types2';


export default ({ navigation, route }: Exer2Props) => {

    return(
        <>
        <View>
            <Text style={{flex: 1, color: 'black'}}>
                Exercicio 2
            </Text> 
        </View>
        </>
    )
}