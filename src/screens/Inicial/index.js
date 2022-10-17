
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebase';
import { Ionicons } from '@expo/vector-icons';

//Assets:
import logo from '../../assets/iconVaccine.png';
import backgroundVaccine from '../../assets/backgroundVaccine.jpeg';

//Components:
import { Botao } from "../../components/Botao";

const Inicial = (props) => {    

    const [email, setEmail]  = useState();
    const [password, setPassword] = useState();
    const [message,setMessage] = useState();
    const [verSenha,setVerSenha] = useState(true);

    const goNewAccount = () => {
        props.navigation.navigate('CreateAccount');
    }

    const goForget = () => {
        props.navigation.navigate('ForgetPassword');
    }

    const loginUsuario = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // ...
            props.navigation.navigate('Home');
            
            setEmail("");
            setPassword("");
            setMessage("");
        })
        .catch((error) => {
            const errorMessage = error.message;
            setMessage(getMessageError(errorMessage));
            console.log(errorMessage)
        });
    }

        const getMessageError = (code) => {
            switch(code){
                case "auth/user-not-found":
                    return "Usuário não cadastrado.";
                case "auth/wrong-password":
                    return "Senha incorreta."
                case "auth/invalid-email":
                    return "E-mail inválido."
                default:
                    return "Usuário ou Senha incorretos."
            }
        }

        const renderMessage = () => {
            if(!message)
            return null;
    
            return(
                <View>
                    <Text style={styles.erroEmail}>{message}</Text>
                </View>
            );
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
                        <TextInput value={password} onChangeText={setPassword} style={styles.TextInputPassword} secureTextEntry={verSenha} />
                        <View style={styles.olho}>
                            <TouchableOpacity onPress={()=> {
                                if(verSenha == true)
                                    setVerSenha(false)
                                else
                                    setVerSenha(true)
                            }}>
                                <Ionicons name='eye' size={25} color={'#999999'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {renderMessage()}
                
                <View style={styles.contBt}>
                    <Botao titulo="Entrar" funcao={() =>{loginUsuario(email,password)}}/>
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
        color: '#3F92C5'
    },
    TextInputPassword: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: 220,
        height: 31,
        backgroundColor: '#ffff',
        color: '#3F92C5'
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
    olho:{
        backgroundColor: '#ffff',
        height: 31,
        alignItems: 'center',
        paddingRight: 5
    },
    erroEmail:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#FF5353',
        alignItems: 'flex-end',
    },
})

export default Inicial;