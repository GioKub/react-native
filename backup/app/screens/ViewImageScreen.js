import React from 'react'
import {StyleSheet, Image, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

function viewImagescreen(props){
    return(
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>
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
        //setting position to absolute so that it can be
        //positioned realiteve to .container
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon:{
        //setting position to absolute so that it can be
        //positioned realiteve to .container
        position: 'absolute',
        top: 40,
        right: 30,
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    }
})

export default viewImagescreen