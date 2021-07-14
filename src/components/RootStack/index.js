import { createStackNavigator } from '@react-navigation/stack'
import CarrinhoModal from '../CarrinhoModal'
import TabNavigator from '../TabNavigator';
import React from 'react'
import Checkout from '../../pages/Checkout';

const StackNavigation = createStackNavigator();
const RootStack = () => {
  return (
    <>
        <StackNavigation.Navigator headerMode='none' >
          <StackNavigation.Screen name='Tab' component={TabNavigator} />
          <StackNavigation.Screen name='Checkout' component={Checkout} />
        </StackNavigation.Navigator>
    </>
  )
}
export default RootStack;