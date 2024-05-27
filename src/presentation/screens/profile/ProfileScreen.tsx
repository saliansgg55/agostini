import React from 'react'
import { Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Primarybutton } from '../../components/shared/Primarybutton';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const ProfileScreen = () => {


  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  

  return (
    <View style={{
      flex: 1,
      paddingHorizontal:20,
      marginTop: Platform.OS === 'android' ? top : top + 20
    }}>
        <Text style={{
          marginBottom: 10
        }}>ProfileScreen</Text>

        <Primarybutton 
        onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer)}
          label='Volver al Inicio'
        />
    </View>
  )
}
