import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

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
let deckNPC = []
let deckAtualPlayer = []

  




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
    viewTop: {
        height: '50%',
        width: '100%',
       
    },
    viewBottom: {
        height: '50%',
        width: '100%',
       
    },
    viewPlayer: {
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    viewCard: {
        height: '70%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        
    },
    imageCardImage: {
        height: 200,
        width: 150,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        

    },
    viewLeft: {
        height: '100%',
        width: '40%',
        backgroundColor: 'red'
    },
    viewMiddle: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    viewRight: {
        height: '100%',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    imageBackSide: {
        height: '90%',
        width: '40%',
    },
    imageBatalha: {
        height: 60,
        width: 60,
        objectFit: 'fill',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
   
    
})

function Conteudo(){

    if (!deckNPC.length) {
        sortearDeck();
    }


    const navigation = useNavigation()
    const route = useRoute();
    const userDeck = route.params.userDeck;
    deckAtualPlayer = userDeck

    shuffleArrayNpc(deckNPC)
    shuffleArrayPlayer(deckAtualPlayer)
    
    let cardAtualPlayer = deckAtualPlayer[0]
    let cardAtualNpc = deckNPC[0]

    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState()

    const [vidaJogador, setVidaJogador] = useState(0);
    const [vidaNPC, setvidaNPC] = useState(0)

    const [cartaAtualIndexPlayer, setCartaAtualIndexPlayer] = useState(0);
    const [cartaAtualIndexNpc, setCartaAtualIndexNpc] = useState(0);

    const [cardImagePlayer, setCardImagePlayer] = useState(cardAtualPlayer.image)
    const [cardAtkPlayer, setCardAtkPlayer] = useState(cardAtualPlayer.atk)
    const [cardDefPlayer, setCardDefPlayer] = useState(cardAtualPlayer.def)

    const [cardImageNpc, setCardImageNpc] = useState(cardAtualNpc.image)
    const [cardAtkNpc, setCardAtkNpc] = useState(cardAtualNpc.atk)
    const [cardDefNpc, setCardDefNpc] = useState(cardAtualNpc.def)

    const [imageBackSideCard, setImageBackSideCard] = useState(require('/imagens/backSideCard.png'))
    const imageBatalhar = require('/imagens/batalhar.png')
   
    
    

    

    console.log(deckNPC)
    function sortearDeck(){

        let deckSortearNpc = []

        deckSortearNpc.push(deck_esqueletos, deck_magos, deck_goblins)
    
        let indice = Math.floor(Math.random() * deckSortearNpc.length)
    
        deckNPC = deckSortearNpc[indice]
        


    }

    function shuffleArrayNpc(deckNPC) {
        for (let i = deckNPC.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deckNPC[i], deckNPC[j]] = [deckNPC[j], deckNPC[i]];
        }

        
    }
    function shuffleArrayPlayer(deckAtualPlayer) {
        for (let i = deckAtualPlayer.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deckAtualPlayer[i], deckAtualPlayer[j]] = [deckAtualPlayer[j], deckAtualPlayer[i]];
        }


    }
    function trocaCartaPlayer() {
        const próximoÍndice = cartaAtualIndexPlayer + 1
        
        if (próximoÍndice < deckAtualPlayer.length) {
          setCartaAtualIndexPlayer(próximoÍndice)
          const próximaCarta = deckAtualPlayer[próximoÍndice];
          setCardImagePlayer(próximaCarta.image)
          setCardAtkPlayer(próximaCarta.atk)
          setCardDefPlayer(próximaCarta.def)
        } else {
          alert('Você não tem mais cartas para trocar.');
        }
      }
      function trocaCartaNpc() {
        const próximoÍndice = cartaAtualIndexNpc + 1
        
        if (próximoÍndice < deckAtualPlayer.length) {
          setCartaAtualIndexNpc(próximoÍndice)
          const próximaCarta = deckNPC[próximoÍndice];
          setCardImageNpc(próximaCarta.image)
          setCardAtkNpc(próximaCarta.atk)
          setCardDefNpc(próximaCarta.def)
        } else {
          alert('Você não tem mais cartas para trocar.');
        }
      }

    function compararAtk() {

       
        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC


       if (cardAtualPlayer.atk > cardAtualNpc.atk) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            alert('você venceu')

       }else if(cardAtualPlayer.atk < cardAtualNpc.atk){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            alert('você perdeu')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            alert('você empatou')
       }


        trocaCartaPlayer()
        trocaCartaNpc()
        setModalVisible(false)

    }
    
      return (
        
        <View style={styles.container}>
          
                <View style={styles.viewTop}>

                    <View style={styles.viewPlayer}>

                        <View style={styles.viewLeft}>

                            <Text>Jogador 2</Text>
                            <Text>Cartas Destruidas: </Text>
                            <Text>{vidaNPC}</Text>
                        
                        
                        </View>

                        <View style={styles.viewMiddle}>
                    
                        </View>

                        <View style={styles.viewRight}>

                        <Image style={styles.imageBackSide}source={imageBackSideCard}/>
                    
                        </View>


                    </View>

                    <View style={styles.viewCard}>

                          <Image style={styles.imageCardImage}source={cardImageNpc}/>
                        
                    </View>


                </View>

                <View style={styles.viewBottom}>

                     
                    <View style={styles.viewCard}>

                    <Image style={styles.imageCardImage}source={cardImagePlayer}/>

                        
                    </View>



                    <View style={styles.viewPlayer}>

                            <View style={styles.viewLeft}>
                            <Text>Jogador 1</Text>
                            <Text>Cartas Destruidas: </Text>
                            <Text>{vidaJogador}</Text>
                        
                            </View>

                            <View style={styles.viewMiddle}>

                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image style={styles.imageBatalha}source={imageBatalhar}/>
                            <Text>Batalhar</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.viewRight}>

                            <Image style={styles.imageBackSide}source={imageBackSideCard}/>
                        
                            </View>

                    </View>

                    
                </View>

          

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Selecione como atacar: </Text>

                            <View>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={compararAtk}>
                            <Text style={styles.textStyle}>{cardAtkPlayer}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>{cardDefPlayer}</Text>
                            </TouchableOpacity>


                            </View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </Modal>
                </View>


        </View>

            




      );
}