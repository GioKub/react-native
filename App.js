import React from "react";
import {Text, Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () =>{
  const navigation = useNavigation()

  return(
  <Button
    title="Click"
    onPress={()=>{navigation.navigate("TweetDetails", {id: 1})}}
  />
  )
}

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Link/>
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createNativeStackNavigator()
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: "dodgerblue"},
      headerTintColor: "white"
    }}
  >
    <Stack.Screen 
    name="Tweets" 
    component={Tweets}
    options={{
      headerStyle: {backgroundColor: "tomato"},
      headerTintColor: "white",
      headerShown: false
    }}
    ></Stack.Screen>
    <Stack.Screen 
    name="TweetDetails" 
    component={TweetDetails}
    options={({route})=>({title: route.params.id.toString()})}
    ></Stack.Screen>
  </Stack.Navigator>
)

const Account = () =>(
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen 
    name="Feed" 
    component={FeedNavigator}
    options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
    }}
    />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  return (
  <NavigationContainer theme={navigationTheme}>
    <AppNavigator/>
  </NavigationContainer>
  )
}
