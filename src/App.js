
import React from 'react';
import Header from './components/Header';
import RootStack from './components/RootStack';
import { ClienteProvider } from './Context/ClienteContext';
import { NavigationContainer } from '@react-navigation/native';
import  CarrinhoProvider  from './Context/CarrinhoContext/CarrinhoProvider';
import DrawerCarrinho from './components/DrawerCarrinho';


const App = () => {
  return (
    <>
      <CarrinhoProvider>
        <ClienteProvider>
          <Header />
          <NavigationContainer>
            <DrawerCarrinho />
          </NavigationContainer>
        </ClienteProvider>
      </CarrinhoProvider>
    </>
  );
};
export default App;