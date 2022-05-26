import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator()

export default FeedNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="Listings" component={ListingsScreen}></Stack.Screen>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
)