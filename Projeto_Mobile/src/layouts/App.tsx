import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Principal from './Principal';



type RootStackParamList = {
  Home: undefined;
  Detalhes: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type HomeScreenNavigationProps = HomeProps['navigation'];

type HomeScreenRouteProps = HomeProps['route'];


const HomeScreen = ({ navigation, route }: HomeProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Principal navigation={navigation} route={route} />
    </View>
  );
};

const DetalhesScreen = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Detalhes Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type { HomeScreenNavigationProps, HomeScreenRouteProps, HomeProps };
export default App;