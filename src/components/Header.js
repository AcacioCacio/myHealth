import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logo from '../assets/iconVaccine.png';

export const Header = () => {

    return (
    <View style={styles.containerTitle}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>MyHealth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
})