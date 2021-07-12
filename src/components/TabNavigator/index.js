import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home'
import Perfil from '../../pages/Perfil'
import CarrinhoModal from '../CarrinhoModal';
import DrawerCarrinho from '../DrawerCarrinho';

const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation }) => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar:true,
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#1E4B75',
                inactiveBackgroundColor: '#1E4B75'
            }}
        >
                  {/* <Tab.Screen
          name='Carrinho'
          component={CarrinhoModal}
          listeners={( navigation ) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate(CarrinhoModal)
            }
          })}
        /> */}
            <Tab.Screen
                name='Desafios'
                component={DrawerCarrinho}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })} />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Perfil' component={Perfil} />
        </Tab.Navigator>
    )
}
export default TabNavigator;