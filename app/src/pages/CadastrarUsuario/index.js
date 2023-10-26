import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';

export default function CadastrarUsuario(){


    const[conteudoCadastro, setConteudoCadastro] = useState(<Cadastro />);

  
   
    return(
        <View style={styles.container}>

            {conteudoCadastro}
   
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
    image:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingTop: '10%'
    },
    // viewTop:{
    //     height: '30%',
    //     width: '100%',
    //     alignItems: 'center',
    //     alignItems: 'center',
       

    // },
    viewMiddle:{
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 

    },
    viewBottom:{
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textoH1:{
        color: '#ffffff',
        fontSize: 35,
        marginBottom: 30,
        fontFamily: 'Fredericka the Great Regular',

    },
    textoNome:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin Sketch Regular',
        
        
    },
    textoEmail:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin Sketch Regular',
    },
    textoSenha:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin Sketch Regular',
    },
    input:{
        height: '7%',
        width: '70%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingLeft: 10,
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15
        

    },
    botaoCadastrar: {

        height: 50,
        width: 120,
        backgroundColor: '#3399cc',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    txtBtnCadastar: {

        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 20,

    },
})



function Cadastro(){
    const navigation = useNavigation();
    const image = require('/imagens/gifChamas.gif')
    const [isChecked, setChecked] = useState(false);
    let inputName
    let inputEmail
    let inputSenha

return(

        <View style={styles.container}>

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        {/* <View style={styles.viewTop}>

        <Text style={styles.textoH1}>Cadastro de Usuário</Text>


        </View> */}
        <View style={styles.viewMiddle}>


        <Text style={styles.textoH1}>Cadastro de Usuário</Text>

        <Text style={styles.textoNome}>Escolha um nome de usuário:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputName}
           />

        <Text style={styles.textoEmail}>Digite seu Email:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputEmail}
           />
       



        <Text style={styles.textoSenha}>Digite uma senha:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputSenha}
           />
       
      
        </View>
        
        <View style={styles.viewBottom}>

        <View style={{flexDirection: 'row', height: '15%', width: '100%', alignItems:'center', justifyContent: 'center'}}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#3399cc' : undefined}
        /> 
        <Text style={{color: '#ffffff', marginLeft: 10}}>Tenho mais de 18 anos, e li os <TouchableOpacity style={{color: '#3399cc'}} onPress={ () => navigation.navigate('TermoDeUsuario')}>Termos de usuário</TouchableOpacity> !</Text>
        </View>

        <TouchableOpacity style={styles.botaoCadastrar} disabled={!isChecked} activeOpacity={isChecked ? 0.5 : 1}>
            <Text style={styles.txtBtnCadastar}>Confirmar</Text>
            </TouchableOpacity>

        </View>

        </ImageBackground>   
   
</View>





)

}