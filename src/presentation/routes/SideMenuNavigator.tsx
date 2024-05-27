import { Text, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigation';
import { ProfileScreen } from '../screens';
import { globalColors, globalStyles } from '../themes/theme';
import { BottonTabsNavigator } from './BottonTabsNavigation';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 

      drawerContent={ (props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
     >
      <Drawer.Screen  name="Tabs" component={ BottonTabsNavigator } />
      <Drawer.Screen name="Discografia" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/* Mostramos la foto del perfil logueado */}
      <View style={{
        height:200,
        backgroundColor: globalColors.primary,
        margin:30,
        borderRadius: 100
      }} />

      {/* Mostramos el resto del los links del menu */}
      <DrawerItemList {...props}  />

      {/* <Text style={{
        marginLeft:20
      }}>Hola Mundo</Text> */}
    </DrawerContentScrollView>
  )
}