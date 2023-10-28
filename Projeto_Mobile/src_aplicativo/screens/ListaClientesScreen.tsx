import React from 'react';
import { View} from 'react-native';
import { ListClientesProps } from '../typesApp';
import ListClientes from '../layouts/ListClientes';


const ListClientesScreen = ({ navigation, route }: ListClientesProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListClientes navigation={navigation} route={route} />
      </View>
    );
  };

  export default ListClientesScreen;