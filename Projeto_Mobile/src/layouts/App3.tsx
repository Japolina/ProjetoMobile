import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';

type NomeProps = {
    nome: string;
  };

const App3 = (props: NomeProps) => {
  return (
    <>
    <View>
      <Text>Olá, eu sou {props.nome}</Text>
    </View>
    
      </>
  );
};
 const Imagens = () => {
  return <ScrollView>
    <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }} />
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }} />
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }} />
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }} />
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }} />
          <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }} />
          </View>
      </ScrollView>
 }

const Resul = () => {
    return (
      <View>
        <App3 nome="Érica"  />
        <Imagens></Imagens>
      </View>
    );
  };

  
export {Resul, Imagens};