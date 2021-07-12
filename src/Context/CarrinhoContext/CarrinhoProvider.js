import React, { useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

const CarrinhoProvider = ({ children }) => {

  const [produtos, setProdutos] = useState([]);

  addProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos: produtos,
        addProduto: addProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );

}

export default CarrinhoProvider;