import React, {useState, useEffect} from "react";
import { SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    StyleSheet} 
from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';

//Components:
import RadioForm from "react-native-simple-radio-button";
import { Ionicons } from '@expo/vector-icons';
import { Botao } from "../../components/Botao";
import { Header } from "../../components/Header";

let gender = [
    {label: 'Male ', value: 0},
    {label: 'Female', value: 1}
];

const CreateAccount = (props) => {    

    const [ nome, setNome ] = useState();
    const [ email, setEmail ]  = useState();
    const [ password, setPassword ] = useState();
    const [ repeatPassword, setRepeatPassword ] = useState();

    const [erro,setErro] = useState();
    const [verSenha,setVerSenha] = useState(true);
    const [verRepetirSenha,setVerRepetirSenha] = useState(true);

    const criarUsuario = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("user added successfully!")
            console.log(JSON.stringify(userCredential))

            // Signed in
            const user = userCredential.user;
            // ...
            alert(
                "Usuário Cadastrado com Sucesso!!"
            )
            // setEmail("")
            // setPassword("")
            // setRepeatPassword("")
            props.navigation.popToTop();
        })
        .catch((error) => {
            console.log("A error occurred while adding user")
            console.log("Error: " + error.message)

            setErro(errorMessage);
            setEmail("")
            setPassword("")
            setRepeatPassword("")
        })
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={styles.body}>
                <View style={styles.contView}>
                    <Text style={styles.text}>Nome completo</Text>
                    <TextInput value={nome} 
                    onChangeText={setNome} 
                    style={styles.TextInput} 
                    keyboardType={"nome"}
                    placeholder="Nome completo"/>
                </View>
                <View style={styles.contSexo}>
                    <Text style={styles.text}>Sexo </Text>
                    <RadioForm 
                        radio_props={gender}
                        initial={-1} 
                        animated={false}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#FFFF'}
                        labelColor={'#FFFF'}
                        selectedButtonColor={'#419ED7'}
                        selectedLabelColor={'#FFFF'}
                        buttonSize={12}
                        labelStyle={{alignItems: 'center', justifyContent: 'center'}}
                        onPress={(value) => {}} />       
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Data nascimento</Text>
                    <View style={styles.inputArea}>
                        <TextInput style={styles.input} placeholder="DD/MM/YYYY"/>
                        <TouchableOpacity>
                            <Ionicons name='calendar' size={25} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput 
                    value={email} 
                    onChangeText={setEmail} 
                    style={styles.TextInput} 
                    keyboardType={"email-address"}
                    placeholder="E-mail..."/>
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput 
                    value={password} 
                    onChangeText={setPassword} 
                    style={styles.TextInputPassword} 
                    secureTextEntry={verSenha} 
                    placeholder="Password..."/>
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
                <View style={styles.contView}>
                    <Text style={styles.text}>Repetir senha</Text>
                    <TextInput 
                    value={repeatPassword} 
                    onChangeText={setRepeatPassword} 
                    style={styles.TextInputPassword} 
                    secureTextEntry={verRepetirSenha} 
                    placeholder="Repeat password..."/>
                    <View style={styles.olho}>
                        <TouchableOpacity onPress={()=> {
                            if(verRepetirSenha == true)
                                setVerRepetirSenha(false)
                            else
                                setVerRepetirSenha(true)
                        }}>
                            <Ionicons name='eye' size={25} color={'#999999'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contCadastrar}>
                    <Botao titulo="Cadastrar" funcao={() => {
                        if(email == "" || password == ""){
                            setErro("Email ou Senha Inválidos")
                        }else if(password !== repeatPassword){
                            setErro("Senha não confere")
                        }else{
                            criarUsuario(email,password);
                            setErro("")
                    }}}/>
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
        marginTop: 90,
        marginLeft: 10,
        marginRight: 15,
        alignItems: 'center',
    },
    contView: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    contSexo: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    text: {
        color: 'white',
        paddingRight: 5
    },
    TextInput: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: 220,
        height: 31,
        backgroundColor: '#ffff',
        color: '#3F92C5'
    },
    TextInputPassword: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: 190,
        height: 31,
        backgroundColor: '#ffff',
        color: '#3F92C5'
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 31,
        backgroundColor: '#ffff',
    },
    input: {
        width: '59%',
        height: 50,
        color: '#3F92C5',
        padding: 8,
        fontSize: 15,
    },
    icon: {
        width: '100%',
        alignItems: 'center',
        color: 'gray',
        paddingRight: 5
    },
    contCadastrar: {
        width:'100%',
        height:'44%',
        alignItems: 'center',
        justifyContent: 'center',
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
    olho:{
        backgroundColor: '#ffff',
        height: 31,
        alignItems: 'center',
        paddingRight: 5
    },
})

export default CreateAccount;