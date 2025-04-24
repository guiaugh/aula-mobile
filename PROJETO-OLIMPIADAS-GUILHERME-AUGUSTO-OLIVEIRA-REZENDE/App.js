import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import ModalidadesScreen from './screens/ModalidadesScreen';
import OlimpiadasScreen from './screens/OlimpiadasScreen';
import ArenasScreen from './screens/ArenasScreen';
import EstatisticasScreen from './screens/EstatisticasScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Modalidades'
            component={ModalidadesScreen}
            options={{
              title: 'Modalidades',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'blue'
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='football-outline' color={color} size={size} />
              ),
            }} />

          <Tab.Screen
            name='Olimpiadas'
            component={OlimpiadasScreen}
            options={{
              title: 'Olimpíadas',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'blue'
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='flag-outline' color={color} size={size} />
              ),
            }} />

          <Tab.Screen
            name='Arenas'
            component={ArenasScreen}
            options={{
              title: 'Arenas',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'blue'
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='location-outline' color={color} size={size} />
              ),
            }} />

          <Tab.Screen
            name='Estatisticas'
            component={EstatisticasScreen}
            options={{
              title: 'Estatísticas',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'blue'
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='stats-chart-outline' color={color} size={size} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

