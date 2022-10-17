import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native";

const Vacina = ({ vacina, data, dose, image, proximaVacina, onPressEdit }) => {


    return<TouchableOpacity style={styles.container} onPress={() => onPressEdit()}>
            <Text style={styles.titulo}>{ vacina }</Text>
            <View style={styles.contDose}>
                <Text style={styles.textDose}>{ dose }</Text>
            </View>

            <Text style={styles.textDataStart}>{ data }</Text>
            <View style={styles.contImage}>
                <Image source={image} style={styles.image}/>
            </View>
            
            <View style={styles.contNextDate}>
                <Text style={styles.textNextData}>{ proximaVacina }</Text>
            </View>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: (Dimensions.get('window').width/2)-10,
        marginVertical: 3,
        marginHorizontal: 3,
        alignItems: 'center',
        borderRadius: 5,
    },
    titulo: {
        fontSize: 20,
        color: '#3F92C5'
    },
    text: {
        fontSize: 15
    },
    textDose: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    contDose: {
        backgroundColor: '#3F92C5',
        width: 85,
        alignItems: 'center'
    },
    textDataStart: {
        fontSize: 15,
        color: '#8B8B8B'
    },
    image: {
        resizeMode: 'contain',
        height: 70,
        width: 200,
    },
    contImage: {
        width: "100%",
        alignItems: 'center',
    },
    textNextData: {
        fontSize: 10,
        color: '#FD7979'
    },
    contNextDate: {
        width: "95%",
        alignItems: 'flex-end',
    },

})

export default Vacina;