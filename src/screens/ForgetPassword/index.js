
import React, { useState } from "react";
import { SafeAreaView,
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity, 
    TextInput } 
from "react-native";
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../config/firebase'

import { Header } from "../../components/Header";


const ForgetPassword = (props) => {    

    const [email, setEmail]  = useState();

    const recuperarSenha = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Email de redefinição enviado com sucesso!')
            alert(
                "Enviado com sucesso!!"
            )
            props.navigation.popToTop()
        })
        .catch(() => {
            console.log('Erro ao solicitar a redefinição de senha')
            alert(
                "Erro ao solicitar a redefinição de senha!!"
            )
            props.navigation.popToTop()
        })
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={styles.body}>
                <View style={styles.contView}>
                    <View style={ {flexDirection:'row', alignItems: 'center'} }>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput 
                        value={email} 
                        onChangeText={setEmail} 
                        style={styles.TextInput} 
                        keyboardType={"email-address"}
                        placeholder='E-mail...'/>
                    </View>
                </View>
                <View style={styles.contButton}>
                    <TouchableOpacity style={styles.btEntrar} onPress={recuperarSenha}>
                        <Text style={styles.btTextEntrar}>Recuperar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ADD4D0'
    },
    body:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btEntrar: {
        borderColor: '#37BD6D',
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        TextAlign: 'center',
        height: 35,
        width: 150,
    },
    btTextEntrar: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
    },
    contView: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        paddingRight: 5
    },
    TextInput: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: 270,
        height: 31,
        backgroundColor: '#ffff',
        color: '#3F92C5',
    },
    contButton: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ForgetPassword;