import React, {useState, useEffect} from "react";
import { SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    Alert} 
from "react-native";

//Components:
import RadioForm from "react-native-simple-radio-button";
import { Ionicons } from '@expo/vector-icons';
import { Botao } from "../../components/Botao";
import { Header } from "../../components/Header";

import DatePicker from "react-native-date-picker";

//Image
import comprovante from '../../assets/vacinas/comprovante.png'

let dose = [
    {label: '1ª dose ', value: 0},
    {label: '2ª dose ', value: 1},
    {label: '3ª dose ', value: 2},
    {label: 'Dose única', value: 3}
];


const EditVaccine = (props) => {

    const data = "26/05/2021"
    const vacina = "COVID"

    const voltarInicial = () => {
        props.navigation.pop();
    };

    const removerVacina = () => {
        Alert.alert(
        "Remover",
        "Tem certeza que deseja remover essa vacina?",
        [
            {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Sim", onPress: () => {
                console.log("OK Pressed"); 
                props.navigation.pop();
                Alert.alert(
                    "Remover!!",
                    "Vacina removida com sucesso!"
                )
            }}
        ]
        );
        
    }

    const salvarVacina = () => {
        Alert.alert(
        "Salvar vacina",
        "Tem certeza que deseja alterar essa vacina?",
        [
            {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Sim", onPress: () => {
                console.log("OK Pressed"); 
                props.navigation.pop();
                Alert.alert(
                    "Alterado!!",
                    "Vacina alterada com sucesso!"
                )
            }}
        ]
        );
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header titulo="Minhas vacinas" />
            </View>
            <View style={styles.body}>
                <View style={styles.contViewData}>
                    <Text style={styles.text}>Data de vacinação</Text>
                    <View style={styles.inputArea}>
                        <TextInput value={data} style={styles.input} editable={false}/>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Ionicons name='calendar' size={20} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contViewVacina}>
                    <Text style={styles.text}>Vacina</Text>
                    <TextInput style={styles.TextInput} value={vacina}/>
                </View>
                <View style={styles.contDose}>
                    <Text style={styles.text}>Dose</Text>
                    <View>
                        <RadioForm 
                            radio_props={dose}
                            initial={-1} 
                            animated={true}
                            formHorizontal={true}
                            labelHorizontal={false}
                            buttonColor={'#FFFF'}
                            labelColor={'#FFFF'}
                            selectedButtonColor={'#419ED7'}
                            selectedLabelColor={'#FFFF'}
                            buttonSize={10}
                            labelStyle={{alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => {}} 
                        />
                    </View>
                          
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Comprovante</Text>
                    <TouchableOpacity style={styles.btSelImage} onPress={voltarInicial}>
                        <Text style={styles.btTextImagem}>Selecionar Imagem</Text>
                    </TouchableOpacity>

                    <Image source={comprovante} style={styles.image}/>
                    
                </View>
                <View style={styles.contViewProxData}>
                    <Text style={styles.text}>Próxima vacinação</Text>
                    <View style={styles.inputArea}>
                        <TextInput style={styles.input} placeholder='DD/MM/YYYY'/>
                        <TouchableOpacity>
                            <Ionicons name='calendar' size={20} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contViewBt}>
                    <TouchableOpacity style={styles.btSalvar} onPress={salvarVacina}>
                        <Text style={styles.btTextVoltar}>Salvar alterações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btExcluir} onPress={removerVacina}>
                        <Ionicons name='trash' size={20} style={styles.iconLixo}/>
                        <Text style={styles.btTextVoltar}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btVoltar} onPress={voltarInicial}>
                        <Text style={styles.btTextVoltar}>Voltar</Text>
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
        marginTop: 30,
        marginLeft: 10,
        marginRight: 15,
        alignItems: 'center',
    },
    contView: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginTop: 15,
        height: '27%',
        flexWrap: 'wrap',
    },
    contViewBt: {
        padding: 5,
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    contViewVacina: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    contViewData: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    contViewProxData: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contDose: {
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    text: {
        color: 'white',
        fontSize: 15,
        paddingBottom: 5,
        marginRight: 5
    },
    TextInput: {
        fontSize: 15,
        marginLeft: 5,
        paddingLeft: 5,
        width: '61%',
        height: 31,
        backgroundColor: '#ffff',
        color: '#3F92C5',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 31,
        backgroundColor: '#ffff',
        width: '50%'
    },
    input: {
        width: '80%',
        height: 45,
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
    iconLixo: {
        width: '30%',
        alignItems: 'center',
        color: 'white',
    },
    btSalvar: {
        flexDirection: 'row',
        borderColor: '#37BD6D',
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        justifyContent: 'center',
        TextAlign: 'center',
        height: 38,
        width: 140,
        borderWidth: 1
    },
    btExcluir: {
        flexDirection: 'row',
        borderColor: '#FF8383',
        backgroundColor: '#FF8383',
        alignItems: 'center',
        justifyContent: 'center',
        TextAlign: 'center',
        height: 35,
        width: 115,
        borderWidth: 1
    },
    btVoltar: {
        flexDirection: 'row',
        borderColor: '#9B9696',
        backgroundColor: '#9B9696',
        alignItems: 'center',
        justifyContent: 'center',
        TextAlign: 'center',
        height: 35,
        width: 115,
        borderWidth: 1
    },
    btTextVoltar: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
    },
    btSelImage: {
        borderColor: '#419ED7',
        backgroundColor: '#419ED7',
        alignItems: 'center',
        TextAlign: 'center',
        height: 30,
        width: '61%',
    },
    btTextImagem: {
        fontSize: 11,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
    },
    image: {
       marginTop: 15,
    }
})

export default EditVaccine;