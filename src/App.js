import { NavigationContainer } from '@react-navigation/native';
import DrawerCarrinho from './components/DrawerCarrinho'
import TabNavigator from './components/TabNavigator';
import Header from './components/Header';
import { FormProvider } from './Context'
import { View } from 'react-native';
import React from 'react';

const App = () => {

  return (
    <>
      <FormProvider>
        <Header />
        <NavigationContainer>
          <DrawerCarrinho />
        </NavigationContainer>
      </FormProvider>
    </>
  );
};

export default App;