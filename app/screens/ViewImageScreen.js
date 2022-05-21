import React from 'react'
import {StyleSheet, Image, View} from 'react-native'

function viewImagescreen(props){
    return(
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
        //resizeMode is required so that sides of picutre wont be cut on screen
        <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    closeIcon:{
        width: 50,
        height: 50,
        //setting position to absolute so that it can be
        //positioned realiteve to .container
        position: 'absolute',
        backgroundColor: "#fc5c65",
        top: 40,
        left: 30,
    },
    deleteIcon:{
        width: 50,
        height: 50,
        //setting position to absolute so that it can be
        //positioned realiteve to .container
        position: 'absolute',
        backgroundColor: "#4ecdc4",
        top: 40,
        right: 30,
    },
    container:{
        backgroundColor: "#000",
        flex: 1
    }
})

export default viewImagescreen