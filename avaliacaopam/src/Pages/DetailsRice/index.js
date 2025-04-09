import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn.awsli.com.br/2500x2500/1420/1420494/produto/88649935/eb60c9ac34.jpg',
        }}
        style={{ width: 350, height: 300 }}
      />
      <Text style={{ fontWeight: 'bold' }}>
        Arroz {'\n'}
        Tipo 1 {'\n'}
        R$29,33 {'\n'}
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
