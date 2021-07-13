import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Checkout from '../../pages/Checkout';

const StackNavigation = createStackNavigator();
const StackNav = () => {
  return (
    <>
        <StackNavigation.Navigator >
          <StackNavigation.Screen name='Checkout' getComponent={Checkout} />
        </StackNavigation.Navigator>
    </>
  )
}

export default StackNav;