import { createDrawerNavigator } from '@react-navigation/drawer';
import Cadastro from '../../pages/Produto/Cadastro';
import Passageiros from '../../pages/Passageiros';
import Checkout from '../../pages/Checkout';
import TabNavigator from '../TabNavigator'
import React from 'react';
import Carrinho from '../../pages/Carrinho';

const Drawer = createDrawerNavigator();

const DrawerCarrinho = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Checkout' component={Checkout} />
            <Drawer.Screen name='Passageiros' component={Passageiros} />
        </Drawer.Navigator>
    )
}
export default DrawerCarrinho;