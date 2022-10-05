import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



export const Botao = (props) => {
  return (
    <View>
        <TouchableOpacity style={styles.btEntrar} onPress={props.funcao}>
            <Text style={styles.btTextEntrar}>Entrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    }
})