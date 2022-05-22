import React from 'react'
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import Swipable from "react-native-gesture-handler/Swipeable"

import colors from '../config/colors'
import AppText from './AppText'

function ListItem({title, subTitle, image, onPress, renderRightActions, IconComponent}){
    return(
        <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle:{
        color: colors.medium
    },
    title:{
        fontWeight: "500"
    }
})

export default ListItem