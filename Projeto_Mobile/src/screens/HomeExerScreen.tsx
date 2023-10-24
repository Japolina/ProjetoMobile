import { View } from "react-native";
import Home_Exercicios from "../layouts/Home_Exercicios";
import { HomeExerProps } from "../types2";



const HomeExerScreen = ({ navigation, route }: HomeExerProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Home_Exercicios navigation={navigation} route={route} />
      </View>
    );
  };

  export default HomeExerScreen;