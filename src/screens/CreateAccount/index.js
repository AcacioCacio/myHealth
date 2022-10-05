import React, {useState, useEffect} from "react";
import { SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image, 
    StyleSheet} 
from "react-native";

import RadioForm from "react-native-simple-radio-button";
import { Ionicons } from '@expo/vector-icons';


import logo from '../../assets/iconVaccine.png';
//import { Botao } from "../../components/Botao";

let gender = [
    {label: 'Male ', value: 0},
    {label: 'Female', value: 1}
];

const CreateAccount = (props) => {    

    const [ nome, setNome ] = useState();
    const [ email, setEmail ]  = useState();
    const [ password, setPassword ] = useState();
    const [ password2, setPassword2 ] = useState();
    const [ hidePass ] = useState(true);

    const goInicial = () => {
        props.navigation.navigate('Inicial', {email: email, password: password});
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}>MyHealth</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.contView}>
                    <Text style={styles.text}>Nome completo</Text>
                    <TextInput value={nome} onChangeText={setNome} style={styles.TextInput} keyboardType={"nome"}/>
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
                        <TextInput style={styles.input}/>
                        <TouchableOpacity>
                            <Ionicons name='calendar' size={25} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput value={email} onChangeText={setEmail} style={styles.TextInput} keyboardType={"email-address"}/>
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput value={password} onChangeText={setPassword} style={styles.TextInput} secureTextEntry={hidePass} />
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Repetir senha</Text>
                    <TextInput value={password2} onChangeText={setPassword2} style={styles.TextInput} secureTextEntry={hidePass} />
                </View>
                <View style={styles.contCadastrar}>
                    <TouchableOpacity style={styles.btEntrar} onPress={goInicial}>
                        <Text style={styles.btTextEntrar}>Cadastrar</Text>
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
    containerTitle: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: '#C1E7E3'
    },
    title: {
        fontSize: 30,
        marginLeft: 12,
        color: '#419ED7',
        TextAlign: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        marginLeft: 5,
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
        fontSize: 18,
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
})

export default CreateAccount;