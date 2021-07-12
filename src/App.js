import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import RootStack from './components/RootStack';
import { AppProvider } from './Context'
import { View } from 'react-native';

const App = () => {
  return (
    <>
      <AppProvider>
        <Header />
        <NavigationContainer>
          <DrawerCarrinho />
        </NavigationContainer>
      </AppProvider>
    </>
  );
};

export default App;