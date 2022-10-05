import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicial from './src/screens/Inicial';
import Home from './src/screens/Home';
import CreateAccount from './src/screens/CreateAccount';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Inicial">
       <Stack.Screen name="Inicial" component={Inicial}/>
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
