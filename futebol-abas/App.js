import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from './screens/EscudoScreen'
import JogadoresScreen from './screens/JogadoresScreen'
import TitulosScreen from './screens/TitulosScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
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

          <Tab.Screen
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

          <Tab.Screen
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
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

