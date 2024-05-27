import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { globalStyles } from '../../themes/theme';

export const MenuHamburguesa = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                >
                    <Text style={ globalStyles.buttonHamburguer }>Menú</Text>
                </Pressable>
            )
        })
    }, [])

    return (<></>)
}
