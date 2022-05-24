import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React, {useEffect} from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

export default function ImageInput({ imageUri, onChangeImage }) {

    useEffect(()=>{
        requestPermission()
      }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) alert("You need to enable permission to acces the library")
    }

    const handlePress = () => {
        if (!imageUri) SelectImage()
        else Alert.alert('Delete', 'Are you sure to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
    }

    const SelectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) {
                onChangeImage(result.uri)
            }
        } catch (error) {
            console.log("Error reading an image", error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        overflow: "hidden",
        justifyContent: "center",
        width: 100
    },
    image: {
        height: "100%",
        width: "100%"
    }
})