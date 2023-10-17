import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type NomeProps = {
  array: { nome: string }[]
};

const ListaNome = (props: NomeProps) => {
  const [text, setText] = useState('');
  return (
    <>

      <FlatList
        data={props.array}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>
              Olá! eu sou {item.nome}.

            </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Digite aqui!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </View>
        )}
      />

    </>
  )
}

export default ListaNome;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  TextInput: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(100, 55, 250, 1.0)',
  },
});

// ------------------------------------------------
// Para Arquivo Principal.

const listaNome = [
  {nome: 'Érica'},
  {nome: 'Yasmin'}
]
// -------------------------------------------------
// Para Retorno
{/* <ListaNome array={listaNome}/> */}