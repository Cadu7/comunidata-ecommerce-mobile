import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNav from '../../components/StackNav'
import CarrinhoContext from '../../Context/CarrinhoContext/CarrinhoContext'
import { ClienteContext } from '../../Context/ClienteContext';
import styles from './styles';

const Carrinho = ({ navigation }) => {
  const contextCarrinho = useContext(CarrinhoContext);
  const { isLogged } = useContext(ClienteContext);
  const [produtosCarrinho, setProdutosCarrinho] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Itens no Carrinho</Text>
      <FlatList
        data={contextCarrinho.produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: produto, index }) => {
          return (
            <View style={styles.rowcontainer}>
              <Text style={styles.text}>Nome: {produto.produto.nome}</Text>
              <Text style={styles.text}>Valor: {produto.produto.valorUnitario}</Text>
            </View>
          )
        }}
      />
      <TouchableOpacity style={styles.checkout} onPress={() => {
        if(isLogged) {
          navigation.navigate('Checkout');
        } else {
          Alert.alert(
            'Usuário não cadastrado!!!',
            'Por favor se cadastrar',
            [
              {
                text: 'Cadastrar',
                onPress: () => navigation.navigate('Perfil')
              }
            ]
          )
        }
      }}>
        <Text style={styles.title}>Checkout</Text>
      </TouchableOpacity >
    </SafeAreaView>
  );
};

export default Carrinho;