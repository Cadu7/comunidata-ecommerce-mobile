import React from 'react';
import { View, Text } from 'react-native';

const CardProduto = ({item}) => {
  return (
    <View style = {{borderWidth: 1, borderStyle:'solid'}}>
      <Text>{item.produto_id}</Text>
      <Text>{item.produto_nome}</Text>
      <Text>{item.produto_descricao}</Text>
      <Text>{item.produto_preco}</Text>
    </View>
  )
}

export default CardProduto;