
import React from 'react';
import Header from './components/Header';
import DrawerCarrinho from './components/DrawerCarrinho';
import { ClienteProvider } from './Context/ClienteContext';
import  CarrinhoProvider  from './Context/CarrinhoContext/CarrinhoProvider';
import { NavigationContainer } from '@react-navigation/native';


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