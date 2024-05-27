import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { Primarybutton } from '../../components/shared/Primarybutton'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import { type RootStackParams } from '../../routes/StackNavigation'

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer) }>
          <Text>Menu</Text> 
        </Pressable>
      )
    })
  },[])

  return (
    <View style={globalStyles.container}>

      <Primarybutton
        onPress={ () => navigation.navigate('Products')}
        label="Productos"
      />

      <Primarybutton
        onPress={ () => navigation.navigate('Settings')}
        label="Settings"
      />

    </View>
  )
}
