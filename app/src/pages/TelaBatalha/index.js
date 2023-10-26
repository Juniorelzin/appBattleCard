import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

let deck_esqueletos = [
  {image: require('/imagens/esqueletos/esqueleto0.jpg') ,nome: 'Skullshadow', atk: 2000, def: 2000, mag: 6, vel: 4, esp: 13},
  {image: require('/imagens/esqueletos/esqueleto1.jpg') ,nome: 'Kinigit', atk: 1800, def: 1800, mag: 4, vel: 7, esp: 12},
  {image: require('/imagens/esqueletos/esqueleto2.jpg') ,nome: 'Horghost', atk: 1900, def: 1600, mag: 6, vel: 7, esp: 13},
  {image: require('/imagens/esqueletos/esqueleto3.jpg') ,nome: 'Berserk', atk: 2000, def: 1500, mag: 3, vel: 4, esp: 14},
  {image: require('/imagens/esqueletos/esqueleto4.jpg') ,nome: 'Escorpileto', atk: 1800, def: 1700, mag: 5, vel: 3, esp: 12},
  {image: require('/imagens/esqueletos/esqueleto5.jpg') ,nome: 'Corvicrow', atk: 1700, def: 1600, mag: 5, vel: 7, esp: 12},
]
let deck_magos = [
  {image: require('/imagens/magos/mago0.jpg') ,nome: 'Merlin', atk: 2100, def: 1900, mag: 8, vel: 5, esp: 14},
  {image: require('/imagens/magos/mago1.jpg') ,nome: 'Meduxa', atk: 1700, def: 2000, mag: 7, vel: 4, esp: 13},
  {image: require('/imagens/magos/mago2.jpg') ,nome: 'Epocus', atk: 1800, def: 1600, mag: 6, vel: 6, esp: 12},
  {image: require('/imagens/magos/mago3.jpg') ,nome: 'Frontiacus', atk: 1800, def: 1800, mag: 7, vel: 4, esp: 14},
  {image: require('/imagens/magos/mago4.jpg') ,nome: 'Invokyts', atk: 2000, def: 1900, mag: 7, vel: 5, esp: 13},
  {image: require('/imagens/magos/mago5.jpg') ,nome: 'Animagius', atk: 2000, def: 1800, mag: 8, vel: 4, esp: 13},
]
let deck_goblins = [
  {image: require('/imagens/goblins/goblin0.jpg') ,nome: 'Zigore', atk: 2000, def: 1800, mag: 3, vel: 6, esp: 13},
  {image: require('/imagens/goblins/goblin1.jpg') ,nome: 'Archit', atk: 1800, def: 1500, mag: 3, vel: 7, esp: 11},
  {image: require('/imagens/goblins/goblin2.jpg') ,nome: 'Brutehog', atk: 2100, def: 1600, mag: 4, vel: 5, esp: 13},
  {image: require('/imagens/goblins/goblin3.jpg') ,nome: 'Sprigs', atk: 1600, def: 1600, mag: 5, vel: 6, esp: 14},
  {image: require('/imagens/goblins/goblin4.jpg') ,nome: 'Chantus', atk: 1900, def: 1700, mag: 6, vel: 4, esp: 13},
  {image: require('/imagens/goblins/goblin5.jpg') ,nome: 'Flicts', atk: 1800, def: 1600, mag: 6, vel: 7, esp: 12},
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
        
        
    },
    imageCardImage: {
        height: 200,
        width: 150,
        borderRadius: 20,
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
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
       
    },
    viewMiddle: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    viewRight: {
        height: '100%',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
        
    },
    viewLeftNpc: {
      height: '100%',
      width: '40%',
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center'
     
  },
  viewMiddleNpc: {
      height: '100%',
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      
  },
  viewRightNpc: {
      height: '100%',
      width: '40%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000'
      
  },
    imageBackSide: {
        height: 80,
        width: 60,
        
    },
    imageBatalha: {
        height: 50,
        width: 50,
     
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
      fundoModal:{
        height: '100%',
        width: '100%',
        borderRadius: 20,  
        justifyContent: 'center',

    },
      button: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flexDirection: 'row'
      },
      textStyle: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
      },
      textStyleNum: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
      },
      modalText: {
        fontSize: 25,
        marginBottom: 15,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
      },
      nomejogador: {
        color: '#ffffff',
        fontFamily: 'Fredericka the Great Regular',
        marginBottom: 3,
        fontSize: 20
      },
      pontos: {
        color: '#ffffff',
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 15
      },
      textBatalha: {
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 15

      },
      textRodada: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',
      },
      modalViewAll: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      modalViewText: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      modalViewCard: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      modalViewStatsAll: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      
      },
      modalViewStats1: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
      },
      modalViewStats2: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      
      },
      modalViewButton: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      textNomeCard: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',

      },
      buttonCancelarModal: {
        height: '50%',
        width: '50%',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'

      },
      textStyleButtonModal: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',

      },
      touchIcon: {
        justifyContent: 'center',
        alignItems: 'center',

      },
      imageIconStats1: {
        height: 40,
        width: 40,
     

      },
      imageIconStats2: {
        height: 30,
        width: 30,
     

      },
      viewIconStats: {
        height: '100%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      viewTextStats: {
        height: '100%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
     

      },
      viewIStatsAtk: {
        height: '33%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
     

      },
      viewIStatsDef: {
        height: '33%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    

      },
      viewIStatsMag: {
        height: '33%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      

      },
      viewIStatsVel: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      
      

      },
      viewIStatsEsp: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
       

      },
      modalView2Top: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    

      },
      modalView2Card: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',


      },
      modalView2Button: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
 

      },
      modalView2CardNpc: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      

      },
      modalView2CardResultado: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
   

      },
      modalView2CardJogador: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
   

      },
      imageCardImageModal:{
        height: 150,
        width: 100,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

      },
      modalView2CardJogadorText: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    

      },
      modalView2CardJogadorImagem: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      modalViewFimTop: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

      },
      modalViewFimMiddle: {
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

      },
      modalViewFimBottom: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

      },
     
        

     
   
   
    
})

function Conteudo(){

    if (!deckNPC.length) {
        sortearDeck();
    }
  
   

    const navigation = useNavigation()
    const route = useRoute();
    const userDeck = route.params.userDeck;
    const userName = route.params.userName;
    deckAtualPlayer = userDeck
   

    let i = 0

    const [vidaJogador, setVidaJogador] = useState(0);
    const [vidaNPC, setvidaNPC] = useState(0)
    const [roadasJogo, setRodadasJogo] = useState(1)

    if (roadasJogo == 1){
      shuffleArrayNpc(deckNPC)
      shuffleArrayPlayer(deckAtualPlayer)
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [modalResultVisible, setModalResultVisible] = useState(false);
    const [modalFimVisible, setModalFimVisible] = useState(false);
    



    const [cartaAtualIndexPlayer, setCartaAtualIndexPlayer] = useState(0);
    const [cartaAtualIndexNpc, setCartaAtualIndexNpc] = useState(0);
    const [textResultado, setTextResultado] = useState('')
    const [iconStat, setIconStat] = useState(require('/imagens/logo.png'))
    const [textStatJogador, setTextStatJogador] = useState('')
    const [textStatNpc, setTextStatNpc] = useState('')
    const [textResultadoFinal, setTextResultadoFinal] = useState('')
    

    const [cardImagePlayer, setCardImagePlayer] = useState(deckAtualPlayer[0].image)
    const [cardNomePlayer, setCardNomePlayer] = useState(deckAtualPlayer[0].nome)
    const [cardAtkPlayer, setCardAtkPlayer] = useState(deckAtualPlayer[0].atk)
    const [cardDefPlayer, setCardDefPlayer] = useState(deckAtualPlayer[0].def)
    const [cardMagPlayer, setCardMagPlayer] = useState(deckAtualPlayer[0].mag)
    const [cardVelPlayer, setCardVelPlayer] = useState(deckAtualPlayer[0].vel)
    const [cardEspPlayer, setCardEspPlayer] = useState(deckAtualPlayer[0].esp)

    const [cardImageNpc, setCardImageNpc] = useState(deckNPC[0].image)
    const [cardNomeNpc, setCardNomeNpc] = useState(deckNPC[0].nome)
    const [cardAtkNpc, setCardAtkNpc] = useState(deckNPC[0].atk)
    const [cardDefNpc, setCardDefNpc] = useState(deckNPC[0].def)
    const [cardMagNpc, setCardMagNpc] = useState(deckNPC[0].mag)
    const [cardVelNpc, setCardVelNpc] = useState(deckNPC[0].vel)
    const [cardEspNpc, setCardEspNpc] = useState(deckNPC[0].esp)


    const [imageBackSideCard, setImageBackSideCard] = useState(require('/imagens/backSideCard5.png'))
    const [imageBatalhar, setimageBatalhar] = useState(require('/imagens/iconBatalhar.png'))
    const [imageIconAtk, setimageIconAtk] = useState(require('/imagens/iconAtk.png'))
    const [imageIconDef, setimageIconDef] = useState(require('/imagens/iconDef.png'))
    const [imageIconMag, setimageIconMag] = useState(require('/imagens/iconMag.png'))
    const [imageIconVel, setimageIconVel] = useState(require('/imagens/iconVel.png'))
    const [imageIconEsp, setimageIconEsp] = useState(require('/imagens/iconEsp.png'))

   
    
    console.log(imageBackSideCard)

    
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

        i++
        
    }
    function shuffleArrayPlayer(deckAtualPlayer) {
        for (let i = deckAtualPlayer.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deckAtualPlayer[i], deckAtualPlayer[j]] = [deckAtualPlayer[j], deckAtualPlayer[i]];
        }

        i++

    }
    function trocaCartaPlayer() {
        const proximoIndice = cartaAtualIndexPlayer + 1
        
        if (proximoIndice < deckAtualPlayer.length) {
          setCartaAtualIndexPlayer(proximoIndice)
          const proximaCarta = deckAtualPlayer[proximoIndice];
          setCardImagePlayer(proximaCarta.image)
          setCardNomePlayer(proximaCarta.nome)
          setCardAtkPlayer(proximaCarta.atk)
          setCardDefPlayer(proximaCarta.def)
          setCardMagPlayer(proximaCarta.mag);
          setCardVelPlayer(proximaCarta.vel);
          setCardEspPlayer(proximaCarta.esp);
        }
        i++
      }
      function trocaCartaNpc() {
        const proximoIndice = cartaAtualIndexNpc + 1
        
        if (proximoIndice < deckNPC.length) {
          setCartaAtualIndexNpc(proximoIndice)
          const proximaCarta = deckNPC[proximoIndice];
          setCardImageNpc(proximaCarta.image)
          setCardNomeNpc(proximaCarta.nome)
          setCardAtkNpc(proximaCarta.atk)
          setCardDefNpc(proximaCarta.def)
          setCardMagNpc(proximaCarta.mag);
          setCardVelNpc(proximaCarta.vel);
          setCardEspNpc(proximaCarta.esp);
        }
        i++
      }
      function diminuirDeck(){

        let rodada = roadasJogo
          
          switch (roadasJogo){

            case(1 - 1):
              setImageBackSideCard(require('/imagens/backSideCard5.png'))
            break

            case(2 -1):
              setImageBackSideCard(require('/imagens/backSideCard4.png'))
            break

            case(3 - 1):
              setImageBackSideCard(require('/imagens/backSideCard3.png'))
            break

            case(4 - 1):
              setImageBackSideCard(require('/imagens/backSideCard2.png'))
            break

            case(5 - 1):
              setImageBackSideCard(require('/imagens/backSideCard1.png'))
            break

            case(6 - 1):
              setImageBackSideCard(require('/imagens/backSideCard0.png'))
            break

            default:
              break
      }
    

      }

      function resolver(){
        
        let rodada = roadasJogo
        rodada += 1
        setRodadasJogo(rodada)
        console.log

        trocaCartaPlayer()
        trocaCartaNpc() 
        diminuirDeck()
        verificarFim()

        setModalResultVisible(!modalResultVisible)

        
       

      }

      function verificarFim(){
   
        console.log(roadasJogo)

        if(roadasJogo >= 6){
          console.log('roadasJogo')
          setModalFimVisible(!modalFimVisible)

            let cartasDestruidasJogador = vidaJogador
            let cartasDestruidasNpc = vidaNPC

            if(cartasDestruidasJogador > cartasDestruidasNpc){

                setTextResultadoFinal('Vitória')
                styles.modalTextResultadoFinal = {
                 color: '#ffd700',
                 fontSize: 70,
                 marginBottom: 15,
                 textAlign: 'center',
                 fontFamily: 'Fredericka the Great Regular',}

            }
            else if(cartasDestruidasJogador < cartasDestruidasNpc){

                setTextResultadoFinal('Derrota')
                styles.modalTextResultadoFinal = {
                  color: '#ff0000',
                  fontSize: 70,
                  marginBottom: 15,
                  textAlign: 'center',
                  fontFamily: 'Fredericka the Great Regular',}
            }
            else{

                setTextResultadoFinal('Empate')
                styles.modalTextResultadoFinal = {
                  color: '#007fff',
                  fontSize: 70,
                  marginBottom: 15,
                  textAlign: 'center',
                  fontFamily: 'Fredericka the Great Regular',}


            }

            
        }
      }
    
      return (
        
        <View style={styles.container}>
          
                <View style={styles.viewTop}>

                    <View style={styles.viewPlayer}>

                        <View style={styles.viewLeftNpc}>

                        <Image style={styles.imageBackSide}source={imageBackSideCard}/>
                        
                        
                        </View>

                        <View style={styles.viewMiddleNpc}>

                            <Text style={styles.textRodada}>Rodada</Text>
                            <Text style={styles.textRodada}>{roadasJogo}</Text>
                    
                        </View>

                        <View style={styles.viewRightNpc}>
                     
                            <Text style={styles.nomejogador}>Jogador 2</Text>
                            <Text style={styles.pontos}>Cartas Destruidas: </Text>
                            <Text style={styles.pontos}>{vidaNPC}</Text>
                    
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
                            <Text style={styles.nomejogador}>{userName}</Text>
                            <Text style={styles.pontos}>Cartas Destruidas: </Text>
                            <Text style={styles.pontos}>{vidaJogador}</Text>
                        
                            </View>

                            <View style={styles.viewMiddle}>

                            <TouchableOpacity style={styles.touchIcon} onPress={() => setModalVisible(true)}>
                            <Image style={styles.imageBatalha}source={imageBatalhar}/>
                            <Text style={styles.textBatalha}>Batalhar</Text>
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
                        <ImageBackground source={require('/imagens/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                            

                            <View style={styles.modalViewAll}>

                              <View style={styles.modalViewText}>

                                  <Text style={styles.modalText}>Selecione como atacar: </Text>

                              </View>

                              <View style={styles.modalViewCard}>

                                  <Image style={styles.imageCardImage}source={cardImagePlayer}/>
                                  <Text style={styles.textNomeCard}>{cardNomePlayer}</Text>

                              </View>

                              <View style={styles.modalViewStatsAll}>

                              <View style={styles.modalViewStats1}>


                                  <View style={styles.viewIStatsAtk}>
                                  <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={compararAtk}>
                                      <View style={styles.viewIconStats}>
                                      <Image style={styles.imageIconStats1}source={imageIconAtk}/>
                                      </View>
                                      <View style={styles.viewTextStats}>
                                    <Text style={styles.textStyle}>ATAQUE</Text>
                                    <Text style={styles.textStyleNum}>{cardAtkPlayer}</Text>
                                     </View>
                                  </TouchableOpacity>
                                </View>

                                

                                  <View style={styles.viewIStatsDef}>
                                  <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={compararDef}>
                                      <View style={styles.viewIconStats}>
                                      <Image style={styles.imageIconStats1}source={imageIconDef}/>
                                      </View>
                                      <View style={styles.viewTextStats}>
                                    <Text style={styles.textStyle}>DEFESA</Text>
                                    <Text style={styles.textStyleNum}>{cardDefPlayer}</Text>
                                     </View>
                                  </TouchableOpacity>
                                </View>



                                <View style={styles.viewIStatsMag}>
                                  <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={compararMag}>
                                      <View style={styles.viewIconStats}>
                                      <Image style={styles.imageIconStats1}source={imageIconMag}/>
                                      </View>
                                      <View style={styles.viewTextStats}>
                                    <Text style={styles.textStyle}>MAGIA</Text>
                                    <Text style={styles.textStyleNum}>{cardMagPlayer}</Text>
                                     </View>
                                  </TouchableOpacity>
                                </View>


                              </View>

                              <View style={styles.modalViewStats2}>

                                <View style={styles.viewIStatsVel}>
                                  <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={compararVel}>
                                      <View style={styles.viewIconStats}>
                                      <Image style={styles.imageIconStats2}source={imageIconVel}/>
                                      </View>
                                      <View style={styles.viewTextStats}>
                                    <Text style={styles.textStyle}>VELOCIDADE</Text>
                                    <Text style={styles.textStyleNum}>{cardVelPlayer}</Text>
                                     </View>
                                  </TouchableOpacity>
                                </View>



                                <View style={styles.viewIStatsEsp}>
                                  <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={compararEsp}>
                                      <View style={styles.viewIconStats}>
                                      <Image style={styles.imageIconStats2}source={imageIconEsp}/>
                                      </View>
                                      <View style={styles.viewTextStats}>
                                    <Text style={styles.textStyle}>ESPECIAL</Text>
                                    <Text style={styles.textStyleNum}>{cardEspPlayer}</Text>
                                     </View>
                                  </TouchableOpacity>
                                </View>


                            


                              </View>

                              </View>

                              <View style={styles.modalViewButton}>

                                  <TouchableOpacity
                                    style={[styles.buttonCancelarModal]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyleButtonModal}>Cancelar</Text>
                                  </TouchableOpacity>

                              </View>    

                            </View>
                          </ImageBackground>
                        </View>
                    </View>
                    </Modal>
                </View>



                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalResultVisible}
                        onRequestClose={() => {
                          setModalResultVisible(!modalResultVisible);
                        }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <ImageBackground source={require('/imagens/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                            

                            <View style={styles.modalViewAll}>

                                    <View style={styles.modalView2Top}>

                                          <Text style={styles.modalText}>Resultado:</Text>

                                    </View>

                                    <View style={styles.modalView2Card}>

                                      <View style={styles.modalView2CardNpc}>
                                      <View style={styles.modalView2CardJogadorImagem}>
                                        <Text style={styles.textNomeCard}>{cardNomeNpc}</Text>
                                        <Image style={styles.imageCardImageModal}source={cardImageNpc}/>
                                        </View>
                                        <View style={styles.modalView2CardJogadorText}>
                                        <Image style={styles.imageIconStats1}source={iconStat}/>
                                        <Text style={styles.textNomeCard}>{textStatNpc}</Text>
                                      </View>

                                      </View>

                                      <View style={styles.modalView2CardResultado}>

                                         <Text style={styles.textNomeCard}>{textResultado}</Text>

                                      </View>

                                      <View style={styles.modalView2CardJogador}>
                                      <View style={styles.modalView2CardJogadorText}>
                                        <Image style={styles.imageIconStats1}source={iconStat}/>
                                        <Text style={styles.textNomeCard}>{textStatJogador}</Text>
                                      </View>
                                      <View style={styles.modalView2CardJogadorImagem}>
                                        <Image style={styles.imageCardImageModal}source={cardImagePlayer}/>
                                        <Text style={styles.textNomeCard}>{cardNomePlayer}</Text>
                                      </View>
                                      </View>

                                    </View>

                            

                                    <View style={styles.modalView2Button}>

                                            <TouchableOpacity
                                              style={[styles.buttonCancelarModal]}
                                              onPress={resolver}>
                                              <Text style={styles.textStyleButtonModal}>Fechar</Text>
                                            </TouchableOpacity>

                                    </View>    

                            </View>
                          </ImageBackground>
                        </View>
                    </View>
                    </Modal>
                </View>


                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalFimVisible}
                        onRequestClose={() => {
                          setModalFimVisible(!modalFimVisible);
                        }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <ImageBackground source={require('/imagens/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                            

                            <View style={styles.modalViewAll}>

                                    <View style={styles.modalViewFimTop}>

                                          <Text style={styles.modalTextResultadoFinal}>{textResultadoFinal}</Text>

                                    </View>

                                    <View style={styles.modalViewFimMiddle}>

                                        <View style={{height: '10%', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                          <View style={{height: '100%', width: '50%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                                                        <Text style={styles.modalText}>{userName}</Text>
                                                        <Text style={styles.modalText}>Total de cartas que destrui:</Text>
                                                        <Text style={styles.modalText}>{vidaJogador}</Text>
                                         
                                        </View>
                                        <View style={{height: '100%', width: '50%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                                                        <Text style={styles.modalText}>Jogador 2</Text>
                                                        <Text style={styles.modalText}>Total de cartas que destrui:</Text>
                                                        <Text style={styles.modalText}>{vidaNPC}</Text>
                                         
                                        </View>   
                                        </View>
                                          

                                    </View>

                                    <View style={styles.modalViewFimBottom}>

                                            <TouchableOpacity
                                              style={[styles.buttonCancelarModal]}
                                              onPress={() => navigation.navigate('Home')}>
                                              <Text style={styles.textStyleButtonModal}>Fechar</Text>
                                            </TouchableOpacity>

                                    </View>    

                            </View>
                          </ImageBackground>
                        </View>
                    </View>
                    </Modal>
                </View>




        </View>

            




      );

      function compararAtk() {

        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC
        

       if (cardAtkPlayer > cardAtkNpc) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            setTextResultado('Você venceu essa rodada')

       }else if(cardAtkPlayer < cardAtkNpc){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            setTextResultado('Você Perdeu essa rodada')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            setTextResultado('Rodada terminou em empate')
       }

        setTextStatNpc(cardAtkNpc)
        setTextStatJogador(cardAtkPlayer)
        setIconStat(require('/imagens/iconAtk.png'))
        setModalVisible(false)
        setModalResultVisible(!modalResultVisible)  

    }
    
       function compararDef() {

        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC


       if (cardDefPlayer > cardDefNpc) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            setTextResultado('Você venceu essa rodada')

       }else if(cardDefPlayer < cardDefNpc){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            setTextResultado('Você Perdeu essa rodada')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            setTextResultado('Rodada terminou em empate')
       }

        setTextStatNpc(cardDefNpc)
        setTextStatJogador(cardDefPlayer)
        setIconStat(require('/imagens/iconDef.png'))
        setModalVisible(false)
        setModalResultVisible(!modalResultVisible)

    }
     function compararMag() {

        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC


       if (cardMagPlayer > cardMagNpc) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            setTextResultado('Você venceu essa rodada')

       }else if(cardMagPlayer < cardMagNpc){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            setTextResultado('Você Perdeu essa rodada')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            setTextResultado('Rodada terminou em empate')
       }

        setTextStatNpc(cardMagNpc)
        setTextStatJogador(cardMagPlayer)
        setIconStat(require('/imagens/iconMag.png'))
        setModalVisible(false)
        setModalResultVisible(!modalResultVisible) 
        

    }
     function compararVel() {

        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC


       if (cardVelPlayer > cardVelNpc) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            setTextResultado('Você venceu essa rodada')

       }else if(cardVelPlayer < cardVelNpc){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            setTextResultado('Você Perdeu essa rodada')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            setTextResultado('Rodada terminou em empate')
       }

        setTextStatNpc(cardVelNpc)
        setTextStatJogador(cardVelPlayer)
        setIconStat(require('/imagens/iconVel.png'))
        setModalVisible(false)
        setModalResultVisible(!modalResultVisible) 
    }
     function compararEsp() {

        let vidaPlayer = vidaJogador
        let vidaNpc = vidaNPC


       if (cardEspPlayer > cardEspNpc) {

            vidaPlayer += 1 
            setVidaJogador(vidaPlayer)   
            setTextResultado('Você venceu essa rodada')

       }else if(cardEspPlayer < cardEspNpc){

            vidaNpc += 1
            setvidaNPC(vidaNpc)
            setTextResultado('Você Perdeu essa rodada')

       }else {

            vidaPlayer += 1 
            vidaNpc += 1
            setVidaJogador(vidaPlayer)
            setvidaNPC(vidaNpc)  
            setTextResultado('Rodada terminou em empate')
       }

        setTextStatNpc(cardEspNpc)
        setTextStatJogador(cardEspPlayer)
        setIconStat(require('/imagens/iconEsp.png'))
        setModalVisible(false)
        setModalResultVisible(!modalResultVisible) 

    }
  }    
 