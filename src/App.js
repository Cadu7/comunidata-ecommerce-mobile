import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import RootStack from './components/RootStack';




const App = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
          <RootStack />
      </NavigationContainer>
    </>
  );
};

export default App;