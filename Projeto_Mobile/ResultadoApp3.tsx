import React from 'react';
import {Text, TextInput, View} from 'react-native';

type NomeProps = {
    name: string;
  };
  
  const Nome = (props: NomeProps) => {
    return (
      <View>
        <Text>Olá, meu nome é {props.name}!</Text>
      </View>
    );
  };
  
  const ResultadoApp3 = () => {
    return (
      <View>
        <Nome name="Maru" />
        <Nome name="Jellylorum" />
        <Nome name="Spot" />
      </View>
    );
  };
  export default ResultadoApp3;