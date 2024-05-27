import { Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Primarybutton } from '../../components/shared/Primarybutton';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { type RootStackParams } from '../../routes/StackNavigation';

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' }
]





export const ProductsScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}> Productos </Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Primarybutton
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name}  )}
            label={item.name}
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 30 }}> Ajustes </Text>
      <Primarybutton
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  )
}
