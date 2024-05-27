import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 

import { Text, View } from 'react-native'
import { StackNavigator } from './presentation/routes/StackNavigation';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottonTabsNavigator } from './presentation/routes/BottonTabsNavigation';
// import { MaterialTopTabs } from './presentation/routes/MaterialTopTabs';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* { <SideMenuNavigator />} */}
      {/* { <MaterialTopTabs /> } */}
      { <BottonTabsNavigator />}
    </NavigationContainer>
  )
}
