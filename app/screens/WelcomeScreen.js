import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native'

export function WelcomeScreen(){
    return(
        <ImageBackground style={styles.backround} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backround: {
        //this makes imageBackground take entire screen
        flex: 1,
        //this makes register and login buttons to be at the bottom
        //instead of top
        justifyContent: 'flex-end',
        //aligns items in center on secondary acces(horisontally)
        alignItems: 'center'
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo:{
        width: 100,
        height: 100,
        
    },
    logoContainer:{
        //position is set to relative so that logo and text inside won't be 
        //at the bottom on top of buttons, 
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
})

