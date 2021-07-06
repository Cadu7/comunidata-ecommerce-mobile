import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Carrinho from '../../pages/Carrinho'
import TabNavigator from '../TabNavigator'


const Drawer = createDrawerNavigator();

const DrawerCarrinho = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerCarrinho;