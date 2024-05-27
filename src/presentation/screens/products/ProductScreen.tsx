
import { RouteProp, useRoute, useNavigation,StackActions } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigation';
import { globalColors, globalStyles } from '../../themes/theme';
import { useEffect } from 'react';
import { Primarybutton } from '../../components/shared/Primarybutton';


export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  // console.log(params)
  useEffect( () => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={ globalStyles.container}>
        <Text>Product Screen</Text>

        <Text style={{
          fontSize:20,
          textAlign: 'center',
          margin: 20,
          color: globalColors.dark
        }}>
          { params.id } - { params.name }
        </Text>

        <Primarybutton
          label='Volver al Home'
          onPress={ () => navigation.dispatch( StackActions.popToTop) }
        />
    </View>
  )
}


