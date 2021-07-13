import { View, Text, FlatList, ImageBackground, Touchable, TouchableOpacity, Alert } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import Categorias from '../../mock/Categorias.json';
import React, { useState, useEffect } from 'react';
import Produtos from '../../mock/Produtos.json';
import Commerce from '@chec/commerce.js';
import styles from './styles';
import axios from 'axios';


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

  // 
  function Comprar() {
    Alert.alert('Tem certeza que deseja adicionar o produto ao carrinho?', ' ', [{text: 'Cancelar',},
    {text: 'Confirmar',}])
  }
  
  return (
    <View style={styles.superContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Produtos</Text>
      </View>
      <View>
        <FlatList
          data={Categorias}
          // onRefresh={() => { categorias }}
          // refreshing={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            return (
              <View style={styles.viewContainer}>
                <Text style={styles.categoriaName}>{categoria.nome}</Text>
                <FlatList
                  data={Produtos.filter(produto => produto.categoria === categoria.id)}
                  horizontal={true}
                  // onRefresh={() => { prodCat }}
                  // refreshing={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    return (
                      <View style={styles.viewContainerCard}>
                        <TouchableOpacity
                        onPress= {Comprar}>
                          <Text style={styles.textoCard}>{produto.nome}</Text>
                          <Text style={styles.textoCard}>R$ {produto.ValorUnitario}</Text>
                          <ImageBackground
                            realizeMode='center'
                            source={{ uri: produto.url }}
                            style={styles.imageProduto}
                          />
                        </TouchableOpacity>
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


