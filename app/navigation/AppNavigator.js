import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator"

const Tab = createBottomTabNavigator()

export default AppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} options={{headerShown:false}}/>
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
)