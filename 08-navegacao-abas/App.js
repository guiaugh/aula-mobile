import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <tab.Navigator>

          <tab.Screen name='HomeScreen' component={HomeScreen}></tab.Screen>
          <tab.Screen name='ProfileScreen' component={ProfileScreen}></tab.Screen>
          <tab.Screen name='SettingsScreen' component={SettingsScreen}></tab.Screen>

        </tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
