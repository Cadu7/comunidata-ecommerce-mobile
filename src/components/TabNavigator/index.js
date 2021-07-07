import React from 'react';
import { View, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home'
import Perfil from '../../pages/Perfil'
import DrawerCarrinho from '../DrawerCarrinho';
import Cadastro from '../../pages/Produto/Cadastro'

const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#1E4B75',
            inactiveBackgroundColor: '#1E4B75'
          }}
        >
            <Tab.Screen
                name='Carrinho'
                component={DrawerCarrinho}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })} />
            <Tab.Screen name='Cadastro' component={Cadastro} />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Perfil' component={Perfil} />

        </Tab.Navigator>
    )
}



export default TabNavigator;