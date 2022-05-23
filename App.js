import React, { useState } from 'react';
import { View } from 'react-native';

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {

  const [categoty, setCategory] = useState(categories[0])

  return (
    <Screen>
      <AppPicker
        selectedItem={categoty}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}


