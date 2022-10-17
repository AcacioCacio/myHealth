import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";

//Component: 
import Vacina from '../components/Vacina'

const CardVacinas = (props) => {

    const {cartaoVacinas, onPressEdit} = props;

    return <FlatList
                data={cartaoVacinas}
                renderItem={({item}) => <Vacina {...item} onPressEdit={onPressEdit}/>}
                keyExtractor={({vacina}) => vacina}
                numColumns={2}
            />

}

export default CardVacinas;