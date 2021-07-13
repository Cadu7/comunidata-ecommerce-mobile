import { View, Text, TouchableOpacity, Button, FlatList, ScrollView } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import axios from 'axios';
import Commerce from '@chec/commerce.js';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import React, { useState, useEffect } from 'react';
import styles from './styles'

const Home = ({ navigation }) => {

  const commerce = new Commerce('pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587');


  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [prodCat, setProdCat] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProdutos(data)
  }

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list()
    setCategorias(data)
    for (i = 0; i < data.length; i++) {
      console.log(data[i].slug);
      fetchProdutosByCategory(data[i].slug)
    }
  }

  const fetchProdutosByCategory = async (slug) => {
    const { data } = await commerce.products.list({
      category_slug: [slug]
    });
    //return data;
    setProdCat(data)
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])
  console.log(produtos);
  categorias.map(r => { console.log(r.name, "\n") });

  // useEffect(() => {
  //   const refresh = navigation.addListener('focus', () => {
  //     setProdutos(listarProdutos())

  //      axios.get('https://api.chec.io/v1/categories').then((response) => {
  //        setCategorias(response.data.data)
  //      }).catch((error)=> {
  //        console.log(error)
  //      })
  //      axios.get('https://api.chec.io/v1/categoriesr', {
  //        headers: {
  //          'Authorization': `pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587`
  //       }
  //     })
  //       .then((res) => {
  //         console.log(res.data.data.name)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })

  //   })
  // }, [])
  // commerce.categories.list().then((resp) => resp.data.map(r=>/*setCategorias(...categorias, ...r.name)*/console.log(r.name)));
  // console.log('state', categorias);

  return (
    <View>
      <View>
        <Text>Carroussel</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Retorno Página Produto</Text>
      </View>
      <View>
        <FlatList
          data={categorias}
          onRefresh={() => { categorias }}
          refreshing={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            return (
              <View style={styles.viewContainer}>
                <Text>{categoria.name}</Text>
                <FlatList
                  data={prodCat}
                  horizontal={true}
                  onRefresh={() => { prodCat }}
                  refreshing={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    return (
                      <View style={styles.viewContainer}>
                        <Text>{produto.name}</Text>
                      </View>
                    )
                  }} />
              </View>
            )
          }} />
      </View>
    </View>
  )
}
export default Home;