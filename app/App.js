import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import CadastrarUsuario from './src/pages/CadastrarUsuario';
import TermoDeUsuario from './src/pages/TermoDeUsuario';
import TelaDeLogin from './src/pages/TelaDeLogin';
import IniciarJogo from './src/pages/IniciarJogo';
import TelaBatalha from './src/pages/TelaBatalha';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Fredericka the Great Regular',
            fontSize: 20
          },
        }}
      >
      
        <Stack.Screen 
          name="Home" component={Home} 
          options={{
            title: 'Início, o grande começo',
            headerShown: false,
            headerStyle:{
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            //headerShown: false,
          }}
        /> 
        <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} 
          options={{title: 'Login'}}
        />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} 
          options={{title: 'Criar Conta'}}
        />
         <Stack.Screen name="TermoDeUsuario" component={TermoDeUsuario} 
          options={{title: 'Termo de Usuário'}}
        />
         <Stack.Screen name="IniciarJogo" component={IniciarJogo} 
          options={{title: 'Termo de Usuário', headerShown: false,}}
        />
         <Stack.Screen name="TelaBatalha" component={TelaBatalha} 
          options={{title: 'Tela de Batalha', headerShown: false,}}
        />     
      </Stack.Navigator>
    </NavigationContainer>
  )
}
