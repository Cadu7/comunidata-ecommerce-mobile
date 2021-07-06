import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home'
import Perfil from '../../pages/Perfil'
import DrawerCarrinho from '../DrawerCarrinho';
import { DrawerActions } from 'react-navigation';



  

const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name='Carrinho' component={DrawerCarrinho} listeners={({navigation}) => ({
                tabPress: e => {
                    e.preventDefault();
                    openDrawer = () => {
                        this.props.navigation.dispatch(DrawerActions.openDrawer());
                    }
                }
            })}
            />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Perfil' component={Perfil} />
            
        </Tab.Navigator>
    )
}

export default TabNavigator;