import React, {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker"
import Screen from "./app/components/Screen";
import { Button, Image} from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async() =>{
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted) alert ("You need to enable permission to acces the library")
  }
  useEffect(()=>{
    requestPermission()
  }, [])

  async function SelectImage(){
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if(!result.cancelled){
        setImageUri(result.uri)
      }
    } catch (error) {
      console.log("Error reading an image", error)
    }
    
  }

  return (<Screen>
    <Button title="Select image" onPress={SelectImage}/>
    <Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>
    <ImageInput imageUri={imageUri}/>
  </Screen>)
}
