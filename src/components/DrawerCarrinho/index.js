import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../TabNavigator'
import Passageiros from '../../pages/Passageiros';
import Cadastro from '../../pages/Produto/Cadastro';
import Perfil from '../../pages/Perfil'


const Drawer = createDrawerNavigator();

const DrawerCarrinho = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Passageiros' component={Passageiros} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Perfil' component={Perfil} />
        </Drawer.Navigator>
    )
}


export default DrawerCarrinho;