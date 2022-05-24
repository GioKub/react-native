import React, {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker"
import Screen from "./app/components/Screen";
import { Button, Image} from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState()

  return (<Screen>
    <ImageInput 
    imageUri={imageUri}
    onChangeImage={uri => setImageUri(uri)}
    />
  </Screen>)
}
