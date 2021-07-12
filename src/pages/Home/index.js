import { View, Text, TouchableOpacity, Button, FlatList, ScrollView } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import CarrinhoModal from '../../components/CarrinhoModal';
import CardProduto from '../../components/CardProdutos'
import React, { useState, useEffect } from 'react';
import styles from './styles'

const Home = ({ navigation }) => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      setProdutos(listarProdutos())
    })
  }, [])

  return (
    <View>
      <View>
        <Text>Carroussel</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Retorno Página Produto</Text>
      </View>
      <View>
        <FlatList
          data={produtos}
          onRefresh={() => { setProdutos(listarProdutos) }}
          refreshing={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.viewContainer}>
                <Text>{item.produto_id}</Text>
                <Text>{item.produto_nome}</Text>
                <Text>{item.produto_descricao}</Text>
                <Text>{item.produto_preco}</Text>
              </View>
            )
          }
          }
        />
      </View>
    </View>
  )
}
export default Home;