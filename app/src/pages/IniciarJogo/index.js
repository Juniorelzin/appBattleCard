import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

let deck_esqueletos = [
  {image: require('/imagens/esqueletos/esqueleto0.jpg') ,nome: 'Skullshadow', atk: 2000, def: 2000},
  {image: require('/imagens/esqueletos/esqueleto1.jpg') ,nome: 'Kinigit', atk: 1800, def: 1800},
  {image: require('/imagens/esqueletos/esqueleto2.jpg') ,nome: 'Horghost', atk: 1900, def: 1600},
  {image: require('/imagens/esqueletos/esqueleto3.jpg') ,nome: 'Berserk', atk: 2000, def: 1500},
  {image: require('/imagens/esqueletos/esqueleto4.jpg') ,nome: 'Escorpileto', atk: 1800, def: 1700},
]
let deck_magos = [
  {image: require('/imagens/magos/mago0.jpg') ,nome: 'Merlin', atk: 2100, def: 1900},
  {image: require('/imagens/magos/mago1.jpg') ,nome: 'Meduxa', atk: 1700, def: 2000},
  {image: require('/imagens/magos/mago2.jpg') ,nome: 'Epocus', atk: 1800, def: 1600},
  {image: require('/imagens/magos/mago3.jpg') ,nome: 'Frontiacus', atk: 1800, def: 1800},
  {image: require('/imagens/magos/mago4.jpg') ,nome: 'Invokyts', atk: 2000, def: 1900},
]
let deck_goblins = [
  {image: require('/imagens/goblins/goblin0.jpg') ,nome: 'Zigore', atk: 2000, def: 1800},
  {image: require('/imagens/goblins/goblin1.jpg') ,nome: 'Archit', atk: 1800, def: 1500},
  {image: require('/imagens/goblins/goblin2.jpg') ,nome: 'Brutehog', atk: 2100, def: 1600},
  {image: require('/imagens/goblins/goblin3.jpg') ,nome: 'Sprigs', atk: 1600, def: 1600},
  {image: require('/imagens/goblins/goblin4.jpg') ,nome: 'Chantus', atk: 1900, def: 1700},
]
let userDeck = []
  




export default function TelaBatalha(){

    const[conteudoFeed, setConteudoFeed] = useState(<Conteudo />);
    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
      
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    };
  
   
    return(
        <Animated.View style={[
          styles.container,
          {
           
            opacity: fadeAnim,
          },
        ]}>


       
        {conteudoFeed}
        {fadeIn()}
          
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    viewTop:{
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewMiddle:{
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',

    },
    viewBottom:{
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    h1Text:{
        color: '#ffffff',
        fontSize: 40,
        marginTop: 10,
        fontFamily: 'Fredericka the Great Regular',
      
    },
    txtText:{
        color: '#ffffff',
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Fredericka the Great Regular',
        
    },
    deckStart:{
        height: 230,
        width: 150


    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, 
       
    },
    modalView: {
        height: '90%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,  
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        elevation: 2,
    },
    buttonEscolher: {
      borderRadius: 20,
      padding: 10,
      margin: 10,
      elevation: 2,
      backgroundColor: '#3399cc',
    },
    buttonClose: {
        backgroundColor: '#ffffff',
    },
    fundoModal:{
        height: '100%',
        width: '100%',
        borderRadius: 20,  
        justifyContent: 'center',

    },
    viewImage: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'

    },
    imageModal: {
        height: 100,
        width: 70


    },
    viewText: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    viewText2: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    modalViewCore:{
        height: '90%',
        width: '90%',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly'


    },
    textStyle: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
    },
    modalText: {
        marginBottom: 15,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
    },
    textStyleEscolher:{
      color: '#000000',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Fredericka the Great Regular',


    }

})

function Conteudo(){
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState()
    const image = require('/imagens/gifChamas.gif')
    const starterDeck1 = require('/imagens/deck_Abertura1.png')
    const starterDeck2 = require('/imagens/deck_Abertura2.png')
    const starterDeck3 = require('/imagens/deck_Abertura3.png')


    const escolherDeck = () => {

        userDeck = modalContent
        console.log(userDeck)
        navigation.navigate('TelaBatalha', { userDeck: userDeck })
        setModalVisible(false)
      };
    
      const handlePressOut = () => {
        setModalVisible(false);
      };
    
      const handleStarterDeck1Press = () => {
        setModalContent(deck_esqueletos);
        setModalVisible(true);
      };
      const handleStarterDeck2Press = () => {
        setModalContent(deck_magos);
        setModalVisible(true);
      };
      const handleStarterDeck3Press = () => {
        setModalContent(deck_goblins);
        setModalVisible(true);
      };
    
    
      return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.viewTop}>
              <Text style={styles.h1Text}>Olá novo Jogador!</Text>
              <Text style={styles.txtText}>Escolha um deck inicial para começar:</Text>
            </View>
    
          
           
    
            <View style={styles.viewMiddle}>
              <TouchableOpacity onPress={handleStarterDeck1Press}>
                <Image style={styles.deckStart} source={starterDeck1} />
              </TouchableOpacity>
             
            </View>
    

            <View style={styles.viewBottom}>
              <TouchableOpacity onPress={handleStarterDeck2Press}>
                <Image style={styles.deckStart} source={starterDeck2} />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleStarterDeck3Press}>
                <Image style={styles.deckStart} source={starterDeck3} />
              </TouchableOpacity>
            
            </View>



            <View style={styles.centeredView}>
            
              <Modal
                style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handlePressOut}
              >
                
                <View style={styles.centeredView}>
                
                  <View style={styles.modalView}>
                  <ImageBackground source={require('/imagens/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                  
                    <View style={styles.modalViewCore}>
                    <ScrollView>
                   
                    {modalContent && Array.isArray(modalContent) ? (
                      modalContent.map((conteudo, index) => (
                        
                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-evenly', padding:10}}>
                          
                          
                          <View style={styles.viewImage}> 
                            <Image style={styles.imageModal}source={conteudo.image}/>
                          </View>

                          <View style={styles.viewText}> 
                            <Text style={styles.modalText}>{conteudo.nome}</Text>
                          </View>

                          <View style={styles.viewText2}>
                            <Text style={styles.modalText}> Ataque: {conteudo.atk}, Defesa: {conteudo.def}</Text>
                          </View>
                          
                        </View>
                        
                      ))
                    ) : modalContent ? (
                      <View>
                        <Text style={styles.modalText}>{modalContent.nome}</Text>
                        <Text style={styles.modalText}>
                          Ataque: {modalContent.atk}, Defesa: {modalContent.def}
                        </Text>
                      </View>
                    ) : null}

                    <TouchableOpacity
                      style={[styles.buttonEscolher]}
                      onPress={escolherDeck}
                    >
                      <Text style={styles.textStyleEscolher}>Escolher</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={handlePressOut}
                    >
                      <Text style={styles.textStyle}>Fechar</Text>
                    </TouchableOpacity>
                    </ScrollView>
                    </View>
                    
                    </ImageBackground>
                  </View>
                 
                </View>
               
              </Modal>
              
            </View>
          </ImageBackground>
        </View>     
        
      );
    }