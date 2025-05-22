import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import UsuarioScreen from '../screens/UsuarioScreen'

const stack = createStackNavigator();

export default function StackRoutes() {
    return (

        <stack.Navigator>
            <stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Lista de usuarios", headerTitleAlign: "center" }} />

            <stack.Screen
                name="Usuario"
                component={UsuarioScreen}
                options={{ title: "Usuarios", headerTitleAlign: "center" }} />
        </stack.Navigator>

    )
}