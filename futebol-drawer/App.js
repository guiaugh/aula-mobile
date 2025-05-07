import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from './src/screens/EscudoScreen'
import JogadoresScreen from './src/screens/JogadoresScreen'
import TitulosScreen from './src/screens/TitulosScreen'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title: 'Escudo',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='shield-outline' color={color} size={size} />
            }}
          />

          <Drawer.Screen
            name='JogadoresScreen'
            component={JogadoresScreen}
            options={{
              title: 'Jogadores',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'black'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='person-outline' color={color} size={size} />
            }}
          />

          <Drawer.Screen
            name='TitulosScreen'
            component={TitulosScreen}
            options={{
              title: 'Titulos',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='trophy-outline' color={color} size={size} />
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

