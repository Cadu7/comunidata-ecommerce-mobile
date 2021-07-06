import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Carrinho from '../../pages/Carrinho'


const Drawer = createDrawerNavigator();

const DrawerCarrinho = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Carrinho' component={Carrinho}/>
        </Drawer.Navigator>
    )
}

export default DrawerCarrinho;