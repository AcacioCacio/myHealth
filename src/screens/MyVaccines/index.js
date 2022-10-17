import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native"; 

//Components:
import { Botao } from "../../components/Botao";
import { HeaderButton } from "../../components/HeaderButton";
import { Ionicons } from '@expo/vector-icons';
import CardVacinas from "../../components/CardVacinas";
import ListVacinas from "../../mocks/vacinas"

const MyVaccines = (props) => {    
    const {lista} = ListVacinas;

    const [busca, setBusca] = useState('');
    const [list, setList] = useState(lista);

    useEffect(() =>{
        if(busca === ''){
            setList(lista);
        } else {
            setList(
                lista.filter((item) =>{
                    return !!(item.vacina.toLowerCase().indexOf(busca.toLowerCase()) > -1);
                })
            );
        }
    }, [busca]);

    const openDrawer = () => {
        props.navigation.openDrawer();
    }

    const goNewVaccine = () => {
        props.navigation.navigate('NewVaccine');
    };

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <HeaderButton titulo="Minhas vacinas" funcao={openDrawer}/>
            </View>
            <View style={styles.body}>
                <View style={styles.contView}>
                    <View style={styles.inputArea}>
                        <Ionicons name='search' size={25} style={styles.icon}/>
                        <TextInput style={styles.input} placeholder="Pesquisar vacina..." onChangeText={(ev) => setBusca(ev)}/>
                    </View>
                </View>
                <View style={styles.lista}>
                    <CardVacinas
                        cartaoVacinas = {list} 
                        onPressEdit={() => props.navigation.navigate('EditVaccine')}/>
                </View>
                <View style={styles.btNew}>
                    <Botao titulo="Nova vacina" funcao={goNewVaccine} style={styles.btNewVaccine}/>
                </View> 
            </View>   
        </SafeAreaView>
    )
}

const styles = StyleSheet .create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ADD4D0'
    },
    body:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    contView: {
        flexDirection: 'row',
        padding: 5,
        width: '95%',
        marginTop: 15,
        marginBottom: 15,
    },
    TextInput: {
        fontSize: 15,
        width: "85%",
        height: 31,
        backgroundColor: '#ffff',
    },
    inputArea: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        height: 31,
        backgroundColor: '#ffff',
    },
    icon: {
        width: '10%',
        color: 'gray',
        paddingLeft: 3,
    },
    lista: {
        width: '99%',
        height: '68%'
    },
    btNew: {
        width: '100%',
        height: '32%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 15
    }
})

export default MyVaccines;

