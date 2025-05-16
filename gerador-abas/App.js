import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MegaSenaScreen from './src/screens/MegaSenaScreen';
import JogoDoBichoScreen from './src/screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Mega Sena') {
              iconName = 'cash';
            } else if (route.name === 'Jogo do Bicho') {
              iconName = 'paw';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
        <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}