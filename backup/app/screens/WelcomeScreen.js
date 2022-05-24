import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native'

import AppButton from '../components/AppButton'

export function WelcomeScreen(){
    return(
        <ImageBackground blurRadius={10} style={styles.backround} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title="Login"></AppButton>
            <AppButton title="Register" color="secondary"></AppButton>
            </View>
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
    buttonContainer:{
        padding:20,
        //applying width is required because otherwise button doesn't strech
        //since we set ralative width of "100%" on it in AppButton.js
        width:"100%"

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
    tagLine:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

