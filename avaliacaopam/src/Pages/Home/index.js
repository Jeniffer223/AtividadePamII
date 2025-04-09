import {View,Text,Image, Button, Alert,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App(){
  const navigation = useNavigation();

  return(
   <View>
      <Image
        source={{
          uri:'https://www.shutterstock.com/image-vector/bemvindo-welcome-brazilian-portuguese-hand-600nw-2006151056.jpg'
        }}
        style={{ width: 350, height: 450}}
      />
      <Button
        title="Lista de produtos"
        color="#FF8C00"
        accessibilityLabel="Botão para ir na lista de produtos"
        onPress={() => navigation.navigate('Products')
        }
      />
    </View>
  )
}
