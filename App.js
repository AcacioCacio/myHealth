import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//Screens:
import Inicial from './src/screens/Inicial';
import Home from './src/screens/Home';
import CreateAccount from './src/screens/CreateAccount';
import ForgetPassword from './src/screens/ForgetPassword';
import NewVaccine from "./src/screens/NewVaccine";
import EditVaccine from "./src/screens/EditVaccine";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Inicial">
       <Stack.Screen name="Inicial" component={Inicial}/>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="CreateAccount" component={CreateAccount} />
       <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
       <Stack.Screen name="NewVaccine" component={NewVaccine} />
       <Stack.Screen name="EditVaccine" component={EditVaccine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
