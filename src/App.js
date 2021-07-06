import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerCarrinho from './components/DrawerCarrinho'
import TabNavigator from './components/TabNavigator';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <Header />
      <NavigationContainer>
        <DrawerCarrinho />
      </NavigationContainer>
    </>
  );
};

export default App;