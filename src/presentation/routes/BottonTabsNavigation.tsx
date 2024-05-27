import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialTopTabs } from './MaterialTopTabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../themes/theme';


const Tab = createBottomTabNavigator();

export const BottonTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom:5
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<Text style={{ color }} ></Text>)}} component={Tab1Screen} />
      {/* <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<Text style={{ color }} ></Text>)}} component={Tab2Screen} /> */}
      <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<Text style={{ color }} ></Text>)}} component={MaterialTopTabs} />
      <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<Text style={{ color }} ></Text>)}} component={Tab3Screen} />
    </Tab.Navigator>
  );
}