import React from 'react';
import { View} from 'react-native';
import { ListAtendProps } from '../typesApp';
import ListaAtend from '../layouts/ListaAtend';


const ListAtendScreen = ({ navigation, route }: ListAtendProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListaAtend navigation={navigation} route={route} />
      </View>
    );
  };

  export default ListAtendScreen;