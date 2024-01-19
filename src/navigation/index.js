import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen, Profile } from '../screens'

const Stack = createNativeStackNavigator()

const STACK_CONFIG = {
    headerShown: false
}

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={STACK_CONFIG}>
            <Stack.Screen
                name="Auth"
                component={AuthScreen} />
            <Stack.Screen
                name="Profile"
                component={Profile} />
        </Stack.Navigator>
    )
}

export default Navigation

