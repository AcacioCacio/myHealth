import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

//Component:
import { Botao } from "../../components/Botao";
import { HeaderButton } from "../../components/HeaderButton";
import VacinaFiltered from '../../components/VacinaFiltered'

//Mocks:
import vacinas from '../../mocks/vacinas'

const NextVaccines = (props) => {   
    
    const openDrawer = () => {
        props.navigation.openDrawer();
    }

    const goNewVaccine = () => {
        props.navigation.navigate('NewVaccine');
    };

    const [lista, setLista] = useState([]);

    useEffect(() => {
        setLista(vacinas.lista);
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <HeaderButton titulo="Próximas vacinas" funcao={openDrawer}/>
            </View>
            <View style={styles.body}>
                <View style={styles.lista}>
                    <FlatList
                    data={lista}
                    renderItem={({item}) => <VacinaFiltered {...item}/>}
                    keyExtractor={({vacina}) => vacina}
                    />
                </View>
                <View style={styles.btNew}>
                    <Botao titulo="Nova vacina" funcao={goNewVaccine}/>
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
    },
    lista: {
        width: '100%',
        height: '75%',
        paddingTop: 15
    },
    btNew: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 35
    }
})

export default NextVaccines;