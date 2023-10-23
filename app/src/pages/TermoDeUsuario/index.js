import React from "react";
import { ImageBackground,View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';


export default function TermoDeUsuario(){

 

  
   
    return(
        <View style={styles.container}>

            <Text>Termo</Text>
   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
