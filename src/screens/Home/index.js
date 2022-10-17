import React from "react";
import {  StyleSheet, View, Text, Image } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

//Assets:
import logo from '../../assets/iconVaccine.png';

//Screens:
import MyVaccines from "../MyVaccines";
import NextVaccines from "../NextVaccines";


const Drawer = createDrawerNavigator()

const Home = () => {    

    return(
        <Drawer.Navigator
            initialRouteName="MyVaccines"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#ADD4D0',
                    width: "65%"
                },
                drawerLabelStyle: {
                    color: '#419ED7',
                    fontSize: 15,
                    width: "150%"
                },
                headerShown: false,
            }}
            drawerContent={props => <CustomDrawer {...props}/>}
            >
            <Drawer.Screen name="Minhas vacinas" component={MyVaccines} options={{drawerIcon: () =>(<Image source={logo} style={styles.image}/>)}} />
            <Drawer.Screen name="Próximas vacinas" component={NextVaccines} 
                options={{drawerIcon: () =>(<Ionicons name="calendar" size={30} color="black"/>)}}
            />
        </Drawer.Navigator>
    )
}

function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props}>
            <Profile />
            <DrawerItemList {...props}/>
            <DrawerItem
                onPress={()=> {props.navigation.popToTop()}}
                label="Sair"
                labelStyle={{color: '#419ED7', fontFamily: 'Averia Libre', fontSize: 20}}
                icon={() => <Ionicons name='exit' size={35} color='#55AF7A'/>}
            />
        </DrawerContentScrollView>
    );
}

function Profile(){
    return(
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.nomeUsuario}>Olá Jurandir</Text>
                    <Text style={{color: '#419ED7', fontWeight: '300'}}>_____________________________</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 35,
        paddingRight: 20,
        marginBottom: 20
    },
    nomeUsuario:{
        fontSize: 20,
        fontFamily: 'Averia Libre',
        color: '#419ED7',
        textAlign: 'center',
        marginBottom: 15
    },
    image: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
        marginLeft: 5,
    },
})

export default Home;