import React, { useState } from 'react';
import { FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

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
          
          <Text style={styles.item}>
            Olá! eu sou {item.nome}.
          </Text>
        )}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Digite aqui!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
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
});