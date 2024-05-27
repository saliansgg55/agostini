import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
    onPress: () => void;
    label: string;
}


export const Primarybutton = ({ onPress, label}: Props) => {
    // const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>

        <Pressable 
          onPress={ () => onPress()}
          style={ globalStyles.primaryButton }>
          <Text style={ globalStyles.buttonText }> { label }</Text>
        </Pressable>

    </View>
  )
}
