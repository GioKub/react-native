import React from 'react'
import { Text } from 'react-native'

import defaultSyles from '../config/styles'

function AppText({children, style}){
    return(
        <Text style={[defaultSyles.text, style]}>{children}</Text>
    )
}

export default AppText