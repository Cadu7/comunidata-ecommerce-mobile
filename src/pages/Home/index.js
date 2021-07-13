import { View, Text, TouchableOpacity, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import axios from 'axios';
import Commerce from '@chec/commerce.js';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import React, { useState, useEffect } from 'react';
import styles from './styles'

const Home = ({ navigation }) => {

  // const commerce = new Commerce('pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587');
  const commerce = new Commerce('pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587');

  
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [prodCat, setProdCat] = useState({});

  const fetchProducts = async () => {
    const response = await axios.get('https://ecommerce-api-comunidata.herokuapp.com/produtos')
    setProdutos(response.data)
    console.log('PRODUTOS:', produtos)
  }

  //produtos.map(r => { console.log("categorias", r?.categories[0].id, "\n") });

  const fetchCategories = async () => {
    const response = await axios.get('https://ecommerce-api-comunidata.herokuapp.com/categorias')
    setCategorias(response.data.content)
    console.log("CATEGORIAS: ", categorias)
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  return (
    <View>
      <View>
        <Text>Carroussel</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Retorno Página Produto</Text>
      </View>
      <View>
        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            //console.log('CATEGORIA: ', categoria.slug);
            return (
              <View style={styles.viewContainer}>
                <Text style={{ fontWeight: 'bold' }}>{categoria.nome}</Text>
                <FlatList
                  data={produtos.filter(produto => produto.categoria.id === categoria.id)}
                  horizontal={true}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    //console.log('PRODUTO: ', produto);
                    return (
                      <View style={styles.viewContainer}>
                        <Text>{produto.nome} </Text>
                        <Text>R${produto.valorUnitario} </Text>
                        {/* precisamos de um botão para adicionar ao carrinho!! */}
                      </View>
                    )
                  }} />
              </View>
            )
          }} />
      </View>
    </View >
  )
}
export default Home;