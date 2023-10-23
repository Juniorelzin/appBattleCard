import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";




export default function TelaDeLogin(){

    const[conteudoFeed, setConteudoFeed] = useState(<TelaPrincipal />);

    return(
        <View style={styles.container}>

       
        {conteudoFeed}
        
          
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
        
    },
    logo: {
        alignItems: 'center',
        width: 300,
        height: 300,
        objectFit: 'fill',
       
    },
    viewTop:{
        height: '50%',
        width: '100%',
        alignItems: 'center',
      
             

    },
    viewMiddle:{
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      

    },
    viewBottom:{
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    textoNome:{
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
        height: '20%',
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingLeft: 10,
        fontFamily: 'Fredericka the Great Regular',
        marginBottom: 20,

    },
    botaoLogin: {

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
    txtBtnLogin: {

        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: '#171717',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Fredericka the Great Regular',


    },
  
})

function TelaPrincipal(){
    const navigation = useNavigation();
    const image = require('/imagens/gifChamas.gif')
    const logo = require('/imagens/logo_sfundo2.png')
    let inputName
    let inputSenha
    return(
        <View style={styles.container}>
    
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
                    <View style={styles.viewTop}>

                    <Image style={styles.logo}
                            source={logo}/>


                    </View>

                     <View style={styles.viewMiddle}>

                     <Text style={styles.textoNome}>Digite seu nome de usuário:</Text>
                        
                         <TextInput

                            multiline= {false}
                            style={styles.input}
                            value={inputName}
                            />


                            <Text style={styles.textoSenha}>Digite sua senha:</Text>
                        
                         <TextInput

                            multiline= {false}
                            style={styles.input}
                            value={inputSenha}
                            />


                            <Text style={{color: '#ff0000'}}></Text>

                    </View>

                     <View style={styles.viewBottom}>

                        <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('IniciarJogo')}>
                        <Text style={styles.txtBtnLogin}>Entrar</Text>
                        </TouchableOpacity>


                    </View>
                        
                     

    
               
    
    
    
               
    
                </ImageBackground>   
           
        </View>
    )
    }