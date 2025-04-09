import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn.awsli.com.br/1420/1420494/produto/89497775/f1d2fd3cfc.jpg',
        }}
        style={{ width: 350, height: 300 }}
      />
      <Text style={{ fontWeight: 'bold' }}>
        Feijão {'\n'}
        Tipo 1 {'\n'}
        R$8,33 {'\n'}
        Camil
      </Text>
      <View style = {{marginTop:150}}>
      <Button
        title="Voltar"
        color="#3148FA"
        accessibilityLabel="Botão para retorna a pagina anterior"
        onPress={() => navigation.navigate('Products')
        } 
      /> 
      </View>
    </View>
  );
}