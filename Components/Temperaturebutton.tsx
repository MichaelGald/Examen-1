import globalStyles from '@/styles/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'


interface Props {
  label: string;
  // onPress: () => void;
}
const Temperaturebutton = ({ label }: Props) => {
  return (
    <Pressable style={({ pressed }) => ({ ...globalStyles.button, opacity: pressed ? .8 : 2 })}>
      <Text style={globalStyles.textButton}>{label}</Text>
    </Pressable>
  )
}

export default Temperaturebutton