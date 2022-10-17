import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Vacina = ({ vacina, proximaVacina }) => {
    return<TouchableOpacity style={styles.container}>
            <Text style={styles.titulo}>{ vacina }</Text>
            <Text style={styles.textNextData}>{ proximaVacina }</Text>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginVertical: 3,
        marginHorizontal: 8,
        alignItems: 'flex-start',
        borderRadius: 5,
        marginLeft: 14,
        marginBottom: 5
    },
    titulo: {
        fontSize: 25,
        color: '#3F92C5',
        marginLeft: 14,
    },
    textNextData: {
        fontSize: 15,
        color: '#8B8B8B',
        marginLeft: 14,
        marginBottom: 5
    },
})

export default Vacina;