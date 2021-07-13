import { createStackNavigator } from '@react-navigation/stack'
import CarrinhoModal from '../CarrinhoModal'
import TabNavigator from '../TabNavigator';
import React from 'react'

const StackNavigation = createStackNavigator();
const RootStack = () => {
  return (
    <>
        <StackNavigation.Navigator headerMode='none' >
          <StackNavigation.Screen name='Tab' component={TabNavigator} />
          <StackNavigation.Screen name='Carrinho' getComponent={CarrinhoModal} />
        </StackNavigation.Navigator>
    </>
  )
}
export default RootStack;