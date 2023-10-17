import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const ListaNome = ({ nomes }) => {
  const [titulo, setTitulo] = useState("Título do Componente");
  const [nomesState, setNomes] = useState(nomes);

  const atualizarNome = (index, novoNome) => {
    const novosNomes = [...nomesState];
    novosNomes[index] = novoNome;
    setNomes(novosNomes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        data={nomesState}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TextInput
              style={styles.input}
              value={item}
              onChangeText={(newText) => atualizarNome(index, newText)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 8,
  },
});

export default ListaNome;
