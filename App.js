import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, StatusBar, Platform, Dimensions} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landspace} = useDeviceOrientation()
  landspace ? console.log("YEs") : console.log("No")
  return (
    <SafeAreaView>
    </SafeAreaView>
  );
  
  
}


