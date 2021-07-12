import { NavigationContainer } from '@react-navigation/native';
import DrawerCarrinho from './components/DrawerCarrinho';
import RootStack from './components/RootStack';
import Header from './components/Header';
import { AppProvider } from './Context'
import { View } from 'react-native';
import React from 'react'

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