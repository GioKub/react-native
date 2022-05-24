import React, {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker"
import Screen from "./app/components/Screen";
import { Button, Image} from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([])



  return (<Screen>
    <ImageInputList
    imageUris={imageUris}
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}
    />
  </Screen>)
}
