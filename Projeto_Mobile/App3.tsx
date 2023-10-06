import React from 'react';
import {Text, TextInput, View} from 'react-native';
import ResultadoApp3 from './ResultadoApp3';

type NomeProps = {
    nome: string;
  };

const App3 = (props: NomeProps) => {
  return (
    <View>
      <Text>Olá, eu sou...{props.nome}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Meu nome!"
        
      />
    </View>

  );
};
const Resul = () => {
    return (
      <View>
        <App3 nome= "" />
      </View>
    );
  };

  
export default Resul;