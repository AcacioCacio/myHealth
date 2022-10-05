
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

//import { Botao } from "../../components/Botao";

import logo from '../../assets/iconVaccine.png';
import backgroundVaccine from '../../assets/backgroundVaccine.jpeg';

const Inicial = (props) => {    

    const [email, setEmail]  = useState();
    const [password, setPassword] = useState();
    const [hidePass] = useState(true);

    const goHome = () => {
        props.navigation.navigate('Home');
    }

    const goNewAccount = () => {
        props.navigation.navigate('CreateAccount');
    }

    const goForget = () => {
        props.navigation.navigate('ForgetPassword');
    }

    return(
        <SafeAreaView>
            <StatusBar/>
            <ImageBackground source={backgroundVaccine} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.containerTitle}>
                    <Image source={logo} style={styles.image}/>
                    <Text style={styles.title}>MyHealth</Text>
                </View>
                <View>
                    <Text style={styles.Description}>Controle as suas vacinas e fique seguro</Text>
                </View>
                <View>
                    <View style={styles.contInput}>
                        <Text style={styles.text}>E-mail:</Text>
                        <TextInput value={email} onChangeText={setEmail} style={styles.TextInput} keyboardType={"email-address"}/>
                    </View>
                    <View style={styles.contInput}>
                        <Text style={styles.text}>Senha:</Text>
                        <TextInput value={password} onChangeText={setPassword} style={styles.TextInput} secureTextEntry={hidePass} />
                    </View>
                </View>
                <View style={styles.contBt}>
                    <TouchableOpacity style={styles.btEntrar} onPress={goHome}>
                        <Text style={styles.btTextEntrar}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btNew} onPress={goNewAccount}>
                        <Text style={styles.btTextNew}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btForget} onPress={goForget}>
                        <Text style={styles.btTextForget}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        opacity: 0.8
    },
    containerTitle: {
        flexDirection: 'row',
        marginTop: 45,
        alignItems: 'center'
    },
    title: {
        fontSize: 48,
        marginLeft: 12,
        color: '#419ED7',
        textDecorationLine: 'underline',
    },
    image: {
        resizeMode: 'contain',
        height: 45,
        width: 45,
    },
    Description: {
        marginTop: 75,
        marginBottom: 64,
        textAlign: 'center',
        fontSize: 28,
        color: '#419ED7',

    },
    contInput: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        width: '90%',
    },
    text: {
        color: 'white',
    },
    TextInput: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: 250,
        height: 31,
        backgroundColor: '#ffff',
    },
    btEntrar: {
        borderColor: '#37BD6D',
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        TextAlign: 'center',
        height: 35,
        width: 115,
        marginTop: 50
    },
    btTextEntrar: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
    },
    contBt: {
        height: 320,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btNew: {
        backgroundColor: '#419ED7',
        alignItems: 'center',
        TextAlign: 'center',
        height: 40,
        width: 155,
    },
    btTextNew: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,  
    },
    btForget: {
        backgroundColor: '#B0CCDE',
        alignItems: 'center',
        TextAlign: 'center',
        height: 35,
        width: 155,
    },
    btTextForget: {
        fontSize: 13,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
    },
})

export default Inicial;