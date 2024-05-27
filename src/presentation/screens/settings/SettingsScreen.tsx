import React from 'react'
import { Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../themes/theme'
import { Primarybutton } from '../../components/shared/Primarybutton'
import { useNavigation, StackActions } from '@react-navigation/native';
// import { StackActions } from '@react-navigation/stack';


export const SettingsScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, color: globalColors.dark }}>Settings Screen</Text>

      <Primarybutton
        label='Regresar'
        onPress={() => navigator.goBack()}
      />

      <Primarybutton
        label='Regresar al home'
        onPress={() => navigator.dispatch( StackActions.popToTop() ) }
      />

    </View>
  )
}
