import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen, AboutScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

// import React from 'react'
// import { View } from 'react-native'

// export const MaterialTopTabs = () => {
//   return (
//     <View>MaterialTopTabs</View>
//   )
// }
