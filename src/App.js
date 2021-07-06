import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerCarrinho from './components/DrawerCarrinho'
import TabNavigator from './components/TabNavigator';



const App = () => {

  return (
      <NavigationContainer>
        <DrawerCarrinho />
      </NavigationContainer>
  );
};

export default App;