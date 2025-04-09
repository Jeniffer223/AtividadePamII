import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from '../Pages/Home/index';
import DetailsRice from '../Pages/DetailsRice/index';
import Products from '../Pages/Products/index';
import DetailsBean from '../Pages/DetailsBean/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DetailsRice" component={DetailsRice} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="DetailsBean" component={DetailsBean} />
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}