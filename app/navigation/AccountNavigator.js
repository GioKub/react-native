import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator()

export default AccountNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Account" component={AccountScreen}></Stack.Screen>
        <Stack.Screen name="Messages" component={MessagesScreen}></Stack.Screen>
    </Stack.Navigator>
)