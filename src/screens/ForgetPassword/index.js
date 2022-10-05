
import React, { useState } from "react";
import { SafeAreaView,
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    View, 
    Image, 
    TextInput,
    StatusBar,
    ImageBackground } 
from "react-native";

import { Botao } from "../../components/Botao";

import logo from '../../assets/iconVaccine.png';
import backgroundVaccine from '../../assets/backgroundVaccine.jpeg';

const Inicial = (props) => {    

    const [email, setEmail]  = useState();
    const [password, setPassword] = useState();
    const [hidePass] = useState(true);

    const goInicial = () => {
        props.navigation.navigate('Inicial');
    }

    return(
        <SafeAreaView>
            <StatusBar/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})

export default Inicial;