import React, {useState} from "react";
import { SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image} 
from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

//Components:
import RadioForm from "react-native-simple-radio-button";
import { Ionicons } from '@expo/vector-icons';
import { Botao } from "../../components/Botao";
import { Header } from "../../components/Header";

//Image
import comprovante from '../../assets/vacinas/comprovante.png'

let dose = [
    {label: '1ª dose ', value: 0},
    {label: '2ª dose ', value: 1},
    {label: '3ª dose ', value: 2},
    {label: 'Dose única', value: 3}
];


const NewVaccine = (props) => {

    const voltarInicial = () => {
        props.navigation.pop();
    }

    const [ dataVacina, setDataVacina ] = useState();
    const [ dataProxVacina, setDataProxVacina ] = useState();
    const [ qtdDose, setDose] = useState(dose);
    const [ vacina, setVacina ] = useState();

    const [erro, setErro] = useState();

    const criarVacina = (dataVacina, vacina, qtdDose, dataProxVacina) => {
        createVaccine(dataVacina, vacina, qtdDose, dataProxVacina)
        .then(() => {
            
            alert(
                "Vacina cadastrada com Sucesso!!"
            )
            // setEmail("")
            // setPassword("")
            // setRepeatPassword("")
            props.navigation.pop();
        })
        .catch((error) => {
            console.log("A error occurred while adding vaccine")
            console.log("Error: " + error.message)

            setErro(errorMessage);
            setDataVacina("")
            setDataProxVacina("")
            setVacina("")
            setDose("")
        })
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
                        <TextInput style={styles.input} placeholder='DD/MM/YYYY' value={dataVacina} onChangeText={setDataVacina}/>
                        <TouchableOpacity >
                            <Ionicons name='calendar' size={20} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contViewVacina}>
                    <Text style={styles.text}>Vacina</Text>
                    <TextInput style={styles.TextInput} value={vacina} onChangeText={setVacina}/>
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
                            onPress={(dose) => {setDose}} 
                        />
                    </View>
                          
                </View>
                <View style={styles.contView}>
                    <Text style={styles.text}>Comprovante</Text>
                    <TouchableOpacity style={styles.btSelImage}>
                        <Text style={styles.btTextImagem}>Selecionar Imagem</Text>
                    </TouchableOpacity>

                    <Image source={comprovante} style={styles.image}/>
                    
                </View>
                <View style={styles.contViewData}>
                    <Text style={styles.text}>Próxima vacinação</Text>
                    <View style={styles.inputArea}>
                        <TextInput style={styles.input} placeholder='DD/MM/YYYY' value={dataProxVacina} onChangeText={setDataProxVacina}/>
                        <TouchableOpacity>
                            <Ionicons name='calendar' size={20} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contViewBt}>
                    <Botao titulo="Cadastrar" funcao={() => {
                        if(dataVacina== "" || vacina== "" || qtdDose== "" || dataProxVacina== ""){
                            setErro("Dados incorretos!")
                        }else if(dataVacina < dataProxVacina){
                            setErro("Próxima data de vacina inválida!")
                        }else{
                            criarVacina(dataVacina, vacina, dose, dataProxVacina);
                            setErro("")
                    }}}/>
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
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    btVoltar: {
        borderColor: '#9B9696',
        backgroundColor: '#9B9696',
        alignItems: 'center',
        TextAlign: 'center',
        height: 35,
        width: 115,
    },
    btTextVoltar: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
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

export default NewVaccine;