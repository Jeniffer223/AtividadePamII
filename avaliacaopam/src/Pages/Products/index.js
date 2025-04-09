import { View,Text, Button, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App(){
  const navigation = useNavigation();
  
  return(
    <View>
      <Text style={{ fontWeight: 'san-serif', fontSize: 25, width: 200, height: 50, marginTop:10 }}>
        Lista de produtos
      </Text>
      <Image
        source={{
          uri:'https://cdn.awsli.com.br/2500x2500/1420/1420494/produto/88649935/eb60c9ac34.jpg'
        }}
        style={{ width: 335, height: 100}}
      />
      <Button 
        title="Arroz"
        color="#328FFA"
        accessibilityLabel="Botão para ver detalhes de arroz"
        onPress={() => navigation.navigate('DetailsRice')
        } 
      /> 
      <Image
        source={{
          uri:'https://cdn.awsli.com.br/1420/1420494/produto/89497775/f1d2fd3cfc.jpg'
        }}
        style={{ width: 335, height: 100}}
      />
      <Button
        title="Feijão"
        color="#328FFA"
        accessibilityLabel="Botão para ver detalhes de feijão"
        onPress={() => navigation.navigate('DetailsBean')
        }
      />
      <View style = {{marginTop:150}}>
      <Button
        title="Voltar"
        color="#3148FA"
        accessibilityLabel="Botão para retorna a pagina anterior"
        onPress={() => navigation.navigate('Home')
        } 
      /> 
      </View>
    </View>
  )
}