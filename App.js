import React from 'react';
import { View } from 'react-native';

import Screen from './app/components/Screen'
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';

export default function App() {
  return (
    <Screen>
      <Icon
      name="email"
      size={50}
      backgroundColor="red"
      iconColor="white"
      />
    </Screen>
  );
}


