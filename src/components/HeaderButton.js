import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HeaderButton = (props) => {

    return (
    <View style={styles.containerTitle}>
        <TouchableOpacity onPress={props.funcao}>
            <Ionicons name="menu" color="#ADD5D0" size={45}/>
        </TouchableOpacity>
        <Text style={styles.title}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: '#C1E7E3',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        marginLeft: 12,
        color: '#419ED7',
        TextAlign: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        marginLeft: 5,
    }
})