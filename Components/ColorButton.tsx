import globalStyles from '@/styles/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'

const ColorButton = () => {
    return (
        <Pressable style={globalStyles.buttonColor}>
            <Text style={globalStyles.Textcolor}>Cambiar Color</Text>
        </Pressable>
    )
}

export default ColorButton